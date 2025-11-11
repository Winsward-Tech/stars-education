export function Subjects() {
  return (
    <section id="subjects" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold text-primary md:text-4xl">Subjects Offered</h2>
          <p className="mx-auto max-w-2xl text-base text-slate-600">
            Focused one-to-one lessons covering the full UK curriculum in Maths, English, and Science.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="group relative flex h-full flex-col overflow-hidden rounded-[32px] bg-gradient-to-br from-white via-accent/80 to-white p-8 text-left shadow-xl shadow-primary/10 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
            <div className="absolute -right-8 -top-12 h-36 w-36 rounded-full bg-secondary/20 blur-2xl" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Maths</span>
            <h3 className="mt-4 text-2xl font-semibold text-primary">Problem-solving mastery</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Targeted numeracy fluency, multi-step reasoning practice, and exam-ready SATs preparation with visual methods.
            </p>
            <div className="mt-auto rounded-3xl bg-white/70 px-5 py-3 text-xs uppercase tracking-[0.25em] text-primary/70">
              Maths specialists · KS2 · KS3
            </div>
          </div>
          <div className="group relative flex h-full flex-col overflow-hidden rounded-[32px] bg-white p-8 text-left shadow-xl shadow-primary/10 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
            <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">English</span>
            <h3 className="mt-4 text-2xl font-semibold text-primary">Confident communication</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Reading comprehension strategies, persuasive writing, and creative storytelling with vocabulary stretch tasks.
            </p>
            <div className="mt-auto rounded-3xl bg-primary/5 px-5 py-3 text-xs uppercase tracking-[0.25em] text-primary/70">
              English mentors · KS2 · KS3
            </div>
          </div>
          <div className="group relative flex h-full flex-col overflow-hidden rounded-[32px] bg-white p-8 text-left shadow-xl shadow-primary/10 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
            <div className="absolute -right-12 bottom-0 h-32 w-32 rounded-full bg-secondary/15 blur-2xl" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Science</span>
            <h3 className="mt-4 text-2xl font-semibold text-primary">Curiosity-led discovery</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              KS2 &amp; KS3 biology, chemistry, and physics explained with memorable experiments and real-world examples.
            </p>
            <div className="mt-auto rounded-3xl bg-secondary/10 px-5 py-3 text-xs uppercase tracking-[0.25em] text-primary/70">
              Science educators · KS2 · KS3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

