# Hai Ngoc Ngo — Research Group Website

## Structure

```
/
├── index.html          ← Home page
├── research.html       ← Research projects detail
├── publications.html   ← Full publication list with filter
├── cv.html             ← Curriculum Vitae
├── team.html           ← Team page + About Us
├── styles.css          ← Global dark-cosmos stylesheet
├── nav.js              ← Shared nav + starfield + fade-in animations
└── assets/             ← All images go here
```

## Assets Needed

Place the following image files in the `assets/` folder.
All images gracefully degrade with colored fallbacks if missing.

| File                   | Description                            |
|------------------------|----------------------------------------|
| `photo.jpg`            | Your main profile photo                |
| `img_cluster.jpg`      | Nuclear star cluster (e.g. HST image)  |
| `img_dwarf.jpg`        | Dwarf/spiral galaxy image              |
| `img_merger.jpg`       | Merging galaxies image                 |
| `fac_elt.jpg`          | ELT telescope photo                    |
| `fac_alma.jpg`         | ALMA array photo                       |
| `fac_vlt.jpg`          | VLT photo                              |
| `fac_hst.jpg`          | Hubble Space Telescope photo           |
| `fac_jwst.jpg`         | JWST photo                             |
| `team_cappellari.jpg`  | Michele Cappellari photo               |
| `team_dieu.jpg`        | Dieu Nguyen photo                      |
| `team_tinh.jpg`        | Tinh Le photo                          |
| `team_huy.jpg`         | Huy Tong photo                         |

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
