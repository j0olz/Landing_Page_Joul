# Seif Joul — Portfolio Site: Project Reference

This file is a map of the codebase for anyone (human or another Claude chat)
picking up this project cold. Read this first before touching any file. It
was written right after a folder reorganization (see "Recent reorg" below),
so it reflects the **current, live** file layout and paths.

If you're about to make a change and aren't sure which file owns it, jump to
**"Where do I edit for X?"** near the bottom.

---

## 1. What this is

A static, client-side-rendered virtual résumé / portfolio site. No build
step, no framework, no backend. Plain HTML + two shared JS files + one CSS
file + JSON content files. Pages are almost empty HTML shells; a shared
render layer fetches JSON content and injects all the real markup at
runtime.

Three languages are supported (English / Arabic / French), toggled
client-side, with RTL layout for Arabic. Light/dark theme is also
client-side, persisted in `localStorage`.

---

## 2. Folder structure (current)

```
/
├── index.html            ← homepage, stays at project root
├── render.js              ← shared render engine (see §4)
├── main.js                 ← shared interactivity/behavior (see §5)
├── style.css                ← all styles, single file (see §6)
├── icons/                    ← image assets (favicon, home/moon/sun/QR/etc.) — not covered by this .md's edits, keep as-is at root
├── SEIF JOUL RESUME.pdf        ← CV download, stays at root
├── data/
│   ├── content.json            ← English site copy (source of truth shape)
│   ├── content.ar.json         ← Arabic translation (add when ready)
│   ├── content.fr.json         ← French translation (add when ready)
│   ├── skills.json             ← English skills + skill→project map
│   ├── skills.ar.json          ← Arabic translation (add when ready)
│   └── skills.fr.json          ← French translation (add when ready)
└── pages/
    ├── career.html           (was professional-experience.html)
    ├── skills.html            (was my-skills.html)
    ├── projects.html          (was my-projects.html)
    ├── certifications.html    (was my-certifications.html)
    ├── personal.html          (was personal-life.html)
    └── education.html         (name unchanged)
```

`index.html` is the only HTML page that lives at the root — everything else
is one level deeper inside `pages/`. **This one-level-deeper fact is the
single most important thing to remember when editing any path** (see §3).

### Recent reorg (what changed and why it matters)

The project used to have all HTML/JS/CSS/JSON files flat in one folder, with
`my-`-prefixed filenames. It was reorganized into `pages/` + `data/`
subfolders, and files were renamed:

| Old name | New name / location |
|---|---|
| `my-skills.html` | `pages/skills.html` |
| `my-projects.html` | `pages/projects.html` |
| `my-certifications.html` | `pages/certifications.html` |
| `professional-experience.html` | `pages/career.html` |
| `personal-life.html` | `pages/personal.html` |
| `education.html` | `pages/education.html` |
| `content.json` | `data/content.json` |
| `skills.json` | `data/skills.json` |

Because `pages/*.html` sit one folder deeper than `index.html`,
`render.js`/`main.js` are no longer naive "same-folder" scripts — they now
compute a `BASE` prefix at runtime (`'../'` when inside `/pages/`, `''` at
the root) and use it for every reference to `icons/`, `data/`, `index.html`,
and the CV PDF. **If you add a new top-level page or move something, this
`BASE` logic is what you need to keep consistent** — see §4.1.

`skills-data.js` (the old `localStorage`-based skill→project mapping file)
is **dead code** — no HTML file includes it anymore. The live skill→project
mapping is `data/skills.json`'s `projectMappings` key, read directly by
`pages/skills.html`. Don't waste time editing `skills-data.js`; it's not
part of the running site. (Delete it or ignore it.)

---

## 3. The path system (`BASE`) — read this before editing render.js/main.js

Because there are now two directory depths (root vs. `pages/`), both shared
JS files detect their depth at runtime instead of hardcoding paths:

```js
// render.js (top of file)
const BASE      = /\/pages\//.test(location.pathname) ? '../' : '';
const ICONS_DIR = BASE + 'icons/';
const DATA_DIR  = BASE + 'data/';
```

```js
// main.js — same idea, computed locally in initTheme() and initSwipeNav()
const inPages = /\/pages\//.test(location.pathname);
```

