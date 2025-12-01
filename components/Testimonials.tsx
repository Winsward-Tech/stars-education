'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Testimonial {
  name: string;
  location: string;
  testimony: string;
  imageUrl?: string;
  isHighlighted?: boolean;
}

// Helper function to count words in testimony
const getWordCount = (text: string): number => {
  return text.trim().split(/\s+/).length;
};

const testimonialsRaw: Testimonial[] = [
 
  {
    name: "Jaden Sacramento",
    location: "Telford, United Kingdom",
    testimony: "Stars Education helped me keep on track with my maths studies and maintain consistency with weekly lessons and homework. It gave me a confidence boost going into lessons and exams, and really helped me exceed further in my education.",
    imageUrl: "/Jaden Sacramento.jpeg",
  },
  {
    name: "Hanan Mohamed Al Sadik",
    location: "Walsall, England",
    testimony: "I've been tutored by Stars Education from year 8 to year 11 and it really helped my maths skills. I could see progress over the years, especially during GCSEs. The sessions were comfortable and not intimidating. I'm now pursuing A-level maths with even more confidence.",
  },
  {
    name: "Krystal Yeboah",
    location: "Manchester, England",
    testimony: "I've been taking maths tutoring for a few years now and it has helped me work ahead in school and deepen my understanding. I started in year 5 to prepare for my 11+ exams and passed them. I'm now working on higher maths for my GCSEs in a top set class thanks to Stars Education.",
    isHighlighted: true,
  },
  {
    name: "Nadim Sharifi",
    location: "Wolverhampton, England",
    testimony: "Stars Education has added a massive factor to my education development. This has made my education and learning develop even more.",
  },
  {
    name: "Victoria Joseph",
    location: "UK, West Midlands",
    testimony: "It helped me pass my GCSE exams as my tutor was very lovely and patient with me. She was able to give me work to advance and help me meet my needs.",
    imageUrl: "/Vicky Lola1.png",
  },
  {
    name: "Mohammed Sharifi",
    location: "Wolverhampton, United Kingdom",
    testimony: "Our experience has made a lasting impact on all three of our kids. My youngest two secured places at one of the most oversubscribed schools in Wolverhampton thanks to their SATs and 11+ support. My eldest is now studying Mechanical Engineering at university. Eva went above and beyond, tailoring her teaching to each child's needs. Highly recommended.",
    isHighlighted: true,
  },
  {
    name: "Richard Oguntoye",
    location: "Birmingham",
    testimony: "Great personalities and commitment. They equipped my son mentally and emotionally for the 11+ exams. My son felt comfortable with the teaching styles and looked forward to every session. Happy to be part of the success stories.",
  },
  {
    name: "Olaoluwa Oyelade",
    location: "Wolverhampton, England",
    testimony: "I enrolled my daughter, Olivia, for her 11+ exam preparation. She enjoyed not just the tutoring but also the mentoring Aunty Eva gave her to boost her confidence. I would recommend Stars Education to friends and family over and over again.",
  },
];

// Use testimonials in the exact order from the const list
const testimonials = testimonialsRaw;

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-gradient-to-b from-white via-accent/60 to-white py-20">
      <div className="absolute -right-20 top-10 h-56 w-56 rounded-full border border-primary/10" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Parent & Student Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-primary md:text-4xl">
            Real stories from families we've supported
          </h2>
          <p className="mt-4 text-base text-slate-600">
            We measure success in confidence, curiosity, and trackable outcomes that parents can feel at home.
          </p>
        </div>
        
        <div className="relative px-0 md:px-16">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-testimonials',
              prevEl: '.swiper-button-prev-testimonials',
            }}
            className="!pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <figure
                  className={`flex h-full flex-col justify-between rounded-[30px] p-8 shadow-xl ring-1 transition-all duration-300 hover:scale-[1.02] ${
                    testimonial.isHighlighted
                      ? "bg-gradient-to-br from-primary/95 via-primary to-primary/80 text-white shadow-primary/20 ring-primary/20"
                      : "bg-white shadow-primary/10 ring-primary/10"
                  }`}
                >
                  <div className="flex-1">
                    <div className="mb-4 flex justify-center">
                      <svg
                        className={`h-8 w-8 ${testimonial.isHighlighted ? "text-white/30" : "text-primary/20"}`}
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <blockquote
                      className={`text-[15px] leading-relaxed ${
                        testimonial.isHighlighted ? "text-white/90" : "text-slate-600"
                      }`}
                    >
                      "{testimonial.testimony}"
                    </blockquote>
                  </div>
                  <figcaption
                    className={`mt-6 flex items-center gap-3 text-sm font-semibold ${
                      testimonial.isHighlighted ? "text-white" : "text-primary"
                    }`}
                  >
                    {testimonial.imageUrl && (
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                    )}
                    <div className="flex flex-col gap-1">
                      {testimonial.name}
                      <span
                        className={`text-xs font-normal uppercase tracking-[0.25em] ${
                          testimonial.isHighlighted ? "text-white/70" : "text-slate-400"
                        }`}
                      >
                        {testimonial.location}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-testimonials hidden md:flex absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 rounded-full bg-white p-3 shadow-lg ring-1 ring-primary/20 transition-all hover:bg-primary hover:text-white hover:shadow-xl hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg
              className="h-6 w-6 text-primary transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="swiper-button-next-testimonials hidden md:flex absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-lg ring-1 ring-primary/20 transition-all hover:bg-primary hover:text-white hover:shadow-xl hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg
              className="h-6 w-6 text-primary transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

