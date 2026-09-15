const WHATSAPP_NUMBER = "6285750003478";

export function buildWhatsAppOrderUrl({ name, phone, address, shipping, item, quantity, price, note }) {
  const message = [
    "𝗙𝗢𝗥𝗠𝗔𝗧 𝗣𝗘𝗦𝗔𝗡𝗔𝗡 𝗟𝗔𝗗𝗬 𝗦𝗛𝗢𝗣𝗜𝗔  ✨🌸",
    "",
    `Nama: ${name}`,
    `No. HP: ${phone}`,
    `Alamat lengkap: ${address}`,
    `Pengiriman: ${shipping}`,
    "",
    `Barang: ${item}`,
    `Jumlah: ${quantity}`,
    `Harga: ${price}`,
    note && `Catatan: ${note}`,
    "",
    "Mohon konfirmasi ketersediaan dan total pembayarannya. Terima kasih ✨🌸",
  ].filter(Boolean).join("\n");

  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}
