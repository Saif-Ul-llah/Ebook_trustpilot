import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="page-shell flex min-h-20 items-center justify-between gap-5">
        <Link className="flex items-center gap-3" href="/">
          <span className="relative size-11 overflow-hidden rounded bg-cream">
            <Image src="/brand/noble_ink_logo_transparent_800x800.png" alt="" fill className="object-contain" />
          </span>
          <span>
            <span className="block text-xl font-black uppercase leading-none text-navy">Noble Ink</span>
            <span className="block text-xs font-black uppercase text-crimson">Reviews</span>
          </span>
        </Link>
        <div className="hidden min-h-11 w-full max-w-xl items-center gap-3 rounded border border-gray-300 bg-white px-4 md:flex">
          <Search size={18} className="text-gray-500" aria-hidden="true" />
          <input
            className="w-full border-0 text-sm font-semibold outline-none"
            placeholder="Search for a company or review"
          />
        </div>
        <nav className="hidden items-center gap-5 text-sm font-bold text-navy md:flex">
          <Link href="#reviews" className="hover:text-crimson">
            Reviews
          </Link>
          <Link href="#write-review" className="hover:text-crimson">
            Write a review
          </Link>
        </nav>
      </div>
    </header>
  );
}
