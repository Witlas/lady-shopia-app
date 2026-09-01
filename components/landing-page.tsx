import Image from "next/image";
import {QuantitySelector} from "@/components/quantity-selector";

const navigation = [
    ["Best Seller", "#best"],
    ["One Set", "#oneset"],
    ["Dress", "#newest"],
    ["Premium Series", "#newest"],
    ["Katalog", "#oneset"],
] as const;

const highlightedNavigation = {label: "Lencer", href: "#footer", color: "#51a2a4"} as const;

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
        <a href="#top" aria-label="Lady Shopia — kembali ke atas">
            <Image className="h-14 w-auto sm:h-16" src="/main_logo.webp" alt="" width={9212} height={7615}/>
        </a>
    );
}

function Header() {
    return (
        <header className="sticky top-0 z-50 flex h-[72px] items-center border-b border-[#f1ebe2] bg-white lg:h-[86px]">
            <div
                className="mx-auto grid w-[min(1240px,calc(100%_-_24px))] grid-cols-[1fr_auto] items-center gap-6 lg:w-[min(1240px,calc(100%_-_40px))] xl:grid-cols-[240px_1fr_auto]">
                <Brand/>
                <nav
                    className="hidden items-center justify-center gap-18 font-display text-[17px] font-semibold text-[#95682f] xl:flex"
                    aria-label="Navigasi utama">
                    {navigation.map(([label, href]) => <a className="hover:text-ink" href={href}
                                                          key={label}>{label}</a>)}
                    <a className="hover:opacity-75" href={highlightedNavigation.href}
                       style={{color: highlightedNavigation.color}}>{highlightedNavigation.label}</a>
                </nav>
                <a className="hidden xl:block" href="#oneset" aria-label="Rindu Bersik × Lady Shopia">
                    <Image className="h-11 w-auto" src="/secondary_logo.webp" alt="" width={1715} height={479}/>
                </a>
                <details className="relative xl:hidden">
                    <summary
                        className="grid size-11 cursor-pointer list-none place-items-center text-2xl marker:content-none"
                        aria-label="Buka menu">☰
                    </summary>
                    <nav
                        className="absolute top-[calc(100%+14px)] right-0 flex w-56 flex-col border border-line bg-white p-2 font-display text-lg font-semibold text-gold shadow-xl"
                        aria-label="Navigasi seluler">
                        {navigation.map(([label, href]) => <a className="rounded px-4 py-2.5 hover:bg-cream" href={href}
                                                              key={label}>{label}</a>)}
                        <a className="rounded px-4 py-2.5 hover:bg-cream" href={highlightedNavigation.href}
                           style={{color: highlightedNavigation.color}}>{highlightedNavigation.label}</a>
                    </nav>
                </details>
            </div>
        </header>
    );
}

