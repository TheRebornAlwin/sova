"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

export default function RefundPolicyPage() {
  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-heading tracking-tight mb-8 text-center md:text-left">
            Refund Policy
          </h1>
          <div className="space-y-6 text-slate leading-relaxed">
            <p>
              We want your shoulders to actually feel better, not to feel stuck with a
              purchase. If the Nuro isn&apos;t working for you, we offer a 90-day
              money-back guarantee.
            </p>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">90-Day Money-Back Guarantee</h2>
              <p>
                You have 90 days from the date of delivery to request a return and full
                refund. Feel the difference in 14 days or we make it right, and you keep
                the bonus guide either way. The Nuro is also covered by a 2-year
                warranty, so if it ever stops working we replace it free.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">How to Request a Refund</h2>
              <p>
                Email us at{" "}
                <a href="mailto:shopsovarelief@gmail.com" className="text-gold hover:underline">
                  shopsovarelief@gmail.com
                </a>{" "}
                with your order number and reason for the return. Our team will provide
                you with return instructions within 24 hours.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">Conditions</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Item must be returned within 90 days of delivery</li>
                <li>No restocking fee, and no questions about why</li>
                <li>Keep the bonus 10-Minute Reset Guide either way</li>
                <li>Damaged or defective items qualify for free return shipping</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">Refund Processing</h2>
              <p>
                Once we receive and inspect your return, we will process your refund
                within 5-7 business days. The refund will be issued to your original
                payment method. Please allow an additional 3-5 business days for the
                refund to appear on your statement, depending on your bank.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">Damaged or Defective Items</h2>
              <p>
                If your item arrives damaged or defective, contact us immediately with
                photos. We will send a free replacement or issue a full refund at no cost
                to you.
              </p>
            </div>

            <p className="text-sm text-muted pt-4">Last updated: July 2026</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
