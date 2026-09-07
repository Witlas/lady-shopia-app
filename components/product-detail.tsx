"use client";

import Image from "next/image";
import { useState } from "react";
import { QuantitySelector } from "@/components/quantity-selector";
import { formatPrice, type Product } from "@/lib/catalog";

export function ProductDetail({ product }: { product: Product }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [variantSlug, setVariantSlug] = useState("");
  const variant = product.variants?.find((item) => item.slug === variantSlug);

  const showImage = (offset: number) => {
    setImageIndex((current) => (current + offset + product.images.length) % product.images.length);
  };

  return (
    <main className="bg-[#fffaf4]" id="top">
      <div className="mx-auto grid min-h-[calc(100svh-86px)] max-w-[1240px] gap-9 px-4 py-8 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,.85fr)] lg:gap-16 lg:py-14">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden bg-[#e9e3dc]">
            <Image
              src={product.images[imageIndex].src}
              alt={product.images[imageIndex].alt}
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
            <span className="absolute top-4 left-4 bg-white/90 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm">
              {imageIndex + 1} / {product.images.length}
            </span>
            {product.images.length > 1 ? (
              <div className="absolute right-4 bottom-4 flex gap-2">
                <button type="button" onClick={() => showImage(-1)} aria-label="Foto sebelumnya" className="grid size-11 place-items-center rounded-full bg-white/90 text-xl shadow-sm hover:bg-white">←</button>
                <button type="button" onClick={() => showImage(1)} aria-label="Foto berikutnya" className="grid size-11 place-items-center rounded-full bg-white/90 text-xl shadow-sm hover:bg-white">→</button>
              </div>
            ) : null}
          </div>
          {product.images.length > 1 ? (
            <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-5">
              {product.images.map((image, index) => (
                <button
                  type="button"
                  className={`relative aspect-[4/5] overflow-hidden border-2 ${index === imageIndex ? "border-[#51a2a4]" : "border-transparent opacity-65 hover:opacity-100"}`}
                  onClick={() => setImageIndex(index)}
                  aria-label={`Lihat foto ${index + 1}: ${image.alt}`}
                  aria-pressed={index === imageIndex}
                  key={image.src}
                >
                  <Image src={image.src} alt="" fill sizes="120px" className="object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="self-center lg:sticky lg:top-32">
          <h1 className="font-display text-5xl leading-[.95] font-semibold text-[#382c25] sm:text-6xl">{product.name}</h1>
          <p className="mt-5 text-2xl font-bold text-[#95682f]" aria-live="polite">
            {formatPrice(variant?.price ?? product.price)}
          </p>
          <p className="mt-6 max-w-lg text-sm leading-7 text-[#6f5a43] sm:text-base">{product.description}</p>

          <div className="mt-9 border-y border-[#d9cbbb] py-7">
            {product.variants?.length ? (
              <label className="block">
                <span className="mb-2 block text-xs font-bold tracking-[.16em] text-[#8f632e] uppercase">Pilih varian</span>
                <select
                  value={variantSlug}
                  onChange={(event) => setVariantSlug(event.target.value)}
                  className="min-h-12 w-full appearance-none border border-[#cdbba5] bg-white px-4 text-sm font-semibold text-[#382c25] focus:outline-2 focus:outline-offset-2 focus:outline-[#95682f]"
                >
                  <option value="" disabled>Pilih sebelum melanjutkan</option>
                  {product.variants.map((item) => (
                    <option value={item.slug} key={item.slug}>{item.name} — {formatPrice(item.price)}</option>
                  ))}
                </select>
              </label>
            ) : (
              <div>
                <p className="text-xs font-bold tracking-[.16em] text-[#8f632e] uppercase">Varian</p>
                <p className="mt-2 text-sm font-semibold text-[#382c25]">Satu pilihan</p>
              </div>
            )}

            <div className="mt-7">
              <p className="mb-2 text-xs font-bold tracking-[.16em] text-[#8f632e] uppercase">Jumlah</p>
              <QuantitySelector />
            </div>
          </div>

          <p className="mt-5 text-sm text-[#6f5a43]">
            {product.variants?.length && !variant ? "Pilih varian untuk melanjutkan pesanan." : "Pilihanmu siap untuk dilanjutkan ke pemesanan."}
          </p>
        </div>
      </div>
    </main>
  );
}