function Hero() {
    return (
        <section
            className="grid min-h-[calc(100svh-72px)] overflow-hidden bg-[#f2eee8] lg:min-h-[calc(100svh-86px)] lg:grid-cols-[46fr_54fr]">
            <div
                className="order-2 flex flex-col justify-between px-6 py-9 sm:px-10 lg:order-1 lg:px-[max(3rem,calc((100vw-1240px)/2))] lg:py-12">
                <div
                    className="flex items-center justify-between border-b border-[#cfc5b9] pb-3 text-[10px] font-semibold tracking-[.22em] uppercase sm:text-xs">
                    <span>New Collection</span>
                    <span className="text-[#51a2a4]">01 / 2026</span>
                </div>

                <div className="py-10 lg:py-8">
                    <p className="mb-5 font-display text-xl font-semibold text-[#51a2a4] italic">Made for slow
                        mornings</p>
                    <h1 className="font-display text-[clamp(4rem,8vw,7.5rem)] leading-[.72] font-semibold tracking-[-.045em] text-[#382c25]">
                        Nyaman
                        <span className="block pl-[12%] font-medium italic">dipakai,</span>
                        <span className="block">cantik.</span>
                    </h1>
                    <p className="mt-7 max-w-md text-sm leading-6 text-[#66574b] sm:text-base sm:leading-7">
                        Homewear lembut dengan siluet anggun—dari pagi yang tenang sampai agenda sepanjang hari.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-5">
                        <a className="group flex min-h-12 items-center gap-8 bg-[#382c25] px-6 py-3 text-xs font-semibold tracking-[.16em] text-white uppercase transition-colors hover:bg-[#51a2a4]"
                           href="#newest">
                            Belanja Koleksi
                            <span
                                className="text-lg leading-none transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                                aria-hidden="true">→</span>
                        </a>
                        <a className="border-b border-[#382c25] py-2 text-xs font-semibold tracking-[.16em] uppercase transition-colors hover:border-[#51a2a4] hover:text-[#51a2a4]"
                           href="#best">Lihat Best Seller</a>
                    </div>
                </div>

                <p className="text-[10px] font-medium tracking-[.18em] text-[#7b6b5e] uppercase">Sleepwear · Dress · One
                    Set</p>
            </div>

            <div className="relative order-1 min-h-[46svh] overflow-hidden lg:order-2 lg:min-h-0">
                <Image
                    src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1600&q=90"
                    alt="Model mengenakan dress lembut koleksi Lady Shopia"
                    fill
                    priority
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-cover object-[center_28%] transition-transform duration-700 hover:scale-[1.015] motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(37,25,18,.38)_100%)]"
                     aria-hidden="true"/>
                <div
                    className="absolute right-4 bottom-4 left-4 flex items-end justify-between text-white sm:right-6 sm:bottom-6 sm:left-6">
                    <div>
                        <p className="text-[10px] font-semibold tracking-[.2em] uppercase">The Lumière Edit</p>
                        <p className="mt-1 font-display text-2xl font-semibold italic sm:text-3xl">Softness, styled.</p>
                    </div>
                    <a className="grid size-12 shrink-0 place-items-center rounded-full border border-white/80 bg-white/10 text-xl backdrop-blur-sm transition-colors hover:bg-white hover:text-[#382c25]"
                       href="#newest" aria-label="Lihat The Lumière Edit">↘</a>
                </div>
            </div>
        </section>
    );
}

function SectionTitle({children}: { children: React.ReactNode }) {
    return <h2
        className="mb-7 text-center font-display text-3xl leading-none font-semibold text-[#a06d2e] sm:text-4xl">{children}</h2>;
}

function NewestCollection() {
    return (
        <section className="scroll-mt-20 bg-white py-8 lg:pb-5" id="newest">
            <SectionTitle>Newest Collection</SectionTitle>
            <div
                className="relative grid min-h-[560px] lg:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:items-center lg:gap-5">
                <div className="px-6 py-3 lg:pl-[max(3rem,calc((100vw-1240px)/2+3rem))]">
                    <span
                        className="inline-block rounded-md bg-[#f1e5d4] px-3 py-0.5 font-display text-lg font-semibold text-[#9a6a2e]">Tersedia</span>
                    <h3 className="mt-1 font-display text-[clamp(2.9rem,7vw,3.875rem)] leading-[.95] font-semibold text-[#8f632e]">Lumière
                        Flora Dress</h3>
                    <p className="mt-2 text-xl font-bold text-[#291d14]">Rp 329.000</p>
                    <p className="mt-8 font-display font-semibold text-[#a16c2b] uppercase">Size</p>
                    <p className="mt-2 inline-block rounded-lg bg-[#f4e8d7] px-5 py-2.5 font-display text-2xl leading-none font-semibold text-[#9a6a2e]">All
                        Size</p>
                    <p className="mt-1 font-display text-xs font-medium text-[#9b6f42]">Satu ukuran untuk semua.</p>
                    <p className="mt-7 font-display font-semibold text-[#a16c2b] uppercase">Fit</p>
                    <div className="mt-2.5 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full border border-[#eadfcf] bg-[#eadfcf]"
                  aria-hidden="true">
              <Image src="/icons/dress-svgrepo.svg" alt="" width={30} height={30}/>
            </span>
                        <p className="font-display"><strong className="block text-sm font-bold text-[#9a6a2e]">Oversized
                            Fit</strong><span className="text-xs text-[#b1824a]">Cocok hingga ukuran XL.</span></p>
                    </div>
                    <p className="mt-7 mb-2 font-display font-semibold text-[#a16c2b] uppercase">Qty</p>
                    <QuantitySelector/>
                </div>
                <div
                    className="flex min-h-[420px] items-center justify-center gap-5 overflow-hidden px-5 lg:min-h-[530px]">
                    <Image className="hidden w-[150px] opacity-15 blur-[2px] sm:block"
                           src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=420&q=70"
                           alt="" width={420} height={630} sizes="150px"/>
                    <Image className="hidden w-[200px] opacity-25 sm:block"
                           src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=480&q=72"
                           alt="" width={480} height={720} sizes="200px"/>
                    <Image className="h-auto w-[70vw] max-w-[330px] drop-shadow-[0_16px_14px_rgba(0,0,0,.13)]"
                           src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=90"
                           alt="Lumière Flora Dress" width={700} height={1050} sizes="(min-width: 1024px) 330px, 70vw"/>
                </div>
            </div>
        </section>
    );
}

