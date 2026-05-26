"use client";

import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
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

const stats = [
  { num: "1×24 jam", label: "rata-rata waktu selesai" },
  { num: "500+",     label: "pelanggan puas bulan ini" },
  { num: "4.9 / 5",  label: "rating rata-rata dari pelanggan" },
];

const trustItems = [
  "Tanpa biaya tersembunyi",
  "Garansi kepuasan",
  "Proses aman & higienis",
];

const IconWA = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function CTA() {
  return (
    <section
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} py-16 lg:py-24 px-6 bg-white`}
      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
    >
      <div className="container mx-auto max-w-5xl">
        <div
          style={{
            background: "#1a1a1a",
            borderRadius: 20,
            padding: "3rem 3.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* ── Kiri: Teks ── */}
          <div
            style={{
              borderRight: "0.5px solid #2a2a2a",
              paddingRight: "3rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#6dbb85",
                margin: "0 0 16px",
              }}
            >
              Butuh bantuan?
            </p>

            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 900,
                color: "#f5f0e8",
                lineHeight: 1.1,
                margin: "0 0 20px",
              }}
            >
              Belum yakin pilih paket yang mana?
            </h2>

            <p
              style={{
                fontSize: 13,
                color: "#888",
                fontWeight: 300,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Ceritakan kebutuhan kamu — kami bantu pilihkan yang paling pas.
              Balas dalam hitungan menit.
            </p>

            {/* Trust items */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px 20px",
                marginTop: 24,
              }}
            >
              {trustItems.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    color: "#555",
                  }}
                >
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#6dbb85",
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ── Kanan: Statistik + Tombol ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  paddingBottom: i < stats.length - 1 ? 20 : 0,
                  marginBottom: i < stats.length - 1 ? 20 : 24,
                  borderBottom: i < stats.length - 1 ? "0.5px solid #2a2a2a" : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: 28,
                    fontWeight: 900,
                    color: "#f5f0e8",
                    lineHeight: 1,
                    margin: "0 0 4px",
                  }}
                >
                  {stat.num}
                </p>
                <p style={{ fontSize: 12, color: "#666", fontWeight: 300, margin: 0 }}>
                  {stat.label}
                </p>
              </div>
            ))}

            {/* Tombol */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Kios%20Laundry%2C%20saya%20ingin%20konsultasi%20paket%20laundry"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: "#6dbb85",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
              >
                <IconWA />
                Konsultasi via WhatsApp
              </a>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  color: "#f5f0e8",
                  padding: "12px 20px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 400,
                  textDecoration: "none",
                  border: "0.5px solid #333",
                  transition: "border-color 0.15s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#555")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#333")}
              >
                Lihat semua paket
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}