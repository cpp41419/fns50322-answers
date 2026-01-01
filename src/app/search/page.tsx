import { Metadata } from "next";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Search | FNS50322 Answers",
  description: "Search our database of FNS50322 questions and answers.",
};

const popularSearches = [
  "FNS50322 vs FNS50320",
  "course duration",
  "MFAA requirements",
  "FNSINC511",
  "mortgage broker salary",
  "credit licence",
  "VET Student Loans",
  "online vs classroom",
];

export default function SearchPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Search FNS50322 Answers
            </h1>
            <p className="text-lg text-slate-600">
              Find answers to your mortgage broker training questions
            </p>
          </div>

          {/* Search Box */}
          <div className="mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full pl-14 pr-4 py-5 rounded-2xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-lg"
                autoFocus
              />
            </div>
          </div>

          {/* Popular Searches */}
          <div className="mb-12">
            <h2 className="text-sm font-medium text-slate-500 mb-4">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  className="bg-slate-100 hover:bg-brand-100 text-slate-700 hover:text-brand-700 px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Browse by Category */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Or Browse by Category</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/questions/getting-started" className="bg-white border border-slate-200 rounded-lg p-4 hover:border-brand-300 transition-colors">
                Getting Started
              </Link>
              <Link href="/questions/licensing-requirements" className="bg-white border border-slate-200 rounded-lg p-4 hover:border-brand-300 transition-colors">
                Licensing & MFAA
              </Link>
              <Link href="/questions/course-structure" className="bg-white border border-slate-200 rounded-lg p-4 hover:border-brand-300 transition-colors">
                Course Structure
              </Link>
              <Link href="/questions/costs-funding" className="bg-white border border-slate-200 rounded-lg p-4 hover:border-brand-300 transition-colors">
                Costs & Funding
              </Link>
              <Link href="/questions/career-pathways" className="bg-white border border-slate-200 rounded-lg p-4 hover:border-brand-300 transition-colors">
                Career Pathways
              </Link>
              <Link href="/states" className="bg-white border border-slate-200 rounded-lg p-4 hover:border-brand-300 transition-colors">
                State Guides
              </Link>
            </div>

            <div className="mt-6 text-center">
              <Button asChild variant="outline">
                <Link href="/questions">
                  View All Categories <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
