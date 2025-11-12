import {
  PiFlaskFill,
  PiMathOperationsFill,
  PiPenNibFill,
} from "react-icons/pi";

type Subject = {
  name: string;
  headline: string;
  description: string;
  levels: {
    primary: string;
    stages: string[];
  };
  tagColor: string;
  accentGlow: string;
  icon: React.ComponentType<{ className?: string }>;
};

const subjects: Subject[] = [
  {
    name: "Maths",
    headline: "Problem-solving mastery",
    description:
      "Numeracy fluency, multi-step reasoning, and SATs confidence built with visual models and spaced practice.",
    levels: {
      primary: "Maths specialists",
      stages: ["KS2", "KS3"],
    },
    tagColor: "bg-primary/10 text-primary",
    accentGlow: "bg-secondary/25",
    icon: PiMathOperationsFill,
  },
  {
    name: "English",
    headline: "Confident communication",
    description:
      "Reading depth, purposeful writing, and rich vocabulary coaching led by examiners and creative mentors.",
    levels: {
      primary: "English mentors",
      stages: ["KS2", "KS3"],
    },
    tagColor: "bg-secondary/15 text-secondary/90",
    accentGlow: "bg-primary/15",
    icon: PiPenNibFill,
  },
  {
    name: "Science",
    headline: "Curiosity-led discovery",
    description:
      "Biology, chemistry, and physics taught through experiments, enquiry labs, and real-world STEM challenges.",
    levels: {
      primary: "Science educators",
      stages: ["KS2", "KS3"],
    },
    tagColor: "bg-emerald-100 text-emerald-700",
    accentGlow: "bg-emerald-200/40",
    icon: PiFlaskFill,
  },
];

export function Subjects() {
  return (
    <section id="subjects" className="relative isolate overflow-hidden bg-surface py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/8 via-primary/4 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-10">
        <header className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Expert Recommendation
          </span>
          <h2 className="text-3xl font-semibold text-primary md:text-4xl">
            Expert-Recommended Learning Benefits
          </h2>
          <p className="max-w-2xl text-base text-slate-600">
            We offer structured and engaging courses designed by seasoned UK educators to unlock confidence, accelerate attainment, and celebrate every milestone.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {subjects.map((subject) => (
            <article
              key={subject.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-[36px] border border-primary/10 bg-white/90 p-8 text-left shadow-[0_40px_70px_-50px_rgba(13,44,91,0.6)] backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_45px_85px_-55px_rgba(13,44,91,0.65)]"
            >
              <div
                className={`pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full ${subject.accentGlow} blur-3xl transition duration-500 group-hover:scale-110`}
                aria-hidden="true"
              />

              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[0_18px_30px_-22px_rgba(13,44,91,0.55)] transition duration-500 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white`}
                >
                  <subject.icon className="h-6 w-6" />
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] ${subject.tagColor}`}
                >
                  {subject.name}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-primary">{subject.headline}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {subject.description}
              </p>

              <div className="mt-6 flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                <span className="w-max rounded-2xl border border-primary/15 bg-primary/5 px-4 py-2">
                  {subject.levels.primary}
                </span>
                <div className="flex flex-wrap gap-2">
                  {subject.levels.stages.map((stage) => (
                    <span
                      key={stage}
                      className="rounded-2xl border border-primary/15 bg-white px-4 py-2"
                    >
                      {stage}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}