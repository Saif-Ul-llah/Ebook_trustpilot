import { Mail, MapPin, Phone, Tag } from "lucide-react";
import { companyDetails } from "@/lib/reviews";

export function CompanyCard() {
  return (
    <aside className="rounded border border-gray-200 bg-white p-5">
      <h2 className="text-xl font-black text-ink">Company details</h2>
      <p className="mt-3 text-sm leading-6 text-steel">{companyDetails.description}</p>
      <div className="mt-5 grid gap-4 text-sm font-semibold text-steel">
        <p className="flex items-start gap-3">
          <Tag size={18} className="mt-0.5 text-crimson" aria-hidden="true" />
          {companyDetails.category}
        </p>
        <p className="flex items-start gap-3">
          <MapPin size={18} className="mt-0.5 text-crimson" aria-hidden="true" />
          {companyDetails.address}
        </p>
        <a className="flex items-center gap-3 hover:text-crimson" href={`tel:${companyDetails.phone}`}>
          <Phone size={18} className="text-crimson" aria-hidden="true" />
          {companyDetails.phone}
        </a>
        <a className="flex items-center gap-3 hover:text-crimson" href={`mailto:${companyDetails.email}`}>
          <Mail size={18} className="text-crimson" aria-hidden="true" />
          {companyDetails.email}
        </a>
      </div>
    </aside>
  );
}
