"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "12rb+", label: "Pelanggan Puas" },
  { value: "5th+", label: "Tahun Pengalaman" },
];

const bubbles = [
  { size: "w-14 h-14", top: "20%", left: "10%", delay: "0s", dir: "left" },
  { size: "w-12 h-12", top: "30%", right: "8%", delay: "1.5s", dir: "right" },
  { size: "w-10 h-10", top: "55%", left: "8%", delay: "2s", dir: "left" },
  { size: "w-8 h-8", top: "60%", right: "10%", delay: "0.8s", dir: "right" },
  { size: "w-16 h-16", top: "70%", left: "18%", delay: "3.2s", dir: "left" },
  { size: "w-6 h-6", top: "40%", right: "18%", delay: "2.5s", dir: "right" },
];

export default function Hero() {
  const machineRef = useRef<HTMLDivElement>(null);

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out text-center lg:text-start">
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
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>

                Pesan Sekarang
              </a>

              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();

                  document
                    .querySelector("#how-it-works")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-7 py-3.5 rounded-full font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-300"
              >
                Cara Kerja

                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-10">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="text-center lg:text-start"
                >
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

          {/* RIGHT CONTENT */}
          <div
            ref={machineRef}
            className="animate-in opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out relative flex justify-center items-center"
          >
            {/* Background Circle */}
            <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-secondary rounded-full opacity-60" />

            {/* Floating Bubbles */}
            {bubbles.map((bubble, i) => (
              <div
                key={i}
                className={`absolute ${bubble.size} rounded-full border-2 border-accent/30 bg-accent/10 backdrop-blur-sm z-10`}
                style={{
                  top: bubble.top,
                  left: "left" in bubble ? bubble.left : undefined,
                  right: "right" in bubble ? bubble.right : undefined,
                  animation: `${
                    bubble.dir === "left"
                      ? "bubblePeekLeft"
                      : "bubblePeekRight"
                  } ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: bubble.delay,
                }}
              />
            ))}

            {/* Washing Machine */}
            <div className="relative z-20 animate-float">
              <WashingMachineSVG />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WashingMachineSVG() {
  return (
    <svg
      viewBox="0 0 300 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 drop-shadow-2xl"
    >
      <rect
        x="20"
        y="40"
        width="260"
        height="290"
        rx="20"
        fill="#f0fdf4"
        stroke="#2D7A4F"
        strokeWidth="2.5"
      />

      <rect
        x="20"
        y="40"
        width="260"
        height="70"
        rx="20"
        fill="#2D7A4F"
      />

      <circle cx="70" cy="75" r="14" fill="#1a5c38" />
      <circle cx="70" cy="75" r="8" fill="#4CAF50" />

      <circle cx="230" cy="75" r="14" fill="#1a5c38" />
      <circle cx="230" cy="75" r="8" fill="#4CAF50" />

      <circle cx="150" cy="210" r="95" fill="#e0f2e9" />

      <circle
        cx="150"
        cy="210"
        r="88"
        fill="white"
        stroke="#2D7A4F"
        strokeWidth="2"
      />

      <circle cx="150" cy="210" r="75" fill="#f0fdf4" />

      <ellipse
        cx="140"
        cy="205"
        rx="30"
        ry="12"
        fill="#bfdbfe"
        opacity="0.6"
      />

      <ellipse
        cx="162"
        cy="218"
        rx="20"
        ry="8"
        fill="#93c5fd"
        opacity="0.5"
      />
    </svg>
  );
}