import assert from "node:assert/strict";
import test from "node:test";
import { buildWhatsAppOrderUrl } from "../lib/whatsapp-order.mjs";

test("builds an encoded WhatsApp order for the shop number", () => {
  const url = new URL(buildWhatsAppOrderUrl({
    name: "Sofia",
    phone: "085750003478",
    address: "Jl. Mawar 1",
    shipping: "Kurir",
    item: "Lumière Flora Dress — All Size",
    quantity: 2,
    price: "Rp 329.000",
    note: "Warna biru",
  }));

  assert.equal(url.origin, "https://api.whatsapp.com");
  assert.equal(url.pathname, "/send");
  assert.equal(url.searchParams.get("phone"), "6285750003478");
  assert.match(url.searchParams.get("text"), /^𝗙𝗢𝗥𝗠𝗔𝗧 𝗣𝗘𝗦𝗔𝗡𝗔𝗡 𝗟𝗔𝗗𝗬 𝗦𝗛𝗢𝗣𝗜𝗔/);
  assert.match(url.searchParams.get("text"), /✨🌸/);
  assert.match(url.searchParams.get("text"), /Nama: Sofia/);
  assert.match(url.searchParams.get("text"), /Jumlah: 2/);
  assert.match(url.searchParams.get("text"), /Catatan: Warna biru/);
});
