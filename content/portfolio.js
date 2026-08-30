// Semua teks, data, tautan, dan metadata situs dikelola dari satu file ini.
export const portfolioContent = {
  seo: {
    title: "Sulthan Raka Putra — Voice Over Portfolio",
    description: "Portofolio voice over Sulthan Raka Putra — narasi bertema sejarah perang, mitologi, dan tokoh sejarah.",
  },
  identity: {
    name: "Sulthan Raka Putra",
    initials: "ΣΡ",
    photoInitials: "SRP",
    role: "Voice Over Artist",
    photo: "/images/profile-placeholder.svg",
    alt: "Foto Sulthan Raka Putra",
  },
  navigation: [
    { label: "Beranda", href: "#beranda" }, { label: "Tentang", href: "#tentang" },
    { label: "Pengalaman", href: "#pengalaman" }, { label: "Karya", href: "#karya" },
    { label: "Keahlian", href: "#keahlian" }, { label: "Kontak", href: "#kontak" },
  ],
  common: {
    contactCta: "Hubungi Saya",
    listenCta: "Dengar Karya",
    downloadCv: "Unduh CV",
    cvUrl: "/files/CV_Sulthan_Raka_Putra.pdf",
    active: "Aktif",
    play: "Putar",
    pause: "Jeda",
  },
  hero: {
    eyebrow: "Portofolio Voice Over Bertema Sejarah", greeting: "Halo, saya Sulthan", headline: "Suara di Balik Sejarah.",
    role: "Voice Over Artist — Perang, Mitologi & Tokoh Sejarah",
    description: "Saya menghadirkan narasi yang khidmat dan intens untuk kisah-kisah besar dari masa lalu — cocok untuk dokumenter, konten edukasi, podcast, dan produksi audio naratif lainnya. cocok untuk dokumenter, konten edukasi, podcast, dan produksi audio naratif lainnya.",
    availability: "Tersedia untuk Proyek Baru",
  },
  about: {
    eyebrow: "Tentang", title: "Siapa Saya?", experienceValue: "2+", experienceLabel: "Tahun Pengalaman",
    paragraphs: [
      "Saya Sulthan Raka Putra, voice over artist yang berfokus pada narasi bertema sejarah — mulai dari peperangan yang mengubah peradaban, mitos para dewa Olympus, hingga perjalanan tokoh-tokoh yang membentuk dunia. Saya percaya suara yang tepat bisa membuat sejarah terasa hidup kembali di telinga pendengar.",
      "Pendekatan saya menggabungkan riset ringan terhadap naskah dengan kepekaan emosi, agar setiap narasi terasa akurat sekaligus menggugah. Saya terbuka untuk kolaborasi dengan kreator dokumenter, kanal edukasi, maupun studio produksi audio.",
    ],
    highlights: [
      { title: "Narasi Dokumenter", description: "Suara berwibawa dan stabil untuk konten dokumenter dan edukasi jangka panjang." },
      { title: "Karakter & Dubbing", description: "Rentang vokal untuk memerankan tokoh sejarah dan makhluk mitologi." },
    ],
  },
  experienceSection: {
    eyebrow: "Pengalaman", title: "Perjalanan Saya",
    items: [
      { role: "Voice Over Artist — Freelance", current: true, org: "Klien Independen · Indonesia", date: "Jan 2024 – Sekarang", bullets: ["Mengisi suara untuk lebih dari 25 narasi bertema sejarah, perang, dan mitologi.", "Bekerja sama dengan kreator YouTube dan podcast edukasi sejarah.", "Menangani proses rekaman, editing dasar, hingga pengiriman file final."], tags: ["Narasi", "Dokumenter", "Audacity"] },
      { role: "Narator Konten Edukasi", current: false, org: "Kolaborasi Kreator Sejarah · Remote", date: "Jun 2023 – Des 2023", bullets: ["Mengisi suara untuk seri video edukasi seputar peradaban kuno.", "Menyesuaikan gaya vokal dengan mood tiap segmen: epik, reflektif, tegang.", "Terlibat dalam riset ringan naskah agar pelafalan nama tokoh & tempat akurat."], tags: ["Edukasi", "Riset Naskah"] },
      { role: "Voice Talent — Proyek Komunitas", current: false, org: "Komunitas Podcast Sejarah · Indonesia", date: "2022 – 2023", bullets: ["Memulai perjalanan voice over lewat proyek podcast komunitas bertema sejarah dunia.", "Membangun home studio sederhana untuk rekaman kualitas broadcast."], tags: ["Podcast", "Home Studio"] },
    ],
  },
  worksSection: {
    eyebrow: "Karya Unggulan", title: "Dengarkan Narasi Saya", description: "Klik tombol putar untuk mendengarkan sampel — pemutar akan muncul di bagian bawah layar.",
    items: [
      { id: 1, title: "Kejatuhan Troy", cat: "Mitologi Kuno", status: "Rilis", duration: "3:42", desc: "Narasi epik kuda kayu & kehancuran kota Troy, dibawakan untuk serial dokumenter sejarah.", tags: ["Dokumenter", "Mitologi", "Naratif"] },
      { id: 2, title: "300 di Thermopylae", cat: "Perang & Pertempuran", status: "Rilis", duration: "4:15", desc: "Kisah heroik pasukan Sparta menahan invasi Persia, gaya vokal intens & gelap.", tags: ["Perang", "Dokumenter"] },
      { id: 3, title: "Alexander Sang Penakluk", cat: "Tokoh Sejarah", status: "Rilis", duration: "5:08", desc: "Narasi biografis perjalanan Alexander Agung menaklukkan dunia kuno.", tags: ["Biografi", "Tokoh"] },
      { id: 4, title: "Murka Achilles", cat: "Mitologi Kuno", status: "Rilis", duration: "3:20", desc: "Kemarahan sang pahlawan yang mengubah jalannya Perang Troya.", tags: ["Mitologi", "Karakter"] },
      { id: 5, title: "Perang Peloponnesia", cat: "Perang & Pertempuran", status: "Rilis", duration: "6:01", desc: "Konflik panjang antara Athena dan Sparta, narasi untuk konten edukasi.", tags: ["Perang", "Edukasi"] },
      { id: 6, title: "Socrates & Cawan Racun", cat: "Tokoh Sejarah", status: "Draf", duration: "4:47", desc: "Detik-detik terakhir sang filsuf sebelum wafat — sedang dalam produksi.", tags: ["Biografi", "Filsafat"] },
    ],
  },
  skillsSection: {
    eyebrow: "Keahlian", title: "Kemampuan & Peralatan",
    pills: ["Narasi Dokumenter", "Karakter Epik", "Bahasa Indonesia", "English VO", "Adobe Audition", "Audacity", "Home Studio Recording", "Script Timing"],
    cards: [
      { icon: "Mic", title: "Narasi Dokumenter", desc: "Suara berwibawa dan jelas untuk dokumenter sejarah, podcast, dan konten edukasi panjang." },
      { icon: "Headphones", title: "Karakter & Dubbing", desc: "Rentang vokal untuk memerankan tokoh sejarah dan makhluk mitologi dengan emosi yang kuat." },
      { icon: "BookOpen", title: "Kepekaan Naskah", desc: "Memahami konteks sejarah agar intonasi, jeda, dan penekanan sesuai dengan bobot cerita." },
    ],
  },
  testimonialsSection: {
    eyebrow: "Kata Mereka", title: "Ulasan Klien", description: "Contoh ulasan — ganti dengan testimoni asli dari klienmu.",
    items: [
      { rating: 5.0, platform: "Klien Podcast", title: "Narator Serial Perang Kuno", date: "Okt 2024 – Jan 2025", quote: "Sulthan menangkap mood tiap adegan dengan sangat baik — suaranya benar-benar menghidupkan narasi perang kami.", tags: ["Tepat Waktu", "Kualitas Suara"] },
      { rating: 4.8, platform: "Kreator YouTube", title: "Narasi Seri Mitologi Yunani", date: "Mei 2024", quote: "Komunikatif dan cepat revisi. Hasil rekamannya bersih dan siap pakai langsung.", tags: ["Responsif"] },
      { rating: 5.0, platform: "Komunitas Edukasi", title: "Voice Over Tokoh Sejarah", date: "2023", quote: "Pelafalan nama-nama tokoh sejarah sangat diperhatikan, hasil akhirnya terasa profesional.", tags: ["Detail", "Profesional"] },
    ],
  },
  contactSection: {
    eyebrow: "Kontak", title: "Mari Berkolaborasi", description: "Terbuka untuk proyek dokumenter, konten edukasi, podcast sejarah, maupun peluang kerja sebagai voice over artist.",
    details: [{ icon: "Mail", label: "Email", value: "sulthan.rakaputra@email.com" }, { icon: "Phone", label: "Telepon / WhatsApp", value: "+62 8XX-XXXX-XXXX" }, { icon: "MapPin", label: "Lokasi", value: "Indonesia" }],
    socials: [{ icon: "Linkedin", label: "LinkedIn", href: "#" }, { icon: "Instagram", label: "Instagram", href: "#" }, { icon: "Youtube", label: "YouTube", href: "#" }],
    form: { name: "Nama Kamu", email: "Email Kamu", subject: "Subjek", message: "Pesan Kamu", submit: "Kirim Pesan" },
  },
  footer: { copyright: "Sulthan Raka Putra — Voice Over Portfolio" },
};
