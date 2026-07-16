"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/magnetic-button";
import FloatingElement from "@/components/ui/floating-element";

// The calm Nuro centerpiece. Drop the real hero product photo at the path below
// and it renders inside the soft-light frame. Until then the sage light object
// stands in behind it, fully intentional.
const HERO_IMAGE = "/products/nuro-hero.webp";

function SoftLight() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Breathing halo */}
      <div className="atmosphere-lamp absolute h-[125%] w-[125%] rounded-full" />

      {/* Soft concentric rings, like ripples in still air */}
      <div className="absolute h-full w-full rounded-full border border-gold/10" />
      <div className="absolute h-[82%] w-[82%] rounded-full border border-gold/15" />

      {/* The light itself (fallback behind the product image) */}
      <div className="relative h-72 w-72 overflow-hidden rounded-full md:h-96 md:w-96 shadow-[0_30px_80px_rgba(46,50,45,0.12)]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_42%,#FFFFFF_0%,#ECE7DC_30%,#C5CFBE_62%,#8A9A82_100%)]" />
        {/* Inner shadow for depth */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_-24px_60px_rgba(46,50,45,0.18),inset_0_10px_40px_rgba(255,255,255,0.5)]" />
        {/* A single soft highlight, top-left */}
        <div className="absolute left-[24%] top-[20%] h-16 w-16 rounded-full bg-white/50 blur-2xl md:h-24 md:w-24" />
        {HERO_IMAGE && (
          <Image
            src={HERO_IMAGE}
            alt="The Nuro, resting in soft light"
            width={500}
            height={500}
            priority
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 md:py-36">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-1 min-w-0 text-center md:text-left"
          >
            <div className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.28em] text-gold">
              Real hands, on demand
            </div>

            {/* Mobile centerpiece, between eyebrow and headline */}
            <div className="mb-10 flex justify-center md:hidden">
              <FloatingElement>
                <div className="scale-90">
                  <SoftLight />
                </div>
              </FloatingElement>
            </div>

            <h1 className="mb-7 font-heading text-[2.6rem] font-normal leading-[1.08] tracking-[-0.01em] text-heading sm:text-5xl lg:text-[3.9rem]">
              Let your shoulders{" "}
              <span className="italic text-gold">finally</span> come down from your ears.
            </h1>

            <p className="mx-auto mb-9 max-w-md text-lg leading-[1.7] text-foreground/80 md:mx-0">
              Real kneading and gentle heat that work the knot out the way a
              massage therapist would. That worked-over, finally-loose feeling, on
              your own couch, whenever you need it.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <MagneticButton
                variant="primary"
                size="lg"
                href="/products/nuro/"
              >
                Shop the Nuro
              </MagneticButton>
              <MagneticButton variant="secondary" size="lg" href="/shop/">
                Learn more
              </MagneticButton>
            </div>

            <div className="mt-9 flex items-center justify-center gap-3 md:justify-start">
              <div className="text-sm tracking-[0.2em] text-gold">★★★★★</div>
              <span className="text-sm text-foreground/60">
                Loved by thousands of tired shoulders
              </span>
            </div>
          </motion.div>

          {/* Desktop centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
            className="order-2 hidden min-w-0 justify-center md:flex"
          >
            <FloatingElement>
              <SoftLight />
            </FloatingElement>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
