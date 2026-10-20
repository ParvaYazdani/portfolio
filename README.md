# Portfolio: Parva Yazdani

Personal portfolio site in English and German. Plain HTML/CSS/JS, no build step.

**Live:** https://parvayazdani.github.io/portfolio/

```
index.html                    # landing page
project-management.html       # project acquisition, sub-project management, supervision
wireless-communication.html   # 5G/6G research, publications, posters
ai-engineering.html           # AI engineering projects and timeline
css/styles.css                # site styles, light/dark mode via prefers-color-scheme
js/i18n.js                    # EN/DE dictionary and language switch, keyed by data-i18n
js/main.js                    # mobile navigation toggle
assets/                       # images, diagrams (PlantUML sources + renders), papers
```

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploying

Any static host works, e.g. GitHub Pages with the repository root as the source.

## Licence

All content © Parva Yazdani unless stated otherwise.
Publications and posters remain under the copyright of their respective authors and
publishers.
