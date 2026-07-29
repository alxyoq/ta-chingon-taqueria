import type { GalleryImage } from "@/types/content";

export const galleryContent = {
  title: "La Comida. El Camión. La Fiesta.",
  intro:
    "A look at the tacos, birria, loaded favorites, and colorful truck behind Ta Chingón.",
  images: [
    {
      src: "/images/site/hero-tacos.jpg",
      alt: "Al pastor tacos topped with pineapple, onion, and cilantro",
      width: 1800,
      height: 1100,
    },
    {
      src: "/images/site/pizza-birria.jpg",
      alt: "Pizza birria with consommé, salsa, cucumber, and lime",
      width: 1376,
      height: 768,
    },
    {
      src: "/images/site/birria-tacos.jpg",
      alt: "Crispy birria tacos with onion, cilantro, lime, and salsa",
      width: 1050,
      height: 1400,
    },
    {
      src: "/images/site/ta-chingon-poster.jpg",
      alt: "Ta Chingón artwork featuring the yellow food truck, cemita, aguas frescas, and elote",
      width: 1080,
      height: 1440,
    },
    {
      src: "/images/site/pastor-tacos.jpg",
      alt: "Al pastor tacos with pineapple, cilantro, onion, and salsa",
      width: 1050,
      height: 1400,
    },
    {
      src: "/images/site/birria-empanadas.jpg",
      alt: "Birria empanadas with consommé, cucumber, lime, and salsas",
      width: 1376,
      height: 768,
    },
    {
      src: "/images/site/asada-tacos.jpg",
      alt: "Azada steak tacos topped with guacamole and served with salsas",
      width: 1050,
      height: 1400,
    },
    {
      src: "/images/site/crazy-fries.jpg",
      alt: "Papas Locas loaded fries with meat, pico de gallo, and sour cream",
      width: 1050,
      height: 1400,
    },
    {
      src: "/images/site/nachos-rancheros.jpg",
      alt: "Nachos Rancheros loaded with meat, vegetables, and sour cream",
      width: 1400,
      height: 1050,
    },
    {
      src: "/images/site/salsa-fresca.jpg",
      alt: "A bowl of freshly made salsa fresca with tomato, onion, and cilantro",
      width: 1400,
      height: 1050,
    },
    {
      src: "/images/site/cemita.jpg",
      alt: "A Ta Chingón cemita sandwich filled with meat, pineapple, onion, cilantro, and sauce",
      width: 1050,
      height: 1400,
    },
  ] satisfies GalleryImage[],
} as const;
