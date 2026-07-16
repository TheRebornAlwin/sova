"use client";

import MagneticButton from "@/components/ui/magnetic-button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-heading text-[120px] md:text-[180px] font-bold text-black/5 leading-none">
        404
      </h1>
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-heading mt-4 mb-3">
        Page not found
      </h2>
      <p className="text-slate max-w-md mb-8">
        Looks like this page doesn&apos;t exist. Let&apos;s get you back on track.
      </p>
      <MagneticButton variant="primary" href="/">
        Back to Home
      </MagneticButton>
    </div>
  );
}
