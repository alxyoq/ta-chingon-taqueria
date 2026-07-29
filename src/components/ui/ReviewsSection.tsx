import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { reviewsContent } from "@/content/reviews";

import ReviewCard from "./ReviewCard";

export default function ReviewsSection() {
  const featuredReviews = reviewsContent.items.filter(
    (review) => review.featured,
  );

  return (
    <section className="paper-texture py-20 lg:py-24">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Real guests. Real good food.</p>
          <h2 className="text-5xl leading-none text-brand-primary sm:text-6xl">
            {reviewsContent.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-brand-ink/70">
            {reviewsContent.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredReviews.map((review, index) => (
            <ReviewCard
              key={`${review.name}-${review.date}-${index}`}
              review={review}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/reviews" className="btn-outline">
            Read More Reviews
            <ArrowRight size={17} className="ml-2" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
