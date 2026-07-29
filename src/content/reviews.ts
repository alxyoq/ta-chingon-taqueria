import { siteConfig } from "@/config/site";
import type { Review } from "@/types/content";

export const reviewsContent = {
  title: "South Jersey Is Talking",
  intro:
    "Guests come for the tacos and birria—and remember the warm service, fresh ingredients, and generous portions.",
  items: [
    {
      name: "Autumn M.",
      date: "February 2026",
      content:
        "10/10. Tacos are amazing. Burritos are amazing. Everything is amazing! Customer service is excellent!",
      rating: 5,
      source: "Google",
      link: siteConfig.reviews.url,
      featured: true,
    },
    {
      name: "Char S.",
      date: "June 2025",
      content:
        "The chicken quesadilla is absolutely delicious. Great food and customer service!",
      rating: 5,
      source: "DoorDash",
      link: siteConfig.ordering.url,
      featured: true,
    },
    {
      name: "South Jersey diner",
      date: "June 2026",
      content:
        "The al pastor tacos were amazing, and the chips and guacamole tasted incredibly fresh.",
      rating: 5,
      source: "Restaurantji",
      link: "https://www.restaurantji.com/nj/cherry-hill/ta-chingon-taqueria-llc-/",
      featured: true,
    },
    {
      name: "Mauricio R.",
      date: "November 2025",
      content:
        "Real authentic Mexican food. The birria tacos, al pastor, and milanesa cemita were all delicious.",
      rating: 5,
      source: "Google",
      link: siteConfig.reviews.url,
    },
  ] satisfies Review[],
} as const;
