import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vaughan Dyslexia Services",
  description:
    "Diagnostic dyslexia assessments, access arrangement assessments and specialist tutoring for children and adults across Sussex, Kent and Surrey.",
  url: "https://www.vaughandyslexiaservices.co.uk",
  telephone: "07708733772",
  email: "jodie@vaughandyslexiaservices.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Maidenbower",
    addressLocality: "Crawley",
    addressRegion: "West Sussex",
    postalCode: "RH10 7HA",
    addressCountry: "GB",
  },
  areaServed: ["Sussex", "Kent", "Surrey"],
};

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
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
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

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <Link
                to="/contact"
                className="mt-4 inline-block rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:-translate-y-0.5"
              >
                Contact me
              </Link>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-slate-400">Address</p>
              <p className="mt-2 text-base leading-7">Maidenbower, Crawley, West Sussex RH10 7HA</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-slate-400">Phone</p>
              <a href="tel:07708733772" className="mt-2 block text-base hover:text-indigo-200">07708 733772</a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-slate-400">Email</p>
              <a href="mailto:jodie@vaughandyslexiaservices.co.uk" className="mt-2 block break-all text-base hover:text-indigo-200">
                jodie@vaughandyslexiaservices.co.uk
              </a>
            </div>
          </div>
        </div>
      </footer>
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
