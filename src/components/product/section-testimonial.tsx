"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

/**
 * A single short, human-sounding testimonial that caps off a section, worded
 * to echo whatever that section was just about. Compact sage card, initials
 * avatar, 5 stars, and a "Verified Purchase" tag so it reads like the rest of
 * the social proof on the page. One shared look so all of them feel like a set.
 */
function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill={i < rating ? "#8A9A82" : "#D8CFC0"}
          stroke="none"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function SectionTestimonial({
  quote,
  name,
  location,
  rating = 5,
}: {
  quote: string;
  name: string;
  location?: string;
  rating?: number;
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="px-6">
      <ScrollReveal>
        <figure className="mx-auto mt-10 max-w-xl rounded-2xl border border-gold/15 bg-gold/[0.05] p-5 md:p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-[13px] font-semibold text-gold-dark">
              {initials}
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-heading">{name}</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gold">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.2 14.2-3.8-3.8 1.4-1.4 2.4 2.4 5-5 1.4 1.4-6.4 6.4z" />
                  </svg>
                  Verified Purchase
                </span>
              </div>
              <div className="mt-0.5 flex items-center gap-2">
                <Stars rating={rating} />
                {location && (
                  <span className="text-[11px] text-muted">{location}</span>
                )}
              </div>
            </div>
          </div>
          <blockquote className="text-[15px] leading-relaxed text-foreground">
            &ldquo;{quote}&rdquo;
          </blockquote>
        </figure>
      </ScrollReveal>
    </div>
  );
}
