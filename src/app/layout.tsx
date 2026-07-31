import type { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";
import { PurchaseWebsiteButton } from "@/components/site/PurchaseWebsiteButton";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.businessName} | Mexican Food Truck in Cherry Hill, NJ`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Mexican food truck Cherry Hill",
    "tacos Cherry Hill NJ",
    "birria tacos South Jersey",
    "Mexican catering South Jersey",
    "Ta Chingon Taqueria",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: siteConfig.assets.favicon,
    apple: siteConfig.assets.favicon,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName} | Tacos, Burritos y Más`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.assets.socialImage,
        width: 1800,
        height: 1100,
        alt: "Ta Chingón al pastor tacos with pineapple, onion, cilantro, and salsa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | Tacos, Burritos y Más`,
    description: siteConfig.description,
    images: [siteConfig.assets.socialImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#13542f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    additionalType: "https://en.wikipedia.org/wiki/Food_truck",
    name: siteConfig.businessName,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    telephone: siteConfig.contact.phoneHref,
    email: siteConfig.contact.email,
    priceRange: "$$",
    servesCuisine: ["Mexican", "Tacos", "Street Food"],
    acceptsReservations: false,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.streetAddress,
      addressLocality: siteConfig.contact.addressLocality,
      addressRegion: siteConfig.contact.addressRegion,
      postalCode: siteConfig.contact.postalCode,
      addressCountry: "US",
    },
    image: [
      `${siteConfig.siteUrl}${siteConfig.assets.socialImage}`,
      `${siteConfig.siteUrl}${siteConfig.assets.logo}`,
    ],
    menu: `${siteConfig.siteUrl}/menu`,
    sameAs: [
      siteConfig.social.instagramUrl,
      siteConfig.social.facebookUrl,
      siteConfig.ordering.url,
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
        opens: "11:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "11:00",
        closes: "17:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Cherry Hill",
      },
      {
        "@type": "AdministrativeArea",
        name: "South Jersey",
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        {children}
        <PurchaseWebsiteButton />
      </body>
    </html>
  );
}
