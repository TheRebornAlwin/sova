"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import TextGradient from "@/components/ui/text-gradient";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Marketing Manager",
    text: "My shoulders live up around my ears by 3pm. I put Nuro on while I finish work and I can feel them come back down. It gets into that knot at the base of my neck that nothing else reaches.",
    rating: 5,
  },
  {
    name: "Priya N.",
    role: "Registered Nurse",
    text: "After a twelve hour shift my neck and traps are wrecked. This feels like the massage I can never find the time to book. Ten minutes and I finally exhale.",
    rating: 5,
  },
  {
    name: "Danielle R.",
    role: "Remote Software Developer",
    text: "I was sure it would be a cheap buzzing gadget. It isn't. The nodes actually knead, deep, just enough pressure, and my upper back finally lets go. Worth every penny.",
    rating: 5,
  },
  {
    name: "Megan T.",
    role: "Elementary Teacher",
    text: "I hold all my stress in my shoulders and don't even notice until they ache. This has become the ten minutes of my day that are just mine. I actually look forward to it now.",
    rating: 5,
  },
  {
    name: "Lauren C.",
    role: "Mom of two",
    text: "Between the kids and the laptop I'm permanently tense. My husband got me this and it's the most relaxed I've felt in months. The heat with the kneading is everything.",
    rating: 5,
  },
  {
    name: "Amanda G.",
    role: "Physical Therapist",
    text: "I tell clients to keep something at home between visits, and this is genuinely well made. Real kneading, real heat, not a gimmick. I use mine every evening too.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-36 px-6 section-gradient-warm">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Real Results
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-heading tracking-tight mb-4">
              What our{" "}
              <TextGradient variant="gold">customers</TextGradient> are saying
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Don't just take our word for it. Here's what real people experience
              with the Nuro.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="min-w-0">
              <GlassmorphismCard className="h-full">
                <div className="flex text-warm text-sm mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-heading text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </GlassmorphismCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
