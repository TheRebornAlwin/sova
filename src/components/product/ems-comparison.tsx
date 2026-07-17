"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

export default function EMSComparison() {
  return (
    <section className="py-20 md:py-28 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-gold mb-3">The Difference</p>
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-heading tracking-tight">
              Cheap vibration vs the Nuro
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <ScrollReveal delay={0.1} className="min-w-0">
            <div className="relative p-8 rounded-2xl bg-black/[0.02] border border-black/[0.06] h-full">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/[0.06] text-lavender text-xs font-medium">
                OLD WAY
              </div>
              <div className="mb-6 mt-4">
                <div className="w-full h-40 rounded-xl bg-black/[0.02] flex items-center justify-center relative overflow-hidden">
                  <div className="relative w-48">
                    <div className="text-center text-[10px] text-lavender font-medium mb-3">STILL TIGHT AFTER</div>
                    <div className="space-y-2">
                      <div className="h-4 bg-black/[0.05] rounded" />
                      <div className="h-4 bg-black/[0.05] rounded" />
                      <div className="h-4 bg-black/[0.03] rounded" />
                    </div>
                    <div className="flex justify-center gap-2 mt-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b04a4a]/50" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b04a4a]/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b04a4a]/50" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-heading font-medium text-lavender mb-2 text-center md:text-left">Cheap buzzing gadgets</h3>
              <p className="text-sm text-muted leading-relaxed mb-4 text-center md:text-left">
                A vibrating pillow or a handheld just shakes the surface. It feels like something for a second, then your shoulders seize right back up.
              </p>
              <div className="flex items-center gap-2 text-muted justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                <span className="text-xs font-medium">Never reaches the deep knot</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="min-w-0">
            <div className="relative p-8 rounded-2xl bg-gold/5 border-2 border-gold/20 h-full shadow-sm">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold text-white text-xs font-medium">
                NURO
              </div>
              <div className="mb-6 mt-4">
                <div className="w-full h-40 rounded-xl bg-gold/5 flex items-center justify-center relative overflow-hidden">
                  <div className="relative w-48">
                    <div className="text-center text-[10px] text-gold font-medium mb-3">REAL KNEADING</div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gold/15 rounded" />
                      <div className="h-4 bg-gold/20 rounded" />
                      <div className="h-4 bg-gold/25 rounded" />
                    </div>
                    <div className="text-center text-[10px] text-gold font-medium mt-3">TENSION, RELEASED</div>
                    <div className="absolute top-10 left-1/2 -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full border border-gold/30 animate-ping" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-heading font-medium text-heading mb-2 text-center md:text-left">Rotating nodes and real heat</h3>
              <p className="text-sm text-slate leading-relaxed mb-4 text-center md:text-left">
                It works the muscle the way a therapist's thumbs would, in about ten quiet minutes. The last calm thing you do before you unwind, not another gadget you give up on.
              </p>
              <div className="flex items-center gap-2 text-gold justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-xs font-medium">Works the muscle the way hands do</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
