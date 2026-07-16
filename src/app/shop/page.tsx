"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import TextGradient from "@/components/ui/text-gradient";
import ProductCard from "@/components/product/product-card";
import { products } from "@/lib/data";

export default function ShopPage() {
  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Shop
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-heading tracking-tight mb-4">
              Our <TextGradient variant="gold">Collection</TextGradient>
            </h1>
            <p className="text-slate max-w-xl mx-auto">
              Premium heated shiatsu kneading, built to work the tension out of your
              neck and shoulders like a real therapist's hands.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {products.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.1} className="min-w-0">
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
