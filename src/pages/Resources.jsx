import Seo from "../Seo";

const dyslexiaInfo = [
  {
    title: "British Dyslexia Association – What is Dyslexia?",
    url: "https://www.bdadyslexia.org.uk/dyslexia/about-dyslexia",
  },
  {
    title: "An animation by the British Dyslexia Association: Seeing Dyslexia Differently",
    url: "https://www.youtube.com/watch?v=11r7CFlK2sc",
  },
  {
    title: "K. Sandman-Hurley's video: What is Dyslexia?",
    url: "https://www.youtube.com/watch?v=zafiGBrFkRM",
  },
];

const references = [
  "Dyslexia in Secondary School: A Practical Handbook for Teachers, Parents and Students by Jenny Cogan and Mary Flecker",
  "The Bigger Picture Book of Amazing Dyslexics and the Jobs They Do by Kathy Iwanczak",
  "How Dyslexics Learn: Grasping the Nettle by Kate Saunders and Annie White",
  "The Self-Help Guide for Teens with Dyslexia by Alais Winton",
  "Starving the Anxiety Gremlin by Kate Collins-Donnelly (10–16 year olds)",
  "Starving the Exams Stress Gremlin by Kate Collins-Donnelly (10–16 year olds)",
  "The Study Skills Handbook by Stella Cottrell (older students)",
];

export default function Resources() {
  return (
    <section className="bg-indigo-50 py-20">
      <Seo
        title="Resources"
        description="Helpful dyslexia resources including links to the British Dyslexia Association, educational videos and recommended books for parents, students and teachers."
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Resources</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Helpful information and references.</h1>
        </div>

        {/* What is dyslexia? */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-slate-900">What is dyslexia?</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {dyslexiaInfo.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.5rem] border border-indigo-100 bg-white p-5 text-indigo-700 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
              >
                {item.title}
                <span className="ml-1 text-indigo-400">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Useful references */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-slate-900">Useful references</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {references.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-indigo-100 bg-white p-5 text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
