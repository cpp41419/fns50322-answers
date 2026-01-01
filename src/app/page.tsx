import Link from "next/link";
import {
  Search, ArrowRight, MessageCircleQuestion, BookOpen,
  MapPin, GraduationCap, Shield, Users, HelpCircle,
  Briefcase, FileText, Scale, DollarSign, Building2,
  ClipboardCheck, TrendingUp, LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/cards/CategoryCard";
import QuestionCard from "@/components/cards/QuestionCard";
import { getCategories, getPopularQuestions } from "@/lib/data";

// Icon mapping for dynamic icons from database
const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Shield,
  BookOpen,
  DollarSign,
  ClipboardCheck,
  Building2,
  MapPin,
  TrendingUp,
  Briefcase,
  FileText,
  Scale,
  Users,
  Search,
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
  const [categories, popularQuestions] = await Promise.all([
    getCategories(),
    getPopularQuestions(5),
  ]);

  // Map categories with icons
  const categoriesWithIcons = categories.map((cat) => ({
    ...cat,
    icon: iconMap[cat.icon] || BookOpen,
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircleQuestion className="w-4 h-4" />
              {popularQuestions.length > 0 ? `${categories.reduce((acc, c) => acc + c.questionCount, 0)}+ Questions Answered` : "50+ Questions Answered"}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Your Questions About{" "}
              <span className="text-brand-600">FNS50322</span>
              {" "}Answered
            </h1>

            <p className="text-xl text-slate-600 mb-4">
              The complete guide to the <strong>Diploma of Finance and Mortgage Broking Management</strong>.
            </p>
            <p className="text-lg text-slate-500 mb-8">
              Independent answers for aspiring Mortgage Brokers. No sales pitch, just facts.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-8">
              <Link href="/search" className="block">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <div className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white text-left text-slate-400 hover:border-brand-300 transition-colors cursor-pointer">
                    Search FNS50322 questions...
                  </div>
                </div>
              </Link>
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                <Link href="/questions/needs-analysis" className="tag-pill">FNSINC511</Link>
                <Link href="/questions/credit-assessment" className="tag-pill">FNSCRD501</Link>
                <Link href="/questions/loan-products" className="tag-pill">FNSFMB512</Link>
                <Link href="/questions/licensing-requirements" className="tag-pill">Credit Licence</Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
                <Link href="/quiz">
                  Am I Eligible? <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/questions">Browse All Questions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Info Banner */}
      <section className="py-6 bg-brand-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Mandatory for Mortgage Brokers</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Required for MFAA/FBAA</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Supersedes FNS50320</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Browse questions organized by topic. From entry requirements to career pathways.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesWithIcons.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      {popularQuestions.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Most Popular Questions
                </h2>
                <p className="text-slate-600">What aspiring mortgage brokers ask most often</p>
              </div>
              <Button asChild variant="outline">
                <Link href="/questions">View All</Link>
              </Button>
            </div>

            <div className="grid gap-4">
              {popularQuestions.map((q, i) => (
                <QuestionCard
                  key={q.slug}
                  question={{
                    slug: q.slug,
                    question: q.question,
                    category: q.category.slug,
                    views: q.views,
                    moduleCode: q.module_code || undefined,
                  }}
                  index={i + 1}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Core Modules Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Core FNS50322 Modules
            </h2>
            <p className="text-slate-600">
              The key units of competency you will complete
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/questions/needs-analysis" className="finance-highlight hover:shadow-md transition-shadow">
              <span className="module-badge mb-2">FNSINC511</span>
              <h3 className="font-semibold text-slate-900 mt-2">Apply appropriate needs analysis</h3>
              <p className="text-sm text-slate-600 mt-1">The &quot;Fact Find&quot; module - master client needs analysis</p>
            </Link>
            <Link href="/questions/credit-assessment" className="finance-highlight hover:shadow-md transition-shadow">
              <span className="module-badge mb-2">FNSCRD501</span>
              <h3 className="font-semibold text-slate-900 mt-2">Assess credit applications</h3>
              <p className="text-sm text-slate-600 mt-1">Respond to financial situations and credit impairment</p>
            </Link>
            <Link href="/questions/loan-products" className="finance-highlight hover:shadow-md transition-shadow">
              <span className="module-badge mb-2">FNSFMB512</span>
              <h3 className="font-semibold text-slate-900 mt-2">Identify and present credit options</h3>
              <p className="text-sm text-slate-600 mt-1">The &quot;Loan Products&quot; module - presenting solutions</p>
            </Link>
            <Link href="/questions/career-pathways" className="finance-highlight hover:shadow-md transition-shadow">
              <span className="module-badge mb-2">BSBPEF501</span>
              <h3 className="font-semibold text-slate-900 mt-2">Manage personal &amp; professional development</h3>
              <p className="text-sm text-slate-600 mt-1">The &quot;Soft Skills&quot; module - career development</p>
            </Link>
          </div>
        </div>
      </section>

      {/* State Guides */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              State-Specific Guides
            </h2>
            <p className="text-slate-600">
              Licensing requirements can vary by state. Find yours.
            </p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 max-w-2xl mx-auto">
            {["NSW", "VIC", "QLD", "WA", "SA", "TAS", "NT", "ACT"].map((state) => (
              <Link
                key={state}
                href={`/states/${state.toLowerCase()}`}
                className="bg-white hover:bg-brand-50 border border-slate-200 hover:border-brand-300 rounded-lg p-4 text-center transition-all hover:shadow-md"
              >
                <span className="font-bold text-brand-700">{state}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Question CTA */}
      <section className="py-16 bg-brand-700">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="w-12 h-12 text-brand-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">
            Can&apos;t Find Your Answer?
          </h2>
          <p className="text-brand-200 mb-6 max-w-lg mx-auto">
            Submit your question about FNS50322 and our experts will research and publish a comprehensive answer.
          </p>
          <Button asChild size="lg" className="bg-golden text-slate-900 hover:bg-yellow-400">
            <Link href="/submit">
              Submit a Question <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function Award(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}
