import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import test from 'node:test';

const base = 'https://vaughandyslexiaservices.co.uk';
const routes = ['', 'services', 'assessments', 'tutoring', 'access-arrangements', 'faqs', 'testimonials', 'about', 'resources', 'contact'];
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

for (const route of routes) {
  test(`${route || 'home'} has crawlable content and unique route metadata`, () => {
    const file = `dist/${route || 'index'}.html`;
    assert.ok(existsSync(new URL(`../${file}`, import.meta.url)), `${file} must be generated`);
    const html = read(file);
    assert.match(html, /<h1[\s>]/);
    assert.doesNotMatch(html, /£490/);
    assert.equal((html.match(/<title>/g) || []).length, 1);
    assert.equal((html.match(/<meta name="description"/g) || []).length, 1);
    assert.equal((html.match(/<link rel="canonical"/g) || []).length, 1);
    assert.ok(html.includes(`rel="canonical" href="${base}/${route}"`));
    assert.ok(!html.includes('https://www.vaughandyslexiaservices.co.uk'));
    assert.match(html, /<a[^>]+href="\/contact"/);
  });
}

test('assessment price is £525 in page copy and FAQ structured data', () => {
  for (const route of ['assessments', 'faqs']) {
    const file = `dist/${route}.html`;
    assert.ok(existsSync(new URL(`../${file}`, import.meta.url)), `${file} must be generated`);
    const html = read(file);
    assert.match(html, /£525/);
    assert.doesNotMatch(html, /£490/);
    if (route === 'faqs') {
      const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map((match) => JSON.parse(match[1]));
      const faq = schemas.find((schema) => schema['@type'] === 'FAQPage');
      assert.match(faq.mainEntity.find((item) => item.name.includes('cost')).acceptedAnswer.text, /£525/);
    }
  }
});

test('sitemap and robots use the final canonical host', () => {
  const sitemap = read('dist/sitemap.xml');
  assert.doesNotMatch(sitemap + read('dist/robots.txt'), /https:\/\/www\./);
  for (const route of routes) assert.ok(sitemap.includes(`<loc>${base}/${route}</loc>`));
});

test('unknown paths use a noindex static 404 response', () => {
  assert.ok(existsSync(new URL('../dist/404.html', import.meta.url)), '404.html must be generated');
  const html = read('dist/404.html');
  assert.match(html, /Page not found/);
  assert.match(html, /<meta name="robots" content="noindex"/);
  assert.doesNotMatch(html, /rel="canonical"/);
  assert.match(read('dist/_redirects'), /\/\*\s+\/404\.html\s+404/);
  assert.doesNotMatch(read('dist/_redirects'), /\/\*\s+\/index\.html\s+200/);
});

test('Netlify form discovery and client scripts are preserved', () => {
  const html = read('dist/index.html');
  assert.match(html, /<form[^>]*name="contact"[^>]*netlify/);
  assert.match(html, /<script[^>]*type="module"[^>]*src="\/assets\//);
});

test('only the outside-root contact form is processed by Netlify', () => {
  const html = read('dist/contact.html');
  const root = html.slice(html.indexOf('<div id="root">'));
  assert.doesNotMatch(root, /data-netlify="true"/);
  assert.match(root, /name="form-name" value="contact"/);
  assert.match(root, /name="email"/);
  assert.match(root, /name="message"/);
});

test('service pages have their own content and descriptions', () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const route of routes) {
    const html = read(`dist/${route || 'index'}.html`);
    titles.add(html.match(/<title>(.*?)<\/title>/s)[1]);
    descriptions.add(html.match(/<meta name="description" content="([^"]+)"/)[1]);
  }
  assert.equal(titles.size, routes.length);
  assert.equal(descriptions.size, routes.length);
  assert.match(read('dist/assessments.html'), /Diagnostic assessments from the age of 7/);
  assert.match(read('dist/tutoring.html'), /Specialist tutoring for children aged 6–16/);
});
