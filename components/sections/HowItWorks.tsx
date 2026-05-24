"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Drop Off / Jemput",
    description:
      "Antar laundry ke kios kami, atau kami jemput langsung ke lokasi Anda tanpa biaya tambahan.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="36" fill="#e0f2e9" />
        <path d="M25 55 L25 35 Q25 30 30 28 L40 24 L50 28 Q55 30 55 35 L55 55" stroke="#2D7A4F" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M33 55 L33 42 Q33 40 35 40 L45 40 Q47 40 47 42 L47 55" stroke="#2D7A4F" strokeWidth="2" fill="#f0fdf4"/>
        <rect x="33" y="40" width="14" height="15" rx="2" fill="#d1fae5" stroke="#2D7A4F" strokeWidth="1.5"/>
        <circle cx="40" cy="31" r="5" fill="#2D7A4F" opacity="0.3"/>
        <path d="M30 55 L50 55" stroke="#2D7A4F" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Person walking */}
        <circle cx="58" cy="30" r="4" fill="#2D7A4F"/>
        <path d="M58 34 L58 44 M54 38 L62 38 M58 44 L54 50 M58 44 L62 50" stroke="#2D7A4F" strokeWidth="2" strokeLinecap="round"/>
        {/* Bag */}
        <rect x="61" y="37" width="7" height="8" rx="2" fill="#4CAF50" opacity="0.7"/>
      </svg>
    ),
  },
  {
    step: "02",
    title: "Cuci & Kering",
    description:
      "Pakaian Anda dicuci dengan mesin modern dan deterjen berkualitas, lalu dikeringkan sempurna.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="36" fill="#e0f2e9" />
        <rect x="18" y="20" width="44" height="42" rx="8" fill="white" stroke="#2D7A4F" strokeWidth="2"/>
        <rect x="18" y="20" width="44" height="14" rx="8" fill="#2D7A4F"/>
        <rect x="18" y="27" width="44" height="7" fill="#2D7A4F"/>
        <circle cx="28" cy="27" r="4" fill="#4CAF50"/>
        <circle cx="52" cy="27" r="4" fill="#4CAF50"/>
        <circle cx="40" cy="46" r="14" fill="#f0fdf4" stroke="#2D7A4F" strokeWidth="1.5"/>
        <circle cx="40" cy="46" r="10" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 2"/>
        <path d="M33 43 Q40 38 47 43 Q47 50 40 52 Q33 50 33 43Z" fill="#bfdbfe" opacity="0.7"/>
        <circle cx="50" cy="36" r="2" fill="#2D7A4F" opacity="0.4"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Setrika & Lipat",
    description:
      "Setiap pakaian disetrika rapi dan dilipat dengan teliti agar siap dipakai langsung.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="36" fill="#e0f2e9" />
        {/* Iron */}
        <path d="M20 38 Q20 32 27 30 L55 30 Q62 30 62 38 L62 42 Q62 46 58 46 L24 46 Q20 46 20 42 Z" fill="white" stroke="#2D7A4F" strokeWidth="2"/>
        <path d="M20 42 Q20 46 24 46 L58 46 Q62 46 62 42" fill="#2D7A4F" opacity="0.15"/>
        <rect x="40" y="24" width="4" height="7" rx="2" fill="#2D7A4F"/>
        {/* Steam holes */}
        <circle cx="32" cy="39" r="1.5" fill="#2D7A4F" opacity="0.4"/>
        <circle cx="38" cy="39" r="1.5" fill="#2D7A4F" opacity="0.4"/>
        <circle cx="44" cy="39" r="1.5" fill="#2D7A4F" opacity="0.4"/>
        <circle cx="50" cy="39" r="1.5" fill="#2D7A4F" opacity="0.4"/>
        {/* Steam wisps */}
        <path d="M30 50 Q29 54 31 58" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <path d="M38 50 Q37 55 39 59" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <path d="M46 50 Q45 54 47 58" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        {/* Clothes below */}
        <rect x="22" y="58" width="36" height="6" rx="3" fill="#d1fae5" stroke="#2D7A4F" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    step: "04",
    title: "Antar ke Rumah",
    description:
      "Laundry bersih diantar langsung ke pintu rumah Anda tepat waktu, terbungkus rapi.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="36" fill="#e0f2e9" />
        {/* Scooter/delivery */}
        <path d="M15 48 L15 44 L20 38 L35 38 L40 32 L55 32 L60 38 L65 38 L65 48" stroke="#2D7A4F" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        <rect x="28" y="38" width="24" height="10" rx="3" fill="#2D7A4F" opacity="0.2"/>
        {/* Package on scooter */}
        <rect x="34" y="32" width="14" height="10" rx="2" fill="white" stroke="#2D7A4F" strokeWidth="1.5"/>
        <path d="M34 37 L48 37" stroke="#2D7A4F" strokeWidth="1" strokeDasharray="2 2"/>
        <path d="M41 32 L41 42" stroke="#2D7A4F" strokeWidth="1" strokeDasharray="2 2"/>
        {/* Wheels */}
        <circle cx="22" cy="50" r="7" fill="white" stroke="#2D7A4F" strokeWidth="2"/>
        <circle cx="22" cy="50" r="3" fill="#2D7A4F" opacity="0.3"/>
        <circle cx="58" cy="50" r="7" fill="white" stroke="#2D7A4F" strokeWidth="2"/>
        <circle cx="58" cy="50" r="3" fill="#2D7A4F" opacity="0.3"/>
        {/* Motion lines */}
        <path d="M12 44 L6 44 M12 47 L8 47 M12 50 L7 50" stroke="#2D7A4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        {/* Checkmark */}
        <circle cx="57" cy="26" r="8" fill="#2D7A4F"/>
        <path d="M53 26 L56 29 L61 23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".step-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-y-0");
                card.classList.remove("opacity-0", "translate-y-10");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="bg-secondary py-16 lg:py-24 px-6"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-grandstander text-xs md:text-sm text-accent font-semibold tracking-widest uppercase mb-3 block">
            Cara Kerja
          </span>
          <h2 className="font-outfit font-bold text-3xl md:text-4xl lg:text-5xl text-grey">
            Selesai dalam 4 Langkah
          </h2>
          <p className="mt-4 text-grey-light font-inter text-sm md:text-base max-w-lg mx-auto">
            Proses mudah dan transparan — dari penjemputan hingga pengantaran ke tangan Anda.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="step-card opacity-0 translate-y-10 transition-all duration-500 ease-out"
            >
              <div className="bg-white rounded-3xl p-6 lg:p-8 h-full flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                {/* Step number bg decoration */}
                <div className="absolute top-4 right-5 font-grandstander font-bold text-6xl text-secondary/80 select-none leading-none">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-28 h-28 mb-5 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Step badge */}
                <span className="font-grandstander text-xs text-accent font-semibold tracking-widest uppercase mb-2 relative z-10">
                  LANGKAH {step.step}
                </span>

                <h3 className="font-outfit font-semibold text-base lg:text-lg text-grey mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-grey-light leading-relaxed relative z-10">
                  {step.description}
                </p>

                {/* Connector arrow (hidden on last) */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
