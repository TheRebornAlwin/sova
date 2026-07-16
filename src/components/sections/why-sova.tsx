"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import TextGradient from "@/components/ui/text-gradient";
import BrandName from "@/components/ui/brand-name";

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
    title: "Real kneading, not a buzz",
    description:
      "Rotating nodes work the muscle in slow circles, the way a therapist's thumbs do. Your body responds to that, not to a cheap gadget shaking on the surface.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>
    ),
    title: "The heat that lets it go",
    description:
      "Gentle warmth loosens the muscle while the nodes work, so the deep knot actually releases instead of tightening right back up the moment you stop.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/></svg>
    ),
    title: "Reaches the spot you can't",
    description:
      "It gets right into the base of your neck and across your shoulders, the exact place you can never quite work out yourself, hands-free the whole time.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: "Your ten minutes",
    description:
      "Something you reach for every evening, the ritual that ends your day. Not another gadget you buy once and forget in a drawer.",
  },
];

export default function WhySova() {
  return (
    <section className="py-24 md:py-36 px-6 section-gradient-gold">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-gold mb-3">
              Why <BrandName />
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-heading tracking-tight mb-4">
              Built for the version of you at{" "}
              <TextGradient variant="gold">6pm</TextGradient>.
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              You've tried stretching, hot showers, and cheap massagers. Here's
              why this actually reaches the knot.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="min-w-0">
              <GlassmorphismCard className="h-full text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gold-light/60 flex items-center justify-center text-gold">
                  {value.icon}
                </div>
                <h3 className="font-heading text-lg font-medium text-heading mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  {value.description}
                </p>
              </GlassmorphismCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
