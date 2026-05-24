"use client";

import { useState, useEffect, useRef } from "react";

const packages = [
  {
    name: "SATUAN",
    tagline: "Cocok untuk satu orang",
    price: "Rp 7.000",
    unit: "/ kg",
    color: "from-emerald-50 to-green-50",
    accentColor: "bg-accent",
    featured: false,
    features: [
      "Cuci & Kering",
      "Lipat Rapi",
      "Berat minimal 3 kg",
      "Selesai 1×24 jam",
    ],
    notIncluded: ["Setrika", "Antar Jemput"],
  },
  {
    name: "REGULER",
    tagline: "Paling banyak dipilih",
    price: "Rp 12.000",
    unit: "/ kg",
    color: "from-green-600 to-emerald-700",
    accentColor: "bg-white",
    featured: true,
    features: [
      "Cuci, Kering & Setrika",
      "Lipat & Packing Rapi",
      "Berat minimal 3 kg",
      "Selesai 1×24 jam",
      "Express tersedia",
    ],
    notIncluded: ["Antar Jemput"],
  },
  {
    name: "PREMIUM",
    tagline: "Layanan lengkap terbaik",
    price: "Rp 18.000",
    unit: "/ kg",
    color: "from-emerald-50 to-green-50",
    accentColor: "bg-accent",
    featured: false,
    features: [
      "Cuci, Kering & Setrika",
      "Lipat & Packing Premium",
      "Antar Jemput Gratis*",
      "Penanganan baju khusus",
      "Selesai 1×24 jam",
      "Prioritas Express",
    ],
    notIncluded: [],
  },
];

const CheckIcon = ({ dark = false }: { dark?: boolean }) => (
  <svg
    className={`w-4 h-4 flex-shrink-0 ${dark ? "text-white" : "text-accent"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const XIcon = ({ dark = false }: { dark?: boolean }) => (
  <svg
    className={`w-4 h-4 flex-shrink-0 ${dark ? "text-white/40" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".price-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-y-0");
                card.classList.remove("opacity-0", "translate-y-10");
              }, i * 200);
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
      id="services"
      ref={sectionRef}
      className="bg-neutral py-16 lg:py-24 px-6"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-grandstander text-xs md:text-sm text-accent font-semibold tracking-widest uppercase mb-3 block">
            Layanan & Harga
          </span>
          <h2 className="font-outfit font-bold text-3xl md:text-4xl lg:text-5xl text-grey">
            Pilih Paket yang Sesuai
          </h2>
          <p className="mt-4 text-grey-light font-inter text-sm md:text-base max-w-lg mx-auto">
            Semua paket menggunakan deterjen berkualitas dan mesin laundry modern.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`price-card opacity-0 translate-y-10 transition-all duration-500 ease-out ${
                pkg.featured ? "md:-mt-4 md:mb-4" : ""
              }`}
            >
              <div
                className={`h-full rounded-3xl flex flex-col overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 ${
                  pkg.featured
                    ? "bg-gradient-to-br " + pkg.color + " ring-2 ring-accent"
                    : "bg-white border border-gray-100"
                }`}
              >
                {pkg.featured && (
                  <div className="bg-accent text-white text-center py-2 px-4">
                    <span className="font-outfit font-semibold text-xs tracking-widest">
                      ⭐ PALING POPULER
                    </span>
                  </div>
                )}

                <div className="p-7 lg:p-8 flex flex-col flex-1">
                  {/* Package name */}
                  <h3
                    className={`font-grandstander font-semibold text-xl mb-1 ${
                      pkg.featured ? "text-white" : "text-accent"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`font-inter text-sm mb-6 ${
                      pkg.featured ? "text-white/80" : "text-grey-light"
                    }`}
                  >
                    {pkg.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-end gap-1">
                      <span
                        className={`font-rasa font-bold text-4xl ${
                          pkg.featured ? "text-white" : "text-grey"
                        }`}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <span
                      className={`font-inter text-sm ${
                        pkg.featured ? "text-white/70" : "text-grey-light"
                      }`}
                    >
                      {pkg.unit}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckIcon dark={pkg.featured} />
                        <span
                          className={`font-inter text-sm ${
                            pkg.featured ? "text-white" : "text-grey"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                    {pkg.notIncluded.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <XIcon dark={pkg.featured} />
                        <span
                          className={`font-inter text-sm line-through ${
                            pkg.featured ? "text-white/40" : "text-gray-300"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-2xl font-outfit font-semibold text-sm text-center transition-all duration-200 hover:-translate-y-0.5 ${
                      pkg.featured
                        ? "bg-white text-accent hover:shadow-xl"
                        : "bg-accent text-white hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
                    }`}
                  >
                    Pilih Paket Ini
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-grey-light font-inter mt-8">
          *Antar jemput gratis untuk radius 3 km dari kios. Harga belum termasuk PPN.
        </p>

        {/* Additional services */}
        <div className="mt-16 bg-secondary rounded-3xl p-8 lg:p-10">
          <h3 className="font-outfit font-bold text-xl text-grey text-center mb-8">
            Layanan Tambahan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "👔", label: "Jas & Blazer", price: "Rp 15.000/pcs" },
              { icon: "👗", label: "Gaun & Kebaya", price: "Rp 25.000/pcs" },
              { icon: "🛏️", label: "Sprei & Selimut", price: "Rp 20.000/pcs" },
              { icon: "🎒", label: "Tas & Sepatu", price: "Rp 30.000/pcs" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-4 text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-outfit font-semibold text-sm text-grey mb-1">
                  {item.label}
                </div>
                <div className="font-inter text-xs text-accent font-semibold">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
