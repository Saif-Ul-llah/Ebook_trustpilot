import { Eye, MessageSquare, Scale, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Open to all",
    text: "Reviews are presented as customer feedback and displayed with clear rating context.",
  },
  {
    icon: UserCheck,
    title: "Verified experiences",
    text: "Verified labels help distinguish confirmed reviewers from general public feedback.",
  },
  {
    icon: Eye,
    title: "Review checks",
    text: "The page is structured to make rating distribution, dates, and reviewer details easy to scan.",
  },
  {
    icon: MessageSquare,
    title: "Constructive feedback",
    text: "Balanced comments help future authors understand service strengths and tradeoffs.",
  },
  {
    icon: Sparkles,
    title: "Latest reviews",
    text: "Recent reviews stay prominent so readers can judge the current customer experience.",
  },
  {
    icon: Scale,
    title: "No hidden bias",
    text: "Ratings, reviewer details, and company information are presented in a consistent format.",
  },
];

export function TrustSection() {
  return (
    <section className="border-t border-gray-200 bg-white py-14">
      <div className="page-shell">
        <h2 className="text-3xl font-black text-ink">The review experience</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded border border-gray-200 bg-gray-50 p-5">
                <div className="flex size-11 items-center justify-center rounded bg-trust text-white">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-black text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-steel">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
