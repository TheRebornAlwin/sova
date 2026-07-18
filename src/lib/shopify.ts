// ── Sova Shopify checkout config ─────────────────────────────────────────────
// Checkout is a plain Shopify CART PERMALINK (no Storefront API).
//
// For the 2-pack / 3-pack bundle discounts to actually apply at checkout, create
// two code discounts in Shopify -> Discounts: SAVE10 (10% off the Nuro) and
// SAVE20 (20% off). If they don't exist, Shopify silently ignores the code and
// multi-pack buyers are charged full price per unit.

const SHOPIFY_DOMAIN = "z0asix-40.myshopify.com";

// Shopify variant IDs (from the product's variants[].id).
const VARIANT_IDS: Record<string, string> = {
  nuro: "59636104626462",
};

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

// Builds a Shopify cart permalink, e.g.
//   https://z0asix-40.myshopify.com/cart/59636104626462:2?discount=SAVE10
// which drops the shopper straight into Shopify's cart/checkout with the right
// items and the matching bundle discount.
export function createCheckout(items: CartItem[]): string {
  const lines = items
    .map((i) => {
      const variant = VARIANT_IDS[i.id];
      return variant ? `${variant}:${i.quantity}` : null;
    })
    .filter((line): line is string => line !== null);

  let url = `https://${SHOPIFY_DOMAIN}/cart/${lines.join(",")}`;

  // Carry the bundle discount over to Shopify via a code (create SAVE10 / SAVE20
  // in Shopify Discounts). Invalid/missing codes are simply ignored by Shopify.
  const nuroQty = items
    .filter((i) => i.id === "nuro")
    .reduce((sum, i) => sum + i.quantity, 0);
  const discountCode = nuroQty >= 3 ? "SAVE20" : nuroQty >= 2 ? "SAVE10" : "";
  if (discountCode) url += `?discount=${discountCode}`;

  return url;
}
