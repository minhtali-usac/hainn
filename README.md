# Hai Ngo Ngoc — Personal Research Website

Static HTML/CSS site served by GitHub Pages from `main` at https://hainn.clbtvusac.com. There is no build step.

## Structure

```
/
├── index.html, research.html, publications.html, cv.html, team.html
├── research-bh-*.html, research-computational-astrophysics.html   ← research theme pages
├── outreach/                 ← outreach listing and talk recap pages
├── nav.js                    ← SITE settings (menu, footer), shared page scripts
├── css/
│   ├── theme.css             ← fonts, colours, sizes, widths: start here
│   ├── styles.css            ← styles shared by every page (imports theme.css)
│   ├── article.css           ← research theme pages
│   ├── outreach-talk.css     ← outreach talk recap pages
│   └── publications.css, research.css, cv.css, team.css, outreach.css
├── assets/                   ← photos: img/, fac/, team/, outreach/<talk>/
├── fig/                      ← figures for the research pages
├── CV_HAI.pdf                ← published CV (source in CV_overleaf/)
└── outreach.html, outreach-usactalk-04.html, research-bh-scaling-relations.html
                              ← redirect stubs that keep old links alive
```

## Where to edit

| Change | File |
|---|---|
| Fonts, colours, base size, widths, corner radius | `css/theme.css` |
| Menu, logo, footer | `SITE` block at the top of `nav.js` |
| Page content | that page's `.html` |
| Styles for one page | that page's file in `css/` |
| Publications | `publications.html` (copy-paste template at the top of `#pub-list`) |

Every page needs `<div class="page-content">` and a call to `initPage('<menu id>')`.
Pages one level down use `initPage('<menu id>', '../')` and `../` in their asset paths.

## Preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Publishing steps are in [PUSH_GUIDE.md](PUSH_GUIDE.md).
