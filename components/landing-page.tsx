import Image from "next/image";
import { QuantitySelector } from "@/components/quantity-selector";

const navigation = [
  ["Best Seller", "#best"],
  ["One Set", "#oneset"],
  ["Dress", "#newest"],
  ["Premium Series", "#newest"],
  ["Katalog", "#oneset"],
  ["Lencer", "#footer"],
] as const;

const oneSetProducts = [
  ["https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=600&q=86", "Iyla Home Dress biru"],
  ["https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=600&q=86", "Iyla Home Dress violet"],
  ["https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=600&q=86", "Iyla Home Dress oranye"],
  ["https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=86", "Iyla Home Dress floral"],
] as const;

const bestSellerImages = [
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=90",
  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=90",
  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=90",
] as const;

const footerGroups = [
  ["Koleksi", ["Best Seller", "One Set", "Dress", "Premium Series"]],
  ["Bantuan", ["Cara Order", "Panduan Ukuran", "Pengiriman", "Hubungi Kami"]],
  ["Ikuti Kami", ["Instagram", "TikTok", "Shopee", "WhatsApp"]],
] as const;

function Brand() {
  return (
    <a className="flex items-center gap-3 text-[#aa7635]" href="#top" aria-label="Lady Shopia — kembali ke atas">
      <span className="relative size-9 shrink-0 rounded-full border border-[#e5cfaf] bg-[#f2dfc3] sm:size-10" aria-hidden="true">
        <span className="absolute left-[24%] top-[24%] size-[34%] rounded-full bg-[#d5a765]" />
        <span className="absolute right-[24%] bottom-[26%] size-[28%] rounded-full bg-[#8d622f]" />
      </span>
      <span>
        <strong className="block font-display text-xl leading-none font-bold sm:text-2xl">Lady Shopia</strong>
        <span className="block text-[7px] tracking-[.14em] uppercase sm:text-[8px]">Sleepwear and Fashion</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[72px] items-center border-b border-[#f1ebe2] bg-white lg:h-[86px]">
      <div className="mx-auto grid w-[min(1240px,calc(100%_-_24px))] grid-cols-[1fr_auto] items-center gap-6 lg:w-[min(1240px,calc(100%_-_40px))] xl:grid-cols-[240px_1fr_auto]">
        <Brand />
        <nav className="hidden items-center justify-center gap-6 font-display text-[17px] font-semibold text-[#95682f] xl:flex xl:gap-8" aria-label="Navigasi utama">
          {navigation.map(([label, href]) => <a className="hover:text-ink" href={href} key={label}>{label}</a>)}
        </nav>
        <a className="hidden border border-[#b78a50] bg-white px-4.5 py-2.5 text-center font-display text-sm leading-[1.1] font-bold whitespace-nowrap text-[#91662e] xl:block" href="#oneset">
          RINDU BERSIK<br />× Lady Shopia
        </a>
        <details className="relative xl:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center text-2xl marker:content-none" aria-label="Buka menu">☰</summary>
          <nav className="absolute top-[calc(100%+14px)] right-0 flex w-56 flex-col border border-line bg-white p-2 font-display text-lg font-semibold text-gold shadow-xl" aria-label="Navigasi seluler">
            {navigation.map(([label, href]) => <a className="rounded px-4 py-2.5 hover:bg-cream" href={href} key={label}>{label}</a>)}
          </nav>
        </details>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100dvh-72px)] items-center justify-center overflow-hidden bg-[#342b25] px-5 py-24 text-white lg:min-h-[calc(100dvh-86px)] lg:px-10">
      <Image
        src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1600&q=90"
        alt="Model mengenakan homewear bermotif Lady Shopia"
        fill
        priority
        sizes="100vw"
        className="-z-20 scale-[1.01] object-cover object-[62%_top] sm:object-top"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(23,17,13,.2)_0%,rgba(23,17,13,.42)_48%,rgba(23,17,13,.72)_100%)]" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center [text-shadow:0_2px_24px_rgba(0,0,0,.4)]">
        <div className="mb-6 flex w-full max-w-md items-center gap-4" aria-label="Lady Shopia, koleksi terbaru 2026">
          <span className="h-px flex-1 bg-white/60" aria-hidden="true" />
          <p className="text-[11px] font-semibold tracking-[.3em] uppercase sm:text-xs">New Collection · 2026</p>
          <span className="h-px flex-1 bg-white/60" aria-hidden="true" />
        </div>
        <h1 className="max-w-5xl font-display text-[clamp(3.5rem,8vw,7.75rem)] leading-[.78] font-semibold tracking-[-.035em]">
          Nyaman Dipakai
          <span className="mt-3 block font-medium italic">Cantik Sepanjang Hari</span>
        </h1>
        <p className="mt-7 max-w-xl text-sm leading-6 tracking-[.04em] text-white/90 sm:text-base sm:leading-7">
          Homewear lembut, siluet anggun, dan kenyamanan yang tinggal sepanjang hari.
        </p>
        <div className="mt-9 grid w-full max-w-[580px] gap-3 sm:grid-cols-2 sm:gap-4">
          <a className="flex min-h-12 items-center justify-center border border-white bg-white px-6 py-3 text-xs font-semibold tracking-[.18em] text-ink uppercase transition-colors hover:border-cream hover:bg-cream" href="#newest">
            Belanja Koleksi
          </a>
          <a className="flex min-h-12 items-center justify-center border border-white/80 bg-black/10 px-6 py-3 text-xs font-semibold tracking-[.18em] uppercase backdrop-blur-[2px] transition-colors hover:border-white hover:bg-white hover:text-ink" href="#best">
            Lihat Editorial
          </a>
        </div>
      </div>

      <a className="absolute bottom-4 left-1/2 flex min-h-12 -translate-x-1/2 flex-col items-center justify-center gap-1 text-[9px] font-semibold tracking-[.28em] text-white/90 uppercase transition-transform hover:translate-y-1" href="#newest" aria-label="Lanjut ke koleksi terbaru">
        Scroll
        <svg viewBox="0 0 24 14" className="h-3.5 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="m2 2 10 10L22 2" />
        </svg>
      </a>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-7 text-center font-display text-3xl leading-none font-semibold text-[#a06d2e] sm:text-4xl">{children}</h2>;
}

