import { Clock, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import type { Metadata } from "next";

import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import { directionsUrl, mapEmbedUrl, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Visit & Contact",
  "Find Ta Chingón food-truck hours, Cherry Hill directions, phone, email, social updates, and contact form.",
  "/contact",
);

const inputClasses =
  "min-h-12 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-brand-ink placeholder:text-brand-ink/40";

export default function ContactPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Call, visit, or send a note"
        title="Find the Truck"
        intro="Our Cherry Hill stop is home base, but the truck travels for events. Check the latest update before heading over."
      />

      <div className="paper-texture py-16 lg:py-20">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <section className="content-card p-7 sm:p-8">
                <h2 className="mb-7 text-4xl text-brand-secondary">
                  Visit & Contact
                </h2>
                <ul className="space-y-7">
                  <li className="flex items-start">
                    <MapPin className="mr-4 mt-1 shrink-0 text-brand-primary" />
                    <div>
                      <h3 className="font-body text-base font-extrabold normal-case tracking-normal">
                        {siteConfig.contact.locationName}
                      </h3>
                      <address className="mt-1 not-italic leading-6 text-brand-ink/70">
                        {siteConfig.contact.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block text-sm font-extrabold text-brand-primary hover:text-brand-secondary"
                      >
                        Get directions →
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="mr-4 mt-1 shrink-0 text-brand-primary" />
                    <div>
                      <h3 className="font-body text-base font-extrabold normal-case tracking-normal">
                        Phone
                      </h3>
                      <a
                        href={`tel:${siteConfig.contact.phoneHref}`}
                        className="mt-1 block text-brand-ink/70 hover:text-brand-primary"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="mr-4 mt-1 shrink-0 text-brand-primary" />
                    <div>
                      <h3 className="font-body text-base font-extrabold normal-case tracking-normal">
                        Email
                      </h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="mt-1 block break-all text-brand-ink/70 hover:text-brand-primary"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="mr-4 mt-1 shrink-0 text-brand-primary" />
                    <div className="w-full">
                      <h3 className="mb-3 font-body text-base font-extrabold normal-case tracking-normal">
                        Typical Cherry Hill hours
                      </h3>
                      <ul className="space-y-2 text-sm text-brand-ink/70">
                        {siteConfig.hours.map(({ days, times }) => (
                          <li
                            key={days}
                            className="flex flex-col justify-between gap-1 border-b border-black/10 pb-2 sm:flex-row"
                          >
                            <span className="font-bold text-brand-ink">
                              {days}
                            </span>
                            <span>{times}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>

                <div className="mt-7 rounded-2xl bg-brand-accent/35 p-5 text-sm leading-6 text-brand-ink/75">
                  <p>{siteConfig.contact.locationNote}</p>
                  <a
                    href={siteConfig.social.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 font-extrabold text-brand-primary"
                  >
                    <Instagram size={17} aria-hidden="true" />
                    Check {siteConfig.social.instagramHandle}
                  </a>
                </div>
              </section>

              <div
                id="location"
                className="overflow-hidden rounded-[1.75rem] border-4 border-[var(--color-paper)] shadow-xl"
              >
                <iframe
                  src={mapEmbedUrl}
                  title={`${siteConfig.businessName} location map`}
                  width="100%"
                  height="390"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block border-0"
                />
              </div>
            </div>

            <section className="content-card h-fit p-7 sm:p-8">
              <p className="section-kicker">
                Questions, feedback, or an event?
              </p>
              <h2 className="mb-3 text-4xl text-brand-secondary">
                Send Us a Message
              </h2>
              <p className="mb-7 leading-7 text-brand-ink/65">
                For the fastest same-day answer, call us. For catering and
                general questions, send the details below.
              </p>

              <form
                name="contact"
                method="POST"
                action="/thank-you"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Do not fill this out:
                    <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-bold"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClasses}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-bold"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-sm font-bold"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-bold"
                  >
                    What can we help with?
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    defaultValue=""
                    className={inputClasses}
                  >
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option value="general">General question</option>
                    <option value="order">Order question</option>
                    <option value="catering">Catering or event</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-bold"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={7}
                    required
                    className={inputClasses}
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Send size={17} className="mr-2" aria-hidden="true" />
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
