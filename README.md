# Kios Laundry

Landing page untuk jasa laundry, dibangun dengan Next.js 14 dan Tailwind CSS. Ringan, responsif, dan mudah dikustomisasi.

## Fitur

- **Responsive** — tampil optimal di semua ukuran layar
- **Hero section** — bagian utama yang langsung menarik perhatian pengunjung
- **Paket layanan** — tampilkan daftar layanan beserta harga dengan jelas
- **WhatsApp button** — tombol CTA langsung terhubung ke nomor WhatsApp
- **Sticky navbar** — navigasi tetap terlihat saat scroll
- **Animasi** — transisi halus menggunakan Framer Motion

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Memulai

Clone repository dan install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur Folder

```
├── app/
│   └── layout.tsx        # Metadata dan layout utama
├── components/
│   └── sections/
│       └── Services.tsx  # Komponen daftar layanan & harga
└── public/
```

## Kustomisasi

### Nomor WhatsApp

Cari string berikut di seluruh project dan ganti dengan nomor kamu:

```
6281234567890
```

### Harga & Paket Layanan

Edit file `components/sections/Services.tsx` untuk mengubah nama layanan, harga, atau deskripsi.

### Metadata Website

Judul, deskripsi, dan metadata lainnya bisa diubah di `app/layout.tsx`.

## Deploy

Project ini siap di-deploy ke [Vercel](https://vercel.com/) tanpa konfigurasi tambahan. Cukup hubungkan repository dan deploy.

## Catatan

Project ini dibuat sebagai latihan dan bahan portfolio frontend. Bebas dimodifikasi sesuai kebutuhan.
