import {
  Building2,
  CalendarDays,
  PartyPopper,
  Send,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import NetlifyForm from "@/components/forms/NetlifyForm";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import { siteConfig } from "@/config/site";
import { cateringContent } from "@/content/catering";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Catering",
  "Book the Ta Chingón Mexican food truck for weddings, birthdays, office lunches, festivals, and private events across South Jersey.",
  "/catering-events",
);

const inputClasses =
  "min-h-12 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-brand-ink placeholder:text-brand-ink/40";

const serviceIcons = [PartyPopper, Users, Building2];

export default function CateringEventsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Full-service food-truck catering"
        title={cateringContent.title}
        intro={cateringContent.intro}
      />

      <div className="paper-texture py-16 lg:py-20">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src={cateringContent.mainImage.src}
                alt={cateringContent.mainImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="section-kicker">
                Your event, our kitchen on wheels
              </p>
              <h2 className="text-4xl leading-none text-brand-secondary sm:text-5xl">
                Fresh food. Easy service. A real fiesta.
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-8 text-brand-ink/70">
                {cateringContent.details.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  className="btn-primary"
                >
                  Call {siteConfig.contact.phoneDisplay}
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Ta%20Chingon%20Catering%20Inquiry`}
                  className="btn-outline"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {cateringContent.services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article key={service.title} className="content-card p-7">
                  <span className="inline-flex rounded-full bg-brand-accent p-3 text-brand-ink">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-3xl text-brand-primary">
                    {service.title}
                  </h2>
                  <p className="mt-3 leading-7 text-brand-ink/65">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>

          <section
            id="catering-inquiry"
            className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-[2rem] bg-brand-secondary text-white shadow-2xl"
          >
            <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
              <div className="bg-brand-primary p-8 sm:p-10">
                <CalendarDays size={34} className="text-brand-accent" />
                <h2 className="mt-5 text-4xl leading-none text-white">
                  Tell us about your event
                </h2>
                <p className="mt-5 leading-7 text-white/80">
                  Share the basics and we’ll follow up about availability, menu
                  options, and pricing.
                </p>
                <ul className="mt-7 space-y-3 text-sm font-bold text-white/85">
                  <li>• Event date and location</li>
                  <li>• Estimated guest count</li>
                  <li>• Service style and favorite dishes</li>
                  <li>• Any dietary needs or special requests</li>
                </ul>
              </div>

              <NetlifyForm
                formName="catering"
                className="space-y-5 p-8 sm:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="catering-name"
                      className="mb-2 block text-sm font-bold"
                    >
                      Name
                    </label>
                    <input
                      id="catering-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="catering-phone"
                      className="mb-2 block text-sm font-bold"
                    >
                      Phone
                    </label>
                    <input
                      id="catering-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="catering-email"
                    className="mb-2 block text-sm font-bold"
                  >
                    Email
                  </label>
                  <input
                    id="catering-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClasses}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="event-date"
                      className="mb-2 block text-sm font-bold"
                    >
                      Event date
                    </label>
                    <input
                      id="event-date"
                      name="event-date"
                      type="date"
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="guest-count"
                      className="mb-2 block text-sm font-bold"
                    >
                      Estimated guests
                    </label>
                    <input
                      id="guest-count"
                      name="guest-count"
                      type="number"
                      min="1"
                      inputMode="numeric"
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="event-location"
                    className="mb-2 block text-sm font-bold"
                  >
                    Event location
                  </label>
                  <input
                    id="event-location"
                    name="event-location"
                    type="text"
                    required
                    placeholder="City, venue, or street address"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="event-details"
                    className="mb-2 block text-sm font-bold"
                  >
                    Tell us more
                  </label>
                  <textarea
                    id="event-details"
                    name="event-details"
                    rows={5}
                    required
                    placeholder="Event type, menu ideas, timing, dietary needs, and anything else we should know"
                    className={inputClasses}
                  />
                </div>

                <button type="submit" className="btn-secondary w-full">
                  <Send size={17} className="mr-2" aria-hidden="true" />
                  Request Catering
                </button>
              </NetlifyForm>
            </div>
          </section>

          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {cateringContent.gallery.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
