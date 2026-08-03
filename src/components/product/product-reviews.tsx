"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import TextGradient from "@/components/ui/text-gradient";

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
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
      </div>
    </section>
  );
}
