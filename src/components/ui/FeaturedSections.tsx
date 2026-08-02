import {
  ArrowRight,
  Instagram,
  MapPin,
  PartyPopper,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { directionsUrl, siteConfig } from "@/config/site";
import { homeContent } from "@/content/home";

export default function FeaturedSections() {
  const { intro, favorites, truck, catering } = homeContent;

  return (
    <div>
      <section className="bg-brand-accent py-4 text-brand-ink">
        <div className="site-container flex flex-col items-center justify-center gap-2 text-center text-sm font-extrabold uppercase tracking-[0.08em] sm:flex-row sm:gap-4">
          <span>{siteConfig.scheduleNote}</span>
          <a
            href={siteConfig.social.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 text-brand-primary underline decoration-brand-primary/40 underline-offset-4"
          >
            <Instagram size={17} aria-hidden="true" />
            Follow the truck
          </a>
        </div>
      </section>

      <section className="site-container grid items-center gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
        <div className="content-card relative overflow-hidden p-8 sm:p-12">
          <div
            className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-accent/40"
            aria-hidden="true"
          />
          <Image
            src={intro.image}
            alt={intro.imageAlt}
            width={1200}
            height={400}
            className="relative mx-auto h-auto w-full max-w-lg drop-shadow-[0_10px_20px_rgb(21_36_25_/_0.10)]"
          />
          <div className="mt-8 grid grid-cols-3 gap-2 text-center text-xs font-black uppercase tracking-wide">
            <span className="rounded-full bg-brand-primary px-2 py-2 text-white">
              Fresh
            </span>
            <span className="rounded-full bg-brand-secondary px-2 py-2 text-white">
              Authentic
            </span>
            <span className="rounded-full bg-brand-accent px-2 py-2 text-brand-ink">
              Chingón
            </span>
          </div>
        </div>

        <div>
          <p className="section-kicker">{intro.eyebrow}</p>
          <h2 className="text-4xl leading-none text-brand-secondary sm:text-5xl lg:text-6xl">
            {intro.heading}
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-8 text-brand-ink/75">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/menu" className="btn-primary">
              View the Menu
              <ArrowRight size={17} className="ml-2" aria-hidden="true" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="btn-outline"
            >
              <Phone size={17} className="mr-2" aria-hidden="true" />
              Call Ahead
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-secondary py-20 text-white lg:py-24">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-brand-accent">
              {favorites.eyebrow}
            </p>
            <h2 className="text-5xl leading-none text-white sm:text-6xl">
              {favorites.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
              {favorites.intro}
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {favorites.items.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[1.75rem] bg-[var(--color-paper)] text-brand-ink shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-3xl text-brand-primary">{item.title}</h3>
                  <p className="mt-3 leading-7 text-brand-ink/70">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/menu" className="btn-secondary">
              See the Full Menu
              <ArrowRight size={17} className="ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="site-container grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-8 border-[var(--color-paper)] shadow-2xl">
          <Image
            src={truck.image}
            alt={truck.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[50%_67%]"
          />
        </div>
        <div>
          <p className="section-kicker">{truck.eyebrow}</p>
          <h2 className="text-4xl leading-none text-brand-secondary sm:text-5xl lg:text-6xl">
            {truck.heading}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-brand-ink/75">
            {truck.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <MapPin size={17} className="mr-2" aria-hidden="true" />
              Directions
            </a>
            <a
              href={siteConfig.social.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <Instagram size={17} className="mr-2" aria-hidden="true" />
              Today’s Location
            </a>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-brand-primary text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[360px] lg:min-h-[560px]">
            <Image
              src={catering.image}
              alt={catering.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-center px-6 py-16 sm:px-12 lg:px-16">
            <div className="max-w-xl">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-brand-accent">
                <PartyPopper size={18} aria-hidden="true" />
                {catering.eyebrow}
              </p>
              <h2 className="text-5xl leading-none text-white sm:text-6xl">
                {catering.heading}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                {catering.description}
              </p>
              <Link href="/catering-events" className="btn-secondary mt-8">
                Plan Your Event
                <ArrowRight size={17} className="ml-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
