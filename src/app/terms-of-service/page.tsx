"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

export default function TermsOfServicePage() {
  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-heading tracking-tight mb-8">
            Terms of Service
          </h1>
          <div className="space-y-6 text-slate leading-relaxed">
            <p>
              By accessing and using the Sova website, you agree to be bound by these
              Terms of Service. Please read them carefully before making a purchase.
            </p>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">Products &amp; Pricing</h2>
              <p>
                All prices are listed in USD unless otherwise indicated. We reserve the
                right to modify prices at any time without prior notice. Product
                descriptions and images are as accurate as possible, but we do not
                guarantee that all details are entirely error-free.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">Orders &amp; Payment</h2>
              <p>
                By placing an order, you represent that you are of legal age in your
                jurisdiction and that the payment information you provide is accurate. We
                reserve the right to refuse or cancel any order for any reason, including
                suspected fraud.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">Shipping &amp; Delivery</h2>
              <p>
                Estimated delivery times are provided for reference and are not
                guaranteed. We are not responsible for delays caused by customs, weather,
                or carrier issues. Risk of loss transfers to you upon our delivery to the
                carrier.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Sova shall not be liable for any
                indirect, incidental, special, or consequential damages arising from your
                use of our products or website. Our total liability shall not exceed the
                amount you paid for your order.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">Contact</h2>
              <p>
                For questions about these terms, email us at{" "}
                <a href="mailto:shopsovarelief@gmail.com" className="text-gold hover:underline">
                  shopsovarelief@gmail.com
                </a>
                .
              </p>
            </div>

            <p className="text-sm text-muted pt-4">Last updated: July 2026</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
