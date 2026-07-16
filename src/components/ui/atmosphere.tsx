"use client";

/**
 * The room. A fixed, full-page atmosphere that sits behind everything:
 * a warm off-white base, a slow-drifting soft light, a single sage glow that
 * breathes, and a gentle warm vignette. The grain layer is rendered last,
 * above content, so the whole site reads like warm paper, not a screen.
 *
 * All layers are pointer-events-none and decorative. Tuned light and airy
 * for Sova's calm, spa-like theme.
 */
export default function Atmosphere() {
  return (
    <>
      {/* Behind all content */}
      <div aria-hidden className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Warm off-white base wash */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-10%,#FBFAF6_0%,#F4F1EA_45%,#ECE7DC_100%)]" />

        {/* Slow-drifting soft light */}
        <div className="atmosphere-aurora absolute -inset-[20%]" />

        {/* The breathing sage glow, high and soft, like light off a plant */}
        <div className="atmosphere-lamp absolute left-1/2 top-[6%] h-[70vmin] w-[70vmin] -translate-x-1/2 rounded-full" />

        {/* Gentle warm vignette drawing the eye inward */}
        <div className="atmosphere-vignette absolute inset-0" />
      </div>

      {/* Fine warm grain, above content (decorative, never blocks clicks) */}
      <div
        aria-hidden
        className="atmosphere-grain fixed inset-0 z-[100] pointer-events-none"
      />
    </>
  );
}
