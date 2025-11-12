'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/student3.jpg",
    headline: "Imagine Homework Without the Tears",
    subhead:
      "We pair patient tutors with smart learning insights to make homework manageable and milestones inevitable.",
    ctaLabel: "Start a Calm Study Plan",
    ctaHref: "#contact",
  },
  {
    id: 2,
    image: "/student5.jpg",
    headline: "Confidence in Class Starts Here",
    subhead:
      "From algebra to essays, our tailored tuition plans guide KS2 & KS3 learners step-by-step until tricky topics click.",
    ctaLabel: "Build Their Confidence",
    ctaHref: "#contact",
  },
  {
    id: 3,
    image: "/student7.jpg",
    headline: "Tutoring That Feels Personal",
    subhead:
      "We listen, adapt, and teach at your child’s pace so motivation soars and results stick.",
    ctaLabel: "Meet Your Tutor",
    ctaHref: "#contact",
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex] ?? slides[0];

  return (
    <section className="relative overflow-hidden bg-white text-slate-900" id="top">
      <div className="absolute inset-y-0 right-0 hidden md:block md:w-[58%] lg:w-[52%]">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="h-full"
          onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.headline}
                  fill
                  sizes="(max-width: 1200px) 50vw, 45vw"
                  className="object-cover"
                  priority={slide.id === 1}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.28) 45%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.95) 90%)",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
          className="h-[360px]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.headline}
                  fill
                  sizes="(max-width: 768px) 100vw"
                  className="object-cover"
                  priority={slide.id === 1}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(31,60,122,0.28) 0%, rgba(255,255,255,0.72) 65%, rgba(255,255,255,0.93) 100%)",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative z-20 mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-16 pt-12 md:flex-row md:items-center md:gap-12 md:px-10 lg:pb-20 lg:pt-16">
        <div className="flex w-full max-w-xl flex-col gap-8 md:self-start">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1f3c7a] md shadow-[0_12px_24px_rgba(255,210,51,0.42)]">
            Trusted UK Tutoring
            <span className="ml-1 inline-block h-2 w-2 rounded-full bg-[#ffd233]" />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-[#1f3c7a] md:text-5xl lg:text-[3.4rem]">
              {activeSlide.headline}
            </h1>
            <p className="max-w-lg text-base text-slate-600 md:text-lg">{activeSlide.subhead}</p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href={activeSlide.ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-[#ffd233] px-8 py-3 text-sm font-semibold text-[#ffffff] shadow-[0_18px_32px_rgba(255,210,51,0.3)] transition hover:bg-[#ffcf1a]"
            >
              {activeSlide.ctaLabel}
            </Link>
          </div>
        </div>
        <div className="hidden flex-1 md:block" aria-hidden="true" />
      </div>
    </section>
  );
}

