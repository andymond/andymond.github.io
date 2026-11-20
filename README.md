# Andy Dymond — Personal Site

Static portfolio and career history for [andy.dymond.dev](https://andy.dymond.dev), published with GitHub Pages.

## Structure

- `index.html` contains the homepage, selected work, skills, experience, and contact links.
- `journey.html` contains the longer career story and collapsible Turing student projects.
- `stylesheets/main.css` contains the site-wide layout, typography, responsive rules, and background texture.
- `assets/` contains the résumé PDF, portraits, and project screenshots.
- `CNAME` configures the custom GitHub Pages domain.

The site has no build step or package manager requirements. Pages are plain HTML and CSS and use local assets.

## Preview locally

From the repository root, run:

```sh
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). Stop the server with `Ctrl+C`.

## Updating the site

- Edit page content in `index.html` or `journey.html`; shared presentation belongs in `stylesheets/main.css`.
- Replace the résumé at `assets/andy-dymond-resume.pdf` to keep the existing download links working.
- Keep image dimensions in the HTML accurate, and optimize new images for their displayed size. Images lower on the page should load lazily.
- Keep employment dates, role progression, and project claims consistent between the site and résumé.

Changes are reviewed in pull requests against `master`. Merging to `master` publishes the site through GitHub Pages.
