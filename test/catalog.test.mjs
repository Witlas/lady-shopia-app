import assert from "node:assert/strict";
import test from "node:test";
import catalog from "../data/catalog.json" with { type: "json" };

const products = [...catalog.series.flatMap((series) => series.products), ...catalog.products];

test("catalog slugs are unique and every product has an image", () => {
  assert.equal(new Set(products.map((product) => product.slug)).size, products.length);
  assert.ok(products.every((product) => product.images.length > 0));
});

test("Blue Fall price range comes from product choices", () => {
  const series = catalog.series.find((item) => item.slug === "blue-fall");
  const prices = series.products.flatMap((product) =>
    product.variants?.map((variant) => variant.price) ?? [product.price],
  );
  assert.deepEqual([Math.min(...prices), Math.max(...prices)], [89000, 95000]);
});
