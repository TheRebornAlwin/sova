"use client";

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#ECE7DC] via-[#F4F1EA] to-[#ECE7DC] text-center py-2.5 px-4 sm:px-6 text-xs sm:text-sm font-medium border-b border-black/[0.06]">
      <span className="inline-flex items-baseline justify-center gap-1.5 tracking-wide text-foreground/80">
        <span>Free US shipping on every order.</span>
        <span className="text-gold font-semibold">Feel the difference within 14 days, or send it back any time within 90 days for a full refund.</span>
      </span>
    </div>
  );
}
