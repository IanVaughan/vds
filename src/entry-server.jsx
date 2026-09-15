import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { pages } from './routes';
export { SITE_URL } from './site';

export const paths = pages.map(({ path }) => path);

export function render(path) {
  return renderToString(
    <html>
      <head />
      <body>
        <div id="root">
          <HelmetProvider>
            <StaticRouter location={path}>
              <App />
            </StaticRouter>
          </HelmetProvider>
        </div>
      </body>
    </html>
  );
}
