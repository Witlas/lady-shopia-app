"use client";

import { FormEvent, useRef, useState } from "react";
import { QuantitySelector } from "@/components/quantity-selector";
import { formatPrice } from "@/lib/catalog";
import { buildWhatsAppOrderUrl } from "@/lib/whatsapp-order.mjs";

export function OrderForm({
  productName,
  variantName,
  price,
  disabled = false,
}: {
  productName: string;
  variantName?: string;
  price: number;
  disabled?: boolean;
}) {
  const [quantity, setQuantity] = useState(1);
  const dialogRef = useRef<HTMLDialogElement>(null);

  function order(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    window.location.href = buildWhatsAppOrderUrl({
      name: data.get("name"),
      phone: data.get("phone"),
      address: data.get("address"),
      shipping: data.get("shipping"),
      item: variantName ? `${productName} — ${variantName}` : productName,
      quantity,
      price: formatPrice(price),
      note: data.get("note"),
    });
  }

  const fieldClass = "min-h-12 w-full border border-[#cdbba5] bg-white px-4 text-sm text-[#382c25] focus:outline-2 focus:outline-offset-2 focus:outline-[#95682f]";

  return (
    <div>
      <QuantitySelector quantity={quantity} onChange={setQuantity} />
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        disabled={disabled}
        aria-haspopup="dialog"
        className="mt-5 flex min-h-12 w-full items-center justify-between bg-[#382c25] px-5 py-3 text-xs font-bold tracking-[.14em] text-white uppercase transition-colors hover:bg-[#51a2a4] disabled:cursor-not-allowed disabled:opacity-45"
      >
        Pesan via WhatsApp <span aria-hidden="true">→</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`Form pemesanan ${productName}`}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto border border-[#d9cbbb] bg-[#fffaf4]/95 p-0 text-[#382c25] shadow-2xl backdrop:bg-[#382c25]/35 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-start justify-between gap-6 border-b border-[#d9cbbb] px-5 py-4 sm:px-6">
          <div>
            <p className="text-[10px] font-bold tracking-[.18em] text-[#51a2a4] uppercase">Pesanan WhatsApp</p>
            <h2 className="mt-1 font-display text-2xl font-semibold">{productName}</h2>
          </div>
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Tutup form pesanan" className="grid size-10 shrink-0 place-items-center text-2xl text-[#6f5a43] hover:bg-white/70">×</button>
        </div>
        <form onSubmit={order} className="grid gap-3 p-5 sm:grid-cols-2 sm:p-6">
          <label className="text-xs font-bold tracking-[.1em] text-[#8f632e] uppercase">
            Nama
            <input name="name" required autoComplete="name" className={`${fieldClass} mt-2 font-normal tracking-normal normal-case`} />
          </label>
          <label className="text-xs font-bold tracking-[.1em] text-[#8f632e] uppercase">
            No. HP
            <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={`${fieldClass} mt-2 font-normal tracking-normal normal-case`} />
          </label>
          <label className="text-xs font-bold tracking-[.1em] text-[#8f632e] uppercase sm:col-span-2">
            Alamat lengkap
            <textarea name="address" required autoComplete="street-address" rows={3} className={`${fieldClass} mt-2 py-3 font-normal tracking-normal normal-case`} />
          </label>
          <label className="text-xs font-bold tracking-[.1em] text-[#8f632e] uppercase sm:col-span-2">
            Pengiriman
            <select name="shipping" required defaultValue="" className={`${fieldClass} mt-2 font-normal tracking-normal normal-case`}>
              <option value="" disabled>Pilih kurir, ekspedisi, atau ambil sendiri</option>
              <option>Kurir</option>
              <option>Ekspedisi</option>
              <option>Ambil sendiri</option>
            </select>
          </label>
          <label className="text-xs font-bold tracking-[.1em] text-[#8f632e] uppercase sm:col-span-2">
            Catatan barang (opsional)
            <textarea name="note" rows={2} placeholder="Warna atau catatan lainnya" className={`${fieldClass} mt-2 py-3 font-normal tracking-normal normal-case`} />
          </label>
          <button type="submit" className="min-h-12 bg-[#51a2a4] px-5 py-3 text-xs font-bold tracking-[.14em] text-white uppercase hover:bg-[#382c25] sm:col-span-2">
            Kirim detail pesanan
          </button>
        </form>
      </dialog>
    </div>
  );
}
