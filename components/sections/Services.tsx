"use client";

import { useEffect, useRef } from "react";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const packages = [
  {
    name: "Satuan",
    tagline: "Cocok untuk satu orang",
    price: "Rp 7.000",
    unit: "per kilogram",
    featured: false,
    features: ["Cuci & kering", "Lipat rapi", "Min. 3 kg", "Selesai 1×24 jam"],
    notIncluded: ["Setrika", "Antar jemput"],
  },
  {
    name: "Reguler",
    tagline: "Paling banyak dipilih",
    price: "Rp 12.000",
    unit: "per kilogram",
    featured: true,
    features: [
      "Cuci, kering & setrika",
      "Lipat & packing rapi",
      "Min. 3 kg",
      "Selesai 1×24 jam",
      "Express tersedia",
    ],
    notIncluded: ["Antar jemput"],
  },
  {
    name: "Premium",
    tagline: "Layanan lengkap terbaik",
    price: "Rp 18.000",
    unit: "per kilogram",
    featured: false,
    features: [
      "Cuci, kering & setrika",
      "Lipat & packing premium",
      "Antar jemput gratis*",
      "Penanganan baju khusus",
      "Selesai 1×24 jam",
      "Prioritas express",
    ],
    notIncluded: [],
  },
];

const IconJas = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 4l-7 5v3l4-1v19h16V11l4 1V9L22 4l-2.5 4h-5L12 4z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
    <path d="M14.5 8L17 6l2.5 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 30V20h8v10" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
    <path d="M9 14h3M22 14h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const IconGaun = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17 3c-1.5 0-2.5 1-2.5 2s1 2 2.5 2 2.5-1 2.5-2-1-2-2.5-2z" stroke="currentColor" strokeWidth="1.1"/>
    <path d="M17 7v4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    <path d="M11 11l-4 6h4l2 14h8l2-14h4l-4-6" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
    <path d="M13 11h8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    <path d="M14 17c0 3 1 6 3 8 2-2 3-5 3-8" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
  </svg>
);

const IconSprei = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="4" y="16" width="26" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
    <path d="M4 20h26" stroke="currentColor" strokeWidth="0.9"/>
    <path d="M7 16v-5a2 2 0 012-2h16a2 2 0 012 2v5" stroke="currentColor" strokeWidth="1.1"/>
    <path d="M12 9c0-2 1-4 5-4s5 2 5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M9 23h4M9 27h7" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
  </svg>
);

const IconTas = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 12h22v16a2 2 0 01-2 2H8a2 2 0 01-2-2V12z" stroke="currentColor" strokeWidth="1.1"/>
    <path d="M6 12l3-6h16l3 6" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
    <path d="M13 6v2a4 4 0 008 0V6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M10 18h14M10 22h9" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
  </svg>
);

