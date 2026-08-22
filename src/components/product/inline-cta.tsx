"use client";

import { useCart } from "@/contexts/cart-context";
import { heroProduct } from "@/lib/data";
import CtaButton from "@/components/product/cta-button";

/**
 * A sage-green add-to-cart button dropped at the end of a section. Adds one
 * Nuro to the cart, which auto-opens the cart drawer (see CartProvider.addItem).
 * Uses the shared CtaButton so it matches the buy-box button exactly.
 */
export default function InlineCTA({ label }: { label: string }) {
  const { addItem } = useCart();

  const handleClick = () => {
    addItem({
      id: heroProduct.id,
      title: heroProduct.title,
      price: heroProduct.price,
      image: heroProduct.images[0],
    });
  };

  return (
    <div className="mt-12 flex justify-center">
      <CtaButton onClick={handleClick}>
        <span className="relative">{label}</span>
        <svg
          className="relative transition-transform duration-300 group-hover:translate-x-0.5"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </CtaButton>
    </div>
  );
}
