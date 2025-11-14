"use client";

import { useRef, useState, useEffect } from "react";
import {
  PiFlaskFill,
  PiMathOperationsFill,
  PiPenNibFill,
  PiGraduationCapFill,
} from "react-icons/pi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

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
    name: "Mathematics",
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
  {
    name: "GCSE Mathematics",
    headline: "Exam excellence & mastery",
    description:
      "Comprehensive GCSE preparation covering algebra, geometry, statistics, and problem-solving strategies with expert tutors and past paper practice.",
    levels: {
      primary: "GCSE Maths experts",
      stages: ["Year 10", "Year 11"],
    },
    tagColor: "bg-blue-100 text-blue-700",
    accentGlow: "bg-blue-200/40",
    icon: PiMathOperationsFill,
  },
  {
    name: "GCSE English",
    headline: "Literature & language mastery",
    description:
      "In-depth GCSE English Language and Literature support with set text analysis, creative writing techniques, and structured essay planning.",
    levels: {
      primary: "GCSE English specialists",
      stages: ["Year 10", "Year 11"],
    },
    tagColor: "bg-purple-100 text-purple-700",
    accentGlow: "bg-purple-200/40",
    icon: PiPenNibFill,
  },
  {
    name: "GCSE Science",
    headline: "Triple & combined science",
    description:
      "Complete GCSE Science coverage for Biology, Chemistry, and Physics with practical skills, data analysis, and exam techniques.",
    levels: {
      primary: "GCSE Science tutors",
      stages: ["Year 10", "Year 11"],
    },
    tagColor: "bg-teal-100 text-teal-700",
    accentGlow: "bg-teal-200/40",
    icon: PiFlaskFill,
  },
  {
    name: "11+ Preparation",
    headline: "Grammar & independent success",
    description:
      "Comprehensive 11+ exam preparation covering verbal reasoning, non-verbal reasoning, mathematics, and English with tailored strategies.",
    levels: {
      primary: "11+ specialists",
      stages: ["Year 5", "Year 6"],
    },
    tagColor: "bg-amber-100 text-amber-700",
    accentGlow: "bg-amber-200/40",
    icon: PiGraduationCapFill,
  },
];

export function Subjects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const canScrollLeftValue = container.scrollLeft > 0;
    const canScrollRightValue =
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10;

    setCanScrollLeft(canScrollLeftValue);
    setCanScrollRight(canScrollRightValue);
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", checkScrollability);
    window.addEventListener("resize", checkScrollability);

    return () => {
      container.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const firstCard = container.querySelector("article");
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 32; // 8 * 4 (gap-8 = 2rem = 32px)
    const scrollAmount = cardWidth + gap;

    const newScrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <section id="subjects" className="relative isolate overflow-hidden bg-surface py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/8 via-primary/4 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 md:px-10">
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

        {/* Carousel Container */}
        <div className="relative">
          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4 md:pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {subjects.map((subject, index) => (
              <article
                key={subject.name}
                className="group relative flex h-full min-h-[420px] min-w-[280px] flex-col overflow-hidden rounded-[36px] border border-primary/10 bg-white/90 p-8 text-left shadow-[0_40px_70px_-50px_rgba(13,44,91,0.6)] backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_45px_85px_-55px_rgba(13,44,91,0.65)] md:min-w-[320px] lg:min-w-[340px]"
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

          {/* Navigation Arrows - Side by side on the right, bottom positioned */}
          <div className="absolute right-0 bottom-0 z-20 flex items-center gap-2.5">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`group relative flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                canScrollLeft
                  ? "border-primary/40 bg-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:scale-110 hover:shadow-2xl active:scale-95"
                  : "border-primary/10 bg-white/50 shadow-sm cursor-not-allowed opacity-40"
              }`}
              aria-label="Scroll left"
            >
              {canScrollLeft && (
                <span className="absolute -inset-1 rounded-full bg-primary/20 animate-ping" />
              )}
              <HiChevronLeft
                className={`relative z-10 h-6 w-6 transition-all duration-300 ${
                  canScrollLeft
                    ? "text-primary group-hover:text-white group-hover:scale-110"
                    : "text-primary/30"
                }`}
              />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`group relative flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                canScrollRight
                  ? "border-primary/40 bg-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:scale-110 hover:shadow-2xl active:scale-95"
                  : "border-primary/10 bg-white/50 shadow-sm cursor-not-allowed opacity-40"
              }`}
              aria-label="Scroll right"
            >
              {canScrollRight && (
                <span className="absolute -inset-1 rounded-full bg-primary/20 animate-ping" />
              )}
              <HiChevronRight
                className={`relative z-10 h-6 w-6 transition-all duration-300 ${
                  canScrollRight
                    ? "text-primary group-hover:text-white group-hover:scale-110"
                    : "text-primary/30"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}