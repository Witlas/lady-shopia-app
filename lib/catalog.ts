import catalogData from "@/data/catalog.json";

export type CatalogImage = { src: string; alt: string };
export type ProductVariant = { slug: string; name: string; price: number };
export type Product = {
  slug: string;
  name: string;
  description: string;
  price: number;
  images: CatalogImage[];
  variants?: ProductVariant[];
};
export type Series = {
  slug: string;
  name: string;
  description: string;
  products: Product[];
};

export const catalog = catalogData as {
  series: Series[];
  products: Product[];
};

export const products = [
  ...catalog.series.flatMap((series) => series.products),
  ...catalog.products,
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

export function productPriceRange(product: Product) {
  const prices = product.variants?.map((variant) => variant.price) ?? [product.price];
  return [Math.min(...prices), Math.max(...prices)] as const;
}

export function seriesPriceRange(series: Series) {
  const prices = series.products.flatMap((product) => productPriceRange(product));
  return [Math.min(...prices), Math.max(...prices)] as const;
}

export function formatPriceRange([minimum, maximum]: readonly [number, number]) {
  return minimum === maximum
    ? formatPrice(minimum)
    : `${formatPrice(minimum)}–${formatPrice(maximum).replace("Rp", "")}`;
}

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getProductSeries = (slug: string) =>
  catalog.series.find((series) =>
    series.products.some((product) => product.slug === slug),
  );
