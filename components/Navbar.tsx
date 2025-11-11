"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#subjects", label: "Subjects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/starseducation",
    label: "Facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://www.twitter.com/starseducation",
    label: "Twitter",
    Icon: FaTwitter,
  },
  {
    href: "https://www.instagram.com/starseducation",
    label: "Instagram",
    Icon: FaInstagram,
  },
];

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
    >
      <path
        d="M5.2 3.4c-.4.4-.6 1-.6 1.6 0 7.2 5.8 13 13 13 .6 0 1.2-.2 1.6-.6l1.7-1.7a2 2 0 0 0 .1-2.9l-1.8-1.8a2 2 0 0 0-2.4-.3l-2 .9a1 1 0 0 1-1.1-.2L9.7 9.5a1 1 0 0 1-.2-1.1l.9-2a2 2 0 0 0-.3-2.4L8.3 2.2a2 2 0 0 0-2.9.1Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
    >
      <path
        d="m4 6 7.2 4.8a1.6 1.6 0 0 0 1.6 0L20 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        width="18"
        height="14"
        x="3"
        y="5"
        rx="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topBarOpen, setTopBarOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileOpen(false);
  const toggleTopBar = () => setTopBarOpen((prev) => !prev);
  const closeTopBar = () => setTopBarOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80 text-white backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-3 md:px-10">
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-white/40 hover:bg-white/15"
              aria-expanded={topBarOpen}
              aria-controls="top-info-nav"
              onClick={toggleTopBar}
            >
              <span className="sr-only">Toggle contact information</span>
              {topBarOpen ? (
                <svg
                  aria-hidden="true"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 6 18 18M6 18 18 6" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
          <div
            id="top-info-nav"
            className={`${
              topBarOpen ? "grid" : "hidden"
            } gap-4 border-t border-white/10 pt-4 text-sm text-white md:flex md:items-center md:justify-between md:gap-6 md:border-0 md:pt-0`}
          >
            <a
              href="mailto:info@starseducation.com"
              className="flex items-center gap-3 font-medium transition hover:text-white/80"
              onClick={closeTopBar}
            >
              <span className="rounded-full bg-white/10 p-2">
                <MailIcon />
              </span>
              <div className="leading-tight">
                <span className="block text-xs uppercase tracking-wide text-white/70">
                  Email Us
                </span>
                <span className="font-semibold">info@starseducation.com</span>
              </div>
            </a>
            <div className="hidden h-8 w-px bg-white/20 md:block" />
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/10 p-2">
                <ClockIcon />
              </span>
              <div className="leading-tight">
                <span className="block text-xs uppercase tracking-wide text-white/70">
                  Monday – Friday
                </span>
                <span className="font-semibold">8:00am – 8:00pm</span>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-white/20 md:block" />
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/10 p-2">
                <PhoneIcon />
              </span>
              <div className="leading-tight">
                <span className="block text-xs uppercase tracking-wide text-white/70">
                  Call Us
                </span>
                <a
                  href="tel:+442036950000"
                  className="font-semibold hover:underline"
                  onClick={closeTopBar}
                >
                  +44 20 3695 0000
                </a>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-white/20 md:block" />
            <div className="flex items-center gap-2">
              {socialLinks.map((item) => {
                const Icon = item.Icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex size-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-primary/40 hover:text-primary"
                    aria-label={item.label}
                    onClick={closeTopBar}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 md:px-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-14 w-14 shrink-0">
              <Image
                src="/stars-edu-logo.jpg"
                alt="Stars Education logo"
                fill
                sizes="56px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold uppercase text-primary/90">
                Stars Education
              </span>
              <span className="text-xs font-medium text-gray-400">
                Nurturing Bright Young Minds
              </span>
            </div>
          </Link>
          <nav className="hidden flex-1 items-center justify-center gap-7 text-sm font-medium text-slate-500 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="uppercase tracking-wide text-slate-500 transition hover:text-primary"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden rounded-full bg-gradient-to-r from-primary to-primary/70 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white !text-white shadow-lg shadow-primary/25 transition hover:from-primary/90 hover:to-primary hover:text-white hover:!text-white md:inline-flex"
            >
              Book Your Consultation
            </a>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-primary/40 hover:text-primary md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-primary-nav"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Toggle navigation</span>
              {mobileOpen ? (
                <svg
                  aria-hidden="true"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 6 18 18M6 18 18 6" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          id="mobile-primary-nav"
          className={`md:hidden`}
          hidden={!mobileOpen}
        >
          <div className="border-t border-slate-100 bg-white/95 px-6 pb-6 pt-4 shadow-sm backdrop-blur-sm">
            <nav className="flex flex-col gap-3 text-sm font-semibold text-slate-600">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 uppercase tracking-wide transition hover:bg-primary/10 hover:text-primary"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/70 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white !text-white shadow-lg shadow-primary/25 transition hover:from-primary/90 hover:to-primary hover:text-white hover:!text-white"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
