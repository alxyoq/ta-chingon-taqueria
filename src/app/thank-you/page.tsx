import { CheckCircle2, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Thank You",
  "Your message has been sent to Ta Chingón Taqueria.",
  "/thank-you",
);

export default function ThankYouPage() {
  return (
    <Layout>
      <div className="paper-texture flex min-h-[62vh] items-center py-20">
        <div className="site-container">
          <div className="content-card mx-auto max-w-2xl p-8 text-center sm:p-12">
            <CheckCircle2
              size={58}
              className="mx-auto text-brand-secondary"
              aria-hidden="true"
            />
            <h1 className="mt-6 text-5xl leading-none text-brand-primary sm:text-6xl">
              ¡Gracias!
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-brand-ink/70">
              Your message is on its way to the Ta Chingón team. We’ll get back
              to you as soon as we can.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
              <a
                href={`tel:${siteConfig.contact.phoneHref}`}
                className="btn-outline"
              >
                <Phone size={17} className="mr-2" aria-hidden="true" />
                Need Us Now? Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
