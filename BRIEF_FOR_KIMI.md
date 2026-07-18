# Dearina — Brief buat Kimi K3

> Ini bukan instruksi kaku. Ini adalah gambaran dari diskusi aku sama pemilik cerita.
> Kamu bebas pake tech stack apa aja, ubah approach, kasih ide baru — yang penting hasilnya memorable.
> Aku kasih bahan-bahannya, kimi yang masak.

## Cerita Besar

Website ini untuk sebuah hubungan yang baru saja berakhir. Bukan website sedih, tapi website yang merayakan perjalanan — mulai dari mimpi, membangun rumah bersama, saat-saat bahagia, sampai ombak surut dan pergi.

Ini adalah **pamitan terbaik** yang bisa dibuat.

## Core Metaphor

1. **Bintang origami** — awalnya ada bintang-bintang kertas. Dia adalah *dream girl*. Hubungan dimulai dari mimpi.
2. **Membangun rumah** — rumah yang diimpikan bersama. Setiap scroll, rumah diisi satu per satu (meja, lampu, foto di dinding, tanaman). Rumah ini bukan rumah beneran — tapi *home*, tempat aman.
3. **Air laut surut pasang** — *"Coming air laut surut pasang, tapi rasanya akan selalu sama."* Ombak visual yang jadi tanda perubahan. Pasang surut hubungan.
4. **Dia pergi duluan** — kamar masih sama, tapi dia enggak ada. Satu bintang origami jatuh di lantai.
5. **Aku ikut pergi** — rumah ditinggal. Layar menunjukkan pintu terbuka, rumah mengecil di kejauhan.
6. **Bintang terakhir dilepas** — satu bintang origami muncul, disentuh. Dia melipat sendiri, lalu terbang ke langit malam.

## Aturan Emosi

- **Dia adalah dream girl** — ada nuansa kagum, lembut. Bukan sedih berlebihan.
- **Fun di saat baik** — animasi playful, bounce, wiggle. Boleh lucu.
- **Berat di saat pergi** — bukan dramatis, tapi *sunyi*. Negative space. Hening.
- **Akhir itu melepas, bukan melupakan** — damai, bukan pahit.

## Warna

File `COLORS.md` ada palet lengkap per section. Tapi intinya:
- **Ungu lembut (#C9B1D0)** adalah warna kesukaan dia. Muncul di setiap section — dari awal sampai akhir. Dia tidak pernah hilang sepenuhnya.
- Awal: gelap ke terang. Tengah: hangat. Akhir: kembali ke gelap.

Tip: Kimi bisa explore variasi ungu yang berbeda di tiap section. Tapi thread ungunya harus tetap terasa.

## Yang Kami Sudah Sepakat

| Item | Keputusan | Tapi... |
|------|-----------|---------|
| Font | Cormorant Garamond (heading), Inter (body), Caveat (surat) | Ganti kalau nemu yang lebih cocok |
| Surat interaktif | Lipat/buka kertas, font handwriting | Formatnya bisa beda |
| Akhir interaktif | Bintang origami yang terbang setelah disentuh | Bisa diganti kalau punya ide lebih kuat |
| Loading state | Title card "Dearina" fade-in, 3 bintang redup | Suka-suka kimi |
| Layout per section | Unik semua (ada split, masonry, widescreen, negative space, dollhouse) | Bebas explore asal setiap section beda vibe |
| Mobile-first | Iya, duluan HP | Desktop tetap harus cantik |

## Tech Stack

Bebas. Bisa:
- HTML/CSS/JS murni (yang direncanain)
- Astro, Svelte, Vue, React — whatever
- Canvas, WebGL kalau mau efek bintang keren
- Tailwind, GSAP, anime.js — silakan

**Tapi ada syarat:**
- Harus loading cepet di HP (Lighthouse Performance 85+ minimum)
- Animasi smooth, no jank
- Password protected (pass: 251101)
- Hosting di GitHub Pages → `dearina.github.io`
- Semua foto nanti diisi manual (kasih placeholder dulu)

## Yang No Go

- Musik autoplay — harus user klik play dulu
- Animasi lebay di bagian awal/akhir — jaga ketenangan
- Framework berat (Next.js, Gatsby, etc.) — gak cocok buat GH Pages
- Efek yang butuh plugin/library besar demi satu animasi kecil

## Challenge buat Kimi

Ini proyek personal yang penting banget buat pemiliknya. Jadi tolong:
- **Kasih ide di luar yang sudah ditulis** — kalau nemu approach yang lebih bagus, sampaikan.
- **Push limits** — jangan cuma bikin "biasa". Tapi tetap jaga performa dan rasa.
- **Explain kenapa** pilih sesuatu — biar kita ngerti dan bisa diskusi.
- **Tanya** kalau ada yang kurang jelas.

Kami kasih bahan, kimi yang masak. Kalau masakannya enak — kita puji. Kalau kurang cocok — kita omongin, iterasi lagi, sampai jadi.

Selamat memasak 🍳

---

_Dibuat: 2026-07-18_
_Dari: percakapan antara Ario & Hermes Agent_
