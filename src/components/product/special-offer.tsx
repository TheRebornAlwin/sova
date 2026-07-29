"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import BrandName from "@/components/ui/brand-name";

const offerItems = [
  {
    value: "50% OFF",
    label: "the Nuro",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
    ),
  },
  {
    value: "FREE",
    label: "$63 in bonus gifts",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
    ),
  },
  {
    value: "90 days",
    label: "money-back guarantee",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
    ),
  },
  {
    value: "FREE",
    label: "US shipping",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    ),
  },
];

export default function SpecialOffer() {
  return (
    <section className="py-20 md:py-28 px-6 bg-surface section-glow-gold cv-section">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-gold mb-3">
              Limited-time offer
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-heading tracking-tight mb-5">
              Everything you need to finally unwind.
            </h2>
            <p className="text-[15px] md:text-base text-foreground leading-relaxed max-w-xl mx-auto mb-8">
              <span className="text-gold font-semibold">Special offer today.</span> Try
              the Nuro risk-free at the lowest price it has ever been.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
              {offerItems.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center gap-2 rounded-2xl bg-gold/5 border border-gold/15 p-4 md:p-5"
                >
                  <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    {item.icon}
                  </div>
                  <p className="font-heading text-lg md:text-xl font-semibold text-gold leading-none">
                    {item.value}
                  </p>
                  <p className="text-[11px] md:text-xs text-slate leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-4 gap-3 md:gap-4 items-stretch w-full max-w-4xl mx-auto">
            {/* Big square Nuro image, 3x the size of the stacked tiles */}
            <div className="col-span-3 rounded-2xl md:rounded-3xl overflow-hidden border border-black/[0.06] shadow-lg">
              <Image
                src="/products/nuro-main-v2.webp"
                alt="The Nuro heated shiatsu neck and shoulder massager"
                width={1254}
                height={1254}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Three small tiles stacked on the right */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden border border-gold/40 shadow-[0_0_30px_-2px_rgba(138,154,130,0.65)]">
                <Image
                  src="/products/nuro-night.webp"
                  alt="The 10-Minute Wind-Down, ten quiet minutes to switch off"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden border border-gold/40 shadow-[0_0_30px_-2px_rgba(138,154,130,0.65)]">
                <Image
                  src="/products/nuro-trigger-map.webp"
                  alt="The Trigger Points Map, the 5 spots that hold your tension"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden border border-gold/40 shadow-[0_0_30px_-2px_rgba(138,154,130,0.65)]">
                <Image
                  src="/products/nuro-audio.webp"
                  alt="Handcrafted Wind-Down Audio, five calming tracks free with every Nuro"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Itemized value stack */}
        <ScrollReveal>
          <div className="mt-16 max-w-md mx-auto">
            <p className="text-center text-xs font-medium tracking-[0.22em] uppercase text-gold mb-5">
              Here&apos;s everything you get
            </p>
            <div className="rounded-3xl border border-gold/25 bg-gold/[0.04] p-6 md:p-7">
              <ul className="space-y-3.5">
                {[
                  ["Nuro massager", "$159.99"],
                  ["The 10-Minute Wind-Down guide", "$29"],
                  ["The Trigger Points Map", "$19"],
                  ["Wind-Down Audio, 5 tracks", "$15"],
                ].map(([name, val]) => (
                  <li key={name} className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2.5 text-[15px] text-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gold flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {name}
                    </span>
                    <span className="text-[15px] font-medium text-slate whitespace-nowrap">
                      {val}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 pt-4 border-t border-gold/15 space-y-3">
                {["VIP support", "2-year warranty", "90-day money-back guarantee", "Free US shipping"].map(
                  (perk) => (
                    <li key={perk} className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2.5 text-[15px] text-foreground">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gold flex-shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {perk}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wide text-muted whitespace-nowrap">
                        Included
                      </span>
                    </li>
                  )
                )}
              </ul>
              <div className="mt-5 pt-4 border-t border-gold/20 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wide text-heading">
                  Total value
                </span>
                <span className="text-xl text-lavender line-through">$222.99</span>
              </div>
            </div>

            <div className="mt-7 text-center">
              <span className="inline-block rounded-full bg-gold-dark text-white text-xs font-bold tracking-wide px-4 py-1.5">
                YOU SAVE $143 TODAY
              </span>
              <div className="mt-4">
                <span className="font-heading text-5xl md:text-6xl font-medium text-gold leading-none">
                  $79.99
                </span>
              </div>
              <p className="mt-3 text-[15px] text-foreground/80">
                One Nuro, all three bonuses, and <BrandName /> ships it free.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
