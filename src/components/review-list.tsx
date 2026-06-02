import { reviews } from "@/lib/reviews";
import { ReviewCard } from "./review-card";

export function ReviewList() {
  return (
    <section id="reviews" className="grid gap-4">
      <div className="rounded border border-gray-200 bg-white p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-black text-ink">All reviews</h2>
            <p className="mt-1 text-sm font-semibold text-steel">{reviews.length} total reviews</p>
          </div>
          <select className="min-h-11 rounded border border-gray-300 bg-white px-3 text-sm font-bold text-ink">
            <option>Most recent</option>
            <option>Highest rating</option>
            <option>Lowest rating</option>
          </select>
        </div>
      </div>
      {reviews.map((review) => (
        <ReviewCard key={`${review.name}-${review.date}`} review={review} />
      ))}
    </section>
  );
}
