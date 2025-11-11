export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-gradient-to-b from-white via-accent/60 to-white py-20">
      <div className="absolute -right-20 top-10 h-56 w-56 rounded-full border border-primary/10" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Parent testimonials
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-primary md:text-4xl">
            Real stories from families we’ve supported
          </h2>
          <p className="mt-4 text-base text-slate-600">
            We measure success in confidence, curiosity, and trackable outcomes that parents can feel at home.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <figure className="flex h-full flex-col justify-between rounded-[30px] bg-white p-8 shadow-xl shadow-primary/10 ring-1 ring-primary/10">
            <blockquote className="text-[15px] leading-relaxed text-slate-600">
              “Our daughter now looks forward to maths each week. Her confidence has soared and her teacher has noticed the difference.”
            </blockquote>
            <figcaption className="mt-6 flex flex-col gap-1 text-sm font-semibold text-primary">
              Emma R.
              <span className="text-xs font-normal uppercase tracking-[0.25em] text-slate-400">
                Parent of Year 6 student
              </span>
            </figcaption>
          </figure>
          <figure className="flex h-full flex-col justify-between rounded-[30px] bg-gradient-to-br from-primary/95 via-primary to-primary/80 p-8 text-white shadow-2xl shadow-primary/20">
            <blockquote className="text-[15px] leading-relaxed text-white/90">
              “The personalised approach has been incredible. We receive detailed updates after every session and can see real progress.”
            </blockquote>
            <figcaption className="mt-6 flex flex-col gap-1 text-sm font-semibold">
              Sanjay P.
              <span className="text-xs font-normal uppercase tracking-[0.25em] text-secondary">
                Parent of Year 8 student
              </span>
            </figcaption>
          </figure>
          <figure className="flex h-full flex-col justify-between rounded-[30px] bg-white p-8 shadow-xl shadow-primary/10 ring-1 ring-primary/10">
            <blockquote className="text-[15px] leading-relaxed text-slate-600">
              “Warm, professional, and structured. Stars Education really understood our son’s learning style and adapted brilliantly.”
            </blockquote>
            <figcaption className="mt-6 flex flex-col gap-1 text-sm font-semibold text-primary">
              Laura B.
              <span className="text-xs font-normal uppercase tracking-[0.25em] text-slate-400">
                Parent of Year 7 student
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

