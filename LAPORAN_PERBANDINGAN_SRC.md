# Laporan Perbandingan: `src/` (root) vs `BMG/src/` (folder nested)

**Tanggal:** 11 November 2026
**Ruang lingkup:** perbandingan isi folder `C:\project_flutter\BMG\src` dengan `C:\project_flutter\BMG\BMG\src`
**Sifat:** laporan saja — tidak ada perubahan kode yang dilakukan

---

## 1. Ringkasan eksekutif

Repository ini berisi **dua salinan lengkap dari aplikasi yang sama** (website company profile PT Berkah Media Gemilang):

| | `src/` (root) | `BMG/src/` (nested) |
|---|---|---|
| Jumlah file | 23 | 19 |
| Sistem i18n (ID/EN) | ✅ Ada (`src/i18n/`) | ❌ Tidak ada |
| Halaman Privacy Policy | ✅ Ada | ❌ Tidak ada |
| Animasi reveal (IntersectionObserver + keyframes) | ✅ Ada | ❌ Tidak ada |
| Rute `/privacy-policy` | ✅ Ada | ❌ Tidak ada |
| Teks konten | Dari translation file, bilingual | Hardcode (campuran Indonesia & Inggris) |
| Dimodelkan dari | Stack terbaru setelah refactor i18n | Snapshot lama sebelum refactor i18n |

**Kesimpulan:** `src/` root adalah versi **lebih baru dan lebih lengkap** (superset). `BMG/src/` adalah **salinan usang (stale duplicate)** yang tertinggal sebelum migrasi i18n/Privacy Policy/animasi. Keduanya **sama-sama ter-track di git** (folder `BMG/` bukan git submodule, bukan ignored — 32 file ter-commit).

---

## 2. File yang HANYA ada di `src/` root (4 file, tidak ada padanannya)

| File | Isi |
|---|---|
| `src/i18n/LanguageContext.jsx` | Context React: `LanguageProvider`, hook `useLanguage()`, toggle `id`/`en`, persist ke `localStorage` |
| `src/i18n/translations.js` | Seluruh string UI dua bahasa (±787 baris, `id` + `en`): nav, footer, dan semua halaman (home, about, services, portfolio, contact, privacy policy) |
| `src/pages/PrivacyPolicy.jsx` | Halaman Kebijakan Privasi baru |
| `src/pages/PrivacyPolicy.css` | Style halaman Privacy Policy (275 baris) |

## 3. File yang identik 100% (6 file)

`src/index.css` · `src/main.jsx` · `src/assets/hero.png` · `src/assets/react.svg` · `src/assets/vite.svg`

> Catatan: `index.html` di kedua folder juga identik.

## 4. File yang hanya beda line endings CRLF vs LF (konten 100% sama, 4 file)

`src/pages/About.css` · `src/pages/Contact.css` · `src/pages/Portfolio.css` · `src/pages/Services.css`

(Tidak ada perubahan konten; hanya beda `\r\n` vs `\n`.)

## 5. File yang berbeda konten (10 file)