const addons = [
  { Icon: IconJas,   label: "Jas & Blazer",   price: "Rp 15.000/pcs" },
  { Icon: IconGaun,  label: "Gaun & Kebaya",   price: "Rp 25.000/pcs" },
  { Icon: IconSprei, label: "Sprei & Selimut", price: "Rp 20.000/pcs" },
  { Icon: IconTas,   label: "Tas & Sepatu",    price: "Rp 30.000/pcs" },
];

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
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = card.classList.contains("featured-card")
                  ? "translateY(-12px)"
                  : "translateY(0)";
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
      id="services"
      ref={sectionRef}
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} bg-white py-20 lg:py-28 px-6`}
      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
    >
      <div className="container mx-auto max-w-5xl">

        {/* ── Header ── */}
        <div className="mb-14">
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#888", marginBottom: 10 }}>
            Layanan &amp; Harga
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, color: "#1a1a1a", lineHeight: 1.1, margin: "0 0 12px" }}>
            Pilih paket<br />yang pas buat kamu.
          </h2>
          <p style={{ fontSize: 14, color: "#777", fontWeight: 300, margin: 0 }}>
            Semua paket pakai deterjen pilihan dan mesin laundry modern. Hasil bersih, dijamin.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`price-card ${pkg.featured ? "featured-card" : ""}`}
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                display: "flex",
                flexDirection: "column",
                padding: "2rem 1.5rem",
                gap: "1.25rem",
                border: "0.5px solid #e0e0e0",
                borderRadius:
                  pkg.featured ? "14px"
                  : i === 0 ? "16px 0 0 16px"
                  : "0 16px 16px 0",
                position: "relative",
                zIndex: pkg.featured ? 2 : 1,
                background: pkg.featured ? "#1a1a1a" : "#fff",
                boxShadow: pkg.featured ? "0 24px 60px rgba(0,0,0,0.22)" : "none",
                ...(pkg.featured ? { borderColor: "#1a1a1a" } : {}),
              }}
            >
              {pkg.featured && (
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", background: "#3d6b4f", color: "#d0f0d8", padding: "3px 10px", borderRadius: 20, display: "inline-block", width: "fit-content" }}>
                  Paling populer
                </span>
              )}

              <div>
                <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: 22, fontWeight: 700, color: pkg.featured ? "#f5f0e8" : "#1a1a1a", margin: "0 0 4px" }}>
                  {pkg.name}
                </p>
                <p style={{ fontSize: 12, fontWeight: 300, color: pkg.featured ? "#b8b09e" : "#999", margin: 0 }}>
                  {pkg.tagline}
                </p>
              </div>

              <div style={{ borderTop: `0.5px solid ${pkg.featured ? "#3a3a3a" : "#eee"}`, paddingTop: "1.1rem" }}>
                <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: 30, fontWeight: 900, color: pkg.featured ? "#f5f0e8" : "#1a1a1a", lineHeight: 1, margin: "0 0 4px" }}>
                  {pkg.price}
                </p>
                <p style={{ fontSize: 12, fontWeight: 300, color: pkg.featured ? "#8a8278" : "#aaa", margin: 0 }}>
                  {pkg.unit}
                </p>
              </div>

              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
                {pkg.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: pkg.featured ? "#d8d0c5" : "#333" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: pkg.featured ? "#6dbb85" : "#3d6b4f", flexShrink: 0, marginTop: 5, display: "inline-block" }} />
                    {f}
                  </li>
                ))}
                {pkg.notIncluded.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: pkg.featured ? "#4a4540" : "#ccc", textDecoration: "line-through" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: pkg.featured ? "#3a3a3a" : "#ddd", flexShrink: 0, marginTop: 5, display: "inline-block" }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "11px 0",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                  letterSpacing: "0.03em",
                  border: `0.5px solid ${pkg.featured ? "#f5f0e8" : "#ccc"}`,
                  background: pkg.featured ? "#f5f0e8" : "transparent",
                  color: pkg.featured ? "#1a1a1a" : "#333",
                  transition: "opacity 0.15s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Pilih paket ini
              </a>
            </div>
          ))}
        </div>

        {/* ── Addons ── */}
        <div style={{ marginTop: "2.5rem", borderTop: "0.5px solid #e0e0e0", paddingTop: "2rem" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa", marginBottom: "1.2rem" }}>
            Layanan tambahan
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 10 }}>
            {addons.map(({ Icon, label, price }) => (
              <div key={label} style={{ padding: "14px 12px", border: "0.5px solid #e0e0e0", borderRadius: 10, background: "#fff", color: "#1a1a1a" }}>
                <Icon />
                <p style={{ fontSize: 12, fontWeight: 500, color: "#1a1a1a", margin: "8px 0 3px" }}>{label}</p>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, color: "#3d6b4f", margin: 0 }}>{price}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#aaa", marginTop: "1.2rem", fontWeight: 300 }}>
            *Antar jemput gratis radius 3 km dari kios. Harga belum termasuk PPN.
          </p>
        </div>

      </div>
    </section>
  );
}