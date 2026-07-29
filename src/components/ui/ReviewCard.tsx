import { Quote, Star } from "lucide-react";

import type { Review } from "@/types/content";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="content-card relative flex h-full flex-col overflow-hidden border-t-8 border-t-brand-primary p-6 sm:p-7">
      <Quote
        size={46}
        className="absolute right-5 top-4 text-brand-accent/60"
        aria-hidden="true"
      />
      <div className="mb-5 flex" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={`${review.name}-star-${index}`}
            size={18}
            fill={index < review.rating ? "currentColor" : "none"}
            className={
              index < review.rating ? "text-brand-accent" : "text-black/20"
            }
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="relative flex-grow text-lg font-medium leading-8 text-brand-ink/80">
        “{review.content}”
      </blockquote>
      <footer className="mt-6 border-t border-black/10 pt-4 text-sm text-brand-ink/55">
        <span className="font-extrabold text-brand-ink">{review.name}</span>
        <span aria-hidden="true"> · </span>
        <span>{review.date}</span>
        <span aria-hidden="true"> · </span>
        {review.link ? (
          <a
            href={review.link}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand-primary hover:text-brand-secondary"
          >
            {review.source}
          </a>
        ) : (
          <span>{review.source}</span>
        )}
      </footer>
    </article>
  );
}
