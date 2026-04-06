import { Link } from "react-router-dom";
import Seo from "../Seo";

const services = [
  {
    title: "Dyslexia Assessments",
    subtitle: "for children and adults",
    body: "A diagnostic assessment is so much more than just a diagnosis. An assessment will show whether dyslexia is present, but it will also provide a profile of your strengths and weaknesses.",
    to: "/assessments",
  },
  {
    title: "Exams Access Arrangements",
    subtitle: "Assessment support",
    body: "Access arrangements are used to level the playing field during an exam. Examples of arrangements may be extra time, a scribe or the use of a word processor.",
    to: "/access-arrangements",
  },
  {
    title: "Specialist tutoring for children with dyslexia",
    subtitle: "Tailored learning support",
    body: "A specialist tutor will develop the right learning plan for you or your child's tuition. This is important as every individual's experience of dyslexia is distinct to them in both its nature and severity.",
    to: "/tutoring",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Seo
        title="Services"
        description="Dyslexia assessments, access arrangement assessments and specialist tutoring for children and adults. Support tailored to the individual."
      />
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Services</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Support tailored to the individual.</h1>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.title}
            to={service.to}
            className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
              {service.subtitle}
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-slate-950">{service.title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{service.body}</p>
            <div className="mt-6 text-sm font-semibold text-slate-900">Read more →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
