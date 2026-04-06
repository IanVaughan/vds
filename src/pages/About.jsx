import Seo from "../Seo";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Seo
        title="About Me"
        description="Jodie Vaughan is a Level 7 specialist teacher and assessor with over 25 years in education. Qualified SENCo offering dyslexia assessments and tutoring in Crawley, West Sussex."
      />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">About me</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Jodie Vaughan — Special Educational Needs Co-ordinator with 25 years of experience in education.</h1>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-5 leading-8 text-slate-700">
            <p>I began my career as a class teacher and always had a passionate interest and commitment to supporting children with Special Educational Needs. I qualified as a Level 5 Specialist Teacher for SpLD, focusing on Dyslexia, in 2005, and began tutoring children with Specific Learning Difficulties alongside my classroom teaching. In 2016, I progressed to the role of Special Educational Needs Co-ordinator, gaining the Level 7 NASENDCo qualification, whilst continuing with private tutoring for children with SpLDs.</p>
            <p>I then qualified as a Level 7 Specialist Teacher and Assessor. I bring my vast experience and expertise into my Level 7 diagnostic assessments and teaching, giving advice and recommendations based on my knowledge, experience and creative teaching methods.</p>
            <p>I currently offer full diagnostic assessments for dyslexia, as well as private tutoring and study skills tuition.</p>
            <p>I have a current DBS check on the Update Service and an Assessment Practising Certificate (APC) from The Dyslexia Guild. These are available on request.</p>
            <p>I am a mum to two children aged 12 and 16 years old. I have first-hand experience of living with adults and children with SpLD, including dyslexia.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
