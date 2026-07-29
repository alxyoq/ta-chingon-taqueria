import { ArrowRight, MapPin, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { homeContent } from "@/content/home";

import PapelPicado from "./PapelPicado";

export default function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative min-h-[620px] overflow-hidden sm:min-h-[680px] lg:min-h-[calc(100svh-7.15rem)]">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,26,15,0.92)_0%,rgba(10,26,15,0.72)_42%,rgba(10,26,15,0.20)_78%,rgba(10,26,15,0.06)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,26,15,0.45)_0%,transparent_45%)]"
        aria-hidden="true"
      />
      <PapelPicado className="absolute inset-x-0 top-0 z-10 bg-transparent opacity-95" />

      <div className="site-container relative z-20 flex min-h-[620px] items-center py-24 sm:min-h-[680px] lg:min-h-[calc(100svh-7.15rem)]">
        <div className="max-w-3xl pt-8 text-white">
          <span className="brush-label">{hero.eyebrow}</span>
          <h1 className="mt-6 text-6xl leading-[0.9] text-white drop-shadow-lg sm:text-7xl lg:text-[6.5rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/90 sm:text-xl">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href={hero.primaryCta.href} className="btn-secondary">
              {hero.primaryCta.label}
              <ArrowRight size={18} className="ml-2" aria-hidden="true" />
            </Link>
            <a
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <ShoppingBag size={18} className="mr-2" aria-hidden="true" />
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-sm font-bold backdrop-blur-sm">
            <MapPin
              size={17}
              className="text-brand-accent"
              aria-hidden="true"
            />
            Cherry Hill home base · South Jersey events
          </p>
        </div>
      </div>
    </section>
  );
}
