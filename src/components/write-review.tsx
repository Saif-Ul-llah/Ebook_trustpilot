import { Send } from "lucide-react";
import { Stars } from "./stars";

export function WriteReview() {
  return (
    <section id="write-review" className="rounded border border-gray-200 bg-white p-5">
      <h2 className="text-2xl font-black text-ink">Write a review</h2>
      <p className="mt-2 text-sm font-semibold text-steel">
        Share a public review of your publishing, editing, writing, or design experience.
      </p>
      <div className="mt-5">
        <Stars rating={5} />
      </div>
      <form className="mt-5 grid gap-4">
        <input
          className="min-h-12 rounded border border-gray-300 px-3 text-sm font-semibold outline-none focus:border-trust"
          placeholder="Review title"
        />
        <textarea
          className="min-h-36 rounded border border-gray-300 px-3 py-3 text-sm font-semibold outline-none focus:border-trust"
          placeholder="Tell others about your experience"
        />
        <button
          type="button"
          className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded bg-trust px-5 text-sm font-black uppercase text-white hover:bg-trustDark"
        >
          <Send size={17} aria-hidden="true" />
          Submit review
        </button>
      </form>
    </section>
  );
}
