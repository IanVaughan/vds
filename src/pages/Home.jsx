import { Link } from "react-router-dom";
import Seo from "../Seo";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <Seo
        title={null}
        description="Vaughan Dyslexia Services offers diagnostic dyslexia assessments, access arrangement assessments and specialist tutoring across Sussex, Kent and Surrey."
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-indigo-200 bg-white/70 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
            Dyslexia services for children and adults
          </div>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Diagnostic assessments, access arrangement assessments and specialist tutoring.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Across areas of Sussex, Kent and Surrey, with specialist tutoring offered locally.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700">
            If you have dyslexia or another specific learning difficulty (SpLD), your difficulties can go way beyond reading, writing and spelling. You might struggle with organisation, sequencing your thoughts or ideas, maths or coordination. You might struggle to concentrate.
          </p>
          <p className="mt-4 text-lg font-semibold text-slate-900">I am here to help.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5">
              Contact me
            </Link>
            <Link to="/services" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Explore services
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-2xl shadow-slate-200">
          <div className="rounded-[1.5rem] bg-slate-900 p-6 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-200">Contact details</p>
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-slate-300">Address</p>
                <p className="mt-1 text-base font-medium">Maidenbower, Crawley, West Sussex RH10 7HA</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">Phone</p>
                <a href="tel:07708733772" className="mt-1 block text-base font-medium text-white hover:text-indigo-200">
                  07708 733772
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-300">Email</p>
                <a
                  href="mailto:jodie@vaughandyslexiaservices.co.uk"
                  className="mt-1 block break-all text-base font-medium text-white hover:text-indigo-200"
                >
                  jodie@vaughandyslexiaservices.co.uk
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              "25+ years in education",
              "Level 7 specialist teacher and assessor",
              "Children, adults, schools and universities",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