function NewestCollection() {
  return (
    <section className="scroll-mt-20 bg-white py-8 lg:pb-5" id="newest">
      <SectionTitle>Newest Collection</SectionTitle>
      <div className="relative grid min-h-[560px] lg:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:items-center lg:gap-5">
        <div className="px-6 py-3 lg:pl-[max(3rem,calc((100vw-1240px)/2+3rem))]">
          <span className="inline-block rounded-md bg-[#f1e5d4] px-3 py-0.5 font-display text-lg font-semibold text-[#9a6a2e]">Tersedia</span>
          <h3 className="mt-1 font-display text-[clamp(2.9rem,7vw,3.875rem)] leading-[.95] font-semibold text-[#8f632e]">Lumière Flora Dress</h3>
          <p className="mt-2 text-xl font-bold text-[#291d14]">Rp. XXX.XXX.XXX</p>
          <p className="mt-8 font-display font-semibold text-[#a16c2b] uppercase">Size</p>
          <p className="mt-2 inline-block rounded-lg bg-[#f4e8d7] px-5 py-2.5 font-display text-2xl leading-none font-semibold text-[#9a6a2e]">All Size</p>
          <p className="mt-1 font-display text-xs font-medium text-[#9b6f42]">Satu ukuran untuk semua.</p>
          <p className="mt-7 font-display font-semibold text-[#a16c2b] uppercase">Fit</p>
          <div className="mt-2.5 flex items-center gap-3">
            <span className="size-10 rounded-full border border-[#eadfcf] bg-[linear-gradient(90deg,#eee4d4_50%,#fff_50%)]" aria-hidden="true" />
            <p className="font-display"><strong className="block text-sm font-semibold text-[#9a6a2e]">Oversized Fit</strong><span className="text-xs text-[#b1824a]">Cocok hingga ukuran XL.</span></p>
          </div>
          <p className="mt-7 mb-2 font-display font-semibold text-[#a16c2b] uppercase">Qty</p>
          <QuantitySelector />
        </div>
        <div className="flex min-h-[420px] items-center justify-center gap-5 overflow-hidden px-5 lg:min-h-[530px]">
          <Image className="hidden w-[150px] opacity-15 blur-[2px] sm:block" src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=420&q=70" alt="" width={420} height={630} sizes="150px" />
          <Image className="hidden w-[200px] opacity-25 sm:block" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=480&q=72" alt="" width={480} height={720} sizes="200px" />
          <Image className="h-auto w-[70vw] max-w-[330px] drop-shadow-[0_16px_14px_rgba(0,0,0,.13)]" src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=90" alt="Lumière Flora Dress" width={700} height={1050} sizes="(min-width: 1024px) 330px, 70vw" />
        </div>
      </div>
    </section>
  );
}

