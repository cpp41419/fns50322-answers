import Link from "next/link";
import { Metadata } from "next";
import {
  GraduationCap, Shield, BookOpen, DollarSign,
  ClipboardCheck, Building2, MapPin, TrendingUp,
  Search, LucideIcon
} from "lucide-react";
import CategoryCard from "@/components/cards/CategoryCard";
import { getCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "All FNS50322 Questions | Mortgage Broker Training FAQ",
  description: "Browse all questions about FNS50322 Diploma of Finance and Mortgage Broking Management. Categories include licensing, costs, modules, and career pathways.",
};

export const revalidate = 60;

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Shield,
  BookOpen,
  DollarSign,
  ClipboardCheck,
  Building2,
  MapPin,
  TrendingUp,
  Search,
};

export default async function QuestionsPage() {
  const categories = await getCategories();

  const categoriesWithIcons = categories.map((cat) => ({
    ...cat,
    icon: iconMap[cat.icon] || BookOpen,
  }));

  const totalQuestions = categories.reduce((acc, c) => acc + c.questionCount, 0);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            All FNS50322 Questions
          </h1>
          <p className="text-lg text-slate-600">
            Browse {totalQuestions}+ questions about the Diploma of Finance and Mortgage Broking Management
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-12">
          <Link href="/search" className="block">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <div className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-400 hover:border-brand-300 transition-colors cursor-pointer">
                Search questions...
              </div>
            </div>
          </Link>
        </div>

        {/* Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesWithIcons.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>

        {/* Module Quick Links */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Questions by Module Code
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/questions/needs-analysis" className="tag-pill">FNSINC511</Link>
            <Link href="/questions/credit-assessment" className="tag-pill">FNSCRD501</Link>
            <Link href="/questions/loan-products" className="tag-pill">FNSFMB512</Link>
            <Link href="/questions/career-pathways" className="tag-pill">BSBPEF501</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
