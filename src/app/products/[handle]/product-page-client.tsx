"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/lib/data";
import { bundleDiscount, reviewDisplay } from "@/lib/data";
import { useCart } from "@/contexts/cart-context";
import BrandName from "@/components/ui/brand-name";
import VolumeDiscounts from "@/components/product/volume-discounts";
import ProductTabs from "@/components/product/product-tabs";
import CtaButton from "@/components/product/cta-button";

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
import SectionTestimonial from "@/components/product/section-testimonial";
import PurchaseNotification from "@/components/product/purchase-notification";

const benefitBadges = [
  {
    label: "Real kneading",
    sub: "For relaxation",
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
  "Get that massage feeling at home, without the $90 each session",
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
    // Meta Pixel ViewContent. (Gallery images are not eagerly preloaded so they
    // don't compete with the LCP image; the visible one has priority and the
    // rest lazy-load as the shopper opens them.)
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
            <div className="md:hidden">
              <div
                ref={galleryRef}
                onScroll={onGalleryScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              >
                {mobileSlides.map((src, i) => (
                  <div key={i} className="relative w-full flex-shrink-0 snap-center">
                    <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gold-light via-surface to-gold-light border border-black/[0.06]">
                      <Image
                        src={src}
                        alt={`${product.title} view ${i + 1}`}
                        width={600}
                        height={600}
                        priority={i === 0}
                        className="w-full h-full object-cover"
                      />
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
                      priority
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

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
          <div className="text-center md:text-left">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-[42px] font-medium text-heading leading-tight">
              <BrandName /> {product.title}
            </h1>
            <p className="mt-2 text-slate italic">{product.tagline}</p>
            <p className="mt-2 text-[15px] text-foreground/80 leading-relaxed">
              Ten quiet minutes, and the whole day finally leaves your neck.
            </p>

            <div className="mt-3 flex items-center justify-center md:justify-start gap-2">
              <span className="text-gold tracking-[0.15em] text-sm">★★★★★</span>
              <span className="text-sm text-muted">
                {reviewDisplay.avg} ({reviewDisplay.count.toLocaleString()} reviews)
              </span>
            </div>

            <div className="mt-5 flex items-center justify-center md:justify-start gap-3">
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
              <p className="text-sm font-medium text-gold">
                This is the lowest price we offer the Nuro.
              </p>
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
            <ul className="mt-6 flex flex-col items-center md:items-start gap-2.5">
              {coreBenefits.map((b, i) => (
                <li key={i} className="inline-flex items-start gap-3 text-left">
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
                Feel the difference tonight, or send it back any time within{" "}
                <span className="font-medium text-heading">90 days</span> for a full
                refund.
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
              <CtaButton
                onClick={handleAddToCart}
                wrapperClassName="flex-1"
                className="w-full px-6"
              >
                {added ? (
                  <span className="relative inline-flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Added!
                  </span>
                ) : (
                  <span className="relative">Add to Cart</span>
                )}
              </CtaButton>
            </div>
            {currentDiscount > 0 && (
              <p className="mt-2 text-xs text-gold font-medium text-center">
                {currentDiscount}% bundle discount applied at checkout.
              </p>
            )}

            {/* Offer reassurance */}
            <p className="mt-4 text-xs text-muted leading-relaxed text-center md:text-left">
              Free US shipping, a 90-day guarantee, and a 2-year warranty. Plus{" "}
              <span className="text-gold">The Trigger Points Map</span> ($29 value),
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
      {/* Each section is capped with a short, human testimonial that echoes
          what that section is about, so the proof stays relevant as you read. */}
      <BenefitsHero />
      <SectionTestimonial
        name="Rachel M."
        quote="ok so I honestly figured it was gonna be one of those buzzy things that does absolutely nothing, my coworker wouldn't shut up about hers so I finally caved and ordered one, and it actually gets right into that spot at the base of my neck that's been bugging me forever, like it presses in instead of just vibrating on top which is what I was expecting, and I'm not saying it changed my life or whatever but it genuinely does what it says which after everything else I've tried is kind of a shock."
      />

      <ReliefIntro />
      <SectionTestimonial
        name="Danielle P."
        quote="my shoulders basically live up around my ears and I don't even notice until they're aching by the end of the day, and I'll use this on the couch for like ten minutes while my dog sits on my feet staring at me and they just kind of come back down, I didn't realize how much I was holding up there until it let go honestly, I'm not usually the type to write one of these but yeah that release feeling is real."
      />

      <DiscoverSection />
      <SectionTestimonial
        name="Priya S."
        quote="every night around 8 I get this tight band across my neck from staring at a screen all day and I've tried honestly so many things that did nothing, but I just throw this on while I'm half watching tv and by the time it clicks off the tightness is basically gone, and it's the first thing that's actually stuck for me so I've kind of stopped questioning it, I just use it now."
      />

      <PerfectFor />
      <SectionTestimonial
        name="Marcus T."
        quote="I'm on a laptop like nine hours a day and my neck is always the first thing to go, usually by mid afternoon it's tight and cranky and I'm rolling it around trying to crack it, so when the page is basically describing me I kind of laughed, and I only wish I'd bought it two years ago instead of complaining to everyone at work about my neck every single day."
      />

      <SeeItWork />
      <SectionTestimonial
        name="Emily R."
        quote="the thing that actually sold me is you can watch the little nodes rolling around, it's not just buzzing on the surface, it presses in and does these slow circles that feel exactly like someone's thumbs digging into you, and my mom saw me using it and immediately wanted her own so that probably tells you something, it works the actual knot and not just the skin sitting on top of it."
      />

      <FeaturesLove />
      <SectionTestimonial
        name="Sofia L."
        quote="honestly the heat is the part I didn't even know I was missing, you turn it up and everything just kind of loosens and the knot finally gives, and the fact that there's no cord sounds like a small thing but I take it from the couch to my bed without even thinking about it, and I forget to charge it half the time and it still holds up fine, so no real complaints from me."
      />

      <HowItWorks />
      <SectionTestimonial
        name="Hannah K."
        quote="there's genuinely nothing to figure out, you charge it, drape it over your shoulders and press a button and that's the whole thing, and my mom who literally calls me to change the input on her tv managed to set it up herself in about ten seconds, so if she can do it I promise you anyone can."
      />

      <EMSComparison />
      <SectionTestimonial
        name="Jordan B."
        rating={4}
        quote="look I'd already wasted money on two of those cheap ones off an instagram ad and they both just kind of tickled and then died within a month, this one actually presses in like there's real pressure behind it, and honestly I'm a little annoyed I didn't just spend the extra the first time around because it would've saved me forty bucks and a whole lot of disappointment."
      />

      <ComparisonTable />
      <SectionTestimonial
        name="Alicia N."
        quote="a real massage near me runs ninety bucks and I'd maybe go twice a year if I was lucky, and this thing basically paid for itself in a month and it just sits there ready whenever my neck acts up, no booking it, no tipping, no awkward small talk with a stranger, so the math honestly wasn't hard for me at all."
      />

      <CostCallout />
      <SectionTestimonial
        name="Karen D."
        quote="I actually sat down and added up what I'd spent on spa days this year and it made me a little sick to be honest, so paying one time for something I end up using most nights just made way more sense in my head, and I'm a cheap person, I'll fully admit that, and this is one of the rare things I've bought that I don't regret at all."
      />

      <SpecialOffer />
      <SectionTestimonial
        name="Bethany W."
        quote="I came for the massager if I'm being honest and wasn't really expecting much from the rest of it, but I ended up actually using the wind down guide too and now the whole little routine before bed has kind of become my favorite part of the day, my husband keeps joking that I've joined a cult, whatever, it's nice and I don't care."
      />

      <MidPageCTA />
      <SectionTestimonial
        name="Chloe A."
        quote="I sat on this for a solid week before actually ordering, kept opening the tab and then closing it again, which looking back was so dumb because the very first night I used it I just remember going oh, that's what I've been missing this whole time, so yeah, I should've just clicked buy when I first saw it instead of overthinking the whole thing."
      />

      <ProductFAQ />
      <SectionTestimonial
        name="Natalie G."
        quote="I had about a million questions before buying because I'm annoying like that and I read through every little answer first, and then I ordered it and it showed up in a few days and it does exactly what they said it would, no weird surprises, no fine print nonsense, which honestly kind of shocked me these days, in a good way."
      />

      <RiskFreeGuarantee />
      <SectionTestimonial
        name="Steph R."
        quote="the only reason I even risked it was the money back thing, I figured worst case I just send it back and I'm out nothing, and three months later I'm very obviously keeping it, but not feeling like I was gambling eighty bucks on some random internet gadget is genuinely what got me to actually go through with clicking buy."
      />

      <ProductReviews />
      <PurchaseNotification />
    </>
  );
}
