"use client";

import Link from "next/link";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { formatPrice, getProduct, type Product } from "@/lib/catalog";

export type CartItem = {
  slug: string;
  quantity: number;
  variantSlug?: string;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (product: Product, quantity?: number, variantSlug?: string) => void;
  changeQuantity: (item: CartItem, amount: number) => void;
  removeItem: (item: CartItem) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function itemProduct(item: CartItem) {
  return getProduct(item.slug)!;
}

function itemPrice(item: CartItem) {
  const product = itemProduct(item);
  return product.variants?.find((variant) => variant.slug === item.variantSlug)?.price ?? product.price;
}

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    count: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + itemPrice(item) * item.quantity, 0),
    addItem: (product, quantity = 1, variantSlug) => setItems((current) => {
      const match = current.find((item) => item.slug === product.slug && item.variantSlug === variantSlug);
      if (match) return current.map((item) => item === match ? { ...item, quantity: item.quantity + quantity } : item);
      return [...current, { slug: product.slug, quantity, variantSlug }];
    }),
    changeQuantity: (item, amount) => setItems((current) => current
      .map((entry) => entry === item ? { ...entry, quantity: entry.quantity + amount } : entry)
      .filter((entry) => entry.quantity > 0)),
    removeItem: (item) => setItems((current) => current.filter((entry) => entry !== item)),
  }), [items]);

  return <CartContext.Provider value={value}>{children}<CartDrawer /></CartContext.Provider>;
}

export function useShopCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useShopCart must be used inside ShopProvider");
  return context;
}

export function CartButton() {
  const { count } = useShopCart();
  return (
    <Link href="/checkout" className="relative grid size-10 place-items-center text-[#1b1a18] hover:opacity-60" aria-label={`Buka bag, ${count} item`}>
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6.5 8.5h11l1 12h-13l1-12Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>
      <span className="absolute top-0 right-0 grid size-5 place-items-center rounded-full bg-[#6f2a36] text-[10px] text-white">{count}</span>
    </Link>
  );
}

export function AddToCartButton({ product, variantSlug, quantity = 1 }: { product: Product; variantSlug?: string; quantity?: number }) {
  const { addItem } = useShopCart();
  return <button type="button" onClick={() => addItem(product, quantity, variantSlug)} className="mt-3 min-h-10 w-full bg-[#382c25] px-3 text-xs font-bold tracking-[.12em] text-white uppercase transition-colors hover:bg-[#51a2a4]">+ Keranjang</button>;
}

function CartDrawer() {
  const { items, subtotal, changeQuantity, removeItem } = useShopCart();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openCart = () => setOpen(true);
    window.addEventListener("lady-shopia:open-cart", openCart);
    return () => window.removeEventListener("lady-shopia:open-cart", openCart);
  }, []);

  if (!open) return null;
  return (
    <>
      <button type="button" aria-label="Tutup bag" onClick={() => setOpen(false)} className="fixed inset-0 z-[60] bg-[#382c25]/35" />
      <aside role="dialog" aria-modal="true" aria-label="Bag belanja" className="fixed top-0 right-0 bottom-0 z-[70] flex w-full max-w-md flex-col bg-[#fffaf4] p-6 text-[#382c25] shadow-2xl sm:p-8">
        <div className="flex items-start justify-between border-b border-[#d9cbbb] pb-5"><div><p className="text-[10px] font-bold tracking-[.18em] text-[#51a2a4] uppercase">Lady Shopia</p><h2 className="mt-1 font-display text-4xl font-semibold">Your bag</h2></div><button type="button" onClick={() => setOpen(false)} aria-label="Tutup bag" className="text-2xl">×</button></div>
        <div className="flex-1 overflow-y-auto py-6">{items.length ? items.map((item) => { const product = itemProduct(item); return <div className="flex gap-4 border-b border-[#eadfce] py-4 first:pt-0" key={`${item.slug}-${item.variantSlug}`}><div className="min-w-0 flex-1"><p className="font-display text-xl font-semibold">{product.name}</p><p className="mt-1 text-sm text-[#6f5a43]">{formatPrice(itemPrice(item))}{item.variantSlug ? ` · ${product.variants?.find((variant) => variant.slug === item.variantSlug)?.name}` : ""}</p><div className="mt-3 flex items-center justify-between"><div className="flex items-center border border-[#cdbba5]"><button type="button" onClick={() => changeQuantity(item, -1)} className="px-3 py-1" aria-label={`Kurangi ${product.name}`}>−</button><span className="min-w-8 text-center text-sm">{item.quantity}</span><button type="button" onClick={() => changeQuantity(item, 1)} className="px-3 py-1" aria-label={`Tambah ${product.name}`}>+</button></div><button type="button" onClick={() => removeItem(item)} className="text-xs text-[#6f5a43] underline">Hapus</button></div></div></div>; }) : <p className="text-sm text-[#6f5a43]">Bag masih kosong. Pilih koleksi untuk mulai berbelanja.</p>}</div>
        <div className="border-t border-[#d9cbbb] pt-5"><div className="flex justify-between text-sm"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><Link href="/checkout" onClick={() => setOpen(false)} className={`mt-5 flex min-h-12 items-center justify-between bg-[#382c25] px-5 text-xs font-bold tracking-[.14em] text-white uppercase ${items.length ? "hover:bg-[#51a2a4]" : "pointer-events-none opacity-45"}`}>Checkout <span>→</span></Link></div>
      </aside>
    </>
  );
}

export function openCart() {
  window.dispatchEvent(new Event("lady-shopia:open-cart"));
}
