"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import { SurfaceBuzzDiagram, KneadDiagram } from "@/components/product/mechanism-diagrams";

export default function EMSComparison() {
  return (
    <section className="py-20 md:py-28 px-6 bg-surface cv-section">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-gold mb-3">The Difference</p>
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-heading tracking-tight">
              Cheap vibration vs the Nuro
            </h2>
            <p className="mt-6 text-[15px] md:text-base text-slate leading-relaxed max-w-2xl mx-auto text-center">
              <span className="font-semibold text-heading">Here&apos;s the tell before you spend a cent:</span>{" "}
              watch what it does to the muscle. A buzzing gadget only shakes the
              surface, so your shoulders seize right back up the second you switch
              it off.
            </p>
            <p className="mt-3 text-[15px] md:text-base text-slate leading-relaxed max-w-2xl mx-auto text-center">
              Real release needs rotating nodes that press in like a thumb, plus
              heat to help the muscle loosen. That costs more to build, which is why
              the cheap ones only ever buzz.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <ScrollReveal delay={0.1} className="min-w-0">
            <div className="relative p-8 rounded-2xl bg-black/[0.02] border border-black/[0.06] h-full">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/[0.06] text-lavender text-xs font-medium">
                OLD WAY
              </div>
              <div className="mb-6 mt-4">
                <div className="w-full rounded-xl bg-black/[0.02] px-4 py-3">
                  <SurfaceBuzzDiagram />
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
                <div className="w-full rounded-xl bg-gold/5 px-4 py-3">
                  <KneadDiagram />
                </div>
              </div>
              <h3 className="text-xl font-heading font-medium text-heading mb-2 text-center md:text-left">Rotating nodes and real heat</h3>
              <p className="text-sm text-slate leading-relaxed mb-4 text-center md:text-left">
                Rotating nodes and real heat that get into the knot in about ten quiet minutes, every time you need it, not just the few times a year you actually book a massage.
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
