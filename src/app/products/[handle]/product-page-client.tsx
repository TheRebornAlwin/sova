"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/lib/data";
import { bundleDiscount, reviewDisplay } from "@/lib/data";
import { useCart } from "@/contexts/cart-context";
import BrandName from "@/components/ui/brand-name";
import OfferCountdown from "@/components/product/offer-countdown";
import VolumeDiscounts from "@/components/product/volume-discounts";
import ProductTabs from "@/components/product/product-tabs";

import BenefitsHero from "@/components/product/benefits-hero";
import ReliefIntro from "@/components/product/relief-intro";
import DiscoverSection from "@/components/product/discover-section";
import PerfectFor from "@/components/product/perfect-for";
import SeeItWork from "@/components/product/see-it-work";
import FeaturesLove from "@/components/product/features-love";
import HowItWorks from "@/components/product/how-it-works";
import EMSComparison from "@/components/product/ems-comparison";
import ComparisonTable from "@/components/product/comparison-table";
import CostCallout from "@/components/product/cost-callout";
import SpecialOffer from "@/components/product/special-offer";
import MidPageCTA from "@/components/product/mid-page-cta";
import ProductFAQ from "@/components/product/product-faq";
import RiskFreeGuarantee from "@/components/product/risk-free-guarantee";
import ProductReviews from "@/components/product/product-reviews";
import PurchaseNotification from "@/components/product/purchase-notification";

const benefitBadges = [
  {
    label: "Real kneading",
    sub: "Not a buzz",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="9" r="1.6"/><circle cx="16" cy="9" r="1.6"/><circle cx="8" cy="15" r="1.6"/><circle cx="16" cy="15" r="1.6"/></svg>
    ),
  },
  {
    label: "Soothing heat",
    sub: "Lets it go",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>
    ),
  },
  {
    label: "Reaches the knot",
    sub: "Where you can't",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>
    ),
  },
];

const coreBenefits = [
  "Work the knot out of your neck and shoulders like real hands",
  "Feel your shoulders finally come down from around your ears",
  "Get that massage feeling at home, without the $90 or the appointment",
  "End the day loose instead of carrying it all in your shoulders",
];

const trustBadges = [
  {
    label: "Free US",
    sub: "Shipping",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    ),
  },
  {
    label: "90-Day",
    sub: "Guarantee",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
  },
  {
    label: "Secure",
    sub: "Checkout",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
  },
];

