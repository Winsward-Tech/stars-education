"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GiLaurelsTrophy } from "react-icons/gi";

const highlight = {
  stat: "15 Years +",
  label: "Experience",
  detail: "Our tutors have been teaching for over 10 years and have a wealth of experience in the classroom.",
  accentGradient: "from-emerald-400 via-emerald-500 to-teal-500",
  accentBar: "bg-emerald-300/80",
  icon: GiLaurelsTrophy,
};

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
      id="highlights"
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

        <div className="w-full">
          <div
            className={`relative flex flex-col md:flex-row items-stretch gap-0 rounded-[32px] border border-[#1b4b8c]/10 bg-white overflow-hidden shadow-[0_35px_60px_-35px_rgba(27,75,140,0.4)] transition duration-700 ease-out hover:-translate-y-3 hover:shadow-[0_25px_70px_-30px_rgba(27,75,140,0.55)] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Image Section - Hidden on mobile, visible on desktop, now on the left */}
            <div className="hidden md:block relative w-full md:w-[45%] lg:w-[40%] min-h-[400px] md:min-h-[500px] overflow-hidden order-1 md:order-1">
              {/* Decorative gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-teal-50/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-emerald-300/40 to-transparent z-20" />
              
              <Image
                src="/student6.jpg"
                alt="Experienced tutors teaching students"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 0vw, 45vw"
                priority
              />
              
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.08),transparent_60%)] z-10" />
            </div>

            {/* Content Section - Now on the right */}
            <div className="relative flex flex-col items-center justify-center gap-8 p-8 md:p-12 lg:p-16 xl:p-20 text-center md:flex-1 md:items-center md:justify-center order-2 md:order-2">
              {/* Decorative background pattern */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(27,75,140,0.1),transparent_50%)]" />
              </div>
              
              <div className="relative z-10 flex flex-col items-center gap-8 w-full">
                {/* Icon and Stat - Vertical Layout */}
                <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
                  {/* Icon - On Top */}
                  <span className="inline-flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-[24px] bg-[#f9fbfd] shadow-[0_12px_24px_-18px_rgba(27,75,140,0.55)] ring-2 ring-white transition-transform duration-300 hover:scale-110">
                    <span
                      className={`flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-[20px] bg-gradient-to-br ${highlight.accentGradient} text-white shadow-[0_15px_30px_-18px_rgba(27,75,140,0.45)]`}
                    >
                      <highlight.icon className="h-7 w-7 md:h-8 md:w-8" />
                    </span>
                  </span>

                  {/* Stat Text - Single Line, Much Larger */}
                  <div className="flex flex-col gap-4 md:gap-5 w-full items-center">
                    <p className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#0d2c5b] leading-[1.1] whitespace-nowrap">
                      {highlight.stat}
                    </p>
                    <div className={`h-2 w-20 md:w-24 rounded-full ${highlight.accentBar} mx-auto`} />
                  </div>
                </div>

                {/* Label and Detail - Larger and better spaced */}
                <div className="flex flex-col gap-4 md:gap-5 w-full max-w-2xl items-center">
                  <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-[#1b4b8c]/70">
                    {highlight.label}
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[#5f6b86] font-light text-center">
                    {highlight.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}