Everything dynamically injected by `render.js` (icons in the header,
floating buttons, contact section, CV link, `content.json`/`skills.json`
fetch URLs, the "Home" breadcrumb/button) is built using `BASE`,
`ICONS_DIR`, or `DATA_DIR` — **never** a bare `"icons/..."` or
`"content.json"` string. If you ever see a bare string like that reappear in
render.js, it's a bug (it'll 404 on one of the two depths).

Links **between** the six `pages/*.html` files (the pill nav, breadcrumb's
sibling links, skill-tag deep links like `skills.html#Python`) are plain
filenames with **no prefix**, because all six pages are siblings in the same
folder. Only links that cross the root↔`pages/` boundary (home button,
breadcrumb "Home" link, CV download, index page's homepage cards) need the
`BASE`/`pages/` treatment.

`data/content.json`'s `index.cards[].href` values are `pages/xxx.html`
(root-relative, since `index.html` itself lives at the root and links down
into `pages/`).

`main.js`'s swipe-navigation (`initSwipeNav`) keeps its own root-relative
list (`NAV_ORDER`, prefixed with `pages/` for every non-home entry) and a
small `resolveHref()` helper that strips/adds the right prefix depending on
where the current page sits. This list is **independent** from render.js's
`NAV_KEYS` (§4.3) — the two must be kept in sync manually if you add/remove
a page (see "Adding a new content page" recipe near the bottom).

There is also a **fully offline fallback**: render.js embeds a full English
copy of `content.json` and `skills.json` as JS constants (`_CONTENT_DATA`,
`_SKILLS_DATA`, huge one-line objects near the top of the file) for when the
site is opened via `file://` (double-clicking `index.html` with no local
server) — fetches don't work under `file://`, so it falls back to these
embedded constants instead. **These fallback constants are a frozen
snapshot and will drift out of sync with `data/content.json` /
`data/skills.json` if you edit the JSON files without also updating the
constants.** Only bother updating them if offline/`file://` usage matters to
you; over HTTP(S) (a local server, GitHub Pages, etc.) they're never used.

---

## 4. `render.js` — shared render engine

One IIFE, exposes `window.SiteRender`. Loaded by every page via
`<script src="render.js">` (root) or `<script src="../render.js">`
(`pages/*`), always **before** `main.js`.

### 4.1 Data loading
- `loadContent()` / `loadSkills()` — fetch `data/content(.lang).json` /
  `data/skills(.lang).json` (via `DATA_DIR`, §3), with graceful fallback:
  translated file missing → falls back to English → fetch fails entirely →
  falls back to the embedded `_CONTENT_DATA`/`_SKILLS_DATA` constants.
  Cached in module-level `_content`/`_skills` (cleared on language switch).
- `langFile(baseName, lang)` — builds the filename: `content.json` for
  English, `content.ar.json` / `content.fr.json` for the others.

### 4.2 Language state
- `LANGS = ['en', 'ar', 'fr']`, cycled in that order by the language toggle
  button (`#lang-toggle`, injected in the header — see 4.4).
- Persisted in `localStorage['siteLang']`.
- `applyLangAttrs(lang)` sets `<html lang>` and `<html dir>` (`rtl` for
  Arabic). RTL flips several layout details (see the CSS's `[dir="rtl"]`
  rules and the Arabic-name-font-size bump in `renderHeader`).
- Switching language clears the cached `_content`/`_skills` and calls
  `location.reload()` — a full reload, not a soft re-render.

### 4.3 `renderHeader`, `NAV_KEYS`, `renderNav`, `renderBreadcrumb`
- `renderHeader(meta, {showHomeBtn})` builds the top banner (name, tagline,
  LinkedIn/Bold.pro links, profile photo) **and** injects the floating
  home/language/theme buttons (`#header-overlay-btns`, appended to
  `<body>`, not inside `<header>`, so they're never clipped).
- `NAV_KEYS` — the ordered list backing the pill nav bar (`renderNav`) and
  the breadcrumb (`renderBreadcrumb`). **This is the authoritative page
  order for the site's main nav.** Plain filenames (no folder prefix — see
  §3):
  ```js
  const NAV_KEYS = [
    { href: 'career.html',         key: 'career'       },
    { href: 'skills.html',         key: 'skills'       },
    { href: 'projects.html',       key: 'projects'     },
    { href: 'certifications.html', key: 'certificates' },
    { href: 'personal.html',       key: 'personalLife' },
    { href: 'education.html',      key: 'education'    },
  ];
  ```
  `key` looks up the translated label in `content.json`'s `ui.nav`.
  `NAV_LABELS_EN` is a hardcoded English fallback also used for the
  breadcrumb, which is **always English/LTR regardless of site language**
  (a deliberate design choice, noted in the code).
- `renderBreadcrumb` is only called when `activePage` is set (i.e., never on
  `index.html`).

### 4.4 `renderFloatingButtons`, theme/lang buttons
Scroll-to-top and scroll-to-contact floating buttons. The theme (`#theme-toggle`)
and language (`#lang-toggle`) buttons are actually injected by
`renderHeader`, not here — a naming quirk worth knowing.

### 4.5 `renderContact`
Builds the contact section: email/phone (click-to-WhatsApp), the CV
download button with a share panel (download PDF / share via WhatsApp /
share via email / copy link), and the QR code image. `siteURL` is computed
as `new URL(BASE, location.href).href` so it always resolves to the project
root regardless of which page you're on (important: the CV PDF lives at the
root, not in `pages/`).

