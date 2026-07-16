"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import TextGradient from "@/components/ui/text-gradient";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import BrandName from "@/components/ui/brand-name";

const values = [
  {
    title: "Premium Quality",
    body: "We build the Nuro to feel like real hands, not a cheap gadget. Smooth contoured nodes, real heat, and materials that hold up. No pinching, no hard plastic.",
  },
  {
    title: "Designed with Purpose",
    body: "Every part earns its place. Rotating nodes, soothing warmth, adjustable intensity, all built around how people actually carry their tension.",
  },
  {
    title: "Customer First",
    body: "A 90-day money-back guarantee, free US shipping, and a support team that actually replies. We built the experience we wanted as customers.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Our Story
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-heading tracking-tight">
              We bring <TextGradient variant="gold">real relief</TextGradient> to your everyday life
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-black/[0.06] shadow-lg mb-14 bg-gradient-to-br from-gold-light/30 to-surface flex items-center justify-center">
            <Image
              src="/products/nuro-about.webp"
              alt="The Nuro by Sova"
              width={900}
              height={506}
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-5 mb-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-heading">
              Born from tension held too long
            </h2>
            <p className="text-slate leading-relaxed">
              We started <BrandName /> because we were tired of the cycle. Wake up
              already stiff, hunch over a screen all day, feel your shoulders climb up
              toward your ears, get home wound up, repeat. Sound familiar?
            </p>
            <p className="text-slate leading-relaxed">
              A massage therapist's hands are the one thing that actually loosens it,
              but at $90 a session and an appointment you can never get, most of us go
              maybe twice a year. We kept thinking, why can't that feeling live at home?
            </p>
            <p className="text-slate leading-relaxed">
              So we built the Nuro. A heated shiatsu massager that kneads the knots out
              of your neck and shoulders the way real thumbs would. No pills, no
              appointment, no $90 bill. Just real relief, on your own couch, whenever
              you need it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-heading">
              What we stand for
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1} className="min-w-0">
              <GlassmorphismCard className="h-full">
                <h3 className="font-heading text-lg font-bold text-heading mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">{v.body}</p>
              </GlassmorphismCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
