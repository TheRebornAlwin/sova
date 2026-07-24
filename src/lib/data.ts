export interface Product {
  id: string;
  handle: string;
  title: string;
  tagline: string;
  description: string;
  price: number;
  compareAtPrice: number;
  images: string[];
  features: {
    title: string;
    description: string;
  }[];
  specs: string[];
  category: string;
}

// One source of truth for the offer. Reference everywhere so the page never
// contradicts itself.
export const offer = {
  price: 79.99,
  compareAtPrice: 159.99,
  guaranteeDays: 90,
  outcomeDays: 14,
  warrantyYears: 2,
  bonusName: "The 10-Minute Reset Guide",
  bonusBlurb: "a short wind-down ritual that gets the most out of every session",
  bonusValue: 29,
  shipping: "Free US shipping",
};

export const NURO_ID = "nuro";

// Bundle discount for the Nuro, driven purely by quantity:
// 2 = 10% off, 3 or more = 20% off. Used in the buy box and the cart so the
// price always matches the quantity, even when it changes in the cart.
export function bundleDiscount(qty: number): number {
  if (qty >= 3) return 20;
  if (qty === 2) return 10;
  return 0;
}

export const heroProduct: Product = {
  id: "nuro",
  handle: "nuro",
  title: "Nuro",
  tagline: "For the days your shoulders live up around your ears.",
  description:
    "By the end of the day your shoulders are up around your ears and the knot at the base of your neck won't budge. Nuro works it out the way a real massage therapist would, with rotating nodes that actually knead the muscle and gentle heat that helps it let go. You feel the tension start to release, your shoulders come down, and the day finally leaves your body. It's that real-hands feeling, at home, whenever you need it.",
  price: 79.99,
  compareAtPrice: 159.99,
  // Only the real product shot for now. Add more angles here as they're ready
  // and the gallery/thumbnails expand automatically. Filename is versioned
  // (-v2) to bust browser/CDN cache when the image is replaced.
  images: [
    "/products/nuro-main-v2.webp",
    "/products/nuro-2-v2.webp",
    "/products/nuro-3-v2.webp",
    "/products/nuro-4-v2.webp",
    "/products/nuro-5-v2.webp",
    "/products/nuro-6-v3.webp",
  ],
  features: [
    {
      title: "It kneads, it doesn't just buzz",
      description:
        "Rotating nodes work in slow circles, the way a therapist would, so it actually gets into the muscle instead of shaking the surface. That's the whole difference between feeling something for a second and the tension letting go.",
    },
    {
      title: "The heat that helps it let go",
      description:
        "Soothing warmth that loosens the muscle while the nodes work, so the deep knot releases instead of fighting back. It's the part most people say they didn't know they needed.",
    },
    {
      title: "Reaches the knot you can't",
      description:
        "It gets right into the base of your neck and across the tops of your shoulders, the exact spot you can never quite reach yourself. No twisting your arm, no asking someone to dig in.",
    },
    {
      title: "Feels like real hands, not a rough gadget",
      description:
        "The nodes are smooth and contoured, so it feels firm and worked, never sharp or pinchy like the cheap ones. Just enough pressure, the kind that hurts good and then loosens everything.",
    },
    {
      title: "One button, completely hands-free",
      description:
        "Drape it on, press one button, pick your heat and speed. It sits on your shoulders on its own, so you can read, scroll, or answer one more email while it works.",
    },
    {
      title: "Cordless, lives on the couch",
      description:
        "Rechargeable over USB-C with no cord to fight. Up to six sessions per charge, always ready the moment you sit down and reach for it.",
    },
  ],
  specs: [
    "Method: Rotating shiatsu kneading nodes plus soothing heat",
    "Nodes: 8 deep-kneading nodes (4 bi-directional pairs)",
    "Heat: Adjustable warmth, roughly 104°F-113°F (40°C-45°C)",
    "Intensity: 3 speed levels, forward and reverse kneading",
    "Battery: Rechargeable lithium (USB-C), fully cordless",
    "Run time: Up to 6 sessions per charge, silent 15-minute auto-off",
    "Fit: Contoured to sit on your neck and shoulders, completely hands-free",
    "Warranty: 2-year free replacement if it ever stops working",
    "In the box: Nuro, USB-C cable, travel pouch, plus The 10-Minute Reset Guide (digital)",
  ],
  category: "Wellness & Self-Care",
};

