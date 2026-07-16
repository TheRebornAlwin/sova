"use client";

import HeroSection from "@/components/sections/hero-section";
import WhySova from "@/components/sections/why-sova";
import ProductShowcase from "@/components/sections/product-showcase";
import Testimonials from "@/components/sections/testimonials";
import BrandStory from "@/components/sections/brand-story";
import SectionDivider from "@/components/ui/section-divider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionDivider variant="aurora" />
      <WhySova />
      <SectionDivider variant="ray" />
      <ProductShowcase />
      <SectionDivider variant="ray" />
      <Testimonials />
      <SectionDivider variant="aurora" />
      <BrandStory />
    </>
  );
}
