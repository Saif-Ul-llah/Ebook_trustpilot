"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  Bell,
  Check,
  ChevronDown,
  ExternalLink,
  Filter,
  Info,
  MessageCircle,
  PenLine,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsDown,
  ThumbsUp,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { companyDetails, ratingDistribution, reviews as initialReviews, type Review } from "@/lib/reviews";

export function ProfilePage() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  function handleReviewSubmit(review: Review) {
    setReviews((currentReviews) => [review, ...currentReviews]);
  }

  return (
    <div className="min-h-screen bg-[#f5f5f2] text-[#1f1f1f]">
      <TopHeader />
      <main className="-mt-px rounded-t-[20px] bg-[#f5f5f2]">
        <div className="page-shell grid gap-9 py-10 lg:grid-cols-[minmax(0,1fr)_464px]">
          <section>
            <CompanyIntro />
            <IntegrityBanner />
            <ReviewSummary />
            <WriteReviewForm onSubmitReview={handleReviewSubmit} />
            <ReviewFeed reviews={reviews} />
          </section>
          <aside className="grid h-fit gap-4 lg:sticky lg:top-6">
            <ScoreCard />
            <SideNotice
              icon={<MessageCircle size={28} aria-hidden="true" />}
              title="Replies to critical reviews"
              text="Uses careful editorial support with author feedback"
            />
            <SideNotice
              icon={<TrendingUp size={28} aria-hidden="true" />}
              title="How this company uses reviews"
              text="See how their ratings are sourced, scored, and moderated."
              external
            />
            <CompanyDetails />
          </aside>
        </div>
        <div className="page-shell pb-16">
          <ReviewTopics />
          <DetailedReviews reviews={reviews} />
          <CompanyComparison />
          <ExperienceSection />
        </div>
      </main>
    </div>
  );
}

function TopHeader() {
  return (
    <header className="bg-[#191919] pb-7 text-white">
      <div className="header-shell flex min-h-[82px] items-center gap-5 xl:gap-7">
        <Link href="/" className="flex shrink-0 items-center gap-2 text-[26px] font-black leading-none">
          <span className="flex size-9 items-center justify-center text-[#00b67a]">
            <Star size={36} fill="currentColor" strokeWidth={0} aria-hidden="true" />
          </span>
          <span>Trustpilot</span>
        </Link>

        <div className="hidden h-12 min-w-0 flex-1 items-center gap-3 rounded-lg bg-white px-4 text-[#1f1f1f] md:flex xl:max-w-[620px]">
          <Search size={22} aria-hidden="true" />
          <input
            className="w-full border-0 text-base outline-none"
            placeholder="Search for another company..."
          />
        </div>

        <nav className="ml-auto hidden shrink-0 items-center gap-5 text-[15px] font-bold lg:flex xl:gap-7">
          <Link href="#categories">Categories</Link>
          <Link href="#blog">Blog</Link>
          <Bell size={25} aria-label="Notifications" />
          <Link href="#login" className="whitespace-nowrap">
            Log in
          </Link>
          <Link
            href="https://nobleinkstudios.com"
            className="whitespace-nowrap rounded-full bg-[#7da0f6] px-6 py-3 text-[#101010]"
          >
            For businesses
          </Link>
        </nav>
      </div>

      <div className="header-shell hidden items-center gap-3 overflow-hidden text-[13px] font-bold md:flex">
        <Link href="#publishers">Books & Publishing</Link>
        <span className="text-gray-400">›</span>
        <Link href="#services">Publishing Services</Link>
        <span className="text-gray-400">›</span>
        <Link href="#book-publisher">Book Publisher</Link>
        <span className="text-gray-400">›</span>
        <span>{companyDetails.name}</span>
      </div>
    </header>
  );
}

