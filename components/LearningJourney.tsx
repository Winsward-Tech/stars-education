const steps = [
  {
    title: "01. Discovery Call",
    description:
      "We explore your child’s needs, goals, and learning style to map out the best-fit support plan.",
  },
  {
    title: "02. Personalised Plan",
    description:
      "A tailored lesson roadmap aligned with the UK curriculum and your child’s confidence targets.",
  },
  {
    title: "03. Bespoke Lessons",
    description:
      "Engaging one-to-one sessions with interactive resources, live feedback, and skills coaching.",
  },
  {
    title: "04. Progress Reviews",
    description:
      "Regular check-ins with parents, measurable milestones, and adaptable goals each term.",
  },
];

export function LearningJourney() {
  return (
    <section className="relative overflow-hidden bg-accent py-20">
      <div className="absolute inset-x-0 top-10 mx-auto h-64 max-w-5xl rounded-full bg-white/60 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 max-w-2xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Our approach
          </span>
          <h2 className="text-3xl font-semibold text-primary md:text-4xl">
            A guided journey that supports every milestone
          </h2>
          <p className="text-base text-slate-600">
            Families stay informed at every stage with transparent communication, progress reports, and flexible goal setting.
          </p>
        </div>
        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute left-12 right-12 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 md:block" />
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative flex h-full flex-col gap-4 rounded-[28px] border border-primary/10 bg-white/90 p-6 text-left shadow-lg shadow-primary/5 backdrop-blur-sm"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
                {step.title}
              </span>
              <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


