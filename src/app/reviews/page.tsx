import { Star } from "lucide-react";
import type { Metadata } from "next";

import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import ReviewCard from "@/components/ui/ReviewCard";
import { siteConfig } from "@/config/site";
import { reviewsContent } from "@/content/reviews";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Reviews",
  "Read what South Jersey guests say about Ta Chingón tacos, birria, burritos, catering, and service.",
  "/reviews",
);

const summaryStars = ["one", "two", "three", "four", "five"] as const;

export default function ReviewsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Loved by taco people"
        title={reviewsContent.title}
        intro={reviewsContent.intro}
      />

      <div className="paper-texture py-16 lg:py-20">
        <div className="site-container">
          <div className="mx-auto mb-12 flex max-w-xl flex-col items-center rounded-[1.5rem] bg-brand-accent p-7 text-center shadow-lg sm:flex-row sm:justify-center sm:gap-6 sm:text-left">
            <p className="font-display text-6xl leading-none text-brand-primary">
              4.7
            </p>
            <div>
              <div
                className="my-2 flex justify-center text-brand-primary sm:justify-start"
                aria-label="4.7 out of 5 stars on DoorDash"
              >
                {summaryStars.map((star) => (
                  <Star key={star} size={19} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm font-bold text-brand-ink/70">
                50+ ratings on DoorDash
              </p>
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {reviewsContent.items.map((review) => (
              <ReviewCard
                key={`${review.name}-${review.date}`}
                review={review}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={siteConfig.reviews.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              {siteConfig.reviews.label}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
