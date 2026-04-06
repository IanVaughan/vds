import Seo from "../Seo";

const testimonials = [
  {
    name: "Zoe",
    body: "We employed Jodie as a private tutor for our son who is diagnosed with ADHD, Social Communication issues and Dyslexia. Jodie was our son's private tutor from Year 2 through to Year 7, 2014-2019. She quickly understood our son's complex needs and built a good rapport and was always positive and nurturing. She gave us advice regarding our son's difficulties, which helped us with our discussions in school around what support was needed to meet his needs in school. Jodie helped to incorporate our son's dyslexia assessment recommendations within his sessions and used his interests and strengths to build his confidence and skills. Jodie had clearly planned the sessions at a pace and ability for our son which helped to identify and work on the gaps in his understanding, as well as pre-teaching current curriculum content to give our son confidence in class, which helped to reinforce current learning to develop understanding and competence for him. We valued her ongoing support for our son and his educational journey and she helped to support us with our parental EHCNA application. We would have no hesitation in recommending Jodie to other parents of SEN children as well as to any organisation within teaching especially SEN children.",
  },
  {
    name: "Tracey",
    body: "We have been very pleased with the service and Jodie was amazing. She spoke with my son and me beforehand to discuss any worries. She was very friendly and understood the issues he was having. Jodie really put us both at ease. She was really prompt with the report which was very detailed and she took the time to discuss it with my husband and me, so we understood Daniel's needs and what could help now and in the future. Daniel's assessment provided a clear picture of his cognitive profile and what his strengths and weaknesses were ensuring that any support he needed was put in place at his current school. It has also been a valuable tool when engaging with his new secondary school. Jodie broke the report down into bite-size, easy to understand pieces for me so I felt comfortable discussing it with other educational professionals. I would highly recommend this service to others.",
  },
  {
    name: "Kirsty and Paul",
    body: "Jodie has tutored our two boys in Maths and English for several years. The tuition has always been tailored to their individual needs. My youngest son was diagnosed with Autism, ADHD and Sensory Processing Difficulties. Jodie has always incorporated sensory breaks including movement breaks so he can focus on his learning. My son has built an amazing learning relationship and that trust means he can explore different aspects of his learning without fear of judgement. He has come on leaps and bounds at school and the areas he struggles with at school he can go through in his sessions with Jodie. It always amazes me how much work he does in his sessions and he really enjoys it. Jodie's experience and expertise has been invaluable to our son and we highly recommend her services.",
  },
  {
    name: "Samantha",
    body: "Jodie was knowledgeable and easy to talk to right from the first chat before the assessment. She quickly put me at ease and guided me through the assessment at my pace. She was able to give me some valuable immediate feedback and help me realise my strengths. The report was detailed and very useful to help me with my university studies, both in terms of study skills and gaining DSA and Access Arrangements. I feel that I now have the confidence to achieve my goals. Thank you, Jodie.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <Seo
        title="Testimonials"
        description="Read what families and students say about Vaughan Dyslexia Services. Testimonials from parents and adults who have had assessments and specialist tutoring."
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">What families and students say.</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p className="leading-8 text-slate-700">"{item.body}"</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
