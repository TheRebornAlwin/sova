"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import TextGradient from "@/components/ui/text-gradient";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";

const cards = [
  {
    icon: "📦",
    title: "Processing Time",
    body: "All orders are processed within 1-3 business days after payment confirmation.",
  },
  {
    icon: "🚚",
    title: "Delivery Time",
    body: "Most US orders arrive within 3-7 business days. You'll get a tracking number by email the moment it ships.",
  },
  {
    icon: "✨",
    title: "Free US Shipping",
    body: "Every US order ships free with tracking. No minimum, no surprise add-ons or shipping protection at checkout.",
  },
  {
    icon: "🛡",
    title: "If Something Goes Wrong",
    body: "If your package is lost or badly delayed, email us and we'll send a replacement or refund you in full.",
  },
];

export default function ShippingPage() {
  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Shipping
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-heading tracking-tight mb-4">
              Shipping <TextGradient variant="gold">Information</TextGradient>
            </h1>
            <p className="text-slate max-w-xl mx-auto">
              Free US shipping with full tracking on every order.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {cards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1} className="min-w-0">
              <GlassmorphismCard className="h-full">
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="font-heading text-lg font-bold text-heading mb-2">{c.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{c.body}</p>
              </GlassmorphismCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-sm text-slate">
            Questions about shipping? Email us at{" "}
            <a href="mailto:shopsovarelief@gmail.com" className="text-gold hover:underline font-medium">
              shopsovarelief@gmail.com
            </a>
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
