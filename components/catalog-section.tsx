import Image from "next/image";
import Link from "next/link";
import {
  catalog,
  formatPriceRange,
  productPriceRange,
  seriesPriceRange,
  type Product,
} from "@/lib/catalog";

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link href={`/produk/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#e9e3dc]">
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            fill
            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
          />
          {product.images.length > 1 ? (
            <span className="absolute right-3 bottom-3 bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-[.12em] uppercase backdrop-blur-sm">
              {product.images.length} foto
            </span>
          ) : null}
        </div>
        <div className="flex items-start justify-between gap-3 border-b border-[#d9cbbb] py-4">
          <div>
            <h4 className="font-display text-xl font-semibold text-[#382c25] sm:text-2xl">
              {product.name}
            </h4>
            <p className="mt-1 text-sm font-semibold text-[#946329]">
              {formatPriceRange(productPriceRange(product))}
            </p>
          </div>
          <span className="mt-1 text-xl transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">
            →
          </span>
        </div>
      </Link>
    </article>
  );
}

export function CatalogSection() {
  return (
    <section className="scroll-mt-20 bg-[#fffaf4] px-4 py-16 sm:px-8 lg:py-24" id="catalog">
      <div className="mx-auto max-w-[1240px]">
        <p className="text-center text-[11px] font-semibold tracking-[.24em] text-[#51a2a4] uppercase">
          Pilih koleksimu
        </p>
        <h2 className="mt-3 text-center font-display text-4xl font-semibold text-[#8f632e] sm:text-6xl">
          Katalog Lady Shopia
        </h2>

        {catalog.series.map((series) => (
          <div className="mt-14" key={series.slug}>
            <div className="mb-7 grid gap-3 border-y border-[#d9cbbb] py-5 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="text-[10px] font-bold tracking-[.18em] text-[#51a2a4] uppercase">Series</p>
                <h3 className="mt-1 font-display text-3xl font-semibold text-[#382c25] sm:text-4xl">{series.name}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6f5a43]">{series.description}</p>
              </div>
              <p className="font-display text-2xl font-semibold text-[#95682f]">
                {formatPriceRange(seriesPriceRange(series))}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:grid-cols-3 sm:gap-x-5 lg:gap-x-8">
              {series.products.map((product) => <ProductCard product={product} key={product.slug} />)}
            </div>
          </div>
        ))}

        {catalog.products.length ? (
          <div className="mt-20">
            <div className="mb-7 border-y border-[#d9cbbb] py-5">
              <h3 className="font-display text-3xl font-semibold text-[#382c25] sm:text-4xl">Koleksi</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-8">
              {catalog.products.map((product) => <ProductCard product={product} key={product.slug} />)}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
