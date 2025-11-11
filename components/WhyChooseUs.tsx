export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-x-0 top-24 mx-auto h-72 max-w-5xl rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.85fr_1.15fr] md:px-10">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Why families choose us
          </span>
          <h2 className="text-3xl font-semibold text-primary md:text-4xl">
            Rigorous standards, compassionate teaching, measurable results
          </h2>
          <p className="text-base text-slate-600">
            We combine evidence-based pedagogy with nurturing relationships so every learner feels confident, supported, and ready to excel.
          </p>
          <div className="rounded-[28px] border border-primary/20 bg-accent/40 p-6 shadow-inner shadow-primary/10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Parent peace of mind
            </p>
            <p className="mt-3 text-sm text-slate-600">
              DBS checks, safeguarding training, and transparent progress notes come as standard with every Stars Education tutor.
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="rounded-[28px] bg-gradient-to-r from-white via-accent/70 to-white p-6 shadow-lg shadow-primary/10">
            <h3 className="text-lg font-semibold text-primary">One-to-one personalised learning</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Tailored lesson structures, interactive resources, and confidence-building strategies align to your child’s exact learning profile.
            </p>
          </div>
          <div className="rounded-[28px] border border-primary/10 bg-white p-6 shadow-lg shadow-primary/5">
            <h3 className="text-lg font-semibold text-primary">UK curriculum experts</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We reinforce classroom topics, extend learning creatively, and prepare learners for SATs, entrance exams, and KS3 assessments.
            </p>
          </div>
          <div className="rounded-[28px] border border-primary/10 bg-white p-6 shadow-lg shadow-primary/5">
            <h3 className="text-lg font-semibold text-primary">Progress you can see</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Session recaps, monthly overviews, and measurable goals keep parents informed and students motivated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

