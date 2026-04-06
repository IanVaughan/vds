import Seo from "../Seo";

export default function AccessArrangements() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Seo
        title="Exams Access Arrangements"
        description="Access arrangement assessments for exams including extra time, scribes and word processors. Bespoke assessments for schools, colleges and universities."
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">Access Arrangements</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Assessment arrangements tailored to the individual.</h1>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Bespoke assessment</h3>
            <p className="mt-3 leading-7 text-slate-200">Assessment arrangement assessments are bespoke to the individual.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Normal way of working</h3>
            <p className="mt-3 leading-7 text-slate-200">The SENDCo at your child's educational setting will make the decision on the access arrangements that will best meet their needs and abilities. They must reflect your child's normal way of working and follow the guidelines set out by the JCQ.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">School, college and university support</h3>
            <p className="mt-3 leading-7 text-slate-200">I am always happy to work with schools, colleges and universities that are looking for a specialist teacher to support them.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
