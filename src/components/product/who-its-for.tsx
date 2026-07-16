"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

const personas = [
  {
    title: "People Who Carry Stress in Their Shoulders",
    description: "Your shoulders live up around your ears and that knot at the base of your neck never really lets go, no matter what you try.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M4 20a8 8 0 0 1 16 0"/><path d="M4 15a8 8 0 0 0 16 0"/><circle cx="12" cy="6" r="3"/>
      </svg>
    ),
  },
  {
    title: "Desk Workers and Remote Employees",
    description: "Eight-plus hours hunched at a screen and your neck and traps pay for it. The tightness just stacks up day after day.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    title: "People Tired of Paying for Massages",
    description: "A real massage helps, but $90 a session and an appointment you can never book means you go maybe twice a year.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: "People with High-Stress Lives",
    description: "Your days are packed and your body holds every bit of it. The stress settles into your neck and shoulders and just stays there.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-surface/50 to-surface">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold mb-3">Made for You</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-heading tracking-tight">
              Who It&apos;s For
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {personas.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="min-w-0">
              <div className="p-8 rounded-2xl bg-surface border border-black/[0.06] shadow-sm hover:shadow-md hover:border-gold/20 transition-all duration-300 h-full group">
                <div className="w-14 h-14 rounded-2xl bg-gold/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors mx-auto md:mx-0">
                  {p.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-heading mb-3 text-center md:text-left">{p.title}</h3>
                <p className="text-sm text-slate leading-relaxed text-center md:text-left">{p.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
