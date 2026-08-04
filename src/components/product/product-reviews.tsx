"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import TextGradient from "@/components/ui/text-gradient";

// Featured photo reviews shown at the top of the section.
const featuredReviews = [
  { name: "Oliver J.", rating: 5, img: "/products/featured-review-1.webp", text: "I was hesitant because of the price, not gonna lie. But after the first week I stopped thinking about it. I work long shifts on my feet and my shoulders are wrecked by the end of the day, and ten minutes with this genuinely undoes the whole thing." },
  { name: "Grace T.", rating: 5, img: "/products/featured-review-2.webp", text: "It came a couple days later than I expected but honestly it was worth the wait. I use it after my evening workouts when my neck is tight and it's the most relaxed I feel all day. The kneading actually gets in there, it doesn't just buzz on the surface." },
  { name: "Mia F.", rating: 5, img: "/products/featured-review-3.webp", text: "the build quality genuinely surprised me for the price. its also way quieter than i thought, i use it while watching tv and it doesnt drown anything out. my shoulders finally come down from around my ears at night now." },
  { name: "Ethan B.", rating: 5, img: "/products/featured-review-4.webp", text: "Bought this for myself after months of tension headaches from sitting at a desk all day. I can't recommend it enough. It feels like an actual person working the knots out of my neck. Genuinely the best thing I've bought for myself this year." },
  { name: "Olivia R.", rating: 5, img: "/products/featured-review-5.webp", text: "I work from home and by the evening my upper back is solid. This is my go-to for winding down now. The design feels really high quality, nothing about it feels cheap. Skeptical at first, obsessed now." },
  { name: "Sophie K.", rating: 4, img: "/products/featured-review-6.webp", text: "I bought this as a gift for my husband and he loves it. It's sturdy and comfortable and really helps him relax after long hours at the office. Only giving four stars because I wish the strap was a little longer, but he uses it every night." },
  { name: "Max H.", rating: 5, img: "/products/featured-review-7.webp", text: "I visit my physiotherapist every two weeks but having this at home has been perfect for daily relief. It keeps my shoulders loose in between sessions. Honestly it's paid for itself compared to what I'd spend on extra appointments." },
  { name: "Liam M.", rating: 5, img: "/products/featured-review-8.webp", text: "The delivery took a couple of extra days but it was totally worth the wait. I use it every single evening after work now, and that knot at the base of my neck that never used to budge finally does." },
  { name: "Paul M.", rating: 5, img: "/products/featured-review-9.webp", text: "the design with the two hands and two thumbs is genuinely unique. it feels like a real person is giving me a massage, not a machine. didnt expect that for the price." },
  { name: "Matthew E.", rating: 5, img: "/products/featured-review-10.webp", text: "After a full day on my feet, using it on my calves is total relief. I bought it for my neck originally but it works everywhere. Such a versatile little thing." },
  { name: "Emma L.", rating: 5, img: "/products/featured-review-11.webp", text: "I've been using this after long workdays and it's honestly been a lifesaver. The quality feels premium and it's so relaxing that I look forward to it every evening. Definitely worth it." },
  { name: "William K.", rating: 5, img: "/products/featured-review-12.webp", text: "I tried it with my grandma who always complains about her shoulders. She loved it, said she'd never tried anything like it. Now I kind of have to fight her for it when I visit lol." },
  { name: "Daniel S.", rating: 5, img: "/products/featured-review-13.webp", text: "im not usually a gadget guy, half the stuff i buy ends up in a drawer. but this one won me over. its super relaxing after the gym and its become part of my routine, which i did not expect." },
  { name: "Lucas M.", rating: 5, img: "/products/featured-review-14.webp", text: "It's super easy to use, even my mom handles it with no problem. The intensity is just right, firm enough to actually do something but never uncomfortable. One button and you're set." },
  { name: "Anna S.", rating: 5, img: "/products/featured-review-15.webp", text: "Me lo regaló mi esposo porque sufro de cuello cargado. Desde que lo uso, duermo mejor y me levanto sin dolor. No pensé que algo así fuera a ayudar tanto." },
  { name: "Chris W.", rating: 5, img: "/products/featured-review-16.webp", text: "My order arrived quickly and really well packaged. I use it on the couch while watching TV and it's so comfy I forget it's even on until it shuts off. Wish I'd gotten one sooner honestly." },
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
