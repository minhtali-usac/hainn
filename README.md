# Hai Ngo Ngo — Research Group Website

## Structure

```
/
├── index.html            ← Home page
├── research.html         ← Research projects detail
├── publications.html     ← Full publication list with filter
├── cv.html               ← Curriculum Vitae
├── team.html             ← Team page + About Us
├── outreach.html         ← Redirect stub → outreach/index.html (keeps old links alive)
├── outreach-usactalk-04.html ← Redirect stub → outreach/usactalk-04.html
├── styles.css            ← Global dark-cosmos stylesheet
├── nav.js                ← Shared nav + starfield + fade-in animations (basePath-aware)
├── outreach/              ← All outreach / USACTalk recap pages
│   ├── index.html         ← Outreach listing page
│   └── usactalk-04.html   ← USACTalk #04 recap
└── assets/                ← All images, grouped by purpose
    ├── img/                ← Profile photo + general science images
    ├── fac/                ← Facility / telescope photos
    ├── team/                ← Team member photos
    └── outreach/            ← Outreach event photos, one subfolder per talk
        └── usactalk-04/
```

Pages nested one level deep (e.g. `outreach/*.html`) call `initPage(activePage, '../')` so
`nav.js` can prefix links back to the site root correctly.

## Assets Needed

Place the following image files under `assets/`.
All images gracefully degrade with colored fallbacks if missing.

| File                                          | Description                            |
|------------------------------------------------|----------------------------------------|
| `img/photo.jpg`                                | Your main profile photo                |
| `img/cluster.jpg`                              | Nuclear star cluster (e.g. HST image)  |
| `img/dwarf.jpg`                                | Dwarf/spiral galaxy image              |
| `img/merger.jpg`                               | Merging galaxies image                 |
| `fac/elt.jpg`                                  | ELT telescope photo                    |
| `fac/alma.jpg`                                 | ALMA array photo                       |
| `fac/vlt.jpg`                                  | VLT photo                              |
| `fac/hst.jpg`                                  | Hubble Space Telescope photo           |
| `fac/jwst.jpg`                                 | JWST photo                             |
| `team/cappellari.jpg`                          | Michele Cappellari photo               |
| `team/dieu.jpg`                                | Dieu Nguyen photo                      |
| `team/tinh.jpg`                                | Tinh Le photo                          |
| `team/huy.jpg`                                 | Huy Tong photo                         |
| `outreach/usactalk-04/cover.jpg`               | USACTalk #04 cover photo               |
| `outreach/usactalk-04/photo-1.jpg` … `photo-4.jpg` | USACTalk #04 event photos          |

## Design Theme

**Deep Cosmos Observatory** — Dark luxury astrophysics aesthetic

- Background: `#04070E` (deep space black-blue)
- Accent Gold: `#D4A843` (stellar warmth)
- Accent Teal: `#6ECECE` (nebula glow)
- Typography: Cormorant Garamond (display) + Outfit (body) + Space Mono (labels)
- Animated star field canvas in background
- Nebula gradient blobs
- Fade-in on scroll animations
- Glassmorphism cards

## Deployment (GitHub Pages)

1. Push all files to your GitHub repo
2. Go to Settings → Pages → Deploy from branch `main` / root
3. Site live at `https://yourusername.github.io/repo-name/`

## Customization

All colors and fonts are CSS variables in `styles.css` at the top:
```css
:root {
  --gold: #D4A843;
  --teal: #6ECECE;
  --bg: #04070E;
  /* ... */
}
```
