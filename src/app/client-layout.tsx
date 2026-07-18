"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { CartProvider } from "@/contexts/cart-context";
import LoadingScreen from "@/components/layout/loading-screen";
import Atmosphere from "@/components/ui/atmosphere";
import ParticleField from "@/components/ui/particle-field";
import AnnouncementBar from "@/components/layout/announcement-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CartDrawer from "@/components/layout/cart-drawer";

// Fire a Meta Pixel PageView on client-side route changes. The base snippet in
// layout.tsx already fires the first PageView, so we skip the initial render.
function MetaPixelPageView() {
  const pathname = usePathname();
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}

function ScrollToTopOnLoad() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);
  return null;
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <MetaPixelPageView />
      <ScrollToTopOnLoad />
      <LoadingScreen />
      <Atmosphere />
      <ParticleField />
      <div className="relative z-10">
        <AnnouncementBar />
        <Header />
        <main className="min-h-screen pt-[calc(36px+64px)] overflow-x-clip md:overflow-x-visible">{children}</main>
        <Footer />
      </div>
      <CartDrawer />
    </CartProvider>
  );
}