function BestSeller() {
    return (
        <section className="relative scroll-mt-20 overflow-hidden bg-[#f4f4f4]" id="best">
            <h2 className="absolute top-5 left-4 z-10 font-display text-3xl leading-[.8] font-semibold text-[#9a692f] sm:text-4xl lg:top-8 lg:left-10 lg:text-6xl">Aleya<br/>Home<br/>Dress
            </h2>
            <div className="grid min-h-[430px] grid-cols-3 items-end gap-0 lg:min-h-[630px] lg:gap-7 lg:px-28">
                {bestSellerImages.map((src, index) => (
                    <div className="relative h-[420px] lg:h-[600px]" key={src}>
                        <Image src={src} alt={`Aleya Home Dress ${index + 1}`} fill sizes="33vw"
                               className="object-cover object-top"/>
                    </div>
                ))}
            </div>
            <div
                className="absolute right-0 bottom-[70px] left-0 bg-[linear-gradient(90deg,transparent_0%,rgba(166,134,92,.28)_14%,rgba(166,134,92,.72)_34%,rgba(166,134,92,.72)_100%)] py-3 text-center font-display text-[clamp(4rem,10vw,9.875rem)] leading-[.75] font-medium tracking-[.02em] text-white lg:bottom-[120px] lg:py-4"
                aria-hidden="true">BEST SELLER
            </div>
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
                        <Image
                            className="aspect-[3/4.4] object-cover transition-transform duration-500 hover:scale-[1.02] motion-reduce:transition-none"
                            src={src} alt={alt} width={600} height={880} sizes="(min-width: 1024px) 25vw, 50vw"/>
                    </article>
                ))}
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="scroll-mt-20 border-t border-[#eee2d2] bg-[#fffaf4] py-11" id="footer">
            <div
                className="mx-auto grid w-[min(1240px,calc(100%_-_24px))] grid-cols-1 gap-9 sm:grid-cols-2 lg:w-[min(1240px,calc(100%_-_40px))] lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-10">
                <div>
                    <p className="font-display text-3xl font-bold text-[#9b6b30]">Lady Shopia</p>
                    <p className="mt-2 max-w-sm text-sm leading-7 text-[#6f5a43]">Sleepwear dan fashion yang nyaman
                        dipakai, elegan dilihat, dan dibuat untuk keseharian.</p>
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
            <Header/>
            <main id="top">
                <Hero/>
                <NewestCollection/>
                <BestSeller/>
                <OneSetCollection/>
            </main>
            <Footer/>
        </>
    );
}
