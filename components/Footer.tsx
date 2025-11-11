import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#subjects", label: "Subjects" },
  { href: "#why-choose-us", label: "Why Stars" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 md:flex-row md:items-start md:justify-between md:px-10">
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14">
              <Image
                src="/stars-edu-logo.jpg"
                alt="Stars Education logo"
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em]">Stars Education</p>
              <p className="text-xs text-white/60">
                Premium KS2 &amp; KS3 tutoring across Maths, English, and Science.
              </p>
            </div>
          </div>
          <p className="text-sm text-white/70">
            Based in the UK — Online &amp; In-Person Sessions. Specialised tutoring for KS2 &amp; KS3 learners across Maths, English, and Science.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <span className="font-semibold uppercase tracking-[0.2em] text-secondary">
            Navigation
          </span>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/70 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="space-y-4 text-sm">
          <span className="block font-semibold uppercase tracking-[0.2em] text-secondary">
            Contact
          </span>
          <div className="space-y-2 text-white/80">
            <a href="tel:+442036950000" className="block hover:text-white">
              +44 20 3695 0000
            </a>
            <a href="mailto:info@starseducation.co.uk" className="block hover:text-white">
              info@starseducation.co.uk
            </a>
            <p>Mon–Sat · 9am–7pm (GMT)</p>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <span className="block font-semibold uppercase tracking-[0.2em] text-secondary">
            Accreditation
          </span>
          <div className="relative h-20 w-48 rounded-md bg-white/10 p-2">
            <Image
              src="/association-mem.jpg"
              alt="The Tutors' Association corporate member 2025-2026"
              fill
              sizes="192px"
              className="rounded-md object-contain"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/60 md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Stars Education. All rights reserved.</p>
          <p>Privacy notice &amp; safeguarding policies — to be added.</p>
        </div>
      </div>
    </footer>
  );
}

