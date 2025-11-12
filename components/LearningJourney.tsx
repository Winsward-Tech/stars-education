import Image from "next/image";
import {
  PiCalendarCheckFill,
  PiChatCircleDotsFill,
  PiFlaskFill,
  PiStarFill,
} from "react-icons/pi";

const keyBenefits = [
];

const journeySteps = [
  {
    title: "01. Discovery Call",
    description:
      "We explore your child’s needs, goals, and learning style to map out the best-fit support plan.",
    icon: PiChatCircleDotsFill,
  },
  {
    title: "02. Personalised Plan",
    description:
      "A tailored lesson roadmap aligned with the UK curriculum and your child’s confidence targets.",
    icon: PiCalendarCheckFill,
  },
  {
    title: "03. Bespoke Lessons",
    description:
      "Engaging one-to-one sessions with interactive resources, live feedback, and skills coaching.",
    icon: PiFlaskFill,
  },
  {
    title: "04. Progress Reviews",
    description:
      "Regular check-ins with parents, measurable milestones, and adaptable goals each term.",
    icon: PiStarFill,
  },
];

export function LearningJourney() {
  return (
    <section className="relative overflow-hidden bg-accent py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f6f8ff] via-accent to-[#fff6e9]" />
        <div className="absolute left-1/4 top-12 hidden h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl lg:block" />
        <div className="absolute right-1/5 bottom-12 hidden h-64 w-64 translate-x-1/2 rounded-full bg-secondary/15 blur-3xl lg:block" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-10 lg:flex-row lg:items-center lg:px-12">
        <div className="relative w-full max-w-xl flex-1 overflow-hidden rounded-[36px] bg-white shadow-[0_45px_95px_-55px_rgba(13,44,91,0.55)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 mix-blend-multiply" />
          <Image
            src="/student5.jpg"
            alt="Tutor guiding students through an interactive lesson"
            width={640}
            height={760}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="flex flex-1 flex-col gap-8">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Our Approach
            </span>
            <h2 className="text-4xl font-semibold leading-tight text-primary md:text-5xl">
              Each Lesson Brings Exciting Discoveries
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Our programmes engage every learner through collaborative exploration, purposeful feedback, and joyful moments that spark curiosity.
            </p>
          </div>

          
          <div className="grid gap-4 sm:grid-cols-2">
            {journeySteps.map((step) => (
              <div
                key={step.title}
                className="group flex h-full flex-col gap-3 rounded-[28px] border border-primary/10 bg-white/85 px-6 py-5 text-left shadow-[0_35px_80px_-55px_rgba(13,44,91,0.6)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_45px_95px_-60px_rgba(13,44,91,0.7)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <step.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}