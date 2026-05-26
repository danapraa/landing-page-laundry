# Kios Laundry

Landing page untuk laundry, dibangun dengan Next.js dan Tailwind CSS. Ringan, responsif, dan mudah dikustomisasi.

## Fitur

- **Responsive** 
- **Hero section** 
- **Paket layanan** 
- **WhatsApp button** 
- **Sticky navbar** 
- **Animasi** 

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

