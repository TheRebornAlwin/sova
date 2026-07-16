"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import TextGradient from "@/components/ui/text-gradient";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import MagneticButton from "@/components/ui/magnetic-button";
import ProductCard from "@/components/product/product-card";
import { products } from "@/lib/data";

export default function TrackOrderPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Track Order
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-heading tracking-tight mb-4">
              Track your <TextGradient variant="gold">order</TextGradient>
            </h1>
            <p className="text-slate max-w-xl mx-auto">
              Enter your order details below to check the status of your shipment.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <GlassmorphismCard className="mb-12">
            {submitted ? (
              <p className="text-slate text-center py-6">
                Thanks. If that order exists, we&apos;ll email its latest tracking
                status to you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-heading mb-1.5">Order Number</label>
                  <input
                    type="text"
                    placeholder="#1234"
                    className="w-full rounded-xl bg-surface-raised border border-black/[0.08] px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-heading mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl bg-surface-raised border border-black/[0.08] px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-gold"
                  />
                </div>
                <MagneticButton variant="primary" size="lg" type="submit" className="w-full">
                  Track Order
                </MagneticButton>
                <p className="text-xs text-muted text-center">
                  You can also track your order using the link in your shipping
                  confirmation email.
                </p>
              </form>
            )}
          </GlassmorphismCard>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-heading text-xl font-bold text-heading mb-6 text-center">
            Recommended for you
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
