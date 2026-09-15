import { readFile, writeFile } from 'node:fs/promises';
import { render, paths, SITE_URL } from '../dist-ssr/entry-server.js';

const output = new URL('../dist/', import.meta.url);
const template = await readFile(new URL('index.html', output), 'utf8');

for (const path of [...paths, '/404']) {
  const document = render(path);
  const head = document.match(/<head>([\s\S]*?)<\/head>/)?.[1];
  const body = document.match(/<body>([\s\S]*?)<\/body>/)?.[1];
  if (!head || !body) throw new Error(`Missing rendered document for ${path}`);
  const html = template
    .replace('</head>', `${head}</head>`)
    .replace('<div id="root"></div>', () => body);
  await writeFile(new URL(path === '/' ? 'index.html' : `${path.slice(1)}.html`, output), html);
}

await writeFile(new URL('sitemap.xml', output), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n')}
</urlset>
`);
await writeFile(new URL('robots.txt', output), `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`);
