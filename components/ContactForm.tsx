"use client";

import Image from "next/image";
import { FormEvent, useState, useRef, useEffect } from "react";
import { subjects } from "./Subjects";

type FormStatus = "idle" | "loading" | "success" | "error";

// Map KS2/KS3 to actual year groups
const getYearGroupsForSubject = (subjectName: string): string[] => {
  const subject = subjects.find((s) => s.name === subjectName);
  if (!subject) return [];

  const yearGroups: string[] = [];
  
  subject.levels.stages.forEach((stage) => {
    if (stage === "KS2") {
      yearGroups.push("Year 3", "Year 4", "Year 5", "Year 6");
    } else if (stage === "KS3") {
      yearGroups.push("Year 7", "Year 8", "Year 9");
    } else {
      // For specific years like "Year 10", "Year 11", "Year 5", "Year 6"
      yearGroups.push(stage);
    }
  });

  // Remove duplicates and sort
  return Array.from(new Set(yearGroups)).sort((a, b) => {
    const numA = parseInt(a.replace("Year ", ""));
    const numB = parseInt(b.replace("Year ", ""));
    return numA - numB;
  });
};

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Phone validation - allows international format with country code
const phoneRegex = /^\+?[1-9]\d{1,14}$/;

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [availableYearGroups, setAvailableYearGroups] = useState<string[]>([]);
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Update year groups when subject changes
  useEffect(() => {
    if (selectedSubject) {
      const yearGroups = getYearGroupsForSubject(selectedSubject);
      setAvailableYearGroups(yearGroups);
      // Reset year group selection when subject changes
      const yearGroupSelect = formRef.current?.querySelector("#yearGroup") as HTMLSelectElement;
      if (yearGroupSelect) {
        yearGroupSelect.value = "";
      }
    } else {
      setAvailableYearGroups([]);
    }
  }, [selectedSubject]);

  const validateEmail = (email: string): boolean => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone.trim()) {
      setPhoneError("Phone number is required");
      return false;
    }
    // Remove spaces, dashes, and parentheses for validation
    const cleanedPhone = phone.replace(/[\s\-()]/g, "");
    if (!phoneRegex.test(cleanedPhone)) {
      setPhoneError("Please enter a valid phone number with country code (e.g., +44 20 1234 5678)");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handleEmailBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    validateEmail(event.target.value);
  };

  const handlePhoneBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    validatePhone(event.target.value);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Get form values
    const formData = new FormData(event.currentTarget);
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";

    // Validate email and phone
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);

    if (!isEmailValid || !isPhoneValid) {
      setStatus("error");
      setErrorMessage("Please fix the errors in the form before submitting.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    setEmailError("");
    setPhoneError("");
    
    try {
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mrbrreny";
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        formRef.current?.reset();
        setSelectedSubject("");
        setAvailableYearGroups([]);
        setEmailError("");
        setPhoneError("");
        // Show toast notification
        setShowToast(true);
        // Auto-dismiss toast after 5 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      } else {
        let errorMsg = "Something went wrong. Please try again later.";
        try {
          const data = await response.json();
          // Handle Formspree error responses
          if (data.errors && Array.isArray(data.errors)) {
            errorMsg = data.errors.map((err: { message?: string }) => err.message || "Validation error").join(". ");
          } else if (data.error) {
            errorMsg = data.error;
          }
        } catch {
          // If JSON parsing fails, use status text or default message
          errorMsg = response.statusText || errorMsg;
        }
        setErrorMessage(errorMsg);
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-surface pt-20 pb-10">
      {/* Toast Notification */}
      {showToast && (
        <div
          role="alert"
          aria-live="polite"
          className="fixed top-4 right-4 z-50 animate-slide-in md:top-6 md:right-6"
        >
          <div className="rounded-2xl border border-green-500/20 bg-white px-5 py-4 text-sm text-green-800 shadow-2xl shadow-green-500/20 max-w-sm">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold">Thank you for your enquiry!</p>
                <p className="mt-1 text-xs text-green-700">
                  We've received your message and will respond within one working day.
                </p>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="flex-shrink-0 text-green-600 hover:text-green-800 transition-colors"
                aria-label="Close notification"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-5xl rounded-[32px] border border-primary/10 bg-white px-6 py-16 shadow-xl shadow-primary/10 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-primary md:text-4xl">
            Book a Free Consultation Today
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Share a few details and we will arrange a tailored assessment call for your child.
          </p>
        </div>

        {/* Error Messages */}
        {status === "error" && errorMessage && (
          <div
            className="mb-6 rounded-2xl border border-red-500/20 bg-red-50 px-4 py-3 text-sm text-red-800"
            role="alert"
          >
            <p className="font-semibold">Submission failed</p>
            <p className="mt-1">{errorMessage}</p>
          </div>
        )}

        <form
          ref={formRef}
          className="grid gap-6 md:grid-cols-2"
          onSubmit={handleSubmit}
          aria-label="Contact form"
          noValidate
        >
          <div className="flex flex-col">
            <label htmlFor="parentName" className="text-sm font-semibold text-primary">
              Parent name
            </label>
            <input
              id="parentName"
              name="parentName"
              type="text"
              placeholder="Your name"
              required
              disabled={status === "loading"}
              aria-required="true"
              className="mt-2 rounded-2xl border border-primary/20 bg-surface px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subjects" className="text-sm font-semibold text-primary">
              Subject(s)
            </label>
            <select
              id="subjects"
              name="subjects"
              required
              disabled={status === "loading"}
              aria-required="true"
              value={selectedSubject}
              onChange={handleSubjectChange}
              className="mt-2 rounded-2xl border border-primary/20 bg-surface px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <option value="">Select a subject</option>
              {subjects.map((subject) => (
                <option key={subject.name} value={subject.name}>
                  {subject.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="yearGroup" className="text-sm font-semibold text-primary">
              Student year group
            </label>
            <select
              id="yearGroup"
              name="yearGroup"
              required
              disabled={status === "loading" || !selectedSubject || availableYearGroups.length === 0}
              aria-required="true"
              aria-label={!selectedSubject ? "Please select a subject first" : "Select year group"}
              className="mt-2 rounded-2xl border border-primary/20 bg-surface px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <option value="">
                {!selectedSubject
                  ? "Select a subject first"
                  : availableYearGroups.length === 0
                  ? "No year groups available"
                  : "Select year group"}
              </option>
              {availableYearGroups.map((yearGroup) => (
                <option key={yearGroup} value={yearGroup}>
                  {yearGroup}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-semibold text-primary">
              Phone <span className="text-xs font-normal text-slate-500">(with country code)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+44 20 3695 0000"
              required
              disabled={status === "loading"}
              aria-required="true"
              aria-invalid={phoneError ? "true" : "false"}
              aria-describedby={phoneError ? "phone-error" : undefined}
              onBlur={handlePhoneBlur}
              className={`mt-2 rounded-2xl border px-4 py-3 text-sm text-slate-700 outline-none transition focus:bg-white focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60 ${
                phoneError
                  ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500/20"
                  : "border-primary/20 bg-surface focus:border-primary focus:ring-primary/20"
              }`}
            />
            {phoneError && (
              <p id="phone-error" className="mt-1 text-xs text-red-600" role="alert">
                {phoneError}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-primary">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              required
              disabled={status === "loading"}
              aria-required="true"
              aria-invalid={emailError ? "true" : "false"}
              aria-describedby={emailError ? "email-error" : undefined}
              onBlur={handleEmailBlur}
              className={`mt-2 rounded-2xl border px-4 py-3 text-sm text-slate-700 outline-none transition focus:bg-white focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60 ${
                emailError
                  ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500/20"
                  : "border-primary/20 bg-surface focus:border-primary focus:ring-primary/20"
              }`}
            />
            {emailError && (
              <p id="email-error" className="mt-1 text-xs text-red-600" role="alert">
                {emailError}
              </p>
            )}
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="text-sm font-semibold text-primary">
              Message <span className="text-xs font-normal text-slate-500">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your child's goals or challenges."
              rows={4}
              disabled={status === "loading"}
              className="mt-2 w-full rounded-2xl border border-primary/20 bg-surface px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            aria-busy={status === "loading"}
            aria-disabled={status === "loading"}
            className="md:col-span-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit enquiry"
            )}
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-slate-500">
          We typically respond within one working day.
        </p>
      </div>
      <div className="mt-6 flex flex-col items-center gap-6 text-center md:flex-row md:justify-center md:gap-12">
        <div className="relative h-20 w-20 md:h-24 md:w-24">
          <Image src="/Stars Education-Winsward Tech-b.png" alt="Stars Education logo" fill sizes="320px" className="object-contain" />
        </div>
        <div className="relative h-20 w-48">
          <Image
            src="/association-mem.jpg"
            alt="The Tutors' Association corporate member 2025-2026"
            fill
            sizes="192px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

