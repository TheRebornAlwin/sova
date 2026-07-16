"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import BrandName from "@/components/ui/brand-name";

const painPoints = [
  {
    title: "Wound up all day",
    body: "Shoulders up by your ears by mid-afternoon, and they never really come back down.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18a8 8 0 0 1 16 0" />
        <path d="M4 14a8 8 0 0 0 16 0" />
      </svg>
    ),
  },
  {
    title: "The knot that won't quit",
    body: "That spot at the base of your neck that's tight every single day, no matter what you do.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    title: "Tried everything",
    body: "Stretches, hot showers, cheap massagers. Loose for a minute, tight again by night.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.5 20.5 3.5 13.5a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7z" />
        <path d="m8.5 8.5 7 7" />
      </svg>
    ),
  },
  {
    title: "Carrying it into the night",
    body: "You finally sit down, and the whole day is still sitting there in your shoulders.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
];

export default function ReliefIntro() {
  return (
    <section className="py-20 md:py-28 px-6 bg-surface section-glow-purple">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-gold mb-3">
              Sound familiar?
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-heading tracking-tight">
              Give your shoulders the release they&apos;ve been begging for.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 mb-10">
          {painPoints.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08} className="min-w-0">
              <div className="h-full flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-background/60 border border-black/[0.06] text-left">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-black/[0.03] flex items-center justify-center text-slate">
                  {p.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-semibold text-heading mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">{p.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col items-center text-center rounded-2xl border border-gold/20 bg-gold/[0.06] p-6 md:p-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold mb-3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="text-[15px] md:text-base text-foreground leading-relaxed max-w-xl">
              <span className="font-semibold text-heading">You don&apos;t have to keep grinding through it.</span>{" "}
              The Nuro, from <BrandName />, is built for exactly this: real kneading
              and gentle heat that work the tension out of your shoulders, so your
              body can finally let go.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
