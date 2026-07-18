"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/scroll-reveal";
import MagneticButton from "@/components/ui/magnetic-button";
import { useCart } from "@/contexts/cart-context";
import { createCheckout } from "@/lib/shopify";

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    total,
    unitPrice,
    lineDiscount,
  } = useCart();

  const handleCheckout = () => {
    window.location.href = createCheckout(items);
  };

  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-heading tracking-tight mb-8 text-center md:text-left">
            Your Cart
          </h1>
        </ScrollReveal>

        {items.length === 0 ? (
          <ScrollReveal>
            <div className="text-center py-16 glass-card rounded-2xl">
              <p className="text-muted mb-6">Your cart is empty</p>
              <MagneticButton variant="primary" href="/shop/">
                Continue Shopping
              </MagneticButton>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="glass-card rounded-2xl p-4 flex gap-4 items-center"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-black/[0.05]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${item.id}/`}
                      className="font-semibold text-heading hover:text-gold transition-colors"
                    >
                      {item.title}
                    </Link>
                    <div className="flex items-center gap-2 flex-wrap mt-1">
                      <span className="text-gold font-medium">
                        ${unitPrice(item).toFixed(2)}
                      </span>
                      {lineDiscount(item) > 0 && (
                        <>
                          <span className="text-xs text-lavender line-through">
                            ${item.price.toFixed(2)}
                          </span>
                          <span className="px-2 py-0.5 text-[10px] font-bold bg-gold text-white rounded-full">
                            {lineDiscount(item)}% OFF
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full border border-black/10 flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium w-6 text-center text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full border border-black/10 flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-colors cursor-pointer"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-muted hover:text-red-400 transition-colors cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-muted">Subtotal</span>
                  <span className="text-lg font-bold text-heading">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-muted mb-4">Shipping calculated at checkout</p>
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
