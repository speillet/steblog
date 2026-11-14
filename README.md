# Stéphane Peillet — Portfolio

An English-language portfolio about AI, computer vision, remote sensing, and geographic data. Based on the supplied professional profile, with an original illustrated map and a small interactive layer selector.

## Local preview

Requires Node.js 22+ and Python 3. There are no npm dependencies to install.

```sh
npm run build
npm run dev
```

Open <http://127.0.0.1:4173>. After editing the source files, run `npm run build` again and refresh the browser.

## Editing

- `index.html`: content, links, and the illustrative SVG map.
- `assets/styles.css`: colours, typography, and responsive layouts.
- `assets/main.js`: accessible map perspective controls.
- `assets/favicon.svg`: compass favicon.
- `scripts/build.mjs`: copies only the website into `dist/` for deployment.

The site remains readable with JavaScript disabled. Map controls appear only when JavaScript is available. The map is an illustration, not geographic data or a live GeoSkills demonstration. Fonts load from Google Fonts, with local system fallbacks.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds and deploys the portfolio after a push to `main`, or when run manually in GitHub Actions.

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Push the site to `main`, or run **Deploy portfolio to GitHub Pages** from the Actions tab.

For the current `speillet/steblog` repository, the default Pages URL after a successful deployment is <https://speillet.github.io/steblog/>. Relative asset paths also allow the site to be hosted at another repository path or at a domain root.

See [GitHub’s custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## License

[MIT](LICENSE).
