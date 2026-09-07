import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import lencir from "@/data/lencir.json";

export const metadata: Metadata = {
  title: "Lencir | Lady Shopia",
  description: "Jelajahi pilihan body care dan wellness Lencir melalui Lady Shopia.",
};

export default function LencirPage() {
  return (
    <main className="min-h-dvh bg-[#fbf6ef] text-[#34252d]">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Kembali ke Lady Shopia">
            <Image className="h-14 w-auto brightness-0 invert" src="/main_logo.webp" alt="Lady Shopia" width={9212} height={7615} priority />
          </Link>
          <Link href="/" className="text-[10px] font-bold tracking-[.2em] text-[#f7e8d3] uppercase hover:text-white">
            Kembali ke koleksi
          </Link>
        </div>
      </header>

      <section className="relative isolate grid min-h-[720px] overflow-hidden bg-[#392431] pt-20 text-[#fbf6ef] lg:min-h-svh lg:grid-cols-[47fr_53fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-[max(3rem,calc((100vw-1280px)/2))]">
          <p className="text-xs font-bold tracking-[.28em] text-[#e8b998] uppercase">{lencir.hero.eyebrow}</p>
          <h1 className="mt-6 font-display text-[clamp(6rem,16vw,13rem)] leading-[.62] font-semibold tracking-[-.065em]">
            {lencir.hero.title}
          </h1>
          <p className="mt-12 max-w-md text-sm leading-7 text-[#eadde2] sm:text-base">{lencir.hero.description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a href="#produk" className="bg-[#e6b88f] px-6 py-4 text-xs font-bold tracking-[.16em] text-[#34252d] uppercase transition-colors hover:bg-[#f5d5b7]">
              Lihat produk
            </a>
            <a href={lencir.storeUrl} target="_blank" rel="noreferrer" className="border-b border-[#f7e8d3] py-2 text-xs font-bold tracking-[.16em] uppercase hover:text-[#e6b88f]">
              Buka Shopee ↗
            </a>
          </div>
        </div>

        <div className="relative min-h-[480px] lg:min-h-0">
          <div className="absolute inset-6 overflow-hidden rounded-[50%_50%_42%_58%/55%_42%_58%_45%] bg-[#e8b998] drop-shadow-[0_30px_35px_rgba(22,8,17,.3)] lg:inset-14">
            <Image
              src={lencir.hero.image.src}
              alt={lencir.hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 53vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="absolute right-6 bottom-6 max-w-36 text-right text-[10px] leading-5 font-semibold tracking-[.14em] text-[#f7e8d3] uppercase lg:right-10 lg:bottom-9">
            Body care for every day
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-center text-[10px] font-bold tracking-[.24em] text-[#a0616e] uppercase">Pilih rutinitasmu</p>
          <h2 className="mt-3 text-center font-display text-4xl font-semibold sm:text-6xl">Mulai dari yang kamu butuhkan</h2>
          <div className="mt-12 grid border-y border-[#d9c8bc] md:grid-cols-3">
            {lencir.categories.map((category, index) => (
              <article className="border-b border-[#d9c8bc] px-5 py-8 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0" key={category.name}>
                <span className="text-xs font-bold text-[#a0616e]">0{index + 1}</span>
                <h3 className="mt-8 font-display text-3xl font-semibold">{category.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#715e65]">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-8 bg-[#efe3d5] px-5 py-16 sm:px-8 lg:py-24" id="produk">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[#cdb9a9] pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold tracking-[.24em] text-[#a0616e] uppercase">Koleksi Lencir</p>
              <h2 className="mt-2 font-display text-4xl font-semibold sm:text-6xl">Produk pilihan</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#715e65]">Harga dan ketersediaan terbaru dapat dilihat langsung di Shopee.</p>
          </div>

          <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
            {lencir.products.map((product) => (
              <article className="group" key={product.name}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#fbf6ef]">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transition-none"
                  />
                </div>
                <p className="mt-5 text-[10px] font-bold tracking-[.14em] text-[#a0616e] uppercase">{product.category}</p>
                <h3 className="mt-2 font-display text-2xl leading-none font-semibold">{product.name}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-[#715e65]">{product.description}</p>
                <a href={lencir.storeUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-4 border-b border-[#34252d] pb-1 text-xs font-bold tracking-[.12em] uppercase hover:text-[#a0616e]">
                  Lihat di Shopee <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#392431] px-5 py-16 text-center text-[#fbf6ef] sm:px-8 lg:py-24">
        <p className="text-[10px] font-bold tracking-[.24em] text-[#e8b998] uppercase">Belanja melalui Shopee</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[.95] font-semibold sm:text-6xl">Temukan pilihan Lencir selengkapnya</h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#eadde2]">Lihat harga, promo, variasi, dan ketersediaan terbaru langsung di toko Lencir Indonesia.</p>
        <a href={lencir.storeUrl} target="_blank" rel="noreferrer" className="mt-9 inline-block bg-[#e6b88f] px-7 py-4 text-xs font-bold tracking-[.16em] text-[#34252d] uppercase hover:bg-[#f5d5b7]">
          Kunjungi toko ↗
        </a>
      </section>
    </main>
  );
}