### 5.1 `src/App.jsx`
- **Root:** membungkus app dengan `<LanguageProvider>`, ada komponen `PageMotion` (animasi masuk halaman via `useLocation` + `data-page-reveal`), dan route `/privacy-policy` → `<PrivacyPolicy />`.
- **BMG/**: tanpa `LanguageProvider`, tanpa `PageMotion`, tanpa route privacy-policy. `BrowserRouter` langsung tanpa wrapper animasi.

### 5.2 `src/App.css`
- **Root:** berisi sistem animasi — keyframes `page-enter`, `page-content-reveal`, `site-chrome-enter`, class `.page-motion`, `.page-reveal(.is-visible)`, stagger delay `.1s/.2s/.3s`, style footer `.site-footer` (padding), dan blok `@media (prefers-reduced-motion: reduce)`. ±73 baris lebih banyak.
- **BMG/**: hanya menyisakan base style (`.nav-active::after`, focus style, `button:active`). Tidak ada animasi sama sekali.

### 5.3 `src/components/Navbar.jsx`
- **Root:** label nav dari `t.nav.*` (bilingual), ada komponen `LanguageSwitcher` (tombol ID 🇮🇩 / EN 🇬🇧, versi desktop & mobile), CTA "Mulai"/"Get Started" bilingual, ukuran CTA `h-10 w-32 text-xs shadow-[4px_4px_0]`.
- **BMG/**: label hardcode (`Home / Layanan / Tentang / Portofolio / Contact Us`), **tanpa language switcher sama sekali**, CTA hardcode "Get Started" ukuran lebih kecil (`h-8 w-24 text-[11px] shadow-[2px_2px_0]`).

### 5.4 `src/components/Footer.jsx`
- **Root:** tagline, heading "Navigasi/Navigate", "Terhubung/Connect", label link, dan teks "Kebijakan Privasi"/"Privacy Policy" diambil dari i18n. Link privacy memakai `<Link to="/privacy-policy">` (route nyata). Copyright: `<span>© … PT. Lasuarindo | BMG.id</span>`.
- **BMG/**: semua teks hardcode (campuran: heading Inggris, label Indonesia). Link privacy adalah `<a href="#privacy">` — **anchor mati, bukan route** (halaman `/privacy-policy` memang tidak ada di nested). Class border memakai `border-bmg-primary` (root: `border-[#c8102e]`), border-t 10px (root: 8px), `px-5 md:px-16`, footer tanpa span wrapper, ada trailing space di `{link.label} `.

### 5.5 `src/pages/Home.jsx`
- **Root:** semua section memakai `t.home.*` (bilingual); `useEffect` + `IntersectionObserver` untuk reveal-on-scroll (`.home-reveal.is-visible`); class animasi `home-hero-enter(--second/--third/--card)`; gambar featured project lokal `/images/portfolio/bandung-festival-2026.webp`.
  - Catatan: *title hero* di root saat ini sengaja di-hardcode `"Amplifying Brands. Igniting Events."` (atas permintaan terpisah), sisanya tetap i18n.
- **BMG/**: seluruh teks hardcode Bahasa Indonesia (services, values, contact section, dll.); **tanpa** `useEffect`/IntersectionObserver dan tanpa class animasi; featured project memakai gambar stock Unsplash (`photo-1511578314322-…`), bukan webp lokal.

### 5.6 `src/pages/Home.css`
- **Root:** berisi keyframes `home-hero-enter`, `home-reveal-in`, `home-card-float`, class `.home-hero-enter*`, `.home-reveal`, delay nth-child untuk cards, dan aturan `prefers-reduced-motion` lengkap.
- **BMG/**: blok-blok animasi tersebut **tidak ada** (±27 baris lebih sedikit); `prefers-reduced-motion` hanya berisi `transition-duration`.

### 5.7 `src/pages/Services.jsx`
- **Root:** semua konten dari `t.services.*` (bilingual), `<title>`/`<meta description>` dari translation, elemen ber `data-page-reveal`.
- **BMG/**: konten Bahasa Indonesia hardcode, tanpa `data-page-reveal`. Struktur & URL gambar Unsplash sama.

### 5.8 `src/pages/About.jsx`
- **Root:** konten dari `t.about.*` (bilingual), tanpa wrapper fragment (langsung `<div>`/`<section>` dengan `<title>`+`<meta>` di dalam), elemen `data-page-reveal`.
- **BMG/**: konten Bahasa Indonesia hardcode; copy sedikit berbeda nuansa (eyebrow: "Tentang Berkah Media Gemilang sekaligus membanggakan"; H1: "Menggerakkan *industri.*").

### 5.9 `src/pages/Contact.jsx`
- **Root:** semua label/placeholder/opsi dari `t.contact.*` (bilingual), `<title>` & `<meta>` dari i18n, elemen `data-page-reveal`. Logika form tetap sama (`mailto:hello@bmg.co.id` + field `collaborationType`, `phone`, `timeline`).
- **BMG/**: label & opsi hardcode **Bahasa Inggris** (Name, Company, Service / Collaboration Type, dst.) dengan pesan status mix Indonesia; tanpa i18n; tanpa `data-page-reveal`. **Logika form identik** (sama-sama `mailto:`, sama-sama punya field phone/collaborationType/timeline — keduanya di-update di commit `6e0cfb3`).

### 5.10 `src/pages/Portfolio.jsx`
- **Root:** proyek digabung dari `t.portfolio.projects` + array `projectImages` lokal (`useMemo`); proyek pertama memakai `/images/portfolio/bandung-festival-2026.webp` (lokal); label/filter/show-more dari i18n; elemen `data-page-reveal`.
- **BMG/**: data proyek inline hardcode Bahasa Indonesia, **semua gambar Unsplash** (tidak ada referensi ke `bandung-festival-2026.webp`); filter & tombol hardcode ("Semua Proyek", "Lihat Proyek Lainnya").

---

## 6. Perbandingan folder terkait (di luar `src/`, perlu diketahui)

| Item | Root | `BMG/` nested |
|---|---|---|
| `public/images/portfolio/bandung-festival-2026.webp` | ✅ Ada (181 KB) | ❌ Hanya README.md |
| `public/images/logo/bmg-mark.*` | ✅ Ada | ✅ Ada (identik) |
| `dist/` (hasil build) | ✅ Ada | ✅ Ada (milik build lama) |
| `index.html` | Identik | Identik |
| `package.json` / `vite.config.js` | Identik | Identik |
| `contohgambar/` (di root repo, bukan di src) | Berisi 1 file webp contoh "JG LIEM BANDUNG FESTIVAL 2026 IS HERE!" — hanya ada di root | — |

## 7. Kronologi git (kenapa bisa begini)

Commit terakhir **`6e0cfb3`** ("Menambahkan form jenis layanan dan nomor telepon serta estimasi waktu", ErwanKurniawan, 11 Nov 2026) **mengubah kedua salinan sekaligus**, tetapi root `src/` mendapat tambahan yang jauh lebih besar:

- root: `translations.js` +787 baris, `PrivacyPolicy.*` baru, `LanguageContext.jsx` baru, Navbar +119, Footer +81, App.jsx +39, rewrite Home/Services/About/Portfolio/Contact ke i18n
- nested `BMG/src/`: perubahan lebih kecil (Contact 64 baris, Footer 37, sisanya kecil) — **tidak** mendapat migrasi i18n

Jadi nested `BMG/` diperlakukan sebagai salinan proyek penuh (beserta `dist/` sendiri) yang tertinggal di titik sebelum refactor i18n/animasi/privacy-policy.

## 8. Risiko & catatan jika `BMG/` nested dibiarkan

1. **Duplikasi & drift:** perbaikan/bugfix di satu salinan tidak otomatis masuk ke salinan lain (seperti terlihat dari hero title yang baru saja di-hardcode di root saja).
2. **Nested memakai link rusak** `href="#privacy"` dan tidak punya halaman privacy-policy.
3. **Nested memakai gambar eksternal Unsplash** untuk featured project — root sudah memakai aset lokal `bandung-festival-2026.webp`.
4. **Nested tanpa i18n** — pengguna akhir tidak bisa toggle ID/EN.
5. `git status` bersih bukan berarti tidak ada masalah: folder `BMG/` ikut ter-commit, jadi risiko tertimpa saat merge/pull jika dua orang mengedit kedua salinan.

## 9. Rekomendasi (belum dieksekusi — menunggu keputusan)

1. **Jadikan root `src/` sebagai satu-satunya sumber kebenaran**; hapus atau arsipkan `BMG/` nested (dan sesuaikan `contohgambar/` bila sudah tidak dipakai).
2. Jika `BMG/` memang sengaja disimpan sebagai arsip build lama, tambahkan `BMG/` ke `.gitignore` dan keluarkan dari tracking (`git rm -r --cached BMG`).
3. Samakan line endings (4 CSS file beda CRLF/LF) agar diff bersih di masa depan.
4. Pastikan deployment/hosting memakai hasil build root (`npm run build`), bukan `BMG/dist/`.

---

*Laporan dibuat otomatis dari hasil `git diff --no-index` + hash comparison + `git log`. Tidak ada file yang diubah.*
