import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Kios Laundry",
  description:
    "Kios Laundry menyediakan layanan laundry lengkap: cuci, kering, setrika, dan lipat dengan harga terjangkau. Tersedia layanan antar jemput.",
  keywords: "laundry, cuci baju, laundry antar jemput, laundry murah, kios laundry",
  openGraph: {
    title: "Kios Laundry — Gak sempat nyuci? Serahin aja ke kami.",
    description:
      "Layanan laundry lengkap dengan harga terjangkau. Cuci, kering, setrika, lipat & antar jemput.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
