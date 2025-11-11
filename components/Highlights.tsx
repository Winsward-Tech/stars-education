const highlights = [
  {
    stat: "97%",
    label: "Parent satisfaction",
    detail: "Post-session feedback across the last academic year.",
  },
  {
    stat: "1.8 grades",
    label: "Average improvement",
    detail: "Measured after 12 weeks of targeted tutoring.",
  },
  {
    stat: "120+",
    label: "Families supported",
    detail: "Across KS2 & KS3 in Maths, English, and Science.",
  },
  {
    stat: "100%",
    label: "DBS-checked tutors",
    detail: "With ongoing safeguarding and CPD training.",
  },
];

export function Highlights() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#f5f5f7] via-white to-[#f5f5f7] text-[#1f1f1f] shadow-[0_20px_45px_-30px_rgba(15,23,42,0.45)]">
          <div className="absolute inset-y-0 left-0 hidden w-px bg-gradient-to-b from-transparent via-[#d2d2d7] to-transparent md:block" />
          <div className="relative grid gap-10 px-8 py-14 md:grid-cols-4 md:px-12">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-3 rounded-[28px] bg-white/60 p-6 backdrop-blur-[18px] transition hover:bg-white/80"
              >
                <span className="text-5xl font-semibold tracking-tight text-[#0b172a] md:text-6xl">
                  {item.stat}
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6e6e73]">
                  {item.label}
                </span>
                <p className="text-sm leading-relaxed text-[#3a3a3c]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

