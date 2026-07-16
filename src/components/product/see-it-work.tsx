"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";

// Sova's single structural change from the Slumbor skeleton. Slumbor had an
// illustrated "science" cutaway because its benefit (warmth) was invisible.
// The Nuro's benefit is VISIBLE, the nodes physically knead the muscle, so this
// slot becomes a "see it work" demo instead of a diagram. Drop a real demo
// clip/photo of the nodes kneading at the image path below.

const signals = [
  {
    name: "Real kneading",
    body: "The nodes rotate and press into the muscle like a therapist's thumbs, not a buzz that just sits on the surface.",
  },
  {
    name: "Real heat",
    body: "Gentle warmth loosens the muscle while it works, so the deep knot lets go instead of tightening straight back up.",
  },
  {
    name: "Right where you need it",
    body: "It reaches the base of your neck and the tops of your shoulders, the exact spot you can never quite work out yourself.",
  },
];

export default function SeeItWork() {
  return (
    <section className="py-20 md:py-28 px-6 bg-surface section-glow-gold">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <ScrollReveal className="min-w-0 md:order-last">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-black/[0.06] shadow-lg group">
              <Image
                src="/products/nuro-demo.webp"
                alt="The Nuro kneading the neck and shoulders in real time"
                width={700}
                height={700}
                className="w-full h-full object-cover"
              />
              {/* Play badge to signal this slot holds real demo footage */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-[0_8px_30px_rgba(46,50,45,0.18)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-gold ml-0.5">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-3 left-3 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-heading">
                Nuro, kneading in real time
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="min-w-0 text-center md:text-left">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-gold mb-3">
              See it work
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-heading tracking-tight mb-4">
              Watch it actually knead the knot loose.
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              Most gadgets you have to take on faith. This one you can watch. The
              nodes do the same slow, circling work a real massage therapist does
              with their thumbs, and that&apos;s exactly why it works when the cheap
              stuff didn&apos;t.
            </p>
            <div className="space-y-5">
              {signals.map((s, i) => (
                <div key={i} className="flex gap-4 text-left items-center">
                  <span className="flex-shrink-0 text-gold leading-none">&#8226;</span>
                  <p className="text-[15px] text-foreground leading-relaxed">
                    <span className="font-medium text-heading">{s.name}.</span>{" "}
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
