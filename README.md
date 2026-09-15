# Vaughan Dyslexia Services

React and Vite site hosted on Netlify.

## Development

```sh
npm ci
npm run dev
```

## Production build and checks

```sh
npm test
npm run lint
```

`npm test` builds the client assets, renders every route to static HTML and runs the SEO regression checks. Netlify runs `npm run build` and publishes `dist`.

Page routes are defined in `src/routes.jsx`. The build generates their HTML files, a sitemap, robots.txt and a noindex 404 page. Netlify serves extensionless page URLs and returns HTTP 404 for unknown paths. `vite preview` is useful for inspecting output but does not emulate Netlify redirects.

The canonical site URL and assessment fee are defined in `src/site.js`. Page components own their titles and descriptions; the HTML template contains only shared browser setup.

The hidden form in `index.html` declares the contact fields for Netlify Forms outside the React hydration root. The visible contact form sends URL-encoded submissions with `form-name=contact`.
