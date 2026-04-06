import Seo from "../Seo";

const faqs = [
  {
    q: "How are you different to an Educational Psychologist?",
    a: "I am a specialist teacher assessor which means that I have direct classroom teacher and tutoring experience (which is not always true of Ed Psychs). It also means that I have access to a slightly different battery of tests. Due to my vast experience of working as a Special Educational Needs Co-ordinator, tutor and teacher, I can usually recommend more specific support that is relevant to the educational setting.",
  },
  {
    q: "How much do assessments cost?",
    a: "The price for a dyslexia assessment is £490. This includes a pre-assessment virtual meeting and a minimum of 30 minutes discussion after the assessment to discuss the findings, report and recommendations for support. I am always available to answer emails and provide further information.",
  },
  {
    q: "Do you offer assessments for schools, colleges or universities?",
    a: "Yes – SENDCos/Inclusion Managers, please contact me to discuss your requirements.",
  },
  {
    q: "Do you travel for assessments?",
    a: "I carry out assessments on my premises and often in the child's or young person's educational setting. I also travel for assessments ordered by schools, colleges and universities.",
  },
  {
    q: "Are you labelling me or my child?",
    a: "I ensure that my practice is centred on progress and strategies rather than just labelling. My reports, whether dyslexia is found or not, have recommendations for home, the educational setting and the workplace, to help address the areas of need found during the assessment. So whilst the diagnosis is important, finding learning strategies that work for the individual is essential.",
  },
  {
    q: "Is my child entitled to extra support if they have dyslexia?",
    a: "My reports have a range of recommendations that can be put into place for your child. Generally, schools are great at doing this, although some of these recommendations will cost more than others to put into place, both in terms of resources and staffing. However, schools don't generally get extra funding for children diagnosed with dyslexia alone, so schools may not be able to put in all of the recommendations in one go. If you do feel that the assessment report is being ignored it is covered by the Equality Act 2010 and you have recourse to your local council SEN department.",
  },
  {
    q: "Will there be strategies that we can use at home?",
    a: "Yes – lots. I am also happy to be contacted to provide more if required. My reports can also be used by a Specialist Tutor to plan a programme of learning.",
  },
];

export default function Faqs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Seo
        title="FAQs"
        description="Frequently asked questions about dyslexia assessments, costs, school support, strategies for home and the difference between a specialist teacher assessor and an Educational Psychologist."
      />
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">FAQs</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Frequently asked questions.</h2>
      </div>
      <div className="mt-10 grid gap-4">
        {faqs.map((item) => (
          <details key={item.q} className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-slate-950">
              {item.q}
            </summary>
            <p className="mt-4 leading-8 text-slate-700">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
