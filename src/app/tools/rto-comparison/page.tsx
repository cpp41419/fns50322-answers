import Link from "next/link";
import { Metadata } from "next";
import {
  Building2, ChevronRight, MapPin, Clock, DollarSign,
  Monitor, Users, Star, ExternalLink, Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Compare RTOs for FNS50322 | Training Provider Comparison",
  description: "Compare Registered Training Organisations offering FNS50322 Diploma of Finance and Mortgage Broking Management. Filter by price, study mode, and location.",
};

// Sample RTO data - will move to database
const rtos = [
  {
    id: 1,
    name: "Kaplan Professional",
    code: "90116",
    logo: "/logos/kaplan.png",
    website: "https://www.kaplanprofessional.edu.au",
    priceFrom: 4995,
    priceTo: 5995,
    duration: "6-12 months",
    modes: ["online", "blended"],
    states: ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "NT", "ACT"],
    vslApproved: true,
    rating: 4.5,
    reviews: 127,
    highlights: ["Industry leader", "Strong support", "Flexible study"],
    featured: true,
  },
  {
    id: 2,
    name: "Monarch Institute",
    code: "22530",
    logo: "/logos/monarch.png",
    website: "https://www.monarch.edu.au",
    priceFrom: 3990,
    priceTo: 4990,
    duration: "6-18 months",
    modes: ["online"],
    states: ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "NT", "ACT"],
    vslApproved: true,
    rating: 4.3,
    reviews: 89,
    highlights: ["Affordable", "Self-paced", "Quick turnaround"],
    featured: true,
  },
  {
    id: 3,
    name: "AAMC Training",
    code: "32424",
    logo: "/logos/aamc.png",
    website: "https://www.aamctraining.edu.au",
    priceFrom: 3500,
    priceTo: 4500,
    duration: "3-12 months",
    modes: ["online", "blended"],
    states: ["NSW", "VIC", "QLD", "WA", "SA"],
    vslApproved: true,
    rating: 4.4,
    reviews: 156,
    highlights: ["Fast completion", "Industry connections", "Mentorship"],
    featured: false,
  },
  {
    id: 4,
    name: "National Finance Institute",
    code: "41422",
    logo: "/logos/nfi.png",
    website: "https://financeinstitute.com.au",
    priceFrom: 2990,
    priceTo: 3990,
    duration: "3-6 months",
    modes: ["online"],
    states: ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "NT", "ACT"],
    vslApproved: false,
    rating: 4.2,
    reviews: 203,
    highlights: ["Best value", "Fast completion", "Upgrade options"],
    featured: false,
  },
  {
    id: 5,
    name: "TAFE NSW",
    code: "90003",
    logo: "/logos/tafe.png",
    website: "https://www.tafensw.edu.au",
    priceFrom: 3500,
    priceTo: 8000,
    duration: "12-18 months",
    modes: ["classroom", "blended"],
    states: ["NSW"],
    vslApproved: true,
    rating: 4.1,
    reviews: 67,
    highlights: ["Government backed", "Face-to-face", "Campus facilities"],
    featured: false,
  },
  {
    id: 6,
    name: "Entry Education",
    code: "45275",
    logo: "/logos/entry.png",
    website: "https://entryeducation.edu.au",
    priceFrom: 4490,
    priceTo: 5490,
    duration: "6-12 months",
    modes: ["online", "blended"],
    states: ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "NT", "ACT"],
    vslApproved: true,
    rating: 4.6,
    reviews: 78,
    highlights: ["High completion rate", "Personal support", "Modern platform"],
    featured: true,
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(price);
};

export default function RTOComparisonPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/tools" className="hover:text-brand-600">Tools</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">RTO Comparison</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
            <Building2 className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Compare FNS50322 Training Providers
          </h1>
          <p className="text-lg text-slate-600">
            Find the right RTO for your mortgage broking qualification. Compare prices,
            study modes, and student reviews.
          </p>
        </div>

        {/* Filters - Placeholder */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="flex flex-wrap gap-4">
              <select className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700">
                <option>All States</option>
                <option>NSW</option>
                <option>VIC</option>
                <option>QLD</option>
                <option>WA</option>
                <option>SA</option>
              </select>
              <select className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700">
                <option>All Study Modes</option>
                <option>Online</option>
                <option>Classroom</option>
                <option>Blended</option>
              </select>
              <select className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700">
                <option>Any Price</option>
                <option>Under $4,000</option>
                <option>$4,000 - $5,000</option>
                <option>Over $5,000</option>
              </select>
              <select className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700">
                <option>VSL Approved Only</option>
                <option>All Providers</option>
              </select>
            </div>
          </div>
        </div>

        {/* RTO Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6">
            {rtos.map((rto) => (
              <div
                key={rto.id}
                className={`bg-white rounded-2xl border ${rto.featured ? "border-brand-300 ring-2 ring-brand-100" : "border-slate-200"} overflow-hidden`}
              >
                {rto.featured && (
                  <div className="bg-brand-600 text-white text-sm font-medium px-4 py-1.5 text-center">
                    Featured Provider
                  </div>
                )}
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Logo & Name */}
                    <div className="md:w-48 flex-shrink-0">
                      <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-3">
                        <Building2 className="w-8 h-8 text-slate-400" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">{rto.name}</h2>
                      <p className="text-sm text-slate-500">RTO: {rto.code}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span className="font-medium text-slate-900">{rto.rating}</span>
                        <span className="text-slate-500 text-sm">({rto.reviews} reviews)</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                          <DollarSign className="w-4 h-4" />
                          Price Range
                        </div>
                        <p className="font-semibold text-slate-900">
                          {formatPrice(rto.priceFrom)} - {formatPrice(rto.priceTo)}
                        </p>
                        {rto.vslApproved && (
                          <span className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded mt-1">
                            <Check className="w-3 h-3" /> VSL Approved
                          </span>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                          <Clock className="w-4 h-4" />
                          Duration
                        </div>
                        <p className="font-semibold text-slate-900">{rto.duration}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                          <Monitor className="w-4 h-4" />
                          Study Modes
                        </div>
                        <p className="font-semibold text-slate-900 capitalize">
                          {rto.modes.join(", ")}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                          <MapPin className="w-4 h-4" />
                          Available In
                        </div>
                        <p className="font-semibold text-slate-900">
                          {rto.states.length === 8 ? "All States" : rto.states.join(", ")}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="md:w-40 flex flex-col gap-2">
                      <Button asChild className="w-full">
                        <a href={rto.website} target="_blank" rel="noopener noreferrer">
                          Get Info Pack
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full">
                        Compare
                      </Button>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-2">
                      {rto.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-slate-50 rounded-xl p-6 text-sm text-slate-600">
            <h3 className="font-semibold text-slate-900 mb-2">Important Information</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Prices shown are indicative and may vary. Contact RTOs directly for current pricing.</li>
              <li>Ratings are aggregated from public reviews and may not reflect current performance.</li>
              <li>VET Student Loan eligibility depends on individual circumstances.</li>
              <li>FNS50322 Answers is an independent resource and does not receive referral fees from RTOs listed.</li>
            </ul>
            <p className="mt-4">
              <em>Last updated: January 2026. Sources: RTO websites, training.gov.au, student reviews.</em>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Not sure which RTO to choose?</h2>
          <p className="text-slate-600 mb-6">
            Read our comprehensive guide to selecting the right training provider for your situation.
          </p>
          <Button asChild size="lg">
            <Link href="/questions/getting-started/best-rto-for-fns50322">
              How to Choose an RTO
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
