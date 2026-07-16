// ── Sova Shopify checkout config ─────────────────────────────────────────────
// Checkout is a plain Shopify CART PERMALINK (no Storefront API). Fill in the
// four placeholders below once your Sova Shopify store is live:
//
//   1. SHOPIFY_DOMAIN     → your store's *.myshopify.com domain
//   2. NURO_VARIANT_ID    → the Nuro product's variant ID (from ?variant= in the
//                           Shopify product URL)
//   3. PROTECTION_VARIANT → the 3-Year Protection Plan variant ID (order bump)
//   4. Discount codes     → create SAVE10 and SAVE20 in Shopify → Discounts
//
// Until real IDs are entered, checkout links will point at a placeholder domain
// and won't resolve. Everything else (cart math, bundle pricing) works locally.

const SHOPIFY_DOMAIN = "SOVA_STORE_DOMAIN.myshopify.com"; // TODO: e.g. "sova.myshopify.com"

// Shopify variant IDs (from the product URLs' ?variant= value).
const VARIANT_IDS: Record<string, string> = {
  nuro: "NURO_VARIANT_ID", // TODO: paste the Nuro variant ID
};
const PROTECTION_PLAN_VARIANT = "PROTECTION_VARIANT_ID"; // TODO: paste the protection-plan variant ID

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

// Builds a Shopify cart permalink, e.g.
//   https://sova.myshopify.com/cart/NURO_VARIANT:2,PROTECTION_VARIANT:1?discount=SAVE10
// which drops the shopper straight into Shopify's cart/checkout with the right
// items, the protection plan (when selected), and the matching bundle discount.
export function createCheckout(
  items: CartItem[],
  includeProtectionPlan = false
): string {
  const productLines = items
    .map((i) => {
      const variant = VARIANT_IDS[i.id];
      return variant ? `${variant}:${i.quantity}` : null;
    })
    .filter((line): line is string => line !== null);

  // Shopify lists the last-added line on top, so put the protection plan first in
  // the permalink and the product last, making the product appear first at checkout.
  const lines: string[] = [];
  if (includeProtectionPlan && productLines.length > 0) {
    lines.push(`${PROTECTION_PLAN_VARIANT}:1`);
  }
  lines.push(...productLines);

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
