 "use client";

import { FormEvent } from "react";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("Contact form submission placeholder", Object.fromEntries(formData));
  };

  return (
    <section id="contact" className="bg-surface py-20">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-primary/10 bg-white px-6 py-16 shadow-xl shadow-primary/10 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-primary md:text-4xl">
            Book a Free Consultation Today
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Share a few details and we will arrange a tailored assessment call for your child.
          </p>
        </div>
        <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="parentName" className="text-sm font-semibold text-primary">
              Parent name
            </label>
            <input
              id="parentName"
              name="parentName"
              type="text"
              placeholder="Your name"
              required
              className="mt-2 rounded-2xl border border-primary/20 bg-surface px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="yearGroup" className="text-sm font-semibold text-primary">
              Student year group
            </label>
            <input
              id="yearGroup"
              name="yearGroup"
              type="text"
              placeholder="e.g. Year 6"
              required
              className="mt-2 rounded-2xl border border-primary/20 bg-surface px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subjects" className="text-sm font-semibold text-primary">
              Subject(s)
            </label>
            <input
              id="subjects"
              name="subjects"
              type="text"
              placeholder="Maths, English, Science"
              required
              className="mt-2 rounded-2xl border border-primary/20 bg-surface px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-semibold text-primary">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+44 20 3695 0000"
              required
              className="mt-2 rounded-2xl border border-primary/20 bg-surface px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-primary">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              required
              className="mt-2 rounded-2xl border border-primary/20 bg-surface px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="text-sm font-semibold text-primary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your child’s goals or challenges."
              rows={4}
              className="mt-2 w-full rounded-2xl border border-primary/20 bg-surface px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button
            type="submit"
            className="md:col-span-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90"
          >
            Submit enquiry
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-slate-500">
          We typically respond within one working day.
        </p>
      </div>
    </section>
  );
}

