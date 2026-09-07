import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import collection from "@/data/riber-fest.json";
import { formatPrice } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Riber Fest Vol. 3 — Merchandise | Lady Shopia",
  description: collection.description,
  robots: { index: false, follow: true },
};

export default function RiberFestPage() {
  return (
    <main className="min-h-dvh bg-[#141410] text-[#fffbf0]">
      <header className="border-b border-white/15">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-5 sm:px-8" aria-label="Navigasi koleksi">
          <Link href="/" className="font-display text-2xl font-semibold">Lady Shopia</Link>
          <a href="#merchandise" className="text-xs font-bold uppercase tracking-widest text-[#f5a623]">Lihat merchandise ↘</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold tracking-[.2em] text-[#f5a623] uppercase">Exclusive merchandise · {collection.edition}</p>
          <h1 className="mt-6 text-[clamp(4.5rem,12vw,9rem)] leading-[.85] font-black tracking-[-.07em] uppercase">Riber<br /><span className="text-[#f5a623]">Fest.</span></h1>
          <p className="mt-7 font-display text-3xl italic sm:text-4xl">{collection.theme}</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#c6c2b5]">{collection.description}</p>
          <a href="#merchandise" className="mt-7 inline-flex min-h-12 items-center gap-8 bg-[#f5a623] px-6 py-3 text-sm font-bold text-[#141410] hover:bg-[#ffbd4a]">Jelajahi koleksi <span aria-hidden="true">↓</span></a>
        </div>
        <div className="relative mx-auto w-full max-w-md rotate-[-3deg] border border-[#57513b] bg-[#e8dfcd] p-5 text-[#25251f]">
          <div className="flex justify-between border-b border-[#25251f]/25 pb-3 text-[10px] font-bold tracking-widest uppercase"><span>Wear the memory</span><span>{collection.edition}</span></div>
          <Image src={collection.products[0].images[0].src} alt={collection.products[0].images[0].alt} width={600} height={600} className="w-full" />
          <p className="border-t border-[#25251f]/25 pt-3 text-center text-xs font-bold tracking-widest uppercase">Dari panggung, jadi kenangan.</p>
        </div>
      </section>

      <section id="merchandise" className="scroll-mt-5 bg-[#fffbf0] px-5 py-12 text-[#25251f] sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#d1cbbd] pb-6">
            <div><p className="text-xs font-bold tracking-widest text-[#a13c19] uppercase">Riber Fest × Lady Shopia</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Bawa pulang ceritanya.</h2></div>
            <p className="text-sm">{collection.products.length} pilihan merchandise</p>
          </div>
          {collection.isDemo ? <p className="mt-6 border-l-4 border-[#c64b20] bg-[#f4ead8] p-4 text-sm leading-6">Pratinjau koleksi — gambar, harga, dan ukuran masih berupa contoh. Pemesanan belum dibuka.</p> : null}
          <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-10 min-[380px]:grid-cols-2 lg:grid-cols-3">
            {collection.products.map((product) => (
              <article id={product.slug} key={product.id} className="scroll-mt-6">
                <div className="relative aspect-square bg-[#e8dfcd]">
                  <Image src={product.images[0].src} alt={product.images[0].alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 380px) 50vw, 100vw" className="object-contain p-2" />
                  <span className="absolute top-3 left-3 bg-[#fffbf0] px-2 py-1 text-[10px] font-bold uppercase tracking-wider">{product.category}</span>
                </div>
                <h3 className="mt-4 text-lg leading-snug font-bold">{product.name}</h3>
                <p className="mt-2 font-semibold text-[#a13c19]">{formatPrice(product.price)}</p>
                <details className="mt-4 border-y border-[#d1cbbd] py-3">
                  <summary className="cursor-pointer text-sm font-semibold">Detail produk</summary>
                  <p className="mt-3 text-sm leading-6 text-[#60594b]">{product.description}</p>
                  <p className="mt-3 text-xs font-semibold">{product.variants.length ? `Pilihan ukuran: ${product.variants.map((variant) => variant.name).join(" / ")}` : "Satu pilihan"}</p>
                </details>
              </article>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-[#60594b]">Informasi pemesanan dan pengiriman akan tersedia saat koleksi dirilis.</p>
        </div>
      </section>
      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm sm:px-8"><p>{collection.name} {collection.edition} · Lady Shopia</p><Link href="/" className="text-[#f5a623] hover:underline">← Kembali ke Lady Shopia</Link></footer>
    </main>
  );
}
