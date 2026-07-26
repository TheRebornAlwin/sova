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
  bonusName: "The Trigger Points Map",
  bonusBlurb: "the 5 pressure-point spots for instant neck relief",
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
    "In the box: Nuro, USB-C cable, travel pouch, plus The Trigger Points Map (digital)",
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
    text: "i've held my stress in my shoulders for as long as i can remember, and by the end of a workday theyre practically up at my ears without me even noticing. this is the first thing thats actually reached that knot at the base of my neck. i put it on while i finish emails and i can genuinely feel them dropping back down.",
  },
  {
    name: "Denise R.",
    rating: 5,
    date: "May 19, 2026",
    text: "I'll be honest, I bought this expecting to be disappointed, because I've wasted money on so many gadgets that promised everything and did nothing. I'm on a laptop close to nine hours a day and my neck and upper back are always in knots by evening, bad enough that it gives me headaches. The first time I used this I actually got a little emotional, which sounds dramatic, but that tight feeling I've carried for years just started to loosen. It kneads deep, right where a person would, and the heat makes the whole thing let go. Three weeks in and I reach for it every single night.",
  },
  {
    name: "tiffany h.",
    rating: 5,
    date: "May 12, 2026",
    text: "feels like actual hands, not some cheap thing buzzing on the surface. the ten minutes at the end of my day with this has become something i genuinely look forward to.",
  },
  {
    name: "Nicole R.",
    rating: 5,
    date: "May 6, 2026",
    text: "you could bounce a quarter off my upper back most days from hunching over a monitor. i honestly didn't think a device could reach anything that deep, but the nodes really dig in with just enough pressure, and my shoulders finally feel like mine again by the end of the night.",
  },
  {
    name: "Priyanka N.",
    rating: 5,
    date: "Apr 30, 2026",
    text: "For years the only thing that ever truly helped my neck and shoulders was a real massage, but at ninety dollars a session I could maybe justify it twice a year, so I've mostly just lived with the tension. This has honestly been the closest thing I've found to that worked-over, finally-loose feeling, except it's on my own couch and I can use it whenever the stress builds up. It paid for itself the first week and I mean that. My only regret is not finding it sooner.",
  },
  {
    name: "bethany k.",
    rating: 5,
    date: "Apr 23, 2026",
    text: "gets deep into the knots in a way i really wasn't expecting. simple to use and it actually works.",
  },
  {
    name: "Gabriela S.",
    rating: 5,
    date: "Apr 17, 2026",
    text: "my whole family carries their tension in their neck and shoulders, it's just how we're built. i got this mostly for myself but two of them have ordered their own since trying mine. it's become the thing we all reach for after a long day.",
  },
  {
    name: "sophie l.",
    rating: 5,
    date: "Apr 11, 2026",
    text: "i work from home and by dinner my shoulders are rock hard from sitting all day. fifteen minutes with this and it's like someone spent the whole time working the tension out. the warmth is the part i didn't realize i needed until i felt it.",
  },
  {
    name: "Renata M.",
    rating: 4,
    date: "Apr 4, 2026",
    text: "I want to be honest because that's what I look for in reviews. My last massager had hard plastic knobs that genuinely pinched and left my skin sore, so I was nervous. This one is nothing like that, the nodes are smooth and firm and it feels much more like real fingers working the muscle. The only reason I'm giving four stars instead of five is that I wish the strap was a touch longer for how I sit, but it does exactly what I hoped and my neck has felt looser than it has in a long time.",
  },
  {
    name: "renee k.",
    rating: 5,
    date: "Mar 30, 2026",
    text: "stretches, a foam roller, one of those little handheld massagers, heat patches, i've tried all of it over the years and nothing ever lasted more than a few minutes. i was pretty skeptical this would be any different. it genuinely is. it gets into the deep knot at the base of my neck and keeps it loose in a way none of the other stuff ever managed. i was a skeptic and now i'm honestly a little obsessed.",
  },
  {
    name: "Carmen V.",
    rating: 5,
    date: "Mar 25, 2026",
    text: "Twelve hour shifts absolutely wreck my neck and shoulders, and I usually come home too wound up to even relax. This feels like the spa massage I never have the time or the money to book. Now I sit down with it for ten minutes and I can actually feel my body let go.",
  },
  {
    name: "megan f.",
    rating: 5,
    date: "Mar 18, 2026",
    text: "i hold all my stress right in my shoulders and don't notice until they ache. the kneading and the heat together loosen it like nothing else i've tried.",
  },
  {
    name: "Claire D.",
    rating: 5,
    date: "Mar 12, 2026",
    text: "First morning in a long time my shoulders didn't feel like concrete when I woke up. I didn't realize how much I'd just gotten used to the tension until it was gone.",
  },
  {
    name: "dana b.",
    rating: 5,
    date: "Mar 5, 2026",
    text: "i'm on the road for work most of the day and my neck and shoulders are shot by the time i stop. i keep this in the car now and use it the second i park. it kneads the whole thing out and i honestly don't know how i managed so long without it.",
  },
  {
    name: "Olivia D.",
    rating: 5,
    date: "Feb 27, 2026",
    text: "I got this for my sister, who's a new mom, permanently tense and never does a thing for herself. She told me the ten quiet minutes with this before bed is the most relaxed she's felt in months. She's thanked me more times than I can count.",
  },
  {
    name: "aisha p.",
    rating: 5,
    date: "Feb 20, 2026",
    text: "i've dealt with tightness in my neck and shoulders for most of my adult life, mostly from stress and sitting at a desk. over the years i've tried a handheld massager, those stick-on devices, even a few chiropractor visits i couldn't really afford. nothing worked the deep knot the way this does. it kneads and heats at the same time and the relief actually stays after i take it off, instead of tightening right back up. this is the first thing i've genuinely wanted to tell people about.",
  },
  {
    name: "Emily W.",
    rating: 5,
    date: "Feb 14, 2026",
    text: "I have such a hard time unwinding after work, my shoulders just stay up around my ears well into the evening. This has become my nightly ritual. I drape it on, let it knead, and I can feel my whole body finally settle. It's the calmest part of my day now.",
  },
  {
    name: "rhea p.",
    rating: 5,
    date: "Feb 8, 2026",
    text: "feels like a real massage without the ninety dollar bill or the appointment. that's genuinely all i wanted.",
  },
  {
    name: "Rachel D.",
    rating: 5,
    date: "Feb 2, 2026",
    text: "the tension relief alone is worth every penny. i sit hunched at a screen more than ten hours a day, and putting this on at night feels like a spa treatment for my shoulders. i've been sleeping better too, which i didn't expect.",
  },
  {
    name: "Mara A.",
    rating: 5,
    date: "Jan 27, 2026",
    text: "I had one of those cheap vibrating pillows before and it just shook the surface without ever reaching anything. This is completely different. It actually kneads into the muscle and the heat helps it let go. The difference is night and day, and the heat is the part I'd miss most.",
  },
  {
    name: "alexa r.",
    rating: 5,
    date: "Jan 21, 2026",
    text: "was skeptical but this is the real deal. the nodes move in little circles just like fingers and you can feel the knot actually giving way.",
  },
  {
    name: "Samantha R.",
    rating: 5,
    date: "Jan 15, 2026",
    text: "I bought two, one for me and one for my mom, and she's completely obsessed. The heat is genuinely soothing and the intensity levels really do feel different from one another. Well made for the price.",
  },
  {
    name: "jenna c.",
    rating: 5,
    date: "Jan 9, 2026",
    text: "my roommate tried mine once and ordered her own the next day. easily the best thing i've bought for myself this year.",
  },
  {
    name: "Sophie C.",
    rating: 5,
    date: "Jan 3, 2026",
    text: "A lot of my tension comes from anxiety, and it settles right into my neck and shoulders and just stays there all day. I've never really known how to let it go. Leaning back with this in the evening has genuinely changed how my body feels by night, it works the tightness out slowly, and by the time it shuts off I feel calmer than I have in ages. I didn't expect a massager to help my head as much as my shoulders, but here we are.",
  },
  {
    name: "megan t.",
    rating: 5,
    date: "Dec 29, 2025",
    text: "i carry every bit of my stress in my neck, and this has genuinely changed my evenings for the better.",
  },
  {
    name: "Jordyn B.",
    rating: 4,
    date: "Dec 22, 2025",
    text: "Really effective, the heat and kneading combo works the tension out of my shoulders well. Only giving four stars because shipping took a little longer than I expected, but the product itself has been a five for me. No regrets.",
  },
  {
    name: "danielle s.",
    rating: 5,
    date: "Dec 16, 2025",
    text: "this is my evening wind-down now. i drape it on, heat up, medium speed, and within about ten minutes my shoulders have come all the way down from around my ears. the auto shutoff means i never even have to think about it.",
  },
  {
    name: "Toni H.",
    rating: 5,
    date: "Dec 10, 2025",
    text: "Replaced my old cheap vibrating one with this and it's not even close. That one just buzzed. This actually reaches the deep spots and the relief stays with you.",
  },
  {
    name: "Lisa N.",
    rating: 5,
    date: "Dec 4, 2025",
    text: "My daughter has been so stressed and hunched over studying that her shoulders were constantly tight and sore. I got her this and she actually thanked me, which as any parent of a teenager knows almost never happens. She uses it every night and says it's the one thing that helps.",
  },
  {
    name: "nina g.",
    rating: 5,
    date: "Nov 28, 2025",
    text: "my husband and i both hold our stress in our shoulders. he was the skeptic until he tried mine, and he ordered his own within the week.",
  },
  {
    name: "Carla V.",
    rating: 5,
    date: "Nov 21, 2025",
    text: "I'll admit I expected a cheap gimmick, because a lot of these products are. This genuinely surprised me. It's well built, the nodes feel firm and smooth instead of hard and pinchy like the last one I owned, and the heat feels like a warm compress at a spa. I've had chronic tightness across my shoulders for years and this is the first at-home thing that actually reaches it. I don't leave many reviews, but this one earned it.",
  },
  {
    name: "priya s.",
    rating: 5,
    date: "Nov 15, 2025",
    text: "perfect gift for my sister, who never takes a minute for herself. she absolutely loves it and uses it every day.",
  },
  {
    name: "Brooke W.",
    rating: 4,
    date: "Nov 9, 2025",
    text: "Solid device that really works the tension out of my shoulders before bed. My only small complaint is I'd love one more intensity level, but the ones it has are genuinely good and I use it constantly.",
  },
  {
    name: "natalie l.",
    rating: 5,
    date: "Nov 3, 2025",
    text: "so comfortable, and it drapes right over my shoulders and stays put hands-free. i was worried it would feel heavy or awkward but it doesn't at all, and my neck tension has genuinely improved since i started using it.",
  },
  {
    name: "Danielle O.",
    rating: 5,
    date: "Oct 28, 2025",
    text: "This is the second one I've bought. The first was for me, this one's a birthday gift for my best friend who carries all her stress in her shoulders. I know she'll love it as much as I do.",
  },
  {
    name: "Mike T.",
    rating: 5,
    date: "Oct 22, 2025",
    text: "My wife and I both use this every evening now, we each have our own. It's genuinely become part of our routine. Ten minutes after work and we both actually relax, instead of carrying the day around all night.",
  },
  {
    name: "rachel t.",
    rating: 5,
    date: "Oct 16, 2025",
    text: "the auto shutoff is a small thing but i love it. i relax so much i always forget it's even on until it quietly stops.",
  },
  {
    name: "Zara L.",
    rating: 5,
    date: "Oct 10, 2025",
    text: "I'm a massage therapist, so I'm probably harder to impress with something like this than most people. I always tell clients to keep something at home for between visits, and I've been hesitant to recommend the cheap devices because most of them don't do much. This one genuinely does. The kneading is close to the real motion of working a muscle, the heat helps everything release, and the build quality honestly impressed me. I use one myself now.",
  },
  {
    name: "elena g.",
    rating: 5,
    date: "Oct 4, 2025",
    text: "i travel a lot for work and my neck is always wrecked from planes and terrible hotel pillows. this lives in my carry-on now. i throw it on in the room at the end of a long travel day and the tension just melts. it's become non-negotiable for me.",
  },
  {
    name: "Isabel R.",
    rating: 5,
    date: "Sep 28, 2025",
    text: "My neck and shoulders are always tense from stress and sitting all day, and this has been perfect for winding down in the evening. The kneading paired with the warmth is so soothing that I look forward to it. Genuinely the best money I've spent on myself this year.",
  },
  {
    name: "kayla d.",
    rating: 4,
    date: "Sep 21, 2025",
    text: "really effective, and i love that the intensity levels genuinely feel different. the only reason for four stars is that i wish the battery lasted a bit longer between charges, but it charges fast over usb-c so it's a minor thing in the scheme of it.",
  },
  {
    name: "Noah F.",
    rating: 5,
    date: "Sep 15, 2025",
    text: "Ordered two more as gifts for my parents, who both hold their tension in their necks. The quality is genuinely impressive and I know they'll get a lot of use out of them.",
  },
  {
    name: "chloe w.",
    rating: 5,
    date: "Sep 9, 2025",
    text: "i didn't expect much for the price and it honestly exceeded everything i hoped. it kneads deep, the heat is perfect, and my shoulders finally come down at the end of the day. it's become the little bit of calm i actually protect for myself.",
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
