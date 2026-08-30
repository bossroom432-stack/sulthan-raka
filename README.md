# Voice Over Portfolio — Sulthan Raka Putra

Website portofolio voice over bertema sejarah (perang, mitologi, tokoh), dibangun dengan Next.js dan Tailwind CSS.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Struktur

- `content/portfolio.js` — satu-satunya tempat untuk mengedit teks, data, tautan, dan metadata situs.
- `components/VoiceOverPortfolio.js` — UI, animasi, dan logic interaksi.
- `tailwind.config.js` — warna tema, font, dan animasi Tailwind.
- `pages/index.js` — halaman utama (single page).
- `pages/_app.js` — wrapper global.
- `public/audio/` — taruh file audio voice over asli kamu di sini (mp3/wav).

## Menghubungkan audio asli

Saat ini player (kartu "Sedang Diputar" di hero & bar bawah) masih **simulasi visual**
(progress bar berjalan otomatis, belum memutar suara sungguhan). Untuk menghubungkan
audio asli:

1. Taruh file audio kamu di `public/audio/`, misalnya `public/audio/troy.mp3`.
2. Tambahkan properti `src: "/audio/troy.mp3"` ke item yang sesuai di
   `content/portfolio.js` (`worksSection.items`).
3. Tambahkan elemen `<audio ref={audioRef} src={activeTrack.src} />` tersembunyi, lalu
   panggil `audioRef.current.play()` / `.pause()` saat tombol play ditekan, dan pakai
   event `onTimeUpdate` untuk mengisi `progress` dengan waktu pemutaran sesungguhnya.

Beri tahu saya kalau kamu mau saya sambungkan langsung ke elemen `<audio>` asli.

## Deploy

Cara paling gampang: push ke GitHub lalu deploy lewat [Vercel](https://vercel.com) (gratis,
otomatis mendeteksi Next.js).
