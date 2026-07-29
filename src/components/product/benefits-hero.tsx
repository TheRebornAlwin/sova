"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";

const benefits = [
  "Work the knot loose at the base of your neck, the one you can never reach",
  "Ease the tightness across your shoulders before it turns into a headache",
  "Feel your shoulders drop down from around your ears",
  "Get that massage-therapist feeling without the $90 and the appointment, each time",
  "End the day loose and calm instead of wound up",
];

export default function BenefitsHero() {
  return (
    <section className="py-20 md:py-28 px-6 bg-surface cv-section">
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
            {/* On mobile each point sits in its own soft card so it reads as
                distinct, digestible chunks instead of text-after-text. Desktop
                keeps the clean inline bullets. */}
            <div className="flex flex-col items-stretch md:items-start gap-2.5 md:gap-3">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-left rounded-2xl md:rounded-none bg-gold/[0.05] md:bg-transparent border border-gold/15 md:border-0 p-3.5 md:p-0"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-auto md:h-auto rounded-full bg-gold/12 md:bg-transparent text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
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
                src="/products/nuro-benefits-v2.webp"
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
