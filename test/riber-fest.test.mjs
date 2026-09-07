import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";
import collection from "../data/riber-fest.json" with { type: "json" };

test("Riber sample catalog has stable destinations, usable images, and numeric prices", () => {
  assert.ok(collection.products.length > 0);
  for (const key of ["id", "slug"]) {
    assert.equal(new Set(collection.products.map((product) => product[key])).size, collection.products.length);
  }
  for (const product of collection.products) {
    assert.match(product.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(product.name && product.description && product.images.length);
    for (const price of [product.price, ...product.variants.map((variant) => variant.price)]) {
      assert.ok(Number.isSafeInteger(price) && price >= 0);
    }
    for (const image of product.images) {
      assert.ok(image.alt);
      assert.ok(existsSync(new URL(`../public${image.src}`, import.meta.url)));
    }
    assert.equal(new Set(product.variants.map((variant) => variant.slug)).size, product.variants.length);
  }
});
