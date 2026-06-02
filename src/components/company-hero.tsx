import { ExternalLink, Globe2, ShieldCheck } from "lucide-react";
import { companyDetails } from "@/lib/reviews";
import { Stars } from "./stars";

export function CompanyHero() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="page-shell py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-steel">
              <span>{companyDetails.category}</span>
              <span className="rounded-full bg-cream px-3 py-1 text-navy">Claimed profile</span>
              <span className="inline-flex items-center gap-1 text-trustDark">
                <ShieldCheck size={16} aria-hidden="true" />
                Review checks active
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-6xl">
              {companyDetails.name} Reviews
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Stars rating={5} size="lg" />
              <div>
                <p className="text-3xl font-black text-ink">{companyDetails.score}</p>
                <p className="text-sm font-semibold text-steel">
                  {companyDetails.trustLabel} · {companyDetails.reviewCount} reviews
                </p>
              </div>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://nobleinkstudios.com"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-navy px-5 text-sm font-black uppercase text-white hover:bg-darkNavy"
              >
                <Globe2 size={18} aria-hidden="true" />
                Visit website
              </a>
              <a
                href="#write-review"
                className="inline-flex min-h-12 items-center justify-center rounded border border-navy/20 bg-white px-5 text-sm font-black uppercase text-navy hover:border-crimson hover:text-crimson"
              >
                Write a review
              </a>
            </div>
          </div>
          <aside className="rounded border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-sm font-black uppercase text-ink">Company activity</h2>
            <div className="mt-4 grid gap-3 text-sm font-semibold text-steel">
              <p className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-trust" aria-hidden="true" />
                Asks for reviews professionally
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-trust" aria-hidden="true" />
                Replies to author feedback
              </p>
              <p className="flex items-center gap-2">
                <ExternalLink size={18} className="text-trust" aria-hidden="true" />
                Links back to official Noble Ink site
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