### 4.6 `renderFooter`
Copyright line + the hitwebcounter visitor-counter `<img>` badge (raw
`<img>` embed, not fetched via JS — there's no CORS-friendly JSON endpoint
for it). Shows `—` under `file://` since the counter needs HTTP(S).

### 4.7 `bootstrapPage({ activePage, showHomeBtn, renderBody })`
The entry point every page calls. Order of operations:
1. `loadContent()` + `loadSkills()` in parallel
2. `renderHead` (Google Analytics/GTM injection)
3. `renderHeader`
4. `renderNav` + `renderBreadcrumb` (only if `activePage` is truthy)
5. `renderFloatingButtons`
6. `renderContact`
7. `renderFooter`
8. the page's own `renderBody(content, skills)` callback — **this is where
   each page's actual unique content gets built** (see §7)
9. `window._mainInit()` — boots all of `main.js`'s interactivity. Always
   called here (not on `DOMContentLoaded`) because the DOM doesn't exist
   until this async chain finishes.

### 4.8 Utility exports
`skillChips(skillArray)` — turns an array of skill-name strings into
`<a href="skills.html#slug">` mini-chip HTML (used by templates that don't
build their own chip markup inline). `esc()` — HTML-escapes a string
(used everywhere user-content-ish text is interpolated, to avoid HTML
injection from the JSON content).

---

## 5. `main.js` — shared page interactivity

Also one IIFE. Everything runs from `window._mainInit()`, called by
`bootstrapPage` (§4.7) once the DOM exists. Has a `DOMContentLoaded`
fallback stub for pages that don't use `bootstrapPage` at all (none
currently do, but it's there for safety).

| Function | Responsibility |
|---|---|
| `initTheme()` | Dark/light toggle on `#theme-toggle`, persisted to `localStorage['theme']`, swaps the sun/moon icon (path is depth-aware, see §3), toggles `.dark` on `<body>`. |
| `initFloatingButtons()` | Wires the scroll-to-top / scroll-to-contact buttons rendered by `renderFloatingButtons`. |
| `initSkillHashLink()` | On page load, if the URL has a `#some-skill` hash, finds the matching `.skill-tag` (normalizing text for comparison) and scrolls to / highlights it. This is what makes `skills.html#Python`-style deep links from other pages work. |
| `initClickPopover(tagSelector, popoverEl, contentFn)` | Generic reusable "tap a pill → small popup box near it, stays open on hover, auto-closes ~1s after mouse leaves" widget. Exposed as `window.initClickPopover` for reuse. |
| `initSkillTooltips()` | Uses `initClickPopover` on `.skill-tag[data-skill]` elements (only exists on `pages/skills.html`). Calls the page-global `getProjectsForSkill(skillName)` function (defined **inline inside `pages/skills.html`**, not in `main.js` or `render.js`!) to show "Used in: • ProjectA • ProjectB" from `skills.json`'s `projectMappings`. |
| `initVisitorCounter()` | No-op stub; the counter is a static `<img>` embedded by `renderFooter`. |
| `makeCopyable(el, textFn)` / `showToast(msg)` | The little "⧉ copy" icon-button added to every card (project card, timeline card, skill category card, etc.). Each page wires this up itself after rendering its own cards — see §7 for exactly what text each page's copy button produces. Exposed globally as `window.makeCopyable` / `window.showToast`. |
| `initContentProtection()` | Blocks right-click site-wide and image drag-saving. |
| `initSwipeNav()` | Touch swipe left/right navigates prev/next page, order defined by the (separately maintained) `NAV_ORDER` array — see §3 for why this list exists independently of render.js's `NAV_KEYS`. Shows a one-time "← swipe to navigate →" hint via `sessionStorage['swipe-hint-seen']`. |
| `initPageTransitions()` | Intercepts same-site `<a>` clicks, fades `<body>` out, then navigates (pairs with a fade-in CSS animation on load). |

