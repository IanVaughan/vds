import { Link } from "react-router-dom";
import Seo from "../Seo";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-32 text-center sm:px-6 lg:px-8">
      <Seo title="Page not found" description="The page you are looking for does not exist." />
      <p className="text-7xl font-bold text-indigo-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Page not found</h1>
      <p className="mt-4 text-lg text-slate-600">Sorry, the page you are looking for doesn't exist or has been moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/" className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5">
          Go home
        </Link>
        <Link to="/contact" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
          Contact me
        </Link>
      </div>
    </section>
  );
}
