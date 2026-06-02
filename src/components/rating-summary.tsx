import { ratingDistribution } from "@/lib/reviews";
import { Stars } from "./stars";

export function RatingSummary() {
  return (
    <section className="rounded border border-gray-200 bg-white p-5">
      <h2 className="text-xl font-black text-ink">Reviews</h2>
      <p className="mt-1 text-sm font-semibold text-steel">We perform checks on reviews</p>
      <div className="mt-5 flex items-center gap-3">
        <Stars rating={5} />
        <span className="text-sm font-black text-ink">4.7</span>
      </div>
      <div className="mt-6 grid gap-3">
        {ratingDistribution.map((item) => (
          <div key={item.label} className="grid grid-cols-[70px_1fr_42px] items-center gap-3 text-sm">
            <span className="font-bold text-ink">{item.label}</span>
            <div className="h-3 rounded-full bg-gray-200">
              <div className="h-3 rounded-full bg-trust" style={{ width: `${item.percentage}%` }} />
            </div>
            <span className="text-right font-bold text-steel">{item.percentage}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
