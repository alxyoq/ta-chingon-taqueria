import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { directionsUrl, siteConfig } from "@/config/site";

import PapelPicado from "../ui/PapelPicado";

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-white">
      <PapelPicado className="bg-brand-surface" />
      <div className="site-container py-12">
        <div className="grid gap-10 text-sm sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr_1fr]">
          <div>
            <Image
              src={siteConfig.assets.mark}
              alt={`${siteConfig.businessName} logo`}
              width={512}
              height={512}
              className="h-36 w-36 object-contain drop-shadow-lg"
            />
            <p className="mt-4 max-w-xs leading-6 text-white/75">
              Authentic Mexican food from our family-run truck in Cherry Hill
              and at events across South Jersey.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.social.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-2.5 hover:bg-brand-primary"
              >
                <Instagram size={19} />
              </a>
              <a
                href={siteConfig.social.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-full bg-white/10 p-2.5 hover:bg-brand-primary"
              >
                <Facebook size={19} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl text-brand-accent">Find the Truck</h2>
            <div className="mb-3 flex items-start">
              <MapPin size={18} className="mr-2 mt-0.5 shrink-0" />
              <div>
                <p className="mb-1 font-bold">
                  {siteConfig.contact.locationName}
                </p>
                <address className="not-italic leading-6 text-white/80">
                  {siteConfig.contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center font-bold text-brand-accent transition-colors hover:text-white"
            >
              Get directions <ArrowRight size={14} className="ml-1" />
            </a>
            <p className="mt-4 text-xs leading-5 text-white/65">
              {siteConfig.scheduleNote}
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl text-brand-accent">Truck Hours</h2>
            <ul className="space-y-2 text-white/80">
              {siteConfig.hours.map(({ days, times }) => (
                <li key={days}>
                  <span className="block font-bold text-white">{days}</span>
                  <span>{times}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl text-brand-accent">Talk to Us</h2>
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="mb-3 flex items-center font-bold transition-colors hover:text-brand-accent"
            >
              <Phone size={17} className="mr-2 shrink-0" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-start break-all text-white/80 transition-colors hover:text-brand-accent"
            >
              <Mail size={17} className="mr-2 mt-0.5 shrink-0" />
              {siteConfig.contact.email}
            </a>
            <a
              href={siteConfig.ordering.url}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary mt-5 text-[11px]"
            >
              {siteConfig.ordering.label}
            </a>
            <Link
              href="/catering-events"
              className="mt-5 inline-flex font-bold text-brand-accent transition-colors hover:text-white"
            >
              Plan catering <ArrowRight size={14} className="ml-1 mt-1" />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/20 pt-6 text-center text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName} All rights
            reserved.
          </p>
          <p>Hecho con sabor en Cherry Hill, New Jersey.</p>
        </div>
      </div>
    </footer>
  );
}
