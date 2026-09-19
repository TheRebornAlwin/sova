"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import InlineCTA from "@/components/product/inline-cta";

// The Nuro's benefit is visible, the nodes physically knead the muscle, so this
// slot shows a real demo shot rather than an illustrated diagram. Drop a real
// demo clip/photo of the nodes kneading at the image path below.

const signals = [
  {
    name: "Real kneading",
    body: "The nodes rotate and press into the muscle like a therapist's fingers.",
  },
  {
    name: "Real heat",
    body: "Gentle warmth loosens the muscle while it works, so the deep knot lets go instead of tightening straight back up.",
  },
  {
    name: "Right where you need it",
    body: "It reaches the base of your neck and the tops of your shoulders, the exact spot you can never quite work out yourself.",
  },
];

export default function SeeItWork() {
  return (
    <section className="py-20 md:py-28 px-6 bg-surface section-glow-gold cv-section">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <ScrollReveal className="min-w-0 md:order-last">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-black/[0.06] shadow-lg">
              <Image
                src="/products/nuro-demo-v2.webp"
                alt="The Nuro kneading the neck and shoulders"
                width={700}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="min-w-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-heading tracking-tight mb-4">
              Watch it actually knead the knot loose.
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              Most gadgets you have to take on faith but this one you can watch. The
              nodes do the same slow, circling work a real massage therapist does,
              and that&apos;s exactly why it works.
            </p>
            <div className="space-y-5">
              {signals.map((s, i) => (
                <div key={i} className="flex gap-4 text-left items-center">
                  <span className="flex-shrink-0 text-gold leading-none">&#8226;</span>
                  <p className="text-[15px] text-foreground leading-relaxed">
                    <span className="font-medium text-heading">{s.name}.</span>{" "}
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
        <InlineCTA label="Put it to work" />
      </div>
    </section>
  );
}
