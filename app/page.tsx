import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