function BestSeller() {
  return (
    <section className="relative scroll-mt-20 overflow-hidden bg-[#f4f4f4]" id="best">
      <h2 className="absolute top-5 left-4 z-10 font-display text-3xl leading-[.8] font-semibold text-[#9a692f] sm:text-4xl lg:top-8 lg:left-10 lg:text-6xl">Aleya<br />Home<br />Dress</h2>
      <div className="grid min-h-[430px] grid-cols-3 items-end gap-0 lg:min-h-[630px] lg:gap-7 lg:px-28">
        {bestSellerImages.map((src, index) => (
          <div className="relative h-[420px] lg:h-[600px]" key={src}>
            <Image src={src} alt={`Aleya Home Dress ${index + 1}`} fill sizes="33vw" className="object-cover object-top" />
          </div>
        ))}
      </div>
      <div className="absolute right-0 bottom-[70px] left-0 bg-[linear-gradient(90deg,transparent_0%,rgba(166,134,92,.28)_14%,rgba(166,134,92,.72)_34%,rgba(166,134,92,.72)_100%)] py-3 text-center font-display text-[clamp(4rem,10vw,9.875rem)] leading-[.75] font-medium tracking-[.02em] text-white lg:bottom-[120px] lg:py-4" aria-hidden="true">BEST SELLER</div>
    </section>
  );
}

function OneSetCollection() {
  return (
    <section className="scroll-mt-20 bg-[#f1f1f1] px-2.5 py-9 sm:px-6" id="oneset">
      <SectionTitle>Oneset Iyla Home Dress</SectionTitle>
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4 lg:gap-8">
        {oneSetProducts.map(([src, alt]) => (
          <article className="overflow-hidden rounded-lg border border-[#e7e2dc] bg-white" key={src}>
            <Image className="aspect-[3/4.4] object-cover transition-transform duration-500 hover:scale-[1.02] motion-reduce:transition-none" src={src} alt={alt} width={600} height={880} sizes="(min-width: 1024px) 25vw, 50vw" />
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="scroll-mt-20 border-t border-[#eee2d2] bg-[#fffaf4] py-11" id="footer">
      <div className="mx-auto grid w-[min(1240px,calc(100%_-_24px))] grid-cols-1 gap-9 sm:grid-cols-2 lg:w-[min(1240px,calc(100%_-_40px))] lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-10">
        <div>
          <p className="font-display text-3xl font-bold text-[#9b6b30]">Lady Shopia</p>
          <p className="mt-2 max-w-sm text-sm leading-7 text-[#6f5a43]">Sleepwear dan fashion yang nyaman dipakai, elegan dilihat, dan dibuat untuk keseharian.</p>
        </div>
        {footerGroups.map(([title, links]) => (
          <div key={title}>
            <h2 className="mb-3 font-display text-xl font-semibold text-[#97672d]">{title}</h2>
            <nav className="flex flex-col items-start text-sm leading-7 text-[#6f5a43]" aria-label={title}>
              {links.map((link) => <a className="hover:text-gold" href="#top" key={link}>{link}</a>)}
            </nav>
          </div>
        ))}
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <NewestCollection />
        <BestSeller />
        <OneSetCollection />
      </main>
      <Footer />
    </>
  );
}
