Muhammad Abdun Nasir Portfolio — Style Reference

Cahaya neon cyan dan amethyst yang membiaskan dari balik panel obsidian beku (frosted glass), menciptakan ruang digital yang mendalam dan futuristik.

Theme: dark

Pendekatan visual berpusat pada Dark Glassmorphism, memanfaatkan latar belakang gelap absolut (#09090B) yang diterangi oleh mesh gradients abstrak (cyan dan ungu) yang diletakkan di bawah permukaan backdrop-filter: blur(). Tipografi menggunakan sans-serif geometris dengan tracking ketat pada display headings (-0.02em) untuk kesan teknis, kontras dengan leading 1.6 pada teks paragraf untuk keterbacaan tinggi. Bahasa bentuk (shape language) didominasi oleh sudut melengkung halus (16px hingga 24px radius) untuk melembutkan antarmuka kaca, sementara bayangan direkayasa bukan sebagai drop-shadow tradisional, melainkan inner-light borders (rgba(255,255,255,0.1)) untuk mensimulasikan ketebalan kaca.

Tokens — Colors

Name

Value

Token

Role

Space Obsidian

#09090B

--color-bg-base

Latar belakang kanvas utama paling bawah

Neon Cyan

#06B6D4

--color-accent-cyan

Aksen warna, teks highlight, efek glow primer

Deep Amethyst

#8B5CF6

--color-accent-purple

Gradien sekunder, mesh background blobs

Frost White

#FAFAFA

--color-text-primary

Teks utama, headings, ikon solid

Slate Ash

#A1A1AA

--color-text-secondary

Sub-teks, deskripsi, placeholder

Glass Surface

rgba(25, 25, 30, 0.4)

--color-glass-fill

Latar belakang komponen kartu/panel dengan blur

Glass Border

rgba(255, 255, 255, 0.08)

--color-glass-border

Stroke 1px untuk mendefinisikan tepi elemen kaca

Glass Highlight

rgba(255, 255, 255, 0.15)

--color-glass-hover

Latar belakang kaca saat hover state

Success Emerald

#10B981

--color-success

Indikator status online, notifikasi berhasil

Tokens — Typography

Plus Jakarta Sans — Presisi teknis dengan sentuhan humanis

Substitute: Inter, Manrope

Weights: 400 (Regular), 500 (Medium), 700 (Bold)

Sizes: 12px, 14px, 16px, 20px, 24px, 32px, 48px, 64px

Line height: 1.1 untuk Display/Headings, 1.6 untuk Body

Role: Font ini digunakan secara eksklusif. Varian Bold dengan letter-spacing negatif digunakan untuk menonjolkan headline di dalam kartu kaca, sementara Regular memastikan teks detail proyek tetap tajam di atas latar belakang transparan.

Type Scale

Role

Size

Line Height

Letter Spacing

Token

display

64px

1.1

-0.04em

--text-display

h1

48px

1.1

-0.02em

--text-h1

h2

32px

1.2

-0.01em

--text-h2

body-lg

20px

1.5

0em

--text-body-lg

body

16px

1.6

0em

--text-body

caption

14px

1.5

0.01em

--text-caption

Tokens — Spacing & Shapes

Base unit: 8px
Density: spacious

Spacing Scale

Name

Value

Token

3xs

4px

--space-3xs

2xs

8px

--space-2xs

xs

16px

--space-xs

sm

24px

--space-sm

md

32px

--space-md

lg

48px

--space-lg

xl

64px

--space-xl

2xl

96px

--space-2xl

Border Radius

Role

Value

Token

Badge/Tag

999px

--radius-full

Buttons

12px

--radius-md

Glass Cards

24px

--radius-xl

Modals/Sections

32px

--radius-2xl

Layout

Page max-width: 1280px (dengan padding fluid di sisi)

Section gap: 120px

Element gap: 16px - 24px

Components

Navigasi Glass (Sticky Header)

Role: Menu utama yang melayang saat di-scroll
Background rgba(9, 9, 11, 0.5), text #FAFAFA, border 1px solid rgba(255, 255, 255, 0.08) di bagian bawah saja, border-radius 0px, padding 16px 32px. Font 14px weight 500. Memiliki backdrop-filter: blur(12px).

Reactbits Lanyard Badge (Hero Component)

Role: Elemen 3D interaktif yang menunjukkan identitas/ID Card virtual.
Background transparan (mengandalkan canvas 3D webGL), menyajikan kartu ID melayang dengan fisika tali. Tali merespons kursor mouse. Kartu ID internal menggunakan warna latar #18181B dengan aksen #06B6D4.

Glass Skill Card

Role: Menampilkan keahlian teknis (Laravel, React, dll)
Background rgba(25, 25, 30, 0.4), text #FAFAFA, border 1px solid rgba(255, 255, 255, 0.08), border-radius 24px, padding 32px 24px. Font 20px weight 700 untuk judul. Hover state: Latar berubah menjadi rgba(255, 255, 255, 0.05), border menjadi rgba(6, 182, 212, 0.4) dengan efek transition: all 0.3s ease. Membutuhkan backdrop-filter: blur(16px).

Primary Glow Button

Role: Call to Action (CTA) utama
Background #FAFAFA, text #09090B, border none, border-radius 12px, padding 12px 24px. Font 16px weight 600. Hover state: Mendapatkan box-shadow: 0 0 20px rgba(255,255,255,0.3).

Do's and Don'ts

Do

Gunakan backdrop-filter: blur(12px) atau lebih pada semua elemen permukaan untuk memaksimalkan efek glass.

Tempatkan mesh gradients (lingkaran warna blur yang besar) di belakang komponen glass untuk memberikan warna pada kaca transparan.

Pastikan teks di dalam glass card menggunakan #FAFAFA untuk menjaga rasio kontras 4.5:1.

Don't

Jangan menggunakan drop-shadow berwarna hitam pekat pada kartu kaca; ini menghancurkan ilusi kaca. Gunakan cahaya dalam (inner borders transparan).

Jangan gunakan opacity latar belakang kaca di atas 60% (0.6) karena akan terlihat seperti warna solid abu-abu, bukan kaca.

Jangan gunakan lebih dari 2 warna aksen dominan (tetap pada Cyan dan Purple).

Elevation & Surfaces

Sistem ini membuang drop-shadow z-index tradisional. Sebagai gantinya, elevasi dikomunikasikan melalui tingkat keburaman latar belakang (semakin blur/terang, semakin tinggi elevasinya) dan batas dalam (1px putih transparan). Kedalaman diciptakan secara eksklusif dengan meletakkan bola-bola cahaya (div dengan filter: blur(100px)) di latar belakang, yang kemudian dibiaskan oleh komponen glass card yang berada di atasnya.

Imagery & Layout

Layout menggunakan sistem grid bento-box untuk bagian Projects dan Skills. Ikon menggunakan garis (stroke) tipis 1.5px (seperti Lucide Icons) untuk menjaga konsistensi dengan estetika teknis yang tajam. Foto profil atau aset proyek di dalam glass card harus memiliki sedikit border-radius (8px-12px) dan overlay gradien linear halus dari bawah untuk mengamankan keterbacaan teks di atas gambar.

Agent Prompt Guide

Gunakan deretan prompt berikut secara berurutan pada AI Code Generator (seperti v0, Cursor, atau Claude) untuk membangun aplikasi Anda. Pastikan memberikan file DESIGN.md ini terlebih dahulu ke AI sebagai referensi sebelum menjalankan prompt di bawah.

Quick Color Reference

Latar Belakang: #09090B

Aksen Cyan: #06B6D4

Aksen Purple: #8B5CF6

Glass Border: rgba(255, 255, 255, 0.08)

Prompt 1: Arsitektur Utama & Latar Belakang

"Buatkan saya arsitektur utama halaman portofolio React/Next.js Tailwind menggunakan panduan desain di atas. Saya ingin layout full-width dengan background berwarna #09090B. Di layer paling belakang, buatkan komponen AuroraBackground (atau 2-3 elemen div absolut berukuran besar dengan warna #06B6D4 dan #8B5CF6 yang memiliki efek filter: blur(150px) dan animasi pulse/float lambat). Di atas layer ini, buatkan komponen Navbar glassmorphism (sticky, backdrop-blur-md, border bawah transparan putih) yang berisi logo teks 'Nasir' dan menu navigasi. Pastikan struktur dasar web siap menampung section-section selanjutnya."

Prompt 2: Hero Section dengan Reactbits Lanyard

"Buatkan Hero Section. Di sisi kiri, gunakan tipografi yang sangat besar (text-5xl md:text-7xl) dengan teks 'Backend & Frontend Architect' menggunakan efek teks dari Reactbits (seperti TextPressure atau SplitText agar muncul secara dramatis). Di bawahnya, beri teks paragraf penjelasan keahlian saya di Laravel PHP, React, dan Tailwind. Di bawah teks, buatkan tombol CTA bergaya 'Primary Glow Button' (lihat DESIGN.md). Di sisi kanan layout (atau di tengah untuk mobile), implementasikan Reactbits Lanyard component (sebuah ID card 3D dengan fisika tali webGL interaktif) yang dapat digeser-geser kursor. Desain ID Card di dalam Lanyard harus bertuliskan 'Muhammad Abdun Nasir - Freelance Developer'."

Prompt 3: Bento Grid Glassmorphism untuk Keahlian

"Buatkan section 'My Expertise'. Desain layout ini menggunakan gaya Bento Grid dengan efek Glassmorphism (kartu berlatar rgba(25, 25, 30, 0.4), backdrop-blur-xl, dan border 1px rgba(255,255,255,0.08)). Kartu pertama (lebar) untuk 'Backend Engineering' memuat ikon Laravel, PHP, MySQL. Kartu kedua untuk 'Frontend' dengan ikon React, Tailwind, Next.js. Implementasikan efek hover di mana garis pinggir (border) kartu menyala menjadi warna cyan (rgba(6,182,212,0.5)) secara halus saat di-hover. Di bagian paling bawah section ini, tambahkan animasi elemen bergerak dari Reactbits seperti InfiniteScroll atau Marquee yang menampilkan tumpukan logo-logo teknologi yang saya kuasai."

Prompt 4: Portofolio Proyek & Contact Glass Form

"Buatkan dua section terakhir: 'Selected Works' dan 'Let's Connect'. Untuk 'Works', buatkan 3 glass card berjejer, masing-masing berisi gambar/mockup proyek (buat div placeholder estetik), judul proyek, dan badge teknologi yang digunakan (radius 999px). Untuk section 'Let's Connect', letakkan di tengah dengan layout card kaca tunggal berukuran besar. Di dalamnya terdapat form kontak yang elegan (input text dan textarea harus transparan dengan border bawah saja saat fokus), dan sertakan komponen tombol 'Send Message'. Di sebelah form, letakkan social links dengan ikon Lucide. Patuhi prinsip warna --color-glass-fill dan spacing yang ada di panduan."

Quick Start

Salin dan tempel konfigurasi ini ke dalam proyek Anda.

CSS Variables (:root)

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-bg-base: #09090B;
    --color-accent-cyan: #06B6D4;
    --color-accent-purple: #8B5CF6;
    --color-text-primary: #FAFAFA;
    --color-text-secondary: #A1A1AA;
    
    --color-glass-fill: rgba(25, 25, 30, 0.4);
    --color-glass-border: rgba(255, 255, 255, 0.08);
    --color-glass-hover: rgba(255, 255, 255, 0.15);
    
    --radius-full: 999px;
    --radius-md: 12px;
    --radius-xl: 24px;
    --radius-2xl: 32px;
  }
  
  body {
    background-color: var(--color-bg-base);
    color: var(--color-text-primary);
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
}



Tailwind v4 Theme Block

(Jika menggunakan framework modern yang mendukung utilitas semantik kustom)

@theme {
  --color-base: var(--color-bg-base);
  --color-cyan: var(--color-accent-cyan);
  --color-purple: var(--color-accent-purple);
  --color-glass: var(--color-glass-fill);
  --color-glass-border: var(--color-glass-border);
  
  --font-sans: "Plus Jakarta Sans", sans-serif;
  
  --radius-badge: var(--radius-full);
  --radius-btn: var(--radius-md);
  --radius-glass: var(--radius-xl);
}

