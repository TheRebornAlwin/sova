"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";

const benefits = [
  "Work the knot loose at the base of your neck, the one you can never reach",
  "Ease the tightness across your shoulders before it turns into a headache",
  "Feel your shoulders drop down from around your ears",
  "Get that massage-therapist feeling without the $90 and the appointment",
  "End the day loose and calm instead of wound up",
];

export default function BenefitsHero() {
  return (
    <section className="py-20 md:py-28 px-6 bg-surface">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text */}
        <div className="text-center md:text-left order-2 md:order-1">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-heading tracking-tight mb-6">
              What it actually does for you.
            </h2>
            <p className="text-slate leading-relaxed mb-8">
              Your shoulders have been holding tension for the last fourteen hours.
              Ten minutes of real kneading gives your body the release it&apos;s been
              asking for, so you can:
            </p>
            <div className="flex flex-col items-center md:items-start space-y-3">
              {benefits.map((benefit, i) => (
                <div key={i} className="inline-flex items-center gap-3 max-w-[90%] md:max-w-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span className="text-[15px] font-medium text-heading">{benefit}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-black/[0.06] shadow-lg">
              <Image
                src="/products/nuro-benefits.webp"
                alt="Nuro heated shiatsu neck and shoulder massager"
                width={700}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
