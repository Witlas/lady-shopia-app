import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { getProduct, getProductSeries, products } from "@/lib/catalog";
import { CartButton } from "@/components/shop-cart";

type ProductPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return product ? { title: `${product.name} | Lady Shopia`, description: product.description } : {};
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const series = getProductSeries(product.slug);

  return (
    <>
      <header className="border-b border-[#eadfce] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-9">
          <Link href="/" aria-label="Lady Shopia — kembali ke beranda"><Image src="/main_logo.webp" alt="Lady Shopia" width={9212} height={7615} className="h-12 w-auto" /></Link>
          <div className="flex items-center gap-5"><div className="text-right text-[10px] font-bold tracking-[.16em] text-[#51a2a4] uppercase">{series?.name ?? "Koleksi pilihan"}</div><CartButton/></div>
        </div>
      </header>
      <ProductDetail product={product} />
      <div className="border-t border-[#eadfce] bg-white py-8 text-center">
        <Link href="/#catalog" className="text-xs font-bold tracking-[.16em] text-[#95682f] uppercase">← Kembali ke katalog</Link>
      </div>
    </>
  );
}
