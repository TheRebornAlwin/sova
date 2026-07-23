"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import TextGradient from "@/components/ui/text-gradient";
import AnimatedCounter from "@/components/ui/animated-counter";
import BrandName from "@/components/ui/brand-name";
import MagneticButton from "@/components/ui/magnetic-button";

const stats = [
  { target: 10000, suffix: "+", label: "Happy customers" },
  { target: 4.9, suffix: "/5", label: "Average rating", isDecimal: true },
  { target: 90, suffix: "-Day", label: "Money-back guarantee" },
];

export default function BrandStory() {
  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <ScrollReveal className="min-w-0 text-center md:text-left">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-heading tracking-tight mb-6">
              Built for people who are{" "}
              <TextGradient variant="gold">tired of carrying the day in their shoulders</TextGradient>
            </h2>
            <p className="text-slate leading-relaxed mb-4">
              We started <BrandName /> because we were fed up. Fed up with ending
              every day wound up, shoulders around our ears, that knot at the base
              of the neck that never really goes away. A real massage helped, but
              who can afford one every week.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              A massage therapist's hands are the one thing that actually works, and
              the only thing standing between you and that feeling is the cost and
              the scheduling. So we built Nuro, that same worked-over, finally-loose
              feeling at home, for the price of a single visit, whenever you want it.
            </p>
            <div className="flex justify-center md:justify-start">
              <MagneticButton variant="secondary" href="/products/nuro/">
                Shop the Nuro
              </MagneticButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="min-w-0">
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-gold mb-1">
                    {stat.isDecimal ? (
                      <span className="inline-flex items-center justify-center gap-1.5">
                        4.9{stat.suffix}
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-gold">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </span>
                    ) : (
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <p className="text-sm text-slate">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
