import { CheckCircle2 } from "lucide-react";
import type { Review } from "@/lib/reviews";
import { Stars } from "./stars";

export function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="rounded border border-gray-200 bg-white p-5">
      <div className="grid gap-5 sm:grid-cols-[190px_1fr]">
        <div className="flex gap-3 sm:block">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-black text-white">
            {initials}
          </div>
          <div className="sm:mt-3">
            <p className="font-black text-ink">{review.name}</p>
            <p className="mt-1 text-sm font-semibold text-steel">
              {review.location} · {review.count}
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Stars rating={review.rating} size="sm" />
            <span className="text-sm font-semibold text-steel">{review.date}</span>
          </div>
          <h3 className="mt-4 text-xl font-black text-ink">{review.title}</h3>
          <p className="mt-3 text-sm leading-7 text-steel">{review.body}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-semibold text-steel">
            <span>Date of experience: {review.experienceDate}</span>
            {review.verified ? (
              <span className="inline-flex items-center gap-1 text-trustDark">
                <CheckCircle2 size={16} aria-hidden="true" />
                Verified review
              </span>
            ) : (
              <span>Unprompted review</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
