"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-heading tracking-tight mb-8 text-center md:text-left">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-slate leading-relaxed">
            <p>
              At Sova, we are committed to protecting your privacy. This policy
              explains how we collect, use, and safeguard your personal information
              when you visit our website or make a purchase.
            </p>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">Information We Collect</h2>
              <p>
                We collect information you provide directly, including your name, email
                address, shipping address, and payment information when you make a
                purchase. We also automatically collect certain information about your
                device, including your IP address, browser type, and browsing behavior
                through cookies and similar technologies.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">How We Use Your Information</h2>
              <p>
                We use your information to process and fulfill orders, communicate with
                you about your purchases, improve our website and products, and send
                marketing communications (with your consent). We may also use your
                information for fraud prevention and to comply with legal obligations.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures
                to protect your personal information. All payment transactions are
                processed through Shopify&apos;s secure checkout, which is PCI-DSS
                compliant.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your
                browsing experience, analyze site traffic, and personalize content. You
                can control cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">Third-Party Services</h2>
              <p>
                We use third-party services including Shopify (e-commerce), Meta
                (advertising), and analytics providers. These services may collect
                information about your interactions with our website in accordance with
                their own privacy policies.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-heading mb-2">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
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
