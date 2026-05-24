# Kios Laundry — Landing Page (Next.js)

Landing page profesional untuk **Kios Laundry**, dibuat dengan **Next.js 14**, **TypeScript**, dan **Tailwind CSS**.

---

## 🗂️ Struktur Folder

```
kios-laundry/
├── app/
│   ├── globals.css          # Global styles + Google Fonts + animasi
│   ├── layout.tsx           # Root layout + metadata SEO
│   └── page.tsx             # Halaman utama (merangkai semua section)
│
├── components/
│   └── sections/
│       ├── Navbar.tsx       # Navigasi sticky + mobile menu + modal lokasi
│       ├── Hero.tsx         # Hero section + ilustrasi mesin cuci SVG + stats
│       ├── HowItWorks.tsx   # 4 langkah proses laundry (animated cards)
│       ├── Services.tsx     # Paket harga (Satuan, Reguler, Premium) + layanan tambahan
│       ├── CTA.tsx          # Call to Action section
│       └── Footer.tsx       # Footer dengan kontak & social media
│
├── public/
│   └── images/              # Taruh gambar/logo di sini (opsional)
│
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── .eslintrc.json
└── package.json
```

---

## 🚀 Langkah-Langkah Setup (dari Nol)

### Prasyarat
Pastikan sudah terinstall:
- **Node.js** versi 18 atau lebih baru → [Download](https://nodejs.org)
- **npm** (sudah termasuk bersama Node.js)

Cek versi dengan:
```bash
node -v   # Harus: v18.x.x atau lebih
npm -v    # Harus: 9.x.x atau lebih
```

---

### Cara 1: Gunakan folder ini langsung

1. **Masuk ke folder project:**
   ```bash
   cd kios-laundry
   ```

2. **Install semua dependencies:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Buka browser dan kunjungi:**
   ```
   http://localhost:3000
   ```

---

### Cara 2: Buat project Next.js dari awal (opsional)

Jika ingin membuat project baru dari awal:

```bash
# Buat project Next.js baru
npx create-next-app@14.2.5 kios-laundry --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*"

# Masuk ke folder
cd kios-laundry

# Install dependency tambahan
npm install framer-motion lucide-react
```

Kemudian salin semua file dari folder `app/` dan `components/` ke project baru.

---

## 🛠️ Scripts yang Tersedia

| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Jalankan development server (http://localhost:3000) |
| `npm run build` | Build untuk production |
| `npm run start` | Jalankan production server (perlu build dulu) |
| `npm run lint` | Cek error kode dengan ESLint |

---

## ✏️ Cara Kustomisasi Konten

### 1. Ubah Nomor WhatsApp
Cari dan ganti semua `6281234567890` dengan nomor WA bisnis Anda:
- `components/sections/Navbar.tsx`
- `components/sections/Hero.tsx`
- `components/sections/CTA.tsx`
- `components/sections/Footer.tsx`

### 2. Ubah Harga & Paket
Edit file `components/sections/Services.tsx`, cari array `packages` dan ubah sesuai harga Anda.

### 3. Ubah Informasi Kontak
Edit file `components/sections/Footer.tsx`, cari bagian kontak dan ubah nomor telepon, email, dan jam operasional.

### 4. Ubah Lokasi di Peta
Edit file `components/sections/Navbar.tsx`, ganti URL iframe Google Maps dengan URL lokasi kios Anda.
> Cara dapat URL: Buka Google Maps → cari lokasi Anda → klik Share → Embed a map → salin URL `src`

### 5. Ubah Nama & SEO
Edit file `app/layout.tsx`, ubah `metadata` (title, description, keywords).

### 6. Ubah Statistik Hero
Edit file `components/sections/Hero.tsx`, cari array `stats` dan ubah angkanya.

---

## 🎨 Mengubah Warna Tema

Edit file `tailwind.config.js`, di bagian `colors`:

```js
colors: {
  primary: "#1a1a2e",        // Warna teks gelap & footer
  secondary: "#E8F4E8",      // Background hijau muda
  accent: "#2D7A4F",         // Hijau utama (tombol, icon)
  "accent-light": "#4CAF50", // Hijau lebih terang (hover)
  neutral: "#FAFAF8",        // Background utama
  grey: "#3d3d3d",           // Teks utama
  "grey-light": "#6b7280",   // Teks sekunder
}
```

---

## 📦 Dependencies

| Package | Versi | Fungsi |
|---------|-------|--------|
| next | 14.2.5 | Framework React |
| react | ^18 | Library UI |
| tailwindcss | ^3.4.1 | Utility CSS |
| lucide-react | ^0.383.0 | Icon library |
| typescript | ^5 | Type safety |

---

## 🌐 Deploy ke Internet (Vercel - Gratis)

1. Push kode ke GitHub
2. Buka [vercel.com](https://vercel.com) dan login
3. Klik **"New Project"** → Import dari GitHub
4. Pilih repo `kios-laundry`
5. Klik **Deploy** — selesai! Dapat domain gratis `.vercel.app`

---

## ❓ Troubleshooting

**Error: `Module not found`**
```bash
npm install
```

**Port 3000 sudah dipakai**
```bash
npm run dev -- -p 3001
```

**TypeScript error di VSCode**
Pastikan extension **ESLint** dan **Tailwind CSS IntelliSense** sudah terpasang.

**Gambar tidak muncul**
Taruh gambar di folder `public/images/` dan akses dengan path `/images/nama-file.png`
