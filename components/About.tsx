import Image from "next/image";
import {
  PiChatsCircleFill,
  PiChalkboardTeacherFill,
  PiTargetFill,
} from "react-icons/pi";

const featureCards = [
  {
    title: "Tailored Learning Blueprints",
    description:
      "We study your child’s strengths, challenges, and aspirations to design a tailored programme that accelerates progress.",
    icon: PiTargetFill,
  },
  {
    title: "Mentors Who Inspire",
    description:
      "UK-qualified teachers bring 8+ years of classroom expertise, providing nurturing guidance and confident instruction.",
    icon: PiChalkboardTeacherFill,
  },
  {
    title: "Progress You Can See",
    description:
      "Parents receive clear feedback loops, milestone celebrations, and actionable insights after every session.",
    icon: PiChatsCircleFill,
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f3f7ff] via-white to-[#fff4e6]" />
        <div className="absolute left-1/4 top-10 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/5 bottom-8 h-56 w-56 translate-x-1/2 rounded-full bg-[#f7a81b]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-14 px-6 md:px-10 lg:flex-row lg:items-center lg:px-12">
        <div className="relative w-full max-w-xl flex-1">
          <div className="relative h-[420px] w-full overflow-hidden rounded-[36px] border border-primary/10 bg-white shadow-[0_30px_70px_-40px_rgba(13,44,91,0.4)]">
            <Image
              src="/about-us.jpg"
              alt="Tutor guiding a student through an engaging online session"
              fill
              sizes="(min-width: 1024px) 460px, (min-width: 768px) 60vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              About Stars Education
            </span>
          </div>

          <div className="grid gap-4">
            {featureCards.map((feature) => (
              <div
                key={feature.title}
                className="group flex items-start gap-4 rounded-3xl border border-primary/10 bg-white px-5 py-6 shadow-[0_20px_60px_-40px_rgba(13,44,91,0.4)] transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_25px_70px_-45px_rgba(13,44,91,0.55)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <feature.icon className="h-6 w-6" />
                </span>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {feature.description}
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