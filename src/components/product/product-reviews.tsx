"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { reviewsData, reviewDisplay } from "@/lib/data";
import ScrollReveal from "@/components/ui/scroll-reveal";
import TextGradient from "@/components/ui/text-gradient";

const REVIEWS_PER_PAGE = 16;

// Featured photo reviews shown at the top of the section.
const featuredReviews = [
  { name: "Oliver J.", rating: 5, img: "/products/featured-review-1.webp", text: "I was hesitant at first because of the price, but it's worth every penny. Really helps relieve tension after long shifts at work." },
  { name: "Grace T.", rating: 5, img: "/products/featured-review-2.webp", text: "It arrived a bit later than expected, but the packaging was perfect, and the massager is amazing. I use it after my evening workouts, and it's so relaxing." },
  { name: "Mia F.", rating: 5, img: "/products/featured-review-3.webp", text: "The build quality is excellent, and it's surprisingly quiet. I even use it while watching TV, perfect way to relax after work." },
  { name: "Ethan B.", rating: 5, img: "/products/featured-review-4.webp", text: "Bought this for myself, and I can't recommend it enough. The two thumbs and LED therapy make it feel like a professional massage right at home." },
  { name: "Olivia R.", rating: 5, img: "/products/featured-review-5.webp", text: "I work from home and spend hours at the desk. This massager is my go-to for unwinding in the evenings. The design is sleek and it feels very high quality." },
  { name: "Sophie K.", rating: 4, img: "/products/featured-review-6.webp", text: "I bought this as a gift for my husband, and he loves it. It's sturdy, comfortable, and really helps him relax after long hours in the office." },
  { name: "Max H.", rating: 5, img: "/products/featured-review-7.webp", text: "I visit my physiotherapist every two weeks, but having this at home is perfect for daily relief. It complements my sessions and keeps my shoulders relaxed." },
  { name: "Liam M.", rating: 5, img: "/products/featured-review-8.webp", text: "The delivery took a couple of extra days, but it was totally worth the wait. The massager works perfectly, and I use it every evening after work." },
  { name: "Paul M.", rating: 5, img: "/products/featured-review-9.webp", text: "The design with two hands and two thumbs is unique. Feels like a real person is giving me a massage." },
  { name: "Matthew E.", rating: 5, img: "/products/featured-review-10.webp", text: "After a full day on my feet, using it on my calves is total relief." },
  { name: "Emma L.", rating: 5, img: "/products/featured-review-11.webp", text: "I've been using this neck and back massager after long workdays, and it's been a lifesaver. The quality feels premium, and it's so relaxing. Definitely worth it!" },
  { name: "William K.", rating: 5, img: "/products/featured-review-12.webp", text: "I tried it with my grandma who always complains about her shoulders. She loved it, said she'd never tried anything like it." },
  { name: "Daniel S.", rating: 5, img: "/products/featured-review-13.webp", text: "I'm not usually a gadget guy, but this one won me over. It's super relaxing after the gym." },
  { name: "Lucas M.", rating: 5, img: "/products/featured-review-14.webp", text: "It's super easy to use, even my mom handles it with no problem. The intensity is just right." },
  { name: "Anna S.", rating: 5, img: "/products/featured-review-15.webp", text: "Me lo regaló mi esposo porque sufro de cuello cargado. Desde que lo uso, duermo mejor y me levanto sin dolor." },
  { name: "Chris W.", rating: 5, img: "/products/featured-review-16.webp", text: "My order arrived quickly and well packaged. I use it on the couch while watching TV, so comfy!" },
];

