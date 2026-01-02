import Link from "next/link";
import { Metadata } from "next";
import { Calculator, Building2, Map, Users, TrendingUp, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Broker Tools | FNS50322 Answers",
  description: "Free tools for aspiring mortgage brokers: Income calculator, RTO comparison, career pathway mapper, and more.",
};

const tools = [
  {
    slug: "income-calculator",
    title: "Broker Income Calculator",
    description: "Estimate your potential earnings as a mortgage broker. See how upfront and trail commissions build over 5 years.",
    icon: Calculator,
    color: "bg-brand-100 text-brand-600",
    status: "live",
  },
  {
    slug: "rto-comparison",
    title: "RTO Comparison Engine",
    description: "Compare training providers side-by-side. Filter by price, study mode, location, and student reviews.",
    icon: Building2,
    color: "bg-blue-100 text-blue-600",
    status: "coming",
  },
  {
    slug: "pathway-mapper",
    title: "Career Pathway Mapper",
    description: "Create your personalized roadmap from first question to first settlement. Track milestones and progress.",
    icon: Map,
    color: "bg-purple-100 text-purple-600",
    status: "coming",
  },
  {
    slug: "aggregator-comparison",
    title: "Aggregator Comparison",
    description: "Compare aggregator commission splits, panel sizes, technology, and support offerings.",
    icon: Users,
    color: "bg-green-100 text-green-600",
    status: "coming",
  },
  {
    slug: "lender-explorer",
    title: "Lender Panel Explorer",
    description: "Explore lender credit policies, turnaround times, and niche lending capabilities.",
    icon: TrendingUp,
    color: "bg-orange-100 text-orange-600",
    status: "coming",
  },
];

export default function ToolsPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Tools</span>
        </div>

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Broker Planning Tools
          </h1>
          <p className="text-lg text-slate-600">
            Free calculators and comparison tools to help you plan your mortgage broking career.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tools.map((tool) => {
            const Icon = tool.icon;
            const isLive = tool.status === "live";

            return (
              <Link
                key={tool.slug}
                href={isLive ? `/tools/${tool.slug}` : "#"}
                className={`group bg-white rounded-2xl border border-slate-200 p-6 transition-all ${
                  isLive ? "hover:border-brand-300 hover:shadow-lg cursor-pointer" : "opacity-75 cursor-default"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tool.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  {!isLive && (
                    <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h2 className={`text-lg font-bold mb-2 ${isLive ? "text-slate-900 group-hover:text-brand-600" : "text-slate-700"}`}>
                  {tool.title}
                </h2>
                <p className="text-slate-600 text-sm">
                  {tool.description}
                </p>
                {isLive && (
                  <div className="mt-4 flex items-center text-brand-600 text-sm font-medium">
                    Try it now
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Get Notified When New Tools Launch</h2>
            <p className="opacity-90 mb-6">
              Join 500+ aspiring brokers getting weekly insights and tool updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-brand-700 font-semibold rounded-lg hover:bg-brand-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
