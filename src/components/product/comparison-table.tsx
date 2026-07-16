"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold mx-auto"><polyline points="20 6 9 17 4 12"/></svg>
);
const Cross = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted mx-auto"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const rows = [
  { label: "Price", nuro: "$79.99 once", massage: "$90+ per visit", cheap: "$20-40" },
  { label: "Actually kneads the deep knot", nuro: true, massage: true, cheap: false },
  { label: "There the moment your shoulders seize up", nuro: true, massage: false, cheap: true },
  { label: "Feels like real hands, not hard plastic", nuro: true, massage: true, cheap: false },
  { label: "No appointment, nothing to schedule", nuro: true, massage: false, cheap: true },
  { label: "Soothing heat built in", nuro: true, massage: false, cheap: false },
  { label: "One cost, use it forever", nuro: true, massage: false, cheap: true },
  { label: "Adjustable heat and intensity", nuro: true, massage: false, cheap: false },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-gold mb-3">Compare</p>
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-heading tracking-tight">
              Nuro vs the alternatives
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl border border-black/[0.06] overflow-hidden shadow-sm">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] sm:grid-cols-[1fr_1fr_1fr_1fr]">
              <div className="p-3 sm:p-4" />
              <div className="p-3 sm:p-4 bg-gold text-white text-center text-xs sm:text-sm font-medium">
                Nuro
              </div>
              <div className="p-3 sm:p-4 text-center text-xs sm:text-sm font-medium text-heading">
                A real massage
              </div>
              <div className="p-3 sm:p-4 text-center text-xs sm:text-sm font-medium text-heading">
                Cheap massagers
              </div>
            </div>

            {rows.map((row, ri) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.5fr_1fr_1fr_1fr] sm:grid-cols-[1fr_1fr_1fr_1fr] ${ri % 2 === 0 ? "bg-black/[0.02]" : "bg-transparent"}`}
              >
                <div className="p-2.5 sm:p-4 text-[11px] sm:text-sm font-medium text-foreground flex items-center">
                  {row.label}
                </div>
                <div className="p-2.5 sm:p-4 bg-gold/5 flex items-center justify-center">
                  {typeof row.nuro === "boolean" ? (
                    row.nuro ? <Check /> : <Cross />
                  ) : (
                    <span className="text-gold font-medium text-[11px] sm:text-sm text-center">{row.nuro}</span>
                  )}
                </div>
                <div className="p-2.5 sm:p-4 flex items-center justify-center">
                  {typeof row.massage === "boolean" ? (
                    row.massage ? <Check /> : <Cross />
                  ) : (
                    <span className="text-slate text-[11px] sm:text-sm text-center">{row.massage}</span>
                  )}
                </div>
                <div className="p-2.5 sm:p-4 flex items-center justify-center">
                  {typeof row.cheap === "boolean" ? (
                    row.cheap ? <Check /> : <Cross />
                  ) : (
                    <span className="text-slate text-[11px] sm:text-sm text-center">{row.cheap}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
