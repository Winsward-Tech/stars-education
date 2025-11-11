import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 md:flex-row md:px-10">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-semibold text-primary md:text-4xl">
            Personalised tutoring tailored to your child&apos;s needs
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Stars Education delivers bespoke one-to-one tutoring that aligns with the UK National Curriculum. Sessions are crafted to build confidence, improve grades, and unlock a love for learning.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            Every tutor is UK-based, fully vetted, and DBS checked. We collaborate closely with parents to understand goals, track progress, and celebrate every breakthrough.
          </p>
        </div>
        <div className="flex-1 rounded-[28px] border border-primary/10 bg-accent/40 p-8 shadow-lg shadow-primary/5">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                Tutor Profile Highlights
              </h3>
              <p className="mt-3 text-sm text-slate-500">
                Fully qualified UK educator with ongoing professional development.
              </p>
            </div>
            <dl className="grid gap-4 text-sm">
              <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm shadow-primary/5">
                <dt className="font-medium text-primary">Qualified Teacher</dt>
                <dd className="text-slate-500">PGCE, 8+ years experience</dd>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm shadow-primary/5">
                <dt className="font-medium text-primary">DBS Checked</dt>
                <dd className="text-slate-500">Certificate reference placeholder</dd>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm shadow-primary/5">
                <dt className="font-medium text-primary">Parent Rated</dt>
                <dd className="text-slate-500">4.9/5 satisfaction</dd>
              </div>
            </dl>
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-primary/20 bg-white px-4 py-6">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Accredited member
              </span>
              <div className="relative h-16 w-40">
                <Image
                  src="/association-mem.jpg"
                  alt="The Tutors' Association corporate member 2025-2026"
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

