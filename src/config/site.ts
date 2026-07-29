import type { NavigationItem } from "@/types/content";

export const siteConfig = {
  businessName: "Ta Chingón Taqueria",
  legalName: "TA Chingon Taqueria LLC.",
  wordmark: {
    topLine: "TA CHINGÓN",
    bottomLine: "TAQUERIA",
  },
  tagline: "Tacos, burritos y más.",
  description:
    "Authentic Mexican food truck in Cherry Hill, New Jersey, serving tacos, quesabirrias, burritos, tortas, aguas frescas, and full-service catering across South Jersey.",
  siteUrl: "https://www.tachingonfoodtruck.com",
  locale: "en_US",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/catering-events", label: "Catering" },
    { href: "/gallery", label: "Gallery" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Visit Us" },
  ] satisfies NavigationItem[],
  contact: {
    phoneDisplay: "(856) 993-9743",
    phoneHref: "+18569939743",
    email: "tachingon672@gmail.com",
    locationName: "Regular Cherry Hill stop",
    addressLines: ["7 Burnt Mill Rd", "Cherry Hill, NJ 08003"],
    streetAddress: "7 Burnt Mill Rd",
    addressLocality: "Cherry Hill",
    addressRegion: "NJ",
    postalCode: "08003",
    locationNote:
      "The truck also serves at Cherry Hill Liquors, private events, and community stops across South Jersey. Check Instagram or call before traveling.",
  },
  hours: [
    { days: "Monday", times: "Closed / private events" },
    { days: "Tuesday–Thursday", times: "11:00 AM–5:00 PM" },
    { days: "Friday", times: "Events & catering" },
    { days: "Saturday", times: "11:00 AM–5:00 PM or events" },
    { days: "Sunday", times: "Closed / private events" },
  ],
  scheduleNote:
    "Food-truck hours and locations can change for catering and community events. Check the latest social post before heading over.",
  ordering: {
    enabled: true,
    label: "Order Online",
    url: "https://www.doordash.com/store/tachingon-taqueria-cherry-hill-31106560/",
  },
  reviews: {
    label: "Find Us on Google",
    url: "https://www.google.com/maps/search/?api=1&query=Ta%20Chingon%20Taqueria%20LLC%20Cherry%20Hill%20NJ",
  },
  social: {
    instagramHandle: "@tachingonfoodtruck",
    instagramUrl: "https://www.instagram.com/tachingonfoodtruck",
    facebookUrl: "https://www.facebook.com/tachingonfoodtruck/",
  },
  announcement: {
    text: "Our truck moves for events—check Instagram for today’s location.",
    linkLabel: "See latest updates",
    linkUrl: "https://www.instagram.com/tachingonfoodtruck",
  },
  assets: {
    logo: "/images/brand/ta-chingon-wordmark.png",
    mark: "/images/brand/ta-chingon-logo.png",
    favicon: "/images/brand/ta-chingon-logo.png",
    socialImage: "/images/site/hero-tacos.jpg",
  },
} as const;

export const fullAddress = siteConfig.contact.addressLines.join(", ");
export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.businessName}, ${fullAddress}`,
)}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${siteConfig.businessName}, ${fullAddress}`,
)}&output=embed`;
