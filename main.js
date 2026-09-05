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

    function applyTheme(dark) {
      document.body.classList.toggle('dark', dark);
      if (icon) icon.src = dark ? 'icons/sun.png' : 'icons/moon.png';
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
     SKILL HASH DEEP-LINK
  ------------------------------------------ */
  function initSkillHashLink() {
    if (!document.querySelector('.skill-tags')) return;

    const rawHash = window.location.hash
      ? decodeURIComponent(window.location.hash.substring(1))
      : '';
    if (!rawHash) return;

    const normalize = (s) =>
      (s || '').toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    const targetKey = normalize(rawHash);
    const tags = Array.from(document.querySelectorAll('.skill-tag'));

    tags.forEach(tag => {
      const key = normalize(tag.getAttribute('data-skill') || tag.textContent);
      if (!tag.id && key) tag.id = key;
    });

    const target =
      document.getElementById(rawHash) ||
      document.getElementById(targetKey) ||
      tags.find(t => normalize(t.getAttribute('data-skill') || t.textContent) === targetKey) ||
      tags.find(t => {
        const k = normalize(t.getAttribute('data-skill') || t.textContent);
        return k.includes(targetKey) || targetKey.includes(k);
      });

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.style.outline = '2px solid var(--amber)';
      setTimeout(() => (target.style.outline = ''), 2500);
    }
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
    const NAV_ORDER = [
      'index.html',
      'professional-experience.html',
      'my-skills.html',
      'my-projects.html',
      'my-certifications.html',
      'personal-life.html',
      'education.html',
    ];

    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const idx = NAV_ORDER.indexOf(currentPage);
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
        location.href = NAV_ORDER[idx + 1];
      } else if (dx > 0 && idx > 0) {
        location.href = NAV_ORDER[idx - 1];
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
