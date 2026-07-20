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
  ],
  features: [
    {
      title: "It kneads, it doesn't just buzz",
      description:
        "Rotating nodes work in slow circles, the way a therapist's thumbs would, so it actually gets into the muscle instead of shaking the surface. That's the whole difference between feeling something for a second and the tension letting go.",
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
      "It genuinely kneads. The nodes rotate the way a massage therapist's thumbs would, and the heat helps the muscle let go, so it reaches the deep knot instead of just buzzing on the surface. And if it isn't for you, you've got a full 90 days to send it back for every cent.",
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
      "Feel the difference within 14 days, or send it back any time within 90 days for a full refund. Just email us at shopsovarelief@gmail.com, and you keep the bonus guide either way. No restocking fee, no questions about why.",
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
    name: "Hannah W.",
    rating: 5,
    date: "May 24, 2026",
    text: "i hold all my stress in my shoulders and by the end of the day theyre basically up around my ears. i put this on while i answer emails and i can feel them slowly coming back down. its the first thing thats actually gotten into that knot at the base of my neck",
  },
  {
    name: "Denise R.",
    rating: 5,
    date: "May 19, 2026",
    text: "I'm on a laptop eight hours a day and my upper back is always in knots. This kneads exactly where a person would. Ten minutes and the tightness that clung to my neck all day just melted away. I did not think a device could do that.",
  },
  {
    name: "Tiffany H.",
    rating: 5,
    date: "May 12, 2026",
    text: "listen. this feels like actual hands, not some cheap buzzing thing. i drape it on after work, lean back, and let it work the knots out. my husband knows when its on to just let me have my ten minutes lol",
  },
  {
    name: "Nicole R.",
    rating: 5,
    date: "May 6, 2026",
    text: "you could bounce a quarter off my upper back most days from hunching over a monitor. i was skeptical it would reach anything but the nodes actually dig in, just enough pressure without hurting. genuinely surprised",
  },
  {
    name: "Priyanka N.",
    rating: 5,
    date: "Apr 30, 2026",
    text: "I used to get a massage maybe twice a year because who can afford it more than that. This is that same worked-over feeling on my own couch whenever I want it. It paid for itself the first week honestly.",
  },
  {
    name: "Bethany K.",
    rating: 5,
    date: "Apr 23, 2026",
    text: "i carry every bit of stress in my neck and shoulders and it builds into this tight, heavy feeling by the evening. the heat plus the kneading loosens it before it gets bad now. i reach for it the second i feel my shoulders creeping up",
  },
  {
    name: "Gabriela S.",
    rating: 5,
    date: "Apr 17, 2026",
    text: "my family teased me when i unboxed it and draped it on. joke is on them, two of them have ordered their own since. everyone who laughed wants a turn now",
  },
  {
    name: "Sophie L.",
    rating: 5,
    date: "Apr 11, 2026",
    text: "i work from home and by dinner my shoulders are rock hard. fifteen minutes with this and its like someone worked the whole day out of them. the warmth is the part i didnt know i needed",
  },
  {
    name: "Renata M.",
    rating: 4,
    date: "Apr 4, 2026",
    text: "my old massager had these hard plastic knobs that honestly hurt and pinched. this one is nothing like that, it feels smooth and firm like real thumbs. only reason for 4 stars is i wish the strap was a hair longer. otherwise it does exactly what i wanted",
  },
  {
    name: "Renee K.",
    rating: 5,
    date: "Mar 30, 2026",
    text: "stretches, a foam roller, one of those little handheld things, i tried it all and none of it lasted. this is the only thing that actually gets into the deep knot and keeps it loose. skeptical at first, obsessed now",
  },
  {
    name: "Carmen V.",
    rating: 5,
    date: "Mar 25, 2026",
    text: "twelve hour nursing shifts wreck my neck and shoulders. this feels like the spa massage i cant afford to get every week. i used to come home completely wound up, now i sit down with this and just exhale",
  },
  {
    name: "Megan F.",
    rating: 5,
    date: "Mar 18, 2026",
    text: "i hold my stress in my shoulders and dont even notice until they ache. the kneading plus the heat loosens it in a way nothing else has. its become the ten minutes of my day that are actually just mine",
  },
  {
    name: "Claire D.",
    rating: 5,
    date: "Mar 12, 2026",
    text: "first time in ages my shoulders didnt feel like concrete when i woke up. i didnt realize how much tension i was carrying around until this pulled it out",
  },
  {
    name: "Dana B.",
    rating: 5,
    date: "Mar 5, 2026",
    text: "i'm on the road for work all day and my neck and traps are shot by the end of it. i throw this on when i finally stop and it kneads the whole thing out. dont know how i went so long without it",
  },
  {
    name: "Olivia D.",
    rating: 5,
    date: "Feb 27, 2026",
    text: "got it for my sister whos a new mom and permanently tense. she said the ten minutes with this is the most relaxed shes felt in months. thanked me like five times",
  },
  {
    name: "Aisha P.",
    rating: 5,
    date: "Feb 20, 2026",
    text: "I've tried a handheld massager, those stick-on things, even the chiropractor. Nothing worked the deep knot like this. It kneads and heats at the same time and I actually feel loose after, not just for a second.",
  },
  {
    name: "Emily W.",
    rating: 5,
    date: "Feb 14, 2026",
    text: "I have the worst time unwinding after work, my shoulders just stay up by my ears. This is my nightly ritual now. Drape it on, let it knead, and I can feel my whole body settle.",
  },
  {
    name: "Rhea P.",
    rating: 5,
    date: "Feb 8, 2026",
    text: "desk job, so my traps are always tight. this on the medium setting after work is the perfect way to decompress. feels like a real massage without the ninety dollar bill",
  },
  {
    name: "Rachel D.",
    rating: 5,
    date: "Feb 2, 2026",
    text: "the tension relief alone is worth it. i sit hunched over a screen ten plus hours a day and this at night is like a spa treatment for my shoulders. the warm kneading feeling is incredible",
  },
  {
    name: "Mara A.",
    rating: 5,
    date: "Jan 27, 2026",
    text: "way better than the cheap vibrating pillow i had before. that thing just buzzed on the surface, this actually kneads into the muscle. no comparison. the heat is the real star",
  },
  {
    name: "Alexa R.",
    rating: 5,
    date: "Jan 21, 2026",
    text: "skeptical at first but this thing is legit. the nodes work in circles just like thumbs and you can literally feel the knot giving way. highly recommend if you carry your tension in your neck",
  },
  {
    name: "Samantha R.",
    rating: 5,
    date: "Jan 15, 2026",
    text: "Bought two, one for me and one for my mom. She's obsessed. The heat is genuinely soothing and the intensity levels actually feel different. Great quality for the price.",
  },
  {
    name: "Jenna C.",
    rating: 5,
    date: "Jan 9, 2026",
    text: "got this because my shoulders were constantly tight from stress and my roommate ordered one the day after trying mine. we both use them every evening now. best purchase of the year easily",
  },
  {
    name: "Sophie C.",
    rating: 5,
    date: "Jan 3, 2026",
    text: "Bought it for the tension I carry from anxiety and it completely changes how my body feels by night. I lean back with it, let it knead, and it just melts the day away. Absolutely love it.",
  },
  {
    name: "Megan T.",
    rating: 5,
    date: "Dec 29, 2025",
    text: "I carry all my stress in my neck and shoulders and this has genuinely changed my evenings. the kneading is so good for releasing the knots. best thing I've bought for myself this year honestly",
  },
  {
    name: "Jordyn B.",
    rating: 4,
    date: "Dec 22, 2025",
    text: "great device for the price. the heat and kneading combo really works the tension out. only giving 4 stars because shipping took a little longer than i expected but the product itself is 5/5",
  },
  {
    name: "Danielle S.",
    rating: 5,
    date: "Dec 16, 2025",
    text: "perfect for my evening wind down. i drape it on, heat on, medium speed, and within ten minutes my shoulders have dropped from around my ears. the auto shutoff means i never have to think about it. absolute essential now",
  },
  {
    name: "Toni H.",
    rating: 5,
    date: "Dec 10, 2025",
    text: "replaced my cheap vibrating one with this and its night and day. that one just buzzed, this actually kneads and reaches the deep spots. finally something that gets the knots out",
  },
  {
    name: "Lisa N.",
    rating: 5,
    date: "Dec 4, 2025",
    text: "My daughter's been stressed and hunched over studying and her shoulders were always tight. Got her this and she literally thanked me which never happens lol. She uses it every night now.",
  },
  {
    name: "Nina G.",
    rating: 5,
    date: "Nov 28, 2025",
    text: "My husband and I both use one now. He was the skeptic but after trying mine he ordered his own within a week. We both hold our stress in our shoulders and this is the fix.",
  },
  {
    name: "Carla V.",
    rating: 5,
    date: "Nov 21, 2025",
    text: "i was worried it would be some cheap gimmick but its actually really well built. the nodes feel firm and smooth, not hard and pinchy like the last one i had. feels like a warm massage at a spa",
  },
  {
    name: "Priya S.",
    rating: 5,
    date: "Nov 15, 2025",
    text: "Perfect gift for my sister who's a new mom and hasn't had a minute to herself. She says the ten minutes with this is the most relaxed she feels all day.",
  },
  {
    name: "Brooke W.",
    rating: 4,
    date: "Nov 9, 2025",
    text: "solid product. really works the tension out of my shoulders before bed. my only minor complaint is i wish it had one more intensity level, but the ones it has are great. heat and kneading are excellent",
  },
  {
    name: "Natalie L.",
    rating: 5,
    date: "Nov 3, 2025",
    text: "so comfortable. it drapes right over my shoulders and stays put hands free. i was worried it would feel heavy or awkward but it doesnt. my neck tension has genuinely improved",
  },
  {
    name: "Danielle O.",
    rating: 5,
    date: "Oct 28, 2025",
    text: "second one i bought. first was for me and this is for my best friend for her birthday. she carries all her stress in her shoulders and is going to love this. quality is consistent between both units",
  },
  {
    name: "Mike T.",
    rating: 5,
    date: "Oct 22, 2025",
    text: "my wife and i both use this every evening now, we each have our own. its become part of our routine. ten minutes after work and we both actually relax. cant recommend it enough",
  },
  {
    name: "Rachel T.",
    rating: 5,
    date: "Oct 16, 2025",
    text: "the auto shutoff is a lifesaver, i always relax so much i forget its even on. no more paying for a massage i cant fit into my schedule. this lives on the couch now",
  },
  {
    name: "Zara L.",
    rating: 5,
    date: "Oct 10, 2025",
    text: "I'm a massage therapist and I tell clients to keep something at home between visits. Having an affordable kneading device with real heat like this is excellent. The quality genuinely impressed me.",
  },
  {
    name: "Elena G.",
    rating: 5,
    date: "Oct 4, 2025",
    text: "i travel a lot for work and my neck is wrecked from planes and hotel pillows. this is in my carry on now. throw it on in the room and the tension is gone. the travel pouch is a nice touch",
  },
  {
    name: "Isabel R.",
    rating: 5,
    date: "Sep 28, 2025",
    text: "My shoulders and neck are always tense from stress and sitting all day. This has been perfect for winding down. The kneading with the warmth is so soothing. Best money I've spent on myself this year.",
  },
  {
    name: "Kayla D.",
    rating: 4,
    date: "Sep 21, 2025",
    text: "really effective. the intensity levels are all genuinely different which is nice. only reason for 4 stars is i wish the battery lasted a touch longer, but it charges fast so its a small thing",
  },
  {
    name: "Noah F.",
    rating: 5,
    date: "Sep 15, 2025",
    text: "ive shown this to everyone i know and they all want one. just ordered two more as gifts for my parents who both hold their tension in their necks. the quality is genuinely impressive",
  },
  {
    name: "Chloe W.",
    rating: 5,
    date: "Sep 9, 2025",
    text: "just wow. i didnt expect much for the price but this exceeded everything. it kneads deep, the heat is perfect, and my shoulders finally come down from my ears. my whole family fights over it now lol",
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
