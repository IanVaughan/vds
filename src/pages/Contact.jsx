import { useState } from "react";
import Seo from "../Seo";

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Seo
        title="Contact"
        description="Get in touch with Vaughan Dyslexia Services. Based in Maidenbower, Crawley, West Sussex. Call, email or use the contact form to book an assessment or tutoring."
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Contact</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Feel free to get in touch with any questions.</h1>
          <p className="mt-5 max-w-2xl leading-8 text-slate-700">
            You can use the form below, email directly or call me. I appreciate your interest and look forward to hearing from you.
          </p>

          <ContactForm />
        </div>

        <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-300">
          <h3 className="text-2xl font-semibold">Get in touch</h3>
          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-slate-400">Address</p>
              <p className="mt-2 text-lg">Maidenbower, Crawley, West Sussex RH10 7HA</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-slate-400">Phone</p>
              <a href="tel:07708733772" className="mt-2 block text-lg hover:text-indigo-200">07708 733772</a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-slate-400">Email</p>
              <a href="mailto:jodie@vaughandyslexiaservices.co.uk" className="mt-2 block break-all text-lg hover:text-indigo-200">
                jodie@vaughandyslexiaservices.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus("submitting");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        setStatus("success");
        form.reset();
      })
      .catch(() => setStatus("error"));
  }

  if (status === "success") {
    return (
      <div className="mt-8 rounded-[2rem] border border-green-200 bg-green-50 p-8 text-center shadow-sm">
        <p className="text-lg font-semibold text-green-800">Thank you for your enquiry!</p>
        <p className="mt-2 text-slate-600">I'll get back to you as soon as I can.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-indigo-700 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="mt-8 grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Name</label>
        <input id="name" name="name" required className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-indigo-500" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Your email</label>
        <input id="email" name="email" type="email" required className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-indigo-500" placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
        <textarea id="message" name="message" rows={6} required className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-indigo-500" placeholder="How can I help?" />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or email directly.</p>
      )}
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-50"
        >
          {status === "submitting" ? "Sending\u2026" : "Submit enquiry"}
        </button>
      </div>
    </form>
  );
}
