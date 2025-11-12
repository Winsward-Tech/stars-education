import Link from "next/link";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full border border-white/40" />
        <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full border border-white/40" />
      </div>
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-16 text-center md:flex-row md:justify-between md:text-left md:px-10">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Ready to help your child shine?
          </h2>
          <p className="text-sm text-white/80">
            Reserve a free consultation to discuss how Stars Education can support your family with tailored one-to-one tutoring.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/70 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary/25 transition hover:from-primary/90 hover:to-primary hover:text-white"
          >
            Book Your Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}






