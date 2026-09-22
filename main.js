/* ============================================
   MAIN.JS – Shared site-wide logic
   Drop one <script src="main.js"></script>
   at the bottom of every page.
   ============================================ */

(function () {
  'use strict';

  /* ------------------------------------------
     THEME TOGGLE
     NOTE: called AFTER bootstrapPage() injects
     the header, so the button exists by then.
  ------------------------------------------ */
  function initTheme() {
    const btn  = document.getElementById('theme-toggle');
    if (!btn) return;
    const icon = btn.querySelector('.icon');
    // Pages one level deep (/pages/*.html) need '../icons/...'; index.html
    // at the root needs plain 'icons/...'. Keep in sync with the BASE
    // constant near the top of render.js.
    const iconsDir = /\/pages\//.test(location.pathname) ? '../icons/' : 'icons/';

    function applyTheme(dark) {
      document.body.classList.toggle('dark', dark);
      if (icon) icon.src = dark ? iconsDir + 'sun.png' : iconsDir + 'moon.png';
    }

    // Apply saved preference
    applyTheme(localStorage.getItem('theme') === 'dark');

    btn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark');
      // Add spin animation
      btn.classList.add('spinning');
      setTimeout(() => btn.classList.remove('spinning'), 450);
      applyTheme(!isDark);
      localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    });
  }

  /* ------------------------------------------
     FLOATING BUTTONS (scroll-to-top / contact)
  ------------------------------------------ */
  function initFloatingButtons() {
    const toTop     = document.querySelector('.to-top');
    const toContact = document.querySelector('.to-contact');
    const contact   = document.getElementById('contact');

    if (toTop) {
      toTop.addEventListener('click', () =>
        window.scrollTo({ top: 0, behavior: 'smooth' })
      );
    }

    if (toContact && contact) {
      toContact.addEventListener('click', () =>
        contact.scrollIntoView({ behavior: 'smooth', block: 'center' })
      );
    }
  }

  /* ------------------------------------------
     HASH DEEP-LINK (skills.html chips, and — since
     Cat 8 — project/timeline/certification/education/
     personal cards too, all of which now carry a
     matching id="<slug>" from their own render script)
  ------------------------------------------ */
  function initSkillHashLink() {
    const hashRaw = window.location.hash ? window.location.hash.substring(1) : '';
    if (!hashRaw) return;
    let hashDecoded = hashRaw;
    try { hashDecoded = decodeURIComponent(hashRaw); } catch (e) { /* malformed, ignore */ }

    function highlight(el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.style.outline = '2px solid var(--amber)';
      el.style.outlineOffset = '3px';
      setTimeout(() => { el.style.outline = ''; el.style.outlineOffset = ''; }, 2500);
    }

    // 1) Exact id match. Try the RAW hash first — slug() (render.js) builds
    // ids with encodeURIComponent, so a comma/ampersand in a title (e.g.
    // "Data, Quality & Reliability") ends up as a literal "%2C"/"%26" in
    // the id itself, which is what's still in location.hash verbatim. Only
    // fall back to the decoded form for a plain, no-special-character hash.
    const direct = document.getElementById(hashRaw) || document.getElementById(hashDecoded);
    if (direct) { highlight(direct); return; }

    // 2) Fallback for skills.html specifically: fuzzy-match the hash
    // against chip text, for older-style links or a hash that doesn't
    // exactly match any element's id.
    if (!document.querySelector('.skill-tags')) return;

    const normalize = (s) =>
      (s || '').toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    const targetKey = normalize(hashDecoded);
    const tags = Array.from(document.querySelectorAll('.skill-tag'));

    tags.forEach(tag => {
      const key = normalize(tag.getAttribute('data-skill') || tag.textContent);
      if (!tag.id && key) tag.id = key;
    });

    const target =
      document.getElementById(targetKey) ||
      tags.find(t => normalize(t.getAttribute('data-skill') || t.textContent) === targetKey) ||
      tags.find(t => {
        const k = normalize(t.getAttribute('data-skill') || t.textContent);
        return k.includes(targetKey) || targetKey.includes(k);
      });

    if (target) highlight(target);
  }

  /* ------------------------------------------
     CLICK/TAP POPOVER (skills, and reusable later
     for certifications)
     - Click/tap a pill to open a small box near it.
     - Stays open while the mouse is over the box.
     - Closes ~1s after the mouse leaves both the
       pill and the box, or immediately on an
       outside click/tap.
  ------------------------------------------ */
  function initClickPopover(tagSelector, popoverEl, contentFn) {
    const tags = document.querySelectorAll(tagSelector);
    if (!tags.length || !popoverEl) return;

    let openTag   = null;
    let hideTimer = null;

    function cancelHide() {
      if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
    }

    function scheduleHide() {
      cancelHide();
      hideTimer = setTimeout(closePopover, 1000);
    }

    function closePopover() {
      cancelHide();
      popoverEl.style.display = 'none';
      if (openTag) openTag.classList.remove('skill-tag--open');
      openTag = null;
    }

    function positionNear(tag) {
      popoverEl.style.visibility = 'hidden';
      popoverEl.style.display    = 'block';

      const rect = tag.getBoundingClientRect();
      const ttW  = popoverEl.offsetWidth  || 260;
      const ttH  = popoverEl.offsetHeight || 80;
      const vw   = window.innerWidth;
      const vh   = window.innerHeight;
      const GAP  = 8;

      // Prefer below the tag; flip above if it would go off-screen bottom
      let top = rect.bottom + GAP;
      if (top + ttH > vh - GAP) top = rect.top - ttH - GAP;
      top = Math.max(GAP, top);

      // Center horizontally on the tag, clamped to viewport
      let left = rect.left + (rect.width / 2) - (ttW / 2);
      left = Math.min(left, vw - ttW - GAP);
      left = Math.max(GAP, left);

      popoverEl.style.top        = top  + 'px';
      popoverEl.style.left       = left + 'px';
      popoverEl.style.visibility = '';
    }

    function openFor(tag) {
      const html = contentFn(tag);
      if (!html) return;
      cancelHide();
      if (openTag && openTag !== tag) openTag.classList.remove('skill-tag--open');
      popoverEl.innerHTML = html;
      positionNear(tag);
      tag.classList.add('skill-tag--open');
      openTag = tag;
    }

    tags.forEach(tag => {
      tag.addEventListener('click', (e) => {
        e.stopPropagation();
        if (openTag === tag && popoverEl.style.display === 'block') {
          closePopover();
        } else {
          openFor(tag);
        }
      });
    });

    popoverEl.addEventListener('mouseenter', cancelHide);
    popoverEl.addEventListener('mouseleave', scheduleHide);

    tags.forEach(tag => {
      tag.addEventListener('mouseleave', () => {
        if (openTag === tag) scheduleHide();
      });
      tag.addEventListener('mouseenter', () => {
        if (openTag === tag) cancelHide();
      });
    });

    document.addEventListener('click', (e) => {
      if (!openTag) return;
      if (e.target === openTag || openTag.contains(e.target)) return;
      if (popoverEl.contains(e.target)) return;
      closePopover();
    });

    window.addEventListener('resize', () => {
      if (openTag) positionNear(openTag);
    });
  }

  function initSkillTooltips() {
    const tooltip = document.getElementById('skill-tooltip');
    if (!tooltip) return;

    initClickPopover('.skill-tag[data-skill]', tooltip, (tag) => {
      const skillName = tag.getAttribute('data-skill');
      if (!skillName) return null;
      const projects =
        typeof getProjectsForSkill === 'function'
          ? getProjectsForSkill(skillName)
          : [];
      if (!projects.length) return null;
      return `<strong><bdi dir="ltr">Used in:</bdi></strong><br>${projects.map(p => `• ${p}`).join('<br>')}`;
    });
  }

  /* ------------------------------------------
     VISITOR COUNTER
     Badge is rendered directly in the footer
     with the hitwebcounter img embedded.
     No JS needed; this is a no-op stub kept
     for compatibility.
  ------------------------------------------ */
  function initVisitorCounter() {
    // Counter image is embedded in footer HTML by render.js
  }

  /* ------------------------------------------
     COPY-TO-CLIPBOARD UTILITY
     makeCopyable(el, textFn) — wires up a small
     copy icon on any card/section element.
  ------------------------------------------ */
  function showToast(msg) {
    let toast = document.getElementById('copy-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'copy-toast';
      toast.className = 'copy-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('copy-toast--visible');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => toast.classList.remove('copy-toast--visible'), 2000);
  }

  function makeCopyable(el, textFn) {
    const btn = document.createElement('button');
    btn.className = 'copy-icon-btn';
    btn.setAttribute('aria-label', 'Copy to clipboard');
    btn.innerHTML = '⧉';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = textFn();
      navigator.clipboard.writeText(text).then(() => {
        showToast('Copied!');
        btn.classList.add('copy-icon-btn--done');
        setTimeout(() => btn.classList.remove('copy-icon-btn--done'), 1500);
      }).catch(() => {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast('Copied!');
      });
    });
    el.style.position = 'relative';
    el.appendChild(btn);
  }

  window.makeCopyable     = makeCopyable;
  window.showToast        = showToast;
  // Exposed so a future certifications popover (or anything else) can reuse
  // the same click/tap-to-open, hover-to-stay-open, 1s-after-leave-to-close
  // behavior without duplicating it.
  window.initClickPopover = initClickPopover;

  /* ------------------------------------------
     CONTENT PROTECTION
     Blocks right-click on the whole page and
     prevents image drag-save.
  ------------------------------------------ */
  function initContentProtection() {
    // Block right-click everywhere
    document.addEventListener('contextmenu', e => e.preventDefault());

    // Block drag on all images
    document.addEventListener('dragstart', e => {
      if (e.target.tagName === 'IMG') e.preventDefault();
    });

    // Extra: prevent selecting the profile pic via pointer
    document.querySelector('.profile-pic')
      ?.setAttribute('draggable', 'false');
  }

  /* ------------------------------------------
     SWIPE NAVIGATION (4.4)
     Detects horizontal swipe and navigates
     prev/next in the NAV_LINKS order.
  ------------------------------------------ */
  function initSwipeNav() {
    // Root-relative paths: index.html lives at the project root, everything
    // else lives in /pages. resolveHref() below turns these into the correct
    // href from wherever the CURRENT page happens to sit.
    const NAV_ORDER = [
      'index.html',
      'pages/career.html',
      'pages/skills.html',
      'pages/projects.html',
      'pages/certifications.html',
      'pages/personal.html',
      'pages/education.html',
    ];

    function resolveHref(target) {
      const inPages = /\/pages\//.test(location.pathname);
      if (!inPages) return target; // at root, root-relative paths work as-is
      return target.startsWith('pages/') ? target.slice('pages/'.length) : '../' + target;
    }

    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const idx = NAV_ORDER.findIndex(p => p.split('/').pop() === currentPage);
    if (idx === -1) return;

    let startX = 0, startY = 0;

    document.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) < 60 || Math.abs(dy) > 30) return;

      // Ignore swipe if started on a skill-tag (tap-to-reveal handles those)
      if (e.target.closest && e.target.closest('.skill-tag')) return;

      if (dx < 0 && idx < NAV_ORDER.length - 1) {
        location.href = resolveHref(NAV_ORDER[idx + 1]);
      } else if (dx > 0 && idx > 0) {
        location.href = resolveHref(NAV_ORDER[idx - 1]);
      }
    }, { passive: true });

    // Show swipe hint on first visit
    if (!sessionStorage.getItem('swipe-hint-seen')) {
      sessionStorage.setItem('swipe-hint-seen', '1');
      const hint = document.createElement('div');
      hint.className = 'swipe-hint';
      hint.textContent = '← swipe to navigate →';
      document.body.appendChild(hint);
      setTimeout(() => hint.classList.add('swipe-hint--hide'), 3000);
      setTimeout(() => hint.remove(), 3600);
    }
  }

  /* ------------------------------------------
     SITE SEARCH (cat 8)
     Reads window._SEARCH_INDEX / _SEARCH_ALIASES /
     _SEARCH_UI / _SEARCH_NAV / _SEARCH_BASE, all set
     by render.js's bootstrapPage() before _mainInit
     runs (see render.js §bootstrapPage). Kept here
     rather than in render.js so all the *interactive*
     behavior lives in one file, matching the rest of
     this file's job.
  ------------------------------------------ */

  // Lowercase, strip accents (so French "électromécanique" matches
  // "electromecanique"), and drop punctuation so word boundaries compare
  // cleanly. Unicode-aware so Arabic text passes through untouched instead
  // of getting mangled by an ASCII-only regex.
  function normalizeText(s) {
    return String(s || '')
      .toLowerCase()
      .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Classic edit-distance, used only as a fallback for typo/close-spelling
  // suggestions when nothing matched directly (see searchIndex()).
  function levenshtein(a, b) {
    if (a === b) return 0;
    const al = a.length, bl = b.length;
    if (!al) return bl;
    if (!bl) return al;
    let prev = new Array(bl + 1);
    for (let j = 0; j <= bl; j++) prev[j] = j;
    for (let i = 1; i <= al; i++) {
      const cur = [i];
      for (let j = 1; j <= bl; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      }
      prev.splice(0, prev.length, ...cur);
    }
    return prev[bl];
  }

  // If the normalized query matches any term in one of the hand-maintained
  // alias groups (data/search-aliases.json — e.g. ["ms","microsoft",...]),
  // search for every term in that group, not just what was typed. This is
  // the direct fix for "recruiter searches MS, résumé says Microsoft 365".
  function expandWithAliases(queryNorm, aliases) {
    const terms = new Set([queryNorm]);
    (aliases || []).forEach(group => {
      const normGroup = group.map(normalizeText);
      if (normGroup.includes(queryNorm)) normGroup.forEach(t => terms.add(t));
    });
    return Array.from(terms);
  }

  function scoreRecord(record, terms) {
    const titleNorm  = normalizeText(record.title);
    const textNorm   = normalizeText(record.text);
    const titleWords = titleNorm.split(' ');
    const textWords  = textNorm.split(' ');
    let best = 0;
    terms.forEach(t => {
      if (!t) return;
      // Short terms (abbreviations like "ms", "it", "cv") are only matched
      // as whole words — plain substring matching would also hit "ms"
      // inside "systems", "it" inside "digital", etc.
      const wholeWordOnly = t.length <= 3;
      if (titleNorm === t) best = Math.max(best, 100);
      else if (wholeWordOnly ? titleWords.includes(t) : titleNorm.includes(t)) best = Math.max(best, 70);
      else if (wholeWordOnly ? textWords.includes(t) : textNorm.includes(t)) best = Math.max(best, 40);
    });
    return best;
  }

  // Returns { results, fuzzy }. `results` is empty and `fuzzy` is null if
  // nothing at all matched, even after a spelling-correction attempt.
  function searchIndex(query) {
    const index   = window._SEARCH_INDEX   || [];
    const aliases = window._SEARCH_ALIASES || [];
    const qNorm   = normalizeText(query);
    if (!qNorm) return { results: [], fuzzy: null };

    const terms  = expandWithAliases(qNorm, aliases);
    const scored = index
      .map(r => ({ r, score: scoreRecord(r, terms) }))
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score);

    if (scored.length) return { results: scored.map(x => x.r), fuzzy: null };

    // Nothing matched — look for a close-spelling word among every
    // record's title (titles only, to keep this cheap) within a small
    // edit-distance budget, then re-run the search on that corrected word.
    let bestWord = null, bestDist = Infinity;
    index.forEach(r => {
      normalizeText(r.title).split(' ').forEach(word => {
        if (word.length < 3) return;
        const threshold = qNorm.length <= 4 ? 1 : 2;
        const d = levenshtein(qNorm, word);
        if (d <= threshold && d < bestDist) { bestDist = d; bestWord = word; }
      });
    });
    if (!bestWord) return { results: [], fuzzy: null };

    const correctedTerms  = expandWithAliases(bestWord, aliases);
    const correctedScored = index
      .map(r => ({ r, score: scoreRecord(r, correctedTerms) }))
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score);
    return { results: correctedScored.map(x => x.r), fuzzy: bestWord };
  }

  // "Relevant" cross-links: other skills in the same category, or (for a
  // project/job/degree hit) the skills it lists — each resolved back to
  // its own index record so it can be shown as a clickable result too.
  function relatedFor(record, limit) {
    if (!record || !record.related || !record.related.length) return [];
    const index = window._SEARCH_INDEX || [];
    const seen  = new Set([normalizeText(record.title)]);
    const out   = [];
    record.related.forEach(name => {
      const n = normalizeText(name);
      if (seen.has(n)) return;
      const hit = index.find(r => normalizeText(r.title) === n);
      if (hit) { out.push(hit); seen.add(n); }
    });
    return out.slice(0, limit);
  }

  function hrefFor(record) {
    const base = window._SEARCH_BASE || '';
    if (record.page === 'index.html') return base + 'index.html';
    return base + 'pages/' + record.page + (record.hash ? ('#' + record.hash) : '');
  }

  const SEARCH_TYPE_LABEL = {
    skill: 'Skill', project: 'Project', experience: 'Experience',
    education: 'Education', certification: 'Certification', personal: 'Personal',
  };

  function searchResultItemHtml(r) {
    const esc = window.SiteRender ? window.SiteRender.esc : (s) => s;
    return `<a href="${hrefFor(r)}" class="search-result-item" data-type="${r.type}">
      <span class="search-result-title">${esc(r.title)}</span>
      <span class="search-result-meta">${SEARCH_TYPE_LABEL[r.type] || ''}</span>
    </a>`;
  }

  function renderSearchResults(query, { results, fuzzy }) {
    const panel = document.getElementById('site-search-results');
    if (!panel) return;
    const esc  = window.SiteRender ? window.SiteRender.esc : (s) => s;
    const S    = window._SEARCH_UI  || {};
    const NAV  = window._SEARCH_NAV || {};
    const base = window._SEARCH_BASE || '';

    if (!query) { panel.hidden = true; panel.innerHTML = ''; return; }

    let html = '';

    if (results.length) {
      if (fuzzy) {
        html += `<div class="search-section-title search-did-you-mean">${esc(S.didYouMean || 'Did you mean')} "${esc(fuzzy)}"?</div>`;
      }
      const main = results.slice(0, 8);
      html += `<div class="search-section">${main.map(searchResultItemHtml).join('')}</div>`;

      // Only nudge with "related" when direct results are sparse — the
      // point is to catch someone who didn't quite find what they wanted,
      // not to clutter a search that already has plenty of hits.
      if (main.length < 3) {
        const related = relatedFor(main[0], 4);
        if (related.length) {
          html += `<div class="search-section-title">${esc(S.relatedTitle || 'You might also be interested in')}</div>`;
          html += `<div class="search-section search-section--related">${related.map(searchResultItemHtml).join('')}</div>`;
        }
      }
    } else {
      html += `<div class="search-empty">
        <div class="search-empty-title">${esc(S.noResultsTitle || 'No matches for')} "${esc(query)}"</div>
        <div class="search-empty-hint">${esc(S.noResultsHint || 'Try browsing:')}</div>
        <div class="search-browse">
          <a href="${base}pages/skills.html">${esc(NAV.skills || 'Skills')}</a>
          <a href="${base}pages/projects.html">${esc(NAV.projects || 'Projects')}</a>
          <a href="${base}pages/career.html">${esc(NAV.career || 'Career')}</a>
        </div>
      </div>`;
    }

    panel.innerHTML = html;
    panel.hidden = false;
  }

  function initSearch() {
    const input    = document.getElementById('site-search-input');
    const panel    = document.getElementById('site-search-results');
    const clearBtn = document.getElementById('site-search-clear');
    if (!input || !panel) return;

    let debounceTimer = null;

    function runSearch() {
      const q = input.value.trim();
      if (clearBtn) clearBtn.hidden = !q;
      if (q.length < 2) {
        panel.hidden = true;
        panel.innerHTML = '';
        return;
      }
      renderSearchResults(q, searchIndex(q));
    }

    input.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(runSearch, 180);
    });

    input.addEventListener('focus', () => {
      if (input.value.trim().length >= 2 && panel.innerHTML) panel.hidden = false;
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        panel.hidden = true;
        input.blur();
      } else if (e.key === 'Enter') {
        const first = panel.querySelector('.search-result-item');
        if (first) first.click();
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const items = Array.from(panel.querySelectorAll('.search-result-item'));
        if (!items.length) return;
        e.preventDefault();
        const current = items.findIndex(i => i.classList.contains('search-result-item--active'));
        let next = e.key === 'ArrowDown' ? current + 1 : current - 1;
        if (next < 0) next = items.length - 1;
        if (next >= items.length) next = 0;
        items.forEach(i => i.classList.remove('search-result-item--active'));
        items[next].classList.add('search-result-item--active');
        items[next].scrollIntoView({ block: 'nearest' });
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        panel.hidden = true;
        panel.innerHTML = '';
        clearBtn.hidden = true;
        input.focus();
      });
    }

    document.addEventListener('click', (e) => {
      if (e.target === input || (clearBtn && e.target === clearBtn) || panel.contains(e.target)) return;
      panel.hidden = true;
    });
  }

  /* ------------------------------------------
     PAGE TRANSITION FADE (cat 7)
     Handles fade-out on link clicks so the
     body fadeIn animation pairs nicely.
  ------------------------------------------ */
  function initPageTransitions() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto') ||
          href.startsWith('http') || link.target === '_blank') return;
      e.preventDefault();
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.25s ease';
      setTimeout(() => { location.href = href; }, 260);
    });
  }

  /* ------------------------------------------
     BOOT — called from bootstrapPage() after
     the header is injected, so #theme-toggle
     is guaranteed to exist.
  ------------------------------------------ */
  window._mainInit = function () {
    initTheme();
    initFloatingButtons();
    initSkillHashLink();
    initSkillTooltips();
    initVisitorCounter();
    initContentProtection();
    initSwipeNav();
    initPageTransitions();
    initSearch();
  };

  // NOTE: _mainInit() is called by bootstrapPage() in render.js AFTER the full
  // DOM is injected. Do NOT call it on DOMContentLoaded — that fires before
  // bootstrapPage finishes its async fetch, so the buttons don't exist yet.
  // This fallback only runs on pages that have no render.js / bootstrapPage at all.
  document.addEventListener('DOMContentLoaded', () => {
    if (window._mainInitDone) return; // bootstrapPage already handled it
    // Give bootstrapPage one tick to start; if it never runs, we're the fallback
    Promise.resolve().then(() => {
      if (window._mainInitDone) return;
      window._mainInitDone = true;
      window._mainInit();
    });
  });

})();
