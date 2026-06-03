export type Review = {
  name: string;
  location: string;
  count: string;
  title: string;
  body: string;
  date: string;
  experienceDate: string;
  rating: number;
  verified?: boolean;
};

export const reviews: Review[] = [
  {
    name: "Mara Ellison",
    location: "US",
    count: "2 reviews",
    title: "The editing process gave my manuscript structure",
    body:
      "Noble Ink Studios helped me organize a memoir draft that felt impossible to finish. The edits were detailed, patient, and respectful of my voice.",
    date: "2 days ago",
    experienceDate: "May 22, 2026",
    rating: 5,
    verified: true,
  },
  {
    name: "Daniel Cross",
    location: "US",
    count: "1 review",
    title: "Clear guidance for a first-time author",
    body:
      "I came in with a rough business book outline. Their team helped me shape the chapters, title direction, and publishing plan without overcomplicating the process.",
    date: "5 days ago",
    experienceDate: "May 18, 2026",
    rating: 5,
  },
  {
    name: "Priya Raman",
    location: "GB",
    count: "1 review",
    title: "Strong cover direction and formatting",
    body:
      "The cover design options were professional and genre aware. Formatting took one extra round, but the final ebook looked clean on Kindle.",
    date: "1 week ago",
    experienceDate: "May 14, 2026",
    rating: 4,
    verified: true,
  },
  {
    name: "Jonathan Miles",
    location: "CA",
    count: "3 reviews",
    title: "Helpful, but communication could be faster",
    body:
      "The editorial notes were useful and the finished file was solid. I would have liked quicker responses during the middle of the project.",
    date: "May 12, 2026",
    experienceDate: "May 8, 2026",
    rating: 4,
  },
  {
    name: "Alicia Morgan",
    location: "US",
    count: "1 review",
    title: "They made publishing feel manageable",
    body:
      "From manuscript review to launch checklist, the workflow was easy to follow. I appreciated that they explained each decision instead of rushing me.",
    date: "May 7, 2026",
    experienceDate: "May 4, 2026",
    rating: 5,
    verified: true,
  },
  {
    name: "Sameer Khan",
    location: "AE",
    count: "1 review",
    title: "Good ghostwriting support",
    body:
      "The first draft needed some changes, but the revision was much closer to what I wanted. Overall, a good experience for a nonfiction project.",
    date: "Apr 29, 2026",
    experienceDate: "Apr 25, 2026",
    rating: 4,
  },
  {
    name: "Emily Hart",
    location: "US",
    count: "2 reviews",
    title: "Professional and patient editors",
    body:
      "My editor gave useful comments on pacing, chapter order, and reader expectations. The process took time, but it improved the manuscript.",
    date: "Apr 21, 2026",
    experienceDate: "Apr 17, 2026",
    rating: 5,
    verified: true,
  },
];

export const ratingDistribution = [
  { label: "5-star", percentage: 72 },
  { label: "4-star", percentage: 28 },
  { label: "3-star", percentage: 0 },
  { label: "2-star", percentage: 0 },
];

export const companyDetails = {
  name: "Noble Ink Studios",
  domain: "nobleinkstudios.com",
  category: "Book Publisher",
  score: "4.7",
  reviewCount: 1247,
  trustLabel: "Excellent",
  address: "500 W 2nd St Suite 1900, Austin, TX 78701, United States",
  phone: "+1 (281) 317 1005",
  email: "hello@nobleinkstudios.com",
  description:
    "Noble Ink Studios supports authors with ghostwriting, editing, book design, ebook formatting, publishing guidance, and launch planning.",
};
