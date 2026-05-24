"use client";

import { useEffect } from "react";
import Image from "next/image";

const stats = [
  { value: "12rb+", label: "Pelanggan Puas" },
  { value: "5th+", label: "Tahun Pengalaman" },
];

export default function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Desktop */}
      <div className="hidden lg:block absolute top-0 right-0 w-[52%] h-full z-0">
        <Image
          src="/cuci.jpg"
          alt="Mesin cuci laundry profesional"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral via-neutral/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral/30 via-transparent to-transparent" />
      </div>

      {/* Background Mobile */}
      <div className="lg:hidden absolute inset-0 z-0">
        <Image
          src="/cuci.jpg"
          alt="Mesin cuci laundry profesional"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
      </div>

      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary/60 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="flex items-center justify-center lg:justify-start">
          {/* LEFT CONTENT */}
          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out text-center lg:text-start max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary border border-accent/20 text-accent px-4 py-2 rounded-full text-xs font-semibold mb-6 mx-auto lg:mx-0">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Layanan Antar Jemput Tersedia
            </div>

            {/* Heading */}
            <h1 className="font-light text-[2rem] sm:text-[2.5rem] lg:text-[3.2rem] xl:text-[3.75rem] leading-[1.15] text-primary mb-6">
              Gak sempat nyuci?,{" "}
              <span className="text-accent font-semibold relative inline-block">
                Serahin aja
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 6 Q50 0 100 5 Q150 10 200 4"
                    stroke="#2D7A4F"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.4"
                  />
                </svg>
              </span>{" "}
              ke kami.
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Kami menyediakan layanan laundry lengkap — cuci, kering,
              setrika, dan lipat dengan harga terjangkau. Tersedia juga
              layanan antar jemput ke rumah Anda.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Pesan Sekarang
              </a>

              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-7 py-3.5 rounded-full font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-300"
              >
                Cara Kerja
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-10">
              {stats.map((stat) => (
                <div key={stat.value} className="text-center lg:text-start">
                  <div className="font-bold text-4xl lg:text-5xl text-primary leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}