"use client";

import { useCart } from "@/contexts/cart-context";
import { heroProduct } from "@/lib/data";

/**
 * A sage-green add-to-cart button dropped at the end of a section. Adds one
 * Nuro to the cart, which auto-opens the cart drawer (see CartProvider.addItem).
 * Same styling as the buy-box primary button so it reads as one system.
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
      <button
        onClick={handleClick}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gold text-white font-semibold text-base px-8 py-3.5 shadow-[0_6px_28px_rgba(138,154,130,0.28)] hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
      >
        {label}
        <svg
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
      </button>
    </div>
  );
}
