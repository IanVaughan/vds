import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import { pages } from './routes';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {pages.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
