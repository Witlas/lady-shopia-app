"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { OrderForm } from "@/components/order-form";
import { formatPrice, type Product } from "@/lib/catalog";

export function ProductDetail({ product }: { product: Product }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [variantSlug, setVariantSlug] = useState("");
  const variant = product.variants?.find((item) => item.slug === variantSlug);

  const showImage = (offset: number) => {
    setImageIndex((current) => (current + offset + product.images.length) % product.images.length);
  };

  return (
    <main className="bg-[#f6f1e8]" id="top">
      <div className="mx-auto max-w-[1500px] px-5 py-8 md:px-9 lg:py-10">
        <Link href="/#catalog" className="mb-8 inline-flex items-center gap-2 text-sm text-[#1b1a18] hover:opacity-60">← Kembali ke katalog</Link>
        <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
        <div className="grid grid-cols-[65px_1fr] gap-4 sm:grid-cols-[78px_1fr]">
          <div className="space-y-3">
            {product.images.map((image, index) => (
              <button type="button" className={`relative aspect-[3/4] w-full overflow-hidden border ${index === imageIndex ? "border-[#1b1a18]" : "border-transparent opacity-65 hover:opacity-100"}`} onClick={() => setImageIndex(index)} aria-label={`Lihat foto ${index + 1}: ${image.alt}`} aria-pressed={index === imageIndex} key={image.src}>
                <Image src={image.src} alt="" fill sizes="80px" className="object-cover"/>
              </button>
            ))}
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-[#e9e0d3]">
            <Image
              src={product.images[imageIndex].src}
              alt={product.images[imageIndex].alt}
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
            {product.images.length > 1 ? (
              <div className="absolute right-4 bottom-4 flex gap-2">
                <button type="button" onClick={() => showImage(-1)} aria-label="Foto sebelumnya" className="grid size-11 place-items-center rounded-full bg-[#f6f1e8]/90 text-xl shadow-sm hover:bg-white">←</button>
                <button type="button" onClick={() => showImage(1)} aria-label="Foto berikutnya" className="grid size-11 place-items-center rounded-full bg-[#f6f1e8]/90 text-xl shadow-sm hover:bg-white">→</button>
              </div>
            ) : null}
          </div>
        </div>

        <div className="lg:pt-8">
          <div className="flex justify-between text-xs uppercase tracking-[.16em] text-black/45"><span>Lady Shopia Collection</span><span>{product.slug}</span></div>
          <h1 className="mt-5 font-display text-5xl leading-[.95] font-semibold text-[#382c25] sm:text-6xl">{product.name}</h1>
          <p className="mt-5 text-2xl font-bold text-[#382c25]" aria-live="polite">
            {formatPrice(variant?.price ?? product.price)}
          </p>
          <p className="mt-7 max-w-lg text-sm leading-7 text-black/60 sm:text-base">{product.description}</p>

          <div className="mt-10 border-y border-black/10 py-7">
            {product.variants?.length ? (
              <div><div className="mb-3 flex justify-between"><span className="text-sm">Varian</span><span className="text-xs text-green-700">Tersedia</span></div><div className="grid grid-cols-2 gap-2">{product.variants.map((item) => <button type="button" key={item.slug} onClick={() => setVariantSlug(item.slug)} className={`border p-4 text-sm ${variantSlug === item.slug ? "border-2 border-[#1b1a18]" : "border-black/15"}`}>{item.name}</button>)}</div></div>
            ) : (
              <div className="flex justify-between text-sm"><span>Varian</span><span className="text-green-700">Tersedia</span></div>
            )}

            <div className="mt-7">
              <p className="mb-3 text-sm">Jumlah</p>
              <OrderForm
                productSlug={product.slug}
                variantSlug={variantSlug || undefined}
                disabled={Boolean(product.variants?.length && !variant)}
              />
            </div>
          </div>

          <div className="mt-10 divide-y divide-black/10 border-y border-black/10"><details className="py-5" open><summary className="cursor-pointer font-medium">Detail produk</summary><p className="mt-3 text-sm leading-6 text-black/55">Bahan lembut, siluet longgar, dan potongan ringan untuk menemani aktivitas sehari-hari.</p></details><details className="py-5"><summary className="cursor-pointer font-medium">Pengiriman & retur</summary><p className="mt-3 text-sm leading-6 text-black/55">Pesanan diproses dalam 1–2 hari kerja. Biaya pengiriman dihitung saat checkout.</p></details></div>
        </div>
        </div>
      </div>
    </main>
  );
}
