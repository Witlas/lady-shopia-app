"use client";

import Link from "next/link";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return <>
    <button type="button" onClick={() => setOpen(true)} className="grid size-10 cursor-pointer place-items-center text-xl lg:hidden" aria-label="Buka menu">☰</button>
    {open && <>
      <button type="button" onClick={close} className="fixed inset-0 z-[60] bg-[#382c25]/55 lg:hidden" aria-label="Tutup menu" />
      <aside className="fixed inset-y-0 left-0 z-[70] flex min-h-dvh w-[min(84vw,360px)] flex-col border-r border-[#cdbba5] bg-[#fffaf4] p-6 text-[#1b1a18] shadow-2xl lg:hidden" aria-label="Navigasi toko mobile">
        <div className="flex items-center justify-between border-b border-black/10 pb-5"><span className="font-display text-2xl font-semibold">Lady Shopia</span><button type="button" onClick={close} className="grid size-10 place-items-center text-2xl" aria-label="Tutup menu">×</button></div>
        <nav className="mt-6 flex flex-col gap-1 text-sm" onClick={close}>
          <a className="px-3 py-3 hover:bg-[#eadfce]" href="#catalog">Shop All</a>
          <a className="px-3 py-3 hover:bg-[#eadfce]" href="#newest">Dress</a>
          <a className="px-3 py-3 hover:bg-[#eadfce]" href="#oneset">One Set</a>
          <a className="px-3 py-3 hover:bg-[#eadfce]" href="#catalog">Premium Series</a>
          <Link className="px-3 py-3 font-display text-lg font-semibold italic text-[#51a2a4] hover:bg-[#eadfce]" href="/lencir">Lencir</Link>
          <Link className="px-3 py-3 font-display text-lg font-semibold italic text-[#f5a623] hover:bg-[#eadfce]" href="/riber-fest/vol-3">Riber Fest</Link>
          <a className="mt-3 border-t border-black/10 px-3 pt-5 hover:bg-[#eadfce]" href="#footer">Track Order</a>
        </nav>
      </aside>
    </>}
  </>;
}
