import { siteConfig } from "@/config/site";

export const homeContent = {
  hero: {
    image: "/images/site/hero-tacos.jpg",
    imageAlt:
      "A tray of Ta Chingón al pastor tacos topped with pineapple, onion, and cilantro",
    eyebrow: "Authentic Mexican food truck · Cherry Hill, NJ",
    title: "Tacos, burritos y más.",
    description:
      "Big Mexican flavor from our family-run truck—served in Cherry Hill and at celebrations across South Jersey.",
    primaryCta: { href: "/menu", label: "Explore the Menu" },
    secondaryCta: {
      href: siteConfig.ordering.url,
      label: siteConfig.ordering.label,
      external: true,
    },
  },
  intro: {
    eyebrow: "Bienvenidos",
    heading: "Come hungry. Leave chingón.",
    paragraphs: [
      "Ta Chingón began with a passion for authentic Mexican flavor and a dream of bringing the taste of home to our community.",
      "From al pastor and Sinaloa-style birria to loaded burritos, tortas, quesadillas, and rotating street-food specials, everything is made to deliver a bold, satisfying bite.",
    ],
    image: "/images/brand/ta-chingon-wordmark.png",
    imageAlt:
      "Ta Chingón Taqueria logo with the green pepper mascot holding a maraca",
  },
  favorites: {
    eyebrow: "Customer favorites",
    heading: "The good stuff",
    intro:
      "Start with the dishes South Jersey keeps coming back for, then find your own favorite.",
    items: [
      {
        title: "Al Pastor Tacos",
        description:
          "Marinated pork, pineapple, onion, cilantro, warm corn tortillas, and house salsa.",
        image: "/images/site/pastor-tacos.jpg",
        imageAlt:
          "Ta Chingón al pastor tacos with pineapple, onion, cilantro, lime, and salsa",
      },
      {
        title: "Pizza Birria",
        description:
          "Slow-cooked birria and melted cheese with onion, cilantro, and rich consommé for dipping.",
        image: "/images/site/pizza-birria.jpg",
        imageAlt:
          "Ta Chingón pizza birria on a wooden board with consommé and salsa",
      },
      {
        title: "Papas Locas",
        description:
          "Crispy fries piled with your choice of meat, cheese, pico de gallo, and sour cream.",
        image: "/images/site/crazy-fries.jpg",
        imageAlt:
          "Ta Chingón Papas Locas loaded fries with meat, pico de gallo, and sour cream",
      },
    ],
  },
  truck: {
    eyebrow: "Find the yellow truck",
    heading: "Cherry Hill home base. South Jersey roaming.",
    paragraphs: [
      `Our regular Cherry Hill stop is ${siteConfig.contact.addressLines.join(
        ", ",
      )}. We also roll out for festivals, breweries, community nights, and private events.`,
      "Because the truck travels, the day’s location can change. Check Instagram or call before making the trip.",
    ],
    image: "/images/site/ta-chingon-poster.jpg",
    imageAlt:
      "Ta Chingón promotional artwork featuring the yellow food truck, tacos, cemita, aguas frescas, and elote",
  },
  catering: {
    eyebrow: "We cater",
    heading: "Bring the truck to your fiesta.",
    description:
      "Birthdays, weddings, office lunches, graduations, neighborhood parties, and public events—tell us what you’re planning and we’ll build the right service for your crowd.",
    image: "/images/site/birria-empanadas.jpg",
    imageAlt:
      "Ta Chingón birria empanadas with consommé, cucumber, lime, and salsa",
  },
} as const;
