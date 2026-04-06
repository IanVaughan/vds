import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const servicesLinks = [
  ["Assessments", "/assessments"],
  ["Tutoring", "/tutoring"],
  ["Access Arrangements", "/access-arrangements"],
];

const navLinks = [
  ["Home", "/"],
  ["FAQs", "/faqs"],
  ["Testimonials", "/testimonials"],
  ["About Me", "/about"],
  ["Resources", "/resources"],
  ["Contact", "/contact"],
];

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-lg font-bold text-white shadow-sm">
              V
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Vaughan</div>
              <div className="text-base font-semibold text-slate-900">Dyslexia Services</div>
            </div>
          </Link>

          <nav className="hidden flex-wrap items-center gap-5 lg:flex">
            <Link to="/" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Home
            </Link>
            <ServicesDropdown />
            {navLinks.slice(1).map(([label, to]) => (
              <Link key={to} to={to} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Get in touch
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-slate-900"
      >
        Services
        <svg className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            All Services
          </Link>
          <div className="my-1 border-t border-slate-100" />
          {servicesLinks.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
