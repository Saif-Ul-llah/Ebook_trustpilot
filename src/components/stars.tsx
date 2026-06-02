import { Star } from "lucide-react";

export function Stars({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const boxSize = size === "lg" ? "size-10" : size === "sm" ? "size-6" : "size-8";
  const iconSize = size === "lg" ? 22 : size === "sm" ? 14 : 18;

  return (
    <div className="flex gap-1" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`inline-flex ${boxSize} items-center justify-center rounded-sm ${
            index < rating ? "bg-trust text-white" : "bg-gray-200 text-white"
          }`}
        >
          <Star size={iconSize} fill="currentColor" strokeWidth={0} aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}
