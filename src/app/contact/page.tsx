"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import TextGradient from "@/components/ui/text-gradient";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import MagneticButton from "@/components/ui/magnetic-button";

const infoCards = [
  { icon: "✉", label: "Email", value: "shopsovarelief@gmail.com" },
  { icon: "🕐", label: "Hours", value: "Mon-Fri 9am-5pm EST" },
  { icon: "⚡", label: "Response Time", value: "Within 24 hours" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Contact
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-heading tracking-tight mb-4">
              Get in <TextGradient variant="gold">touch</TextGradient>
            </h1>
            <p className="text-slate max-w-xl mx-auto">
              Have a question about your order or the Nuro? We&apos;re here to help.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {infoCards.map((c, i) => (
            <ScrollReveal key={c.label} delay={i * 0.1} className="min-w-0">
              <GlassmorphismCard className="h-full text-center">
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="text-sm font-semibold text-heading mb-1">{c.label}</h3>
                <p className="text-sm text-slate break-words">{c.value}</p>
              </GlassmorphismCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="font-heading text-xl font-bold text-heading mb-6 text-center md:text-left">
              Send us a message
            </h2>
            {sent ? (
              <p className="text-slate text-center py-8">
                Thanks, we&apos;ve got your message and will be back to you within 24 hours.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-heading mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl bg-surface-raised border border-black/[0.08] px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-heading mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl bg-surface-raised border border-black/[0.08] px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-heading mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full rounded-xl bg-surface-raised border border-black/[0.08] px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-gold resize-none"
                  />
                </div>
                <MagneticButton variant="primary" size="lg" type="submit" className="w-full">
                  Send Message
                </MagneticButton>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
