// On-brand line-art diagrams that replace blocks of explanatory text.
// Sage tokens only, thin rounded strokes to match the icon set elsewhere.
// No motion, so they render cleanly in the static export and print fine.

const SAGE = "#8A9A82";
const SAGE_DARK = "#6E7D67";
const NEUTRAL = "#B4AFA6";

/**
 * "Vibration stays on top" — a pad buzzing on the surface of the muscle,
 * with the deeper layers untouched. Muted, on purpose.
 */
export function SurfaceBuzzDiagram() {
  return (
    <svg
      viewBox="0 0 240 150"
      className="w-full h-40"
      role="img"
      aria-label="A vibrating pad shaking only the surface of the muscle"
    >
      {/* muscle layers */}
      <g fill="none" stroke={NEUTRAL} strokeWidth="1.6">
        <rect x="24" y="80" width="192" height="16" rx="8" opacity="0.9" />
        <rect x="24" y="102" width="192" height="16" rx="8" opacity="0.6" />
        <rect x="24" y="124" width="192" height="16" rx="8" opacity="0.4" />
      </g>
      {/* device pad resting on the surface */}
      <rect x="96" y="60" width="48" height="14" rx="7" fill={NEUTRAL} opacity="0.55" />
      <rect x="96" y="60" width="48" height="14" rx="7" fill="none" stroke={NEUTRAL} strokeWidth="1.6" />
      {/* jitter marks — surface only */}
      <g stroke={NEUTRAL} strokeWidth="1.8" strokeLinecap="round">
        <path d="M84 62 l-7 -5" />
        <path d="M84 72 l-7 5" />
        <path d="M156 62 l7 -5" />
        <path d="M156 72 l7 5" />
        <path d="M120 54 v-7" />
      </g>
      {/* label */}
      <text x="120" y="20" textAnchor="middle" fontSize="11" fontWeight="600" fill={NEUTRAL}>
        Stays on the surface
      </text>
    </svg>
  );
}

/**
 * "Nodes knead into the muscle" — two rounded nodes pressing in, the top layer
 * dipping under them, rotation arrows, and heat rising. Sage, the good way.
 */
export function KneadDiagram() {
  return (
    <svg
      viewBox="0 0 240 150"
      className="w-full h-40"
      role="img"
      aria-label="Two rotating nodes pressing into the deeper muscle with heat"
    >
      {/* heat rising */}
      <g fill="none" stroke={SAGE_DARK} strokeWidth="1.6" strokeLinecap="round" opacity="0.7">
        <path d="M92 40 q-4 -6 0 -12 q4 -6 0 -12" />
        <path d="M120 36 q-4 -6 0 -12 q4 -6 0 -12" />
        <path d="M148 40 q-4 -6 0 -12 q4 -6 0 -12" />
      </g>
      {/* muscle layers, top one dips under the nodes */}
      <g fill="none" stroke={SAGE} strokeWidth="1.8">
        <path d="M24 88 q34 0 44 0 q10 0 16 8 q4 4 12 4 q8 0 12 -4 q6 -8 16 -8 q10 0 16 8 q4 4 12 4 q8 0 12 -4 q6 -8 16 -8 q10 0 24 0" opacity="0.95" />
        <rect x="24" y="104" width="192" height="15" rx="7.5" opacity="0.55" />
        <rect x="24" y="124" width="192" height="15" rx="7.5" opacity="0.35" />
      </g>
      {/* nodes */}
      <g>
        <circle cx="104" cy="86" r="13" fill={SAGE} opacity="0.9" />
        <circle cx="152" cy="86" r="13" fill={SAGE} opacity="0.9" />
      </g>
      {/* rotation arrows around each node */}
      <g fill="none" stroke={SAGE_DARK} strokeWidth="1.7" strokeLinecap="round">
        <path d="M104 68 a18 18 0 0 1 15 9" />
        <path d="M119 77 l1 -6 m-1 6 l-6 0" />
        <path d="M152 68 a18 18 0 0 1 15 9" />
        <path d="M167 77 l1 -6 m-1 6 l-6 0" />
      </g>
      {/* label */}
      <text x="120" y="18" textAnchor="middle" fontSize="11" fontWeight="600" fill={SAGE_DARK}>
        Kneads into the muscle
      </text>
    </svg>
  );
}
