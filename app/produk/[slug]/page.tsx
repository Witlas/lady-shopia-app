import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { getProduct, getProductSeries, products } from "@/lib/catalog";

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
      <header className="border-b border-[#eadfce] bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-4 sm:px-8">
          <Link href="/" className="font-display text-2xl font-bold text-[#95682f]">Lady Shopia</Link>
          <div className="text-right text-[10px] font-bold tracking-[.16em] text-[#51a2a4] uppercase">
            {series?.name ?? "Koleksi pilihan"}
          </div>
        </div>
      </header>
      <ProductDetail product={product} />
      <div className="border-t border-[#eadfce] bg-white py-8 text-center">
        <Link href="/#catalog" className="text-xs font-bold tracking-[.16em] text-[#95682f] uppercase">← Kembali ke katalog</Link>
      </div>
    </>
  );
}
