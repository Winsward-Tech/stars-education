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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#f3f7ff] via-white to-[#fff4e6]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-14 px-6 md:px-10 lg:flex-row lg:items-center lg:px-12">
        <div className="relative w-full max-w-xl flex-1">
          <div className="relative h-[520px] w-full overflow-hidden rounded-[36px] border border-primary/10 bg-white shadow-[0_30px_70px_-40px_rgba(13,44,91,0.4)] md:h-[620px]">
            <Image
              src="/about-us.jpg"
              alt="Tutor guiding a student through an engaging online session"
              fill
              sizes="(min-width: 1024px) 460px, (min-width: 768px) 60vw, 90vw"
              className="object-cover object-top"
              priority
            />
            <div className="absolute bottom-3 left-1/2 w-[80%] max-w-[260px] -translate-x-[55%] rounded-2xl border border-white/60 bg-white/85 px-5 py-4 text-center shadow-[0_25px_45px_-35px_rgba(13,44,91,0.45)] backdrop-blur-sm md:bottom-6 md:left-auto md:right-8 md:w-[260px] md:translate-x-0 md:text-left">
              <p className="text-lg font-semibold text-primary">Eva Tano-Yeboah</p>
              <p className="text-sm text-slate-600">BSc, PGCE, MSc, QTS</p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-8 lg:h-[620px]">
          <span className="inline-flex w-max items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            About Stars Education
          </span>
          <div className="max-w-xl space-y-1">
            
            <h2 className="text-2xl font-semibold text-primary md:text-4xl">
              Expert-Recommended Learning Benefits
            </h2>
            {/* <p className="text-base leading-relaxed text-slate-600">
              We offer structured and engaging courses crafted by seasoned UK educators to unlock confidence, accelerate progress, and keep curiosity thriving.
            </p> */}
          </div>

          <div className="grid gap-4 lg:mt-auto">
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