export default function ProductPageClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const discountPct = Math.round(
    ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
  );

  // Volume tier stays in sync with quantity (tiers map to qty 1 / 2 / 3).
  const tierQty = [1, 2, 3];
  const selectedTier = quantity >= 3 ? 2 : quantity === 2 ? 1 : 0;
  const currentDiscount = bundleDiscount(quantity);

  useEffect(() => {
    // Preload gallery images.
    product.images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
    // Meta Pixel ViewContent.
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "ViewContent", {
        content_name: product.title,
        content_ids: [product.id],
        content_type: "product",
        value: product.price,
        currency: "USD",
      });
    }
  }, [product]);

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
      },
      quantity
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const onGalleryScroll = () => {
    const el = galleryRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    if (idx >= product.images.length) {
      el.scrollTo({ left: 0 });
      setActiveSlide(0);
    } else {
      setActiveSlide(idx);
    }
  };

  const mobileSlides = [...product.images, product.images[0]];

  return (
    <>
      {/* ── BUY BOX ─────────────────────────────────────────────────── */}
      <div id="buy" className="scroll-mt-24 py-6 md:py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* GALLERY */}
          <div>
            {/* Mobile carousel */}
            <div className="md:hidden -mx-6">
              <div
                ref={galleryRef}
                onScroll={onGalleryScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              >
                {mobileSlides.map((src, i) => (
                  <div key={i} className="relative w-full flex-shrink-0 snap-center px-6">
                    <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gold-light via-surface to-gold-light border border-black/[0.06]">
                      <Image
                        src={src}
                        alt={`${product.title} view ${i + 1}`}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                      {i === 0 && (
                        <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold text-white text-xs font-bold">
                          -{discountPct}% OFF
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-1.5 mt-4">
                {product.images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      activeSlide === i ? "w-5 bg-gold" : "w-1.5 bg-black/15"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop gallery */}
            <div className="hidden md:block md:sticky md:top-28">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gold-light via-surface to-gold-light border border-black/[0.06]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.images[selectedImage]}
                      alt={`${product.title} view ${selectedImage + 1}`}
                      width={700}
                      height={700}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {selectedImage === 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold text-white text-xs font-bold"
                  >
                    -{discountPct}% OFF
                  </motion.span>
                )}

                {selectedImage > 0 && (
                  <button
                    onClick={() => setSelectedImage((p) => p - 1)}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-heading shadow-sm hover:bg-white cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                )}
                {selectedImage < product.images.length - 1 && (
                  <button
                    onClick={() => setSelectedImage((p) => p + 1)}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-heading shadow-sm hover:bg-white cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                )}
              </div>

              <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide">
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-[72px] h-[72px] flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === i ? "border-gold" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      width={72}
                      height={72}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-[42px] font-medium text-heading leading-tight">
              <BrandName /> {product.title}
            </h1>
            <p className="mt-2 text-slate italic">{product.tagline}</p>

            <div className="mt-3 flex items-center gap-2">
              <span className="text-gold tracking-[0.15em] text-sm">★★★★★</span>
              <span className="text-sm text-muted">
                {reviewDisplay.avg} ({reviewDisplay.count.toLocaleString()} reviews)
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-3xl font-bold text-gold">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-lg text-lavender line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
              <span className="px-3 py-1 rounded-full bg-gold-light text-gold-dark text-xs font-bold">
                SAVE {discountPct}%
              </span>
            </div>

            <div className="mt-3">
              <OfferCountdown />
            </div>

            {/* Benefit badges */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {benefitBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col items-center text-center gap-1.5 rounded-2xl bg-gold/5 border border-gold/15 p-3"
                >
                  <span className="text-gold">{b.icon}</span>
                  <span className="text-xs font-semibold text-heading leading-tight">
                    {b.label}
                  </span>
                  <span className="text-[11px] text-gold leading-tight">{b.sub}</span>
                </div>
              ))}
            </div>

            {/* Core benefits */}
            <ul className="mt-6 space-y-2.5">
              {coreBenefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold flex-shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span className="text-sm text-foreground leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            {/* Agitation callout */}
            <div className="mt-6 pt-6 border-t border-black/[0.06]">
              <h3 className="font-heading text-lg font-medium text-heading">
                By 6pm your shoulders are up around your ears and that knot won&apos;t budge.
              </h3>
              <p className="mt-2 text-sm text-slate leading-relaxed">
                Real kneading nodes and gentle heat that work the muscle the way a
                therapist would, with no appointment and no $90 bill.
              </p>
              <p className="mt-2 text-sm text-slate leading-relaxed">
                Feel the difference within{" "}
                <span className="font-medium text-heading">14 days</span>, or send it
                back any time within{" "}
                <span className="font-medium text-heading">90 days</span> for a full
                refund. You keep the guide either way.
              </p>
            </div>

            {/* Volume discounts */}
            <div className="mt-6">
              <VolumeDiscounts
                basePrice={product.price}
                selectedTier={selectedTier}
                onSelect={(t) => setQuantity(tierQty[t])}
              />
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-6 flex items-stretch gap-3">
              <div className="flex items-center rounded-full border border-black/10">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-11 h-11 flex items-center justify-center text-muted hover:text-gold cursor-pointer"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm font-medium text-foreground">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="w-11 h-11 flex items-center justify-center text-muted hover:text-gold cursor-pointer"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold text-white font-semibold text-base px-6 py-3.5 shadow-[0_6px_28px_rgba(138,154,130,0.28)] hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                {added ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Added!
                  </>
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>
            {currentDiscount > 0 && (
              <p className="mt-2 text-xs text-gold font-medium text-center">
                {currentDiscount}% bundle discount applied at checkout.
              </p>
            )}

            {/* Offer reassurance */}
            <p className="mt-4 text-xs text-muted leading-relaxed text-center md:text-left">
              Free US shipping, a 90-day guarantee, and a 2-year warranty. Plus{" "}
              <span className="text-gold">The 10-Minute Reset Guide</span> ($29 value),
              free with every order.
            </p>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col items-center text-center gap-1 rounded-2xl bg-surface-raised border border-black/[0.06] p-3"
                >
                  <span className="text-gold">{b.icon}</span>
                  <span className="text-xs font-semibold text-heading leading-tight">
                    {b.label}
                  </span>
                  <span className="text-[11px] text-muted leading-tight">{b.sub}</span>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="mt-8">
              <ProductTabs product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* ── LONG-FORM SECTIONS ──────────────────────────────────────── */}
      <BenefitsHero />
      <ReliefIntro />
      <DiscoverSection />
      <PerfectFor />
      <SeeItWork />
      <FeaturesLove />
      <HowItWorks />
      <EMSComparison />
      <ComparisonTable />
      <CostCallout />
      <SpecialOffer />
      <MidPageCTA />
      <ProductFAQ />
      <RiskFreeGuarantee />
      <ProductReviews />
      <PurchaseNotification />
    </>
  );
}
