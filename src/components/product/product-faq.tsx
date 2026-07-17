"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const faqItems = [
  {
    question: "How is this different from a cheap vibrating massager?",
    answer:
      "A vibrating pillow just shakes the surface, so it feels like something for a second and then your shoulders seize right back up. Nuro actually kneads, with rotating nodes that work the muscle the way hands do, plus real heat. That's the difference between a buzz and the tension actually releasing.",
  },
  {
    question: "Is it strong enough to reach the deep knot?",
    answer:
      "Yes. The nodes press into the muscle at the base of your neck and across your shoulders, and there are adjustable intensity levels so you can go as light or as firm as you want. Most people are surprised how deep it gets.",
  },
  {
    question: "Will the nodes pinch or hurt like the cheap ones?",
    answer:
      "No. The number one complaint about cheap massagers is hard plastic knobs that pinch. Nuro's nodes are smooth and contoured to feel like real thumbs, firm but never sharp. Just enough pressure, the kind that hurts good and then loosens everything.",
  },
  {
    question: "How long do I use it for each time?",
    answer:
      "About ten to fifteen minutes is all it takes, and there's an auto shutoff after fifteen so you never have to think about it. You drape it on, lean back, and let it work.",
  },
  {
    question: "What if it breaks?",
    answer:
      "It's covered by a two-year warranty, so if it ever stops working, just send us a quick email at shopsovarelief@gmail.com and we'll get a free replacement out to you. There's no fine print and nothing to argue about.",
  },
  {
    question: "What if it doesn't work for me?",
    answer:
      "Then you send it back, simple as that. Feel the difference within 14 days, or send it back any time within 90 days for a full refund. Email us at shopsovarelief@gmail.com and you keep the bonus guide either way, with no restocking fee and no questions about why.",
  },
];

export default function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 px-6 bg-background section-glow-gold">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-heading tracking-tight">
              FAQs
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="rounded-2xl border border-black/[0.06] bg-surface-raised overflow-hidden transition-all duration-300 hover:border-black/10">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                >
                  <span className="text-[15px] font-semibold text-heading leading-snug text-center md:text-left">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold"
                    >
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
                        <p className="text-sm text-slate leading-relaxed text-center md:text-left">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