function ReviewAvatar({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 bg-gold/10 text-gold"
    >
      {initial}
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
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

export default function ProductReviews() {
  const [shown, setShown] = useState(REVIEWS_PER_PAGE);
  const reviews = reviewsData;
  const totalReviews = reviewDisplay.count;
  const avgRating = reviewDisplay.avg;

  const ratingDist = reviewDisplay.dist;
  const totalRatings = totalReviews;

  // Cap the visible reviews to an even number so the 2-column grid never leaves
  // a lonely card on its own row.
  const maxReviews = reviews.length - (reviews.length % 2);
  const displayedReviews = reviews.slice(0, Math.min(shown, maxReviews));
  const canShowMore = shown < maxReviews;
  const remainingReviews = totalReviews - maxReviews;

  return (
    <section className="py-24 md:py-36 px-6 bg-background cv-section">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-heading tracking-tight mb-2">
              Customer <TextGradient variant="gold">Reviews</TextGradient>
            </h2>
          </div>
        </ScrollReveal>

        {/* Featured photo reviews */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-14">
            {featuredReviews.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl overflow-hidden border border-black/[0.06] bg-surface-raised shadow-sm flex flex-col"
              >
                <div className="aspect-[3/4] overflow-hidden bg-black/[0.03]">
                  <Image
                    src={r.img}
                    alt={`${r.name}'s photo review of the Nuro`}
                    width={259}
                    height={334}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-sm font-semibold text-heading">{r.name}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-muted">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.1 14.6-4-4L8.3 11l2.6 2.6 5.6-5.6 1.4 1.4z" />
                      </svg>
                      Verified
                    </span>
                  </div>
                  <StarRating rating={r.rating} />
                  <p className="mt-2 text-[13px] text-slate leading-relaxed">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-card rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-center flex-shrink-0">
                <div className="text-5xl sm:text-6xl font-bold text-heading leading-none">
                  {avgRating}
                </div>
                <div className="flex justify-center mt-2 mb-1">
                  <StarRating rating={5} />
                </div>
                <p className="text-sm text-muted">
                  {totalReviews.toLocaleString()} reviews
                </p>
              </div>
              <div className="flex-1 w-full space-y-2.5">
                {ratingDist.map((r) => {
                  const pct = Math.round((r.count / totalRatings) * 100);
                  return (
                    <div key={r.stars} className="flex items-center gap-3">
                      <span className="text-sm font-medium text-heading w-6 text-right">
                        {r.stars}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#8A9A82"
                        stroke="none"
                        className="flex-shrink-0"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <div className="flex-1 h-2.5 bg-black/[0.06] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                          className="h-full bg-gold rounded-full"
                        />
                      </div>
                      <span className="text-xs text-muted w-12 text-right">
                        {r.count.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Masonry columns so reviews keep their natural height, some short,
            some long, instead of every card stretching to match its row. */}
        <ScrollReveal>
          <div className="columns-1 md:columns-2 gap-4 [column-fill:balance]">
          {displayedReviews.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              className="mb-4 break-inside-avoid"
            >
                <div className="bg-surface-raised border border-black/[0.06] rounded-2xl p-5 transition-all duration-300 hover:border-black/10 hover:shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <ReviewAvatar name={review.name} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-heading text-sm">
                          {review.name}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold/10 text-gold text-[10px] font-semibold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Verified Purchase
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <StarRating rating={review.rating} />
                        <span className="text-[11px] text-muted">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate leading-relaxed">
                    {review.text}
                  </p>
                </div>
            </div>
          ))}
          </div>
        </ScrollReveal>

        {canShowMore ? (
          <div className="text-center mt-10">
            <button
              onClick={() => setShown((prev) => prev + REVIEWS_PER_PAGE)}
              className="px-8 py-3.5 rounded-full border border-gold/60 text-gold font-medium text-sm hover:bg-gold/10 hover:border-gold transition-all duration-500 cursor-pointer"
            >
              Read more reviews
            </button>
          </div>
        ) : (
          remainingReviews > 0 && (
            <p className="text-center mt-10 text-sm text-slate">
              Plus{" "}
              <span className="font-semibold text-heading">
                {remainingReviews.toLocaleString()}
              </span>{" "}
              more reviews from people who finally got the knots out.
            </p>
          )
        )}
      </div>
    </section>
  );
}
