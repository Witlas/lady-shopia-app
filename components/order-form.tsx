"use client";

import { useState } from "react";
import { QuantitySelector } from "@/components/quantity-selector";
import { getProduct } from "@/lib/catalog";
import { useShopCart, openCart } from "@/components/shop-cart";

export function OrderForm({
  variantSlug,
  productSlug,
  disabled = false,
}: {
  variantSlug?: string;
  productSlug: string;
  disabled?: boolean;
}) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useShopCart();

  return (
    <div>
      <QuantitySelector quantity={quantity} onChange={setQuantity} />
      <button
        type="button"
        onClick={() => {
          const product = productSlug ? getProduct(productSlug) : undefined;
          if (product) addItem(product, quantity, variantSlug);
          openCart();
        }}
        disabled={disabled}
        aria-haspopup="dialog"
        className="mt-5 flex min-h-12 w-full items-center justify-between bg-[#382c25] px-5 py-3 text-xs font-bold tracking-[.14em] text-white uppercase transition-colors hover:bg-[#51a2a4] disabled:cursor-not-allowed disabled:opacity-45"
      >
        + Keranjang <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
