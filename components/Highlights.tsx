"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { LuHeartHandshake } from "react-icons/lu";
import { PiGraduationCapFill } from "react-icons/pi";
import { GiLaurelsTrophy } from "react-icons/gi";

type Highlight = {
  stat: string;
  label: string;
  detail: string;
  accentGradient: string;
  accentBar: string;
  icon: IconType;
};

const highlights: Highlight[] = [
  {
    stat: "120+",
    label: "Learners guided",
    detail: "Students receiving weekly one-to-one and small group coaching with us.",
    accentGradient: "from-sky-400 via-sky-500 to-indigo-500",
    accentBar: "bg-sky-300/80",
    icon: PiGraduationCapFill,
  },
  {
    stat: "10 Years +",
    label: "Experience",
    detail: "Our tutors have been teaching for over 10 years and have a wealth of experience in the classroom.",
    accentGradient: "from-emerald-400 via-emerald-500 to-teal-500",
    accentBar: "bg-emerald-300/80",
    icon: GiLaurelsTrophy,
  },
  {
    stat: "98%",
    label: "Family satisfaction",
    detail: "Families report outstanding experiences after each tailored term plan.",
    accentGradient: "from-rose-400 via-rose-500 to-pink-500",
    accentBar: "bg-rose-300/80",
    icon: LuHeartHandshake,
  },
];

export function Highlights() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-white pb-28 pt-12 text-[#0d2c5b] "
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[url('/student6.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f9fbfd]/92 via-white/94 to-[#fef6e7]/92" />
        <div className="absolute -left-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-[#1b4b8c]/12 blur-3xl md:-left-32" />
        <div className="absolute -right-40 top-24 h-[420px] w-[420px] rounded-full bg-[#f7a81b]/18 blur-3xl md:-right-56" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(27,75,140,0.08),_transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 text-center lg:px-12 pt-2">
        <header className="mx-auto max-w-3xl">
          <h2 className="mt-6 text-4xl font-semibold leading-tight text-[#0d2c5b] md:text-5xl">
            Tutoring Outcomes Families Trust 
          </h2>
          <p className="mt-4 text-lg text-[#5f6b86]">
            Personalised lessons, rigorous safeguarding, and expert tutors combine to deliver
            measurable progress.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className={`relative flex h-full flex-col items-center gap-5 rounded-[32px] border border-[#1b4b8c]/10 bg-white p-10 text-center shadow-[0_35px_60px_-35px_rgba(27,75,140,0.4)] transition duration-700 ease-out hover:-translate-y-3 hover:shadow-[0_25px_70px_-30px_rgba(27,75,140,0.55)] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#f9fbfd] shadow-[0_12px_24px_-18px_rgba(27,75,140,0.55)] ring-2 ring-white">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br ${item.accentGradient} text-white shadow-[0_15px_30px_-18px_rgba(27,75,140,0.45)]`}
                >
                  <item.icon className="h-6 w-6" />
              </span>
              </span>

              <p className="text-4xl font-semibold tracking-tight text-[#0d2c5b] md:text-5xl">
                {item.stat}
              </p>
              <div className={`h-1 w-12 rounded-full ${item.accentBar}`} />

              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#1b4b8c]/70">
                {item.label}
              </p>
              <p className="text-sm leading-relaxed text-[#5f6b86]">{item.detail}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

