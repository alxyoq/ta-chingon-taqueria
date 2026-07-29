import { ShoppingBag } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import { siteConfig } from "@/config/site";
import { menuContent } from "@/content/menu";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Menu",
  "Browse Ta Chingón tacos, birria, burritos, tortas, quesadillas, loaded favorites, and Mexican drinks.",
  "/menu",
);

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function MenuPage() {
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${siteConfig.businessName} Menu`,
    hasMenuSection: menuContent.sections.map((section) => ({
      "@type": "MenuSection",
      name: section.title,
      description: section.description,
      hasMenuItem: section.items.map((item) => {
        const numericPrice = item.price.match(/\d+(?:\.\d+)?/)?.[0];

        return {
          "@type": "MenuItem",
          name: item.name,
          description: item.description,
          ...(numericPrice
            ? {
                offers: {
                  "@type": "Offer",
                  price: numericPrice,
                  priceCurrency: "USD",
                },
              }
            : {}),
        };
      }),
    })),
  };

  return (
    <Layout>
      <script type="application/ld+json">{JSON.stringify(menuSchema)}</script>
      <PageHero
        eyebrow="Made fresh from the truck"
        title={menuContent.title}
        intro={menuContent.intro}
      />

      <div className="paper-texture py-16 lg:py-20">
        <div className="site-container">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                src: "/images/site/pizza-birria.jpg",
                alt: "Pizza birria with consommé and salsa",
              },
              {
                src: "/images/site/pastor-tacos.jpg",
                alt: "Al pastor tacos with pineapple, onion, and cilantro",
              },
              {
                src: "/images/site/cemita.jpg",
                alt: "Cemita sandwich filled with meat and fresh toppings",
              },
            ].map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-5 rounded-[1.5rem] bg-brand-accent p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl text-brand-ink sm:text-3xl">
                Hungry right now?
              </h2>
              <p className="mt-1 text-sm font-medium text-brand-ink/70">
                See live availability and place a pickup or delivery order
                online.
              </p>
            </div>
            <a
              href={siteConfig.ordering.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary shrink-0"
            >
              <ShoppingBag size={17} className="mr-2" aria-hidden="true" />
              {siteConfig.ordering.label}
            </a>
          </div>

          <nav
            className="mx-auto my-12 flex max-w-5xl flex-wrap justify-center gap-3"
            aria-label="Menu categories"
          >
            {menuContent.sections.map((section) => (
              <a
                key={section.title}
                href={`#${slugify(section.title)}`}
                className="btn-outline min-h-10 px-4 py-2 text-xs"
              >
                {section.title}
              </a>
            ))}
          </nav>

          <div className="mx-auto max-w-5xl space-y-14">
            {menuContent.sections.map((section) => (
              <section
                key={section.title}
                id={slugify(section.title)}
                className="scroll-mt-40"
              >
                <div className="mb-6 text-center">
                  <h2 className="text-4xl leading-none text-brand-primary sm:text-5xl">
                    {section.title}
                  </h2>
                  {section.description ? (
                    <p className="mx-auto mt-3 max-w-2xl text-brand-ink/65">
                      {section.description}
                    </p>
                  ) : null}
                </div>

                <div className="content-card divide-y divide-black/10 overflow-hidden">
                  {section.items.map((item) => (
                    <article
                      key={`${section.title}-${item.name}`}
                      className="grid gap-3 p-5 sm:grid-cols-[1fr_auto] sm:gap-x-8 md:p-6"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-body text-lg font-extrabold normal-case tracking-normal text-brand-ink sm:text-xl">
                            {item.name}
                          </h3>
                          {item.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-brand-accent px-2.5 py-1 text-[11px] font-black uppercase tracking-wide text-brand-ink"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {item.description ? (
                          <p className="mt-2 max-w-3xl leading-7 text-brand-ink/65">
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                      <p className="font-extrabold text-brand-primary sm:text-right">
                        {item.price}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border-2 border-dashed border-brand-secondary/35 bg-white/50 p-6 text-center text-sm leading-6 text-brand-ink/65">
            <p>{menuContent.notice}</p>
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="mt-3 inline-block font-extrabold text-brand-primary hover:text-brand-secondary"
            >
              Questions? Call {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