function CompanyIntro() {
  return (
    <div className="border-b border-[#d8d8d8] pb-9">
      <div className="grid gap-7 sm:grid-cols-[132px_1fr]">
        <div className="flex size-[132px] items-center justify-center bg-[#231f20] p-4">
          <Image
            src="/brand/noble_ink_logo_dark.svg"
            alt={companyDetails.name}
            width={112}
            height={112}
            className="object-contain"
          />
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            <Badge icon={<Check size={15} aria-hidden="true" />}>Claimed profile</Badge>
            <Badge>Paid review page subscription</Badge>
          </div>
          <h1 className="mt-4 text-[34px] font-bold leading-tight tracking-tight">
            {companyDetails.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-lg">
            <Link href="#reviews" className="underline underline-offset-4">
              Reviews {companyDetails.reviewCount.toLocaleString()}
            </Link>
            <span>·</span>
            <MiniStars rating={5} />
            <span className="font-semibold">{companyDetails.score}</span>
            <Info size={19} className="text-[#375bd2]" aria-hidden="true" />
          </div>
          <Link href="https://nobleinkstudios.com" className="mt-3 block text-lg text-[#244ed8]">
            {companyDetails.category}
          </Link>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="#write-review"
              className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-[#3557d5] px-7 text-base font-bold text-white"
            >
              <PenLine size={20} aria-hidden="true" />
              Write a review
            </a>
            <a
              href="https://nobleinkstudios.com"
              className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full border border-[#3557d5] px-7 text-base font-bold text-[#3557d5]"
            >
              Visit website
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntegrityBanner() {
  return (
    <div className="mt-5 flex items-center justify-between gap-5 rounded-lg border border-[#d8d2c8] bg-[#fbfaf4] px-5 py-4">
      <div className="flex items-center gap-4">
        <span className="flex size-10 items-center justify-center rounded-full bg-[#5f8df5] text-[#0f2148] shadow-[0_0_18px_rgba(95,141,245,0.75)]">
          <ShieldCheck size={26} aria-hidden="true" />
        </span>
        <p className="text-base font-bold">
          We use technology to protect platform integrity, but we don&apos;t fact-check reviews
        </p>
      </div>
      <ChevronDown size={24} aria-hidden="true" />
    </div>
  );
}

function ReviewSummary() {
  return (
    <section className="mt-10 max-w-[880px]">
      <h2 className="flex items-center gap-2 text-[28px] font-bold">
        {/* <Sparkles size={28} className="text-[#7657d6]" aria-hidden="true" /> */}
        Review summary
        <Info size={18} className="text-[#6b6b6b]" aria-hidden="true" />
      </h2>
      <p className="mt-1 text-lg text-[#555]">Created with AI, based on recent reviews</p>
      <p className="mt-4 text-[18px] leading-7">
        Evaluating recent Noble Ink Studios reviews, authors frequently praise the
        professional editing process, thoughtful manuscript guidance, and polished
        publishing support. Customers highlight helpful staff, clear communication,
        cover design quality, and practical launch guidance. Some reviewers mention
        timeline expectations and revision rounds as areas to clarify early.{" "}
        <Link href="#reviews" className="text-[#244ed8]">
          See more
        </Link>
      </p>
      <div className="mt-6 inline-flex items-center gap-5 rounded-lg border border-[#d8d8d8] bg-white px-5 py-3 text-sm font-bold text-[#555]">
        Was this summary helpful?
        <ThumbsUp size={22} aria-label="Helpful" />
        <ThumbsDown size={22} aria-label="Not helpful" />
      </div>
    </section>
  );
}

function WriteReviewForm({ onSubmitReview }: { onSubmitReview: (review: Review) => void }) {
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const location = String(data.get("location") || "").trim();
    const title = String(data.get("title") || "").trim();
    const body = String(data.get("body") || "").trim();

    if (!name || !location || !title || !body) {
      setStatus("error");
      setMessage("Please complete all fields before submitting your review.");
      return;
    }

    const dateLabel = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date());

    onSubmitReview({
      name,
      location: location.toUpperCase(),
      count: "1 review",
      title,
      body,
      date: "Just now",
      experienceDate: dateLabel,
      rating,
      verified: true,
    });

    form.reset();
    setRating(5);
    setStatus("success");
    setMessage("Your review was published on this page.");
  }

  return (
    <section id="write-review" className="mt-10 rounded-xl border border-[#dedbd4] bg-white p-5">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <h2 className="text-[28px] font-bold">Write a review</h2>
          <p className="mt-1 text-base text-[#555]">Share your experience with Noble Ink Studios.</p>
        </div>
        <div className="flex gap-1" aria-label={`${rating} star rating`}>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setRating(value)}
              className={`flex size-9 items-center justify-center ${
                value <= rating ? "bg-[#00b67a]" : "bg-[#d8d8d8]"
              } text-white`}
              aria-label={`Rate ${value} star${value === 1 ? "" : "s"}`}
            >
              <Star size={20} fill="currentColor" strokeWidth={0} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold">
            Name
            <input
              name="name"
              className="h-11 rounded-md border border-[#d6d0c9] px-3 font-normal outline-none focus:border-[#3557d5]"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Country
            <input
              name="location"
              maxLength={2}
              className="h-11 rounded-md border border-[#d6d0c9] px-3 font-normal uppercase outline-none focus:border-[#3557d5]"
              placeholder="US"
            />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-bold">
          Review title
          <input
            name="title"
            className="h-11 rounded-md border border-[#d6d0c9] px-3 font-normal outline-none focus:border-[#3557d5]"
            placeholder="Summarize your experience"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Review
          <textarea
            name="body"
            rows={5}
            className="resize-none rounded-md border border-[#d6d0c9] px-3 py-3 font-normal outline-none focus:border-[#3557d5]"
            placeholder="Tell other authors what happened"
          />
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#3557d5] px-7 text-base font-bold text-white"
          >
            Publish review
          </button>
          {message ? (
            <p className={status === "success" ? "font-bold text-[#138a42]" : "font-bold text-[#c8352e]"}>
              {message}
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
}

function ScoreCard() {
  return (
    <section className="overflow-hidden rounded-[18px] border border-[#d9d4cc] bg-white shadow-soft">
      <div className="grid grid-cols-[112px_1fr] gap-5 p-8">
        <div>
          <p className="text-[56px] font-bold leading-none">{companyDetails.score}</p>
          <p className="mt-2 text-base font-bold">{companyDetails.trustLabel}</p>
          <div className="mt-2">
            <MiniStars rating={5} />
          </div>
          <p className="mt-2 text-sm text-[#555]">
            {companyDetails.reviewCount.toLocaleString()} reviews
          </p>
        </div>
        <div className="grid gap-3">
          {ratingDistribution.map((item) => (
            <div key={item.label} className="grid grid-cols-[54px_1fr] items-center gap-3">
              <span className="text-sm">{item.label}</span>
              <div className="h-3 rounded-full bg-[#d4d4d4]">
                <div
                  className="h-3 rounded-full bg-[#00b67a]"
                  style={{ width: `${item.percentage || 4}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#d9d4cc] bg-[#fbfaf7] px-8 py-5 text-center">
        <Link href="#trustscore" className="text-base text-[#666] underline">
          How is the TrustScore calculated?
        </Link>
      </div>
    </section>
  );
}

function SideNotice({
  icon,
  title,
  text,
  external = false,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  external?: boolean;
}) {
  return (
    <section className="flex items-center justify-between gap-5 rounded-[18px] border border-[#d9d4cc] bg-white p-5">
      <div className="flex items-center gap-4">
        <span className="flex size-12 items-center justify-center rounded-full bg-[#f0efec]">{icon}</span>
        <div>
          <h3 className="text-base font-bold">{title}</h3>
          <p className="mt-1 text-base text-[#666]">{text}</p>
        </div>
      </div>
      {external ? <ExternalLink size={22} aria-hidden="true" /> : <ChevronDown size={24} aria-hidden="true" />}
    </section>
  );
}

function CompanyDetails() {
  return (
    <section className="rounded-[18px] border border-[#d9d4cc] bg-white p-6">
      <h3 className="text-lg font-bold">Company details</h3>
      <p className="mt-3 leading-7 text-[#555]">{companyDetails.description}</p>
      <div className="mt-5 grid gap-2 text-sm font-bold text-[#555]">
        <p>{companyDetails.address}</p>
        <p>{companyDetails.phone}</p>
        <p>{companyDetails.email}</p>
        <p>{companyDetails.domain}</p>
      </div>
    </section>
  );
}

function ReviewFeed({ reviews }: { reviews: Review[] }) {
  return (
    <section id="reviews" className="mt-10 grid gap-4">
      <h2 className="text-[28px] font-bold">Reviews for {companyDetails.domain}</h2>
      {reviews.map((review) => (
        <article key={`${review.name}-${review.date}`} className="rounded-lg border border-[#dedbd4] bg-white p-5">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="w-full md:w-48">
              <div className="flex size-12 items-center justify-center rounded-full bg-[#23376d] font-bold text-white">
                {review.name.slice(0, 2).toUpperCase()}
              </div>
              <p className="mt-3 font-bold">{review.name}</p>
              <p className="text-sm text-[#666]">
                {review.location} · {review.count}
              </p>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <MiniStars rating={review.rating} />
                <span className="text-sm text-[#666]">{review.date}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{review.title}</h3>
              <p className="mt-3 leading-7 text-[#555]">{review.body}</p>
              <p className="mt-4 text-sm font-semibold text-[#666]">
                Date of experience: {review.experienceDate}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

function Badge({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-[#d6d0c9] bg-white px-2 py-1 text-sm">
      {icon ? <span className="text-[#138a42]">{icon}</span> : null}
      {children}
    </span>
  );
}

function MiniStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`flex size-6 items-center justify-center ${
            index < rating ? "bg-[#00b67a]" : "bg-[#d8d8d8]"
          } text-white`}
        >
          <Star size={15} fill="currentColor" strokeWidth={0} aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

function ReviewTopics() {
  const topics = [
    ["Editing quality", 46],
    ["Publishing guidance", 38],
    ["Cover design", 31],
    ["Communication", 27],
    ["Ghostwriting", 24],
    ["Formatting", 18],
  ];

  return (
    <section className="mt-4 rounded-xl border border-[#dedbd4] bg-white p-5">
      <h2 className="text-[28px] font-bold">What people are talking about</h2>
      <p className="mt-2 text-base text-[#555]">
        Review topics are based on recurring themes in recent author feedback.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {topics.map(([label, count]) => (
          <button
            key={label}
            type="button"
            className="rounded-full border border-[#d4d4d4] bg-white px-4 py-2.5 text-sm font-bold hover:border-[#3557d5] hover:text-[#3557d5]"
          >
            {label} <span className="ml-2 text-[#666]">{count}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function DetailedReviews({ reviews }: { reviews: Review[] }) {
  const distribution = [
    ["5-star", 85, true, "#00b67a"],
    ["4-star", 4, true, "#73cf11"],
    ["3-star", 2, true, "#ffbf00"],
    ["2-star", 1, true, "#ff8622"],
  ] as const;

  return (
    <section className="mt-10 grid gap-10 lg:grid-cols-[428px_1fr]">
      <aside className="h-fit">
        <div className="flex items-center gap-2">
          <Star size={42} fill="#00b67a" strokeWidth={0} className="text-[#00b67a]" />
          <span className="text-[28px] font-bold leading-none">4.6</span>
          <Info size={18} className="text-[#3357d8]" aria-hidden="true" />
        </div>
        <h2 className="mt-8 text-[28px] font-bold leading-tight">All reviews</h2>
        <p className="mt-2 text-[19px] text-[#5f5f5f]">
          {companyDetails.reviewCount.toLocaleString()} total ·{" "}
          <a href="#write-review" className="text-[#3657d6]">
            Write a review
          </a>
        </p>

        <div className="mt-7 rounded-[18px] border border-[#d9d4cc] bg-white p-5">
          <div className="grid gap-3">
            {distribution.map(([label, percent, checked, color]) => (
              <div key={label} className="grid grid-cols-[30px_58px_1fr_40px] items-center gap-3">
                <span
                  className={`flex size-[30px] items-center justify-center rounded border ${
                    checked ? "border-[#3457d6] bg-[#e9efff] text-[#3457d6]" : "border-[#777]"
                  }`}
                >
                  {checked ? <Check size={22} aria-hidden="true" /> : null}
                </span>
                <span className="text-base">{label}</span>
                <span className="h-[14px] rounded-full bg-[#efeeeb]">
                  <span
                    className="block h-[14px] rounded-full"
                    style={{ width: `${percent}%`, backgroundColor: color }}
                  />
                </span>
                <span className="text-right text-base">{percent}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-[#d9d4cc] pt-8">
          <a href="#labels" className="inline-flex items-center gap-2 text-base underline">
            How Trust-style labels reviews
            <ExternalLink size={19} aria-hidden="true" />
          </a>
        </div>
      </aside>

      <div>
        <div className="flex flex-wrap gap-3">
          {["Instructions", "Invitation", "5-star", "4-star", "3-star", "2-star"].map((chip, index) => (
            <button
              key={chip}
              type="button"
              className={`rounded-full border px-5 py-2.5 text-base ${
                index < 2
                  ? "border-[#d9d4cc] bg-white"
                  : "border-[#3457d6] bg-[#e9efff] text-[#3457d6]"
              }`}
            >
              {chip}
              {index > 1 ? <span className="ml-3">×</span> : null}
            </button>
          ))}
          <button type="button" className="px-2 py-2.5 text-base text-[#3457d6] underline">
            Reset
          </button>
        </div>

        <div className="mt-8 border-t border-[#d9d4cc]" />
        <div className="mt-8 flex items-center gap-4 rounded-[18px] bg-[#ebe8e3] px-5 py-4">
          <span className="text-xl">∞</span>
          <p className="text-base font-bold">
            Merged reviews and profile{" "}
            <a href="#read-more" className="ml-4 font-normal">
              Read more
            </a>
          </p>
        </div>

        <div className="mt-11 grid gap-14">
          {reviews.map((review, index) => (
            <article key={`all-${review.name}-${review.date}`}>
              <div className="grid gap-5 sm:grid-cols-[52px_1fr_116px]">
                <div
                  className={`flex size-[52px] items-center justify-center rounded-full text-xl font-medium ${
                    index % 2 === 0 ? "bg-[#fff2ad]" : "bg-[#00988b] text-white"
                  }`}
                >
                  {review.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <div>
                  <p className="text-[19px] font-bold">{review.name}</p>
                  <p className="mt-1 text-base text-[#334]">{review.location} · {review.count}</p>
                  <div className="mt-5">
                    <MiniStars rating={review.rating} />
                  </div>
                  <h3 className="mt-4 text-[19px] font-bold">{review.title}</h3>
                  <p className="mt-4 max-w-[650px] text-[19px] leading-7">{review.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-sm">
                    <span className="rounded bg-[#ebe8e3] px-3 py-1">{review.experienceDate}</span>
                    <span className="rounded bg-[#ebe8e3] px-3 py-1">
                      {review.verified ? "Verified review" : "Unprompted review"}
                    </span>
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-7 text-base text-[#5f5f5f]">
                    <button type="button" className="inline-flex items-center gap-2">
                      <ThumbsUp size={19} aria-hidden="true" />
                      Useful
                    </button>
                    <button type="button" className="inline-flex items-center gap-2">
                      Share
                    </button>
                    <button type="button">Report</button>
                  </div>
                </div>
                <p className="text-right text-base text-[#334]">{index < 2 ? `${index + 4} minutes ago` : review.date}</p>
              </div>
            </article>
          ))}
        </div>
        <button
          type="button"
          className="mx-auto mt-12 block rounded-full border border-[#3557d5] px-8 py-4 text-base font-bold text-[#3557d5]"
        >
          Show more reviews
        </button>
      </div>
    </section>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase">{title}</h3>
      <div className="mt-3 grid gap-3">{children}</div>
    </div>
  );
}

function CompanyComparison() {
  const companies = [
    ["Noble Ink Studios", "4.7", "Excellent", "Book Publisher"],
    ["AuthorHouse Pro", "4.3", "Great", "Publishing Service"],
    ["Editorial Lane", "4.1", "Great", "Editing Service"],
  ];

  return (
    <section className="mt-10 rounded-xl border border-[#dedbd4] bg-white p-6">
      <h2 className="text-[28px] font-bold">People also viewed</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {companies.map(([name, score, label, category]) => (
          <article key={name} className="rounded-lg border border-[#dedbd4] p-5">
            <h3 className="text-base font-bold">{name}</h3>
            <p className="mt-1 text-sm text-[#555]">{category}</p>
            <div className="mt-4 flex items-center gap-3">
              <MiniStars rating={Math.round(Number(score))} />
              <span className="font-bold">{score}</span>
            </div>
            <p className="mt-2 font-bold text-[#555]">{label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="mt-10 rounded-xl border border-[#dedbd4] bg-white p-6">
      <h2 className="text-[28px] font-bold">The NobleReviews experience</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {[
          ["Anyone can write a review", "Reviews can be shared by authors who used writing, editing, design, or publishing services."],
          ["Companies can reply", "Noble Ink Studios can respond to feedback and explain how author concerns are handled."],
          ["Reviews are visible", "Ratings, dates, and reviewer context are shown clearly for people comparing publishing services."],
        ].map(([title, text]) => (
          <article key={title} className="rounded-lg bg-[#f5f5f2] p-5">
            <h3 className="text-base font-bold">{title}</h3>
            <p className="mt-2 leading-7 text-[#555]">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