---

## 6. `style.css` — single stylesheet, section map

~1,690 lines, one file, loaded by every page. It stays at the project root
and was **not** touched by the recent folder reorg (its internal rules
don't reference any relative file paths except one embedded SVG data-URI
and a Google Fonts URL, so moving HTML files around doesn't affect it).
Sections, in order (line numbers are current but will drift as you edit —
search for the `/* ===... */` banner comments to relocate them):

| Line (approx.) | Section | Notes |
|---|---|---|
| 1–58 | Design system / CSS variables | `:root { --navy, --amber, --surface, ... }` = light theme. `body.dark { ... }` redefines the same custom properties for dark mode. **This is where to change the site's whole color palette.** |
| 60–101 | Fonts + base reset/typography | Google Fonts import, `Playfair Display` (headings) / `Source Sans 3` (body) / `Aref Ruqaa` (Arabic). |
| 103–208 | Header & header layout | The name/tagline/photo banner. |
| 210–311 | Floating buttons | Home/lang/theme toggle buttons + scroll-to-top/contact. |
| 313–357 | Sticky pill navigation | The `.page-pill` / `.page-pill-active` nav bar. |
| 359–414 | Content sections — base | Generic `.content-section` styling shared by all pages. |
| 416–445 | Shared button styles | |
| 447–469 | Shared components | |
| 470–553 | Index page — résumé cards grid | The homepage's 6 nav cards. |
| 554–639 | Projects page — project cards grid | Includes `.category-tag.academic/.personal/.part-time/.freelance/.extracurricular` color coding. |
| 641–730 | Skills page | `.skill-tag`, `.skill-tooltip` popover. |
| 732–957 | Career (professional experience) — timeline | The big vertical timeline component. |
| 958–1049 | Personal page — cards grid | |
| 1050–1110 | Contact section | |
| 1111–1137 | Visitor counter badge | |
| 1138–1211 | Education page | `.edu-split`, `.edu-rank`, etc. |
| 1212–1242 | Entrance animations | |
| 1243–1321 | Responsive — mobile & tablet | Breakpoints for nav, header stacking, index cards 2-col/1-col, etc. |
| 1322–end | "Rehaul additions" | A grab-bag of later feature-specific styles, each prefixed with a `/* --- Cat X.Y: ... --- */` comment: page fade transition, gears watermark, theme-toggle spin, text-selection/drag protection, breadcrumb, copy-icon button, toast, share panel, skill tap-popup (mobile), swipe hint, "who am I" hook line, stat card subtitle. **If a small recently-added visual detail isn't in one of the named sections above, it's almost certainly in here** — search for its `Cat` comment or class name. |

---

## 7. The six content pages + `index.html` — what each one renders

All six `pages/*.html` files follow an identical skeleton:
```html
<header id="site-header"></header>
<nav id="site-nav"></nav>
<div id="floating-buttons"></div>
<section class="content-section">
  <h2 id="...-title"></h2>
  <div id="...-list-or-grid-or-container"></div>
</section>
<section id="site-contact"></section>
<footer id="site-footer"></footer>
<script src="../render.js"></script>
<script src="../main.js"></script>
<script>
  SiteRender.bootstrapPage({
    activePage: '<filename>.html',
    renderBody(content, skills) { /* page-specific markup + copy buttons */ }
  });
</script>
```
The `<h2>`/container ids are the only structurally unique part of each
shell — all the actual visible content is injected by `renderBody`.

| File | `activePage` | Content source | What `renderBody` builds |
|---|---|---|---|
| `index.html` (root) | `null` | `content.index`, `content.ui` | "Who am I" intro text + the 6 homepage nav cards (`index.cards`, hrefs → `pages/*.html`). No nav bar/breadcrumb (root page). |
| `pages/career.html` | `'career.html'` | `content.experience`, `content.ui.career` | 3 stat cards (countries/projects/disciplines — **hardcoded values `3`, `14+`, `4`**, not derived from data, update by hand if the underlying numbers change) + the vertical timeline (one entry per job: overview bullets, achievements, skill chips linking to `skills.html#slug`). First entry gets a pulsing "current" dot. |
| `pages/skills.html` | `'skills.html'` | `skills.categories`, `skills.projectMappings` | Skill category cards of `.skill-tag[data-skill]` chips. Defines the page-global `getProjectsForSkill()` used by `main.js`'s tooltip popover (§5). Slugs chip `id`s for the hash deep-link feature. |
| `pages/projects.html` | `'projects.html'` | `content.projects` | One card per project: category tag, name, body text, "using: [skill chips]" linking to `skills.html#slug`. |
| `pages/certifications.html` | `'certifications.html'` | `content.certifications` | One card per category, plain skill-tag-style chips (no click popover / no links). |
| `pages/personal.html` | `'personal.html'` | `content.personalLife` | Simple title+body cards, no chips. |
| `pages/education.html` | `'education.html'` | `content.education` | One card per degree/diploma: courses chips, achievements list, and either a rank block (`edu.rank` — USM entry has `#137` global rank) or a plain achievements-only block (HS diploma has no `rank`). |

**Every page** (except `index.html`) wires up a `makeCopyable` copy button
per card at the end of `renderBody`, building a plain-text summary (name,
contact, portfolio URL) specific to that card's data — if you change a
card's fields, remember the copy-button text template a few lines below the
card's render call needs the same fields updated.

---

## 8. `data/content.json` — shape reference

```
{
  meta: { name, tagline, linkedin, boldpro, email, phone1{display,wa},
          phone2{display,wa}, cvFile, qrCaption, copyright, gtag, gtm },
  ui: {
    whoTitle, virtualCvTitle, cardsSwipeHint, swipeHint,
    nav: { career, skills, projects, certificates, personalLife, education },
    education: { title, achievements, globalRank, relevantCourses, focusAreas },
    certifications: { title },
    personalLife: { title },
    skills: { title, hoverTip },
    projects: { title, using },
    career: { title, overview, keyAchievements, skillsUsed,
              stats: { countries, countriesSub, projectsBuilt, projectsSub,
                       disciplines, disciplinesSub } },
    contact: { title, email, phone, resumeBtn, downloadPdf, shareWhatsapp,
               shareEmail, copyLink },
    footer: { visits }
  },
  index: {
    whoAmI, whoAmIClosing,
    cards: [ { href, icon, label } ]   // href is "pages/xxx.html" (root-relative)
  },
  education: [ { type, dateRange, degree, school, location, courses[],
                 achievements[], rank?{value,note}, coursesLabelKey } ],
  certifications: [ { category, items[] } ],
  personalLife: [ { title, body } ],
  experience: [ { title, company, location, dateRange, duration, color,
                  overview[], achievements[], skills[] } ],
  projects: [ { name, category, categoryLabel, body, skills[] } ]
}
```
`meta.gtag`/`meta.gtm` are the Google Analytics/Tag Manager IDs, injected
site-wide by `render.js`'s `renderHead`. All page copy, labels, and button
text route through `ui`, which is how the whole site gets translated by
swapping in `content.ar.json` / `content.fr.json` with the same shape.

## 9. `data/skills.json` — shape reference

```
{
  categories: [ { title, skills: [ "skill name", ... ] } ],
  projectMappings: { "skill name": [ "Project or Job Name", ... ] }
}
```
`categories` drives the grouped chip display on `pages/skills.html`.
`projectMappings` drives the "Used in: …" tooltip popover (must be kept
consistent with `categories`' exact skill-name strings — the tooltip looks
up by exact string match). Also referenced loosely by project/experience
`skills[]` arrays in `content.json`, though those aren't strictly required
to match 1:1 (they're just link labels; the map lookup only matters on
`pages/skills.html` itself).

---

## 10. Where do I edit for X?

| Change you want | File(s) to touch |
|---|---|
| Wording, labels, button text, nav labels | `data/content.json` → `ui` (and `content.ar.json`/`content.fr.json` if translated) |
| Add/edit/remove a project | `data/content.json` → `projects[]` |
| Add/edit/remove a job/experience entry | `data/content.json` → `experience[]` |
| Add/edit/remove a certification | `data/content.json` → `certifications[]` |
| Add/edit/remove a personal-life card | `data/content.json` → `personalLife[]` |
| Add/edit/remove an education entry | `data/content.json` → `education[]` |
| Add a new skill / skill category | `data/skills.json` → `categories[]`, and add its `projectMappings["skill"]` entry too if it should show a tooltip |
| Change the homepage's 6 nav cards (order, icon, label) | `data/content.json` → `index.cards[]` |
| Change the career page's 3 stat numbers | `pages/career.html` inline `renderBody` — the `stats` array is hand-written there, **not** derived from `content.json` |
| Site-wide color palette / dark mode colors | `style.css` lines ~7–57 (`:root` / `body.dark`) |
| Any single page's unique layout/markup | that page's `renderBody` function inside its own `pages/*.html` `<script>` block |
| Shared header/footer/contact/nav markup | `render.js` (`renderHeader`, `renderFooter`, `renderContact`, `renderNav`, `renderBreadcrumb`) |
| Theme toggle, language toggle, swipe nav, copy-button, skill-tooltip behavior | `main.js` |
| Add a brand-new top-level content page | See recipe below — touches `pages/`, `render.js`'s `NAV_KEYS`, `main.js`'s `NAV_ORDER`, and `content.json`'s `ui.nav` + `index.cards` |
| Add Arabic/French translations | Create `data/content.ar.json`, `data/content.fr.json`, `data/skills.ar.json`, `data/skills.fr.json`, same shape as the English originals |
| Fix a broken icon/asset path | Check whether the reference is in a `pages/*.html` file (needs `../icons/...`) or `render.js`/`main.js` (should go through `ICONS_DIR`/`BASE`, §3) |
| CV/résumé PDF | File itself lives at project root; its filename is `meta.cvFile` in `content.json`; link-building logic is in `render.js`'s `renderContact` |

### Recipe: adding a brand-new content page (e.g. "Awards")

1. Copy an existing simple page (e.g. `pages/certifications.html`) to
   `pages/awards.html`, keep its `../style.css` / `../render.js` /
   `../main.js` paths as-is.
2. Set `activePage: 'awards.html'` in its `bootstrapPage` call and write its
   own `renderBody`.
3. Add `{ href: 'awards.html', key: 'awards' }` to `NAV_KEYS` in `render.js`.
4. Add `'pages/awards.html'` to `NAV_ORDER` in `main.js` (in the position
   you want it to appear in swipe order).
5. Add an `awards` key + label under `ui.nav` in `data/content.json` (and
   any translated JSON files).
6. Optionally add a card for it to `index.cards[]` in `data/content.json`
   with `href: "pages/awards.html"` and an `icons/....png` icon.
7. Add the actual content array (e.g. `awards: [...]`) to `data/content.json`
   for `renderBody` to read from.

### Known quirks worth remembering
- `NAV_KEYS` (render.js, drives the pill-nav + breadcrumb) and `NAV_ORDER`
  (main.js, drives swipe-gesture navigation) are two independently
  maintained lists describing the same page order — no single source of
  truth. Keep them in sync by hand.
- The career page's 3 stat-card numbers (`3` countries, `14+` projects,
  `4` disciplines) are hardcoded in `pages/career.html`, not computed from
  `content.json`'s actual array lengths.
- `skills-data.js` is legacy/dead code, not loaded by any page — ignore it
  or delete it.
- render.js's `_CONTENT_DATA`/`_SKILLS_DATA` constants are an offline
  (`file://`) fallback snapshot of the English JSON and will silently drift
  out of date if you edit `data/content.json`/`data/skills.json` without
  also updating them. Only matters for people opening the site by
  double-clicking `index.html` instead of via a local server or hosting.
