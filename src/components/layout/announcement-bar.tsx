"use client";

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#ECE7DC] via-[#F4F1EA] to-[#ECE7DC] text-center py-2.5 px-4 sm:px-6 text-xs sm:text-sm font-medium border-b border-black/[0.06] whitespace-nowrap overflow-hidden">
      <span className="inline-flex items-baseline justify-center gap-1.5 tracking-wide text-foreground/80">
        <span>
          Free US shipping<span className="hidden sm:inline"> on every order</span>.
        </span>
        <span className="text-gold font-semibold">90-day money-back guarantee.</span>
      </span>
    </div>
  );
}
