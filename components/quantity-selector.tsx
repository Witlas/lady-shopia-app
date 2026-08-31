"use client";

import { useState } from "react";

export function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="inline-flex items-center gap-5 rounded-lg bg-[#f3e8da] px-3.5 py-2">
      <button
        type="button"
        className="grid size-7 place-items-center text-xl text-[#4b3a2a] disabled:cursor-not-allowed disabled:opacity-40"
        onClick={() => setQuantity((current) => Math.max(1, current - 1))}
        disabled={quantity === 1}
        aria-label="Kurangi jumlah"
      >
        −
      </button>
      <output className="min-w-5 text-center text-xl font-bold" aria-live="polite">
        {quantity}
      </output>
      <button
        type="button"
        className="grid size-7 place-items-center text-xl text-[#4b3a2a]"
        onClick={() => setQuantity((current) => current + 1)}
        aria-label="Tambah jumlah"
      >
        +
      </button>
    </div>
  );
}
