"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import TextGradient from "@/components/ui/text-gradient";
import { faqData } from "@/lib/data";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Help Center
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-heading tracking-tight mb-4">
              Frequently Asked <TextGradient variant="gold">Questions</TextGradient>
            </h1>
            <p className="text-slate">
              Can&apos;t find what you&apos;re looking for? Email us at{" "}
              <a href="mailto:shopsovarelief@gmail.com" className="text-gold hover:underline">
                shopsovarelief@gmail.com
              </a>
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqData.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.03}>
              <div className="rounded-2xl border border-black/[0.06] bg-surface-raised overflow-hidden transition-all duration-300 hover:border-black/10">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                >
                  <span className="text-[15px] font-semibold text-heading leading-snug">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <p className="text-sm text-slate leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