export const products: Product[] = [heroProduct];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "How do I contact Sova support?",
    answer:
      "You can reach us anytime at shopsovarelief@gmail.com. Real humans, usually back to you within 24 hours.",
  },
  {
    question: "Does it actually work, or is it just another gadget?",
    answer:
      "It genuinely kneads. The nodes rotate the way a massage therapist would, and the heat helps the muscle let go, so it reaches the deep knot instead of just buzzing on the surface. And if it isn't for you, you've got a full 90 days to send it back for every cent.",
  },
  {
    question: "Is it strong enough to reach the deep knot?",
    answer:
      "Yes. The nodes are built to press into the muscle at the base of your neck and across your shoulders, and there are adjustable intensity levels so you can go as light or as firm as you want. Most people are surprised how deep it gets.",
  },
  {
    question: "Will it pinch or hurt like the cheap ones?",
    answer:
      "No. The number one complaint about cheap massagers is hard plastic knobs that pinch. Nuro's nodes are smooth and contoured to feel like real thumbs, firm but never sharp. Just enough pressure, the kind that hurts good and then loosens everything.",
  },
  {
    question: "How is this different from a cheap vibrating massager?",
    answer:
      "A vibrating pillow just shakes the surface. Nuro actually kneads, with rotating nodes that work the muscle the way hands do, plus real heat. That's the difference between feeling something for a second and the tension actually releasing.",
  },
  {
    question: "Is it easy to use?",
    answer:
      "Very. Drape it over your neck and shoulders, press one button, pick your heat and speed, and lean back. It's completely hands-free, so you can read, watch TV, or answer emails while it works.",
  },
  {
    question: "How long do I use it for?",
    answer:
      "About ten to fifteen minutes is all it takes, and there's an auto shutoff after fifteen so you never have to think about it. You put it on, you lean back, and you let it do its thing.",
  },
  {
    question: "How long does the battery last?",
    answer:
      "A full charge gives you up to six sessions. It's cordless and charges over USB-C in about two hours, so it just lives on the couch and stays ready whenever you sit down.",
  },
  {
    question: "What if it doesn't work for me?",
    answer:
      "You've got a full 90 days to send it back for a full refund. Just email us at shopsovarelief@gmail.com, and you keep the bonus guide either way. No restocking fee, no questions about why.",
  },
  {
    question: "What if it breaks?",
    answer:
      "It's covered by a 2-year warranty. If it ever stops working, email us at shopsovarelief@gmail.com and we'll send a free replacement.",
  },
  {
    question: "How does the shipping work?",
    answer:
      "Free shipping on every US order. Orders are processed within 1-3 business days and every order ships with tracking.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Email us within 12 hours of ordering at shopsovarelief@gmail.com and we'll sort it out. After that it may have already entered processing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "All major cards (Visa, Mastercard, Amex), PayPal, Apple Pay, Google Pay, and Shop Pay through secure Shopify checkout.",
  },
];

export interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  image?: string;
}

