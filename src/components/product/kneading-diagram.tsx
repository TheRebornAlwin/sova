"use client";

/**
 * The kneading mechanism, drawn. Sova's adaptation of Slumbor's SlowWave
 * diagram: a pair of shoulders with kneading nodes working in circles, soft
 * heat rising, and the tension releasing. Pure SVG so it needs no photography,
 * and it makes the mechanism a thing you can see, not just read.
 *
 * Not rendered on the product page by default (the live demo section carries the
 * mechanism), kept as a reusable visual for ads, emails, or a lighter layout.
 */
export default function KneadingDiagram() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <svg
        viewBox="0 0 360 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="img"
        aria-label="Kneading nodes working the neck and shoulders, with soothing heat, releasing tension"
      >
        <defs>
          <radialGradient id="kn-warm" cx="50%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#8A9A82" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#8A9A82" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#8A9A82" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="kn-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8A9A82" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6E7D67" stopOpacity="0.35" />
          </radialGradient>
        </defs>

        {/* Warmth: a breathing glow behind the shoulders */}
        <g
          className="motion-safe:animate-[breathe-glow_11s_ease-in-out_infinite]"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          <circle cx="180" cy="150" r="120" fill="url(#kn-warm)" />
        </g>

        {/* Neck + shoulders silhouette */}
        <path
          d="M64 214 q40 -74 116 -74 q76 0 116 74"
          fill="#8A9A82"
          fillOpacity="0.06"
          stroke="#8A9A82"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M150 142 q0 -34 30 -34 q30 0 30 34"
          fill="none"
          stroke="#8A9A82"
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Kneading nodes, two pairs, with circling arrows */}
        {[
          { x: 128, y: 168 },
          { x: 160, y: 168 },
          { x: 200, y: 168 },
          { x: 232, y: 168 },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="11" fill="url(#kn-node)" />
            <path
              d={`M${n.x + 15} ${n.y} a15 15 0 1 1 -4 -10`}
              fill="none"
              stroke="#6E7D67"
              strokeOpacity="0.55"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d={`M${n.x + 11} ${n.y - 12} l 3 -1 l -1 4 z`}
              fill="#6E7D67"
              fillOpacity="0.65"
            />
          </g>
        ))}

        {/* Heat rising off the shoulders */}
        <g stroke="#8A9A82" strokeOpacity="0.5" fill="none" strokeLinecap="round" strokeWidth="1.5">
          <path d="M132 128 q6 -8 0 -16 q-6 -8 0 -16" />
          <path d="M180 120 q6 -8 0 -16 q-6 -8 0 -16" />
          <path d="M228 128 q6 -8 0 -16 q-6 -8 0 -16" />
        </g>
      </svg>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-center gap-5 text-xs tracking-[0.15em] uppercase text-foreground/70">
        {["Knead", "Heat", "Release"].map((label) => (
          <span key={label} className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
