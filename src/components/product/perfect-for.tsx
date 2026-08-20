"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import BrandName from "@/components/ui/brand-name";

const bulletPoints = [
  "Your shoulders creep up around your ears and you don't notice until they ache",
  "You're at a screen all day and feel it in your neck by the evening",
  "You carry your stress in your neck and shoulders, and always have",
  "You've tried stretches, hot showers, and cheap gadgets, and nothing lasts",
  "You'd get a real massage if it didn't cost $90 and take a whole appointment",
];

const benefitBullets = [
  "Real relief from your own couch, whenever you need it",
  "No appointment, no $90 bill, nothing to subscribe to",
  "The deep knot kneaded loose",
];

export default function PerfectFor() {
  return (
    <section className="py-20 md:py-28 px-6 bg-surface section-glow-gold cv-section">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <ScrollReveal className="min-w-0">
            <div className="aspect-square rounded-3xl overflow-hidden border border-black/[0.06] shadow-lg">
              <Image
                src="/products/nuro-who-its-for-v2.webp"
                alt="Who the Nuro is for"
                width={700}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="min-w-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-heading tracking-tight mb-6">
              Who is this for?
            </h2>
            <p className="text-slate leading-relaxed mb-5">
              If any of this sounds like you:
            </p>
            <div className="flex flex-col items-stretch md:items-start gap-2.5 md:gap-3 mb-8">
              {bulletPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-foreground text-left rounded-2xl md:rounded-none bg-gold/[0.05] md:bg-transparent border border-gold/15 md:border-0 p-3.5 md:p-0"
                >
                  <span className="text-gold flex-shrink-0">&#8226;</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <p className="text-slate leading-relaxed mb-5">
              Then <BrandName className="text-heading" /> made the Nuro for you.
            </p>
            <p className="text-slate leading-relaxed mb-5">
              Or for someone whose shoulders carry their whole week, a partner, a
              parent, anyone who never stops. The Nuro is the kind of gift they&apos;d
              never buy themselves.
            </p>
            <div className="flex flex-col items-stretch md:items-start gap-2.5 md:gap-3">
              {benefitBullets.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-left rounded-2xl md:rounded-none bg-gold/[0.05] md:bg-transparent border border-gold/15 md:border-0 p-3.5 md:p-0"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-auto md:h-auto rounded-full bg-gold/12 md:bg-transparent text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-sm text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