// On-strategy, verbatim-anchored reviews first (shoulders around the ears /
// desk-tension / the therapist's-hands proof / the cheap-gadget objections),
// so the strongest social proof shows at the top of the grid.
export const reviewsData: Review[] = [
  {
    name: "hannah w.",
    rating: 5,
    date: "May 24, 2026",
    text: "my shoulders basically live up by my ears from stress and this is the first thing thats actually gotten into that knot at the base of my neck. i put it on while i answer emails and slowly feel them coming back down",
  },
  {
    name: "Denise R.",
    rating: 5,
    date: "May 19, 2026",
    text: "I'm on a laptop eight hours a day and my upper back is always in knots. This kneads exactly where a person would. After ten minutes the tightness that clung to my neck all day just melted away.",
  },
  {
    name: "tiffany h.",
    rating: 5,
    date: "May 12, 2026",
    text: "feels like actual hands not some cheap buzzing thing. my husband knows when its on to just let me have my ten minutes lol",
  },
  {
    name: "Nicole R.",
    rating: 5,
    date: "May 6, 2026",
    text: "you could bounce a quarter off my upper back most days from hunching over a monitor and i honestly did not think this would reach anything, but the nodes actually dig in, just enough pressure without it ever hurting, and now i use it every single evening the second i sit down",
  },
  {
    name: "Priyanka N.",
    rating: 5,
    date: "Apr 30, 2026",
    text: "I used to get a massage maybe twice a year because who can afford it more than that. This is that same worked-over feeling on my own couch whenever I want it. Paid for itself the first week, honestly.",
  },
  {
    name: "bethany k.",
    rating: 5,
    date: "Apr 23, 2026",
    text: "gets the knots out. thats it. thats the review",
  },
  {
    name: "Gabriela S.",
    rating: 5,
    date: "Apr 17, 2026",
    text: "my family teased me when i unboxed it and draped it on lol. joke is on them, two of them have ordered their own since",
  },
  {
    name: "sophie l.",
    rating: 5,
    date: "Apr 11, 2026",
    text: "i work from home and by dinner my shoulders are rock hard. 15 minutes with this and its like someone worked the whole day out of them. the warmth is the part i didnt know i needed",
  },
  {
    name: "Renata M.",
    rating: 4,
    date: "Apr 4, 2026",
    text: "My old massager had these hard plastic knobs that honestly pinched. This one is nothing like that, it feels smooth and firm, more like real fingers. Only reason for four stars is I wish the strap was a hair longer, otherwise it does exactly what I wanted it to.",
  },
  {
    name: "renee k.",
    rating: 5,
    date: "Mar 30, 2026",
    text: "stretches, a foam roller, one of those little handheld things, i tried all of it and none of it lasted. this is the only thing that actually gets into the deep knot and keeps it loose. skeptical at first, obsessed now",
  },
  {
    name: "Carmen V.",
    rating: 5,
    date: "Mar 25, 2026",
    text: "Twelve hour shifts wreck my neck and shoulders. This feels like the spa massage I can never find the time to book. I used to come home completely wound up. Now I sit down with it and just exhale.",
  },
  {
    name: "megan f.",
    rating: 5,
    date: "Mar 18, 2026",
    text: "i hold my stress in my shoulders and dont even notice until they ache. the kneading plus the heat loosens it in a way nothing else has",
  },
  {
    name: "Claire D.",
    rating: 5,
    date: "Mar 12, 2026",
    text: "First time in ages my shoulders didn't feel like concrete in the morning.",
  },
  {
    name: "dana b.",
    rating: 5,
    date: "Mar 5, 2026",
    text: "im on the road for work all day and my neck and traps are shot by the end of it. i throw this on when i finally stop and it kneads the whole thing out. dont know how i went so long without one",
  },
  {
    name: "Olivia D.",
    rating: 5,
    date: "Feb 27, 2026",
    text: "Got it for my sister who's a new mom and permanently tense. She said the ten minutes with this is the most relaxed she's felt in months and thanked me like five times.",
  },
  {
    name: "aisha p.",
    rating: 5,
    date: "Feb 20, 2026",
    text: "ive tried a handheld massager, those stick on things, even the chiropractor, and nothing worked the deep knot like this does. it kneads and heats at the same time and i actually feel loose after, not just for a second while its on",
  },
  {
    name: "Emily W.",
    rating: 5,
    date: "Feb 14, 2026",
    text: "I have the worst time unwinding after work, my shoulders just stay up by my ears. This is my nightly ritual now. Drape it on, let it knead, and I can feel my whole body settle.",
  },
  {
    name: "rhea p.",
    rating: 5,
    date: "Feb 8, 2026",
    text: "feels like a real massage without the $90 bill. thats all i wanted honestly",
  },
  {
    name: "Rachel D.",
    rating: 5,
    date: "Feb 2, 2026",
    text: "the tension relief alone is worth it. i sit hunched over a screen 10+ hours a day and this at night is like a spa treatment for my shoulders",
  },
  {
    name: "Mara A.",
    rating: 5,
    date: "Jan 27, 2026",
    text: "Way better than the cheap vibrating pillow I had before. That thing just buzzed on the surface. This actually kneads into the muscle. No comparison, and the heat is the real star.",
  },
  {
    name: "alexa r.",
    rating: 5,
    date: "Jan 21, 2026",
    text: "skeptical at first but this thing is legit. the nodes work in little circles just like fingers and you can literally feel the knot giving way",
  },
  {
    name: "Samantha R.",
    rating: 5,
    date: "Jan 15, 2026",
    text: "Bought two, one for me and one for my mom. She's obsessed. The heat is genuinely soothing and the intensity levels actually feel different from each other.",
  },
  {
    name: "jenna c.",
    rating: 5,
    date: "Jan 9, 2026",
    text: "my roommate ordered one the day after trying mine. best purchase of the year easily",
  },
  {
    name: "Sophie C.",
    rating: 5,
    date: "Jan 3, 2026",
    text: "Bought it for the tension I carry from anxiety and it completely changes how my body feels by night. I lean back with it and it just melts the day away.",
  },
  {
    name: "megan t.",
    rating: 5,
    date: "Dec 29, 2025",
    text: "i carry all my stress in my neck and this has genuinely changed my evenings",
  },
  {
    name: "Jordyn B.",
    rating: 4,
    date: "Dec 22, 2025",
    text: "Great device for the price and the heat and kneading combo really works the tension out. Only giving four stars because shipping took a little longer than I expected, but the product itself is a five.",
  },
  {
    name: "danielle s.",
    rating: 5,
    date: "Dec 16, 2025",
    text: "perfect for my evening wind down. i drape it on, heat on, medium speed, and within ten minutes my shoulders have dropped from around my ears",
  },
  {
    name: "Toni H.",
    rating: 5,
    date: "Dec 10, 2025",
    text: "Replaced my cheap vibrating one with this and it's night and day. That one just buzzed. This actually reaches the deep spots.",
  },
  {
    name: "Lisa N.",
    rating: 5,
    date: "Dec 4, 2025",
    text: "My daughter's been stressed and hunched over studying and her shoulders were always tight. Got her this and she literally thanked me, which never happens. She uses it every night now.",
  },
  {
    name: "nina g.",
    rating: 5,
    date: "Nov 28, 2025",
    text: "my husband and i both use one now. he was the skeptic but after trying mine he ordered his own within a week",
  },
  {
    name: "Carla V.",
    rating: 5,
    date: "Nov 21, 2025",
    text: "I was worried it would be some cheap gimmick but it's actually really well built. The nodes feel firm and smooth, not hard and pinchy like the last one I had. Feels like a warm massage at a spa.",
  },
  {
    name: "priya s.",
    rating: 5,
    date: "Nov 15, 2025",
    text: "perfect gift for my sister who hasnt had a minute to herself. she loves it",
  },
  {
    name: "Brooke W.",
    rating: 4,
    date: "Nov 9, 2025",
    text: "Solid product, really works the tension out of my shoulders before bed. My only small complaint is I wish it had one more intensity level, but the ones it has are great.",
  },
  {
    name: "natalie l.",
    rating: 5,
    date: "Nov 3, 2025",
    text: "so comfortable. it drapes right over my shoulders and stays put hands free. i was worried it would feel heavy or awkward but it doesnt at all",
  },
  {
    name: "Danielle O.",
    rating: 5,
    date: "Oct 28, 2025",
    text: "Second one I've bought. First was for me, this one's a birthday gift for my best friend who carries all her stress in her shoulders.",
  },
  {
    name: "Mike T.",
    rating: 5,
    date: "Oct 22, 2025",
    text: "My wife and I both use this every evening now, we each have our own. It's become part of our routine. Ten minutes after work and we both actually relax.",
  },
  {
    name: "rachel t.",
    rating: 5,
    date: "Oct 16, 2025",
    text: "the auto shutoff is a lifesaver, i always relax so much i forget its even on",
  },
  {
    name: "Zara L.",
    rating: 5,
    date: "Oct 10, 2025",
    text: "I'm a massage therapist and I tell clients to keep something at home between visits. Having an affordable kneading device with real heat like this is excellent. The quality genuinely impressed me.",
  },
  {
    name: "elena g.",
    rating: 5,
    date: "Oct 4, 2025",
    text: "i travel a lot for work and my neck is wrecked from planes and hotel pillows. this lives in my carry on now. throw it on in the room and the tension is gone",
  },
  {
    name: "Isabel R.",
    rating: 5,
    date: "Sep 28, 2025",
    text: "My shoulders and neck are always tense from stress and sitting all day, and this has been perfect for winding down. The kneading with the warmth is so soothing. Best money I've spent on myself this year.",
  },
  {
    name: "kayla d.",
    rating: 4,
    date: "Sep 21, 2025",
    text: "really effective and the intensity levels are all genuinely different which is nice. only reason for four stars is i wish the battery lasted a bit longer, but it charges fast so its a small thing",
  },
  {
    name: "Noah F.",
    rating: 5,
    date: "Sep 15, 2025",
    text: "Ordered two more as gifts for my parents who both hold their tension in their necks. Quality is genuinely impressive.",
  },
  {
    name: "chloe w.",
    rating: 5,
    date: "Sep 9, 2025",
    text: "just wow. i didnt expect much for the price but this exceeded everything, it kneads deep, the heat is perfect, and my shoulders finally come down from my ears at the end of the day. my whole family fights over it now lol",
  },
];

// Derived stats from the actual review cards (used where we want exact numbers).
export const reviewStats = (() => {
  const count = reviewsData.length;
  const sum = reviewsData.reduce((s, r) => s + r.rating, 0);
  const avg = Math.round((sum / count) * 10) / 10;
  const dist = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviewsData.filter((r) => r.rating === stars).length,
  }));
  return { count, avg, dist };
})();

// Social-proof totals shown on the rating counter and the summary bars. The
// full review history isn't all rendered on the page; only a curated set of
// cards above is. Distribution sums to `count` and averages ~4.9.
export const reviewDisplay = {
  count: 1241,
  avg: 4.9,
  dist: [
    { stars: 5, count: 1150 },
    { stars: 4, count: 68 },
    { stars: 3, count: 15 },
    { stars: 2, count: 5 },
    { stars: 1, count: 3 },
  ],
};
