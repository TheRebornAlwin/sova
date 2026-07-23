"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import BrandName from "@/components/ui/brand-name";

const discoveryBullets = [
  "Built for shoulders that live up around your ears and a neck that never loosens",
  "Uses real rotating kneading and gentle heat, the two things your muscles actually respond to",
  "Works in a matter of minutes, not another gadget you quietly give up on",
  "Sits right on the couch and becomes part of how you end the day",
];

export default function DiscoverSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-background section-glow-gold">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <ScrollReveal className="min-w-0">
            <div className="aspect-square rounded-3xl overflow-hidden border border-black/[0.06] shadow-lg">
              <Image
                src="/products/nuro-lifestyle-v2.webp"
                alt="A calm evening with the Nuro by Sova"
                width={700}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="min-w-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-gold tracking-tight mb-6">
              The tension ends tonight.
            </h2>
            <p className="text-slate leading-relaxed mb-5">
              <span className="font-medium text-heading">Meet the Nuro</span>, the at-home
              massager from <BrandName className="text-heading" />, for anyone sick of
              carrying the day around in their shoulders with a knot that will not let go.
            </p>
            <div className="flex flex-col items-center md:items-start space-y-3">
              {discoveryBullets.map((point, i) => (
                <p key={i} className="inline-flex gap-2 text-sm text-foreground max-w-[90%] md:max-w-none text-left">
                  <span className="text-gold flex-shrink-0">&#8226;</span>
                  <span>{point}</span>
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
