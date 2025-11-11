import { About } from "@/components/About";
import { Highlights } from "@/components/Highlights";
import { LearningJourney } from "@/components/LearningJourney";
import { CallToAction } from "@/components/CallToAction";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Subjects } from "@/components/Subjects";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Subjects />
        <WhyChooseUs />
        <LearningJourney />
        <Testimonials />
        <CallToAction />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
