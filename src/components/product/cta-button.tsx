"use client";

/**
 * The one recognizable primary CTA look across the whole page: sage fill, a
 * defined near-black border so it pops against light backgrounds, a soft
 * breathing glow, a top highlight sheen, and a shine sweep on hover. Both the
 * inline section CTAs and the buy-box "Add to Cart" render through this so the
 * style stays identical everywhere.
 */
export default function CtaButton({
  onClick,
  children,
  className = "",
  wrapperClassName = "",
}: {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
}) {
  return (
    <div className={`group relative inline-flex ${wrapperClassName}`}>
      {/* Soft breathing glow behind the button */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-2 rounded-full bg-gold/40 blur-xl opacity-60 animate-[glow-pulse_3.8s_ease-in-out_infinite] group-hover:opacity-90 transition-opacity duration-300"
      />
      <button
        onClick={onClick}
        className={`relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold text-white font-semibold text-base px-8 py-3.5 border-[1.5px] border-black/85 shadow-[0_8px_30px_rgba(138,154,130,0.45)] hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_12px_38px_rgba(138,154,130,0.55)] transition-all duration-300 cursor-pointer ${className}`}
      >
        {/* Top highlight sheen */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/25 to-transparent"
        />
        {/* Hover shine sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-out"
        />
        {children}
      </button>
    </div>
  );
}
