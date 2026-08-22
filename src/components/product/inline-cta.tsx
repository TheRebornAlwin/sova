"use client";

import { useCart } from "@/contexts/cart-context";
import { heroProduct } from "@/lib/data";

/**
 * A sage-green add-to-cart button dropped at the end of a section. Adds one
 * Nuro to the cart, which auto-opens the cart drawer (see CartProvider.addItem).
 * Same styling as the buy-box primary button so it reads as one system, with a
 * soft breathing glow + highlight ring so it pulls the eye without shouting.
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
      <div className="group relative inline-flex">
        {/* Soft breathing glow behind the button */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-2 rounded-full bg-gold/40 blur-xl opacity-60 animate-[glow-pulse_3.8s_ease-in-out_infinite] group-hover:opacity-90 transition-opacity duration-300"
        />
        <button
          onClick={handleClick}
          className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold text-white font-semibold text-base px-8 py-3.5 ring-1 ring-inset ring-white/25 shadow-[0_8px_30px_rgba(138,154,130,0.45)] hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_12px_38px_rgba(138,154,130,0.55)] transition-all duration-300 cursor-pointer"
        >
          {/* Top highlight sheen */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/25 to-transparent"
          />
          {/* Hover shine sweep */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-out"
          />
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
        </button>
      </div>
    </div>
  );
}
