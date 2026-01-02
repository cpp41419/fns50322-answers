import Link from "next/link";
import { Metadata } from "next";
import { Users, ChevronRight, Quote, ArrowRight, Clock, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Success Stories | Real Broker Journeys",
  description: "Read real stories from mortgage brokers who started their journey with FNS50322. From career change to first settlement.",
};

// Sample success stories - will move to database
const stories = [
  {
    id: 1,
    slug: "sarah-banking-to-broking",
    name: "Sarah M.",
    photo: null,
    previousCareer: "Bank Teller",
    location: "Sydney, NSW",
    rto: "Kaplan Professional",
    aggregator: "Connective",
    timeToFirstSettlement: "4 months after completion",
    incomeRange: "$120K-$150K (Year 2)",
    summary: "After 8 years in banking, I wanted more control over my career and income. The transition to broking was the best decision I ever made.",
    quote: "The FNS50322 gave me the foundation, but it was the practical experience that really made the difference.",
    featured: true,
  },
  {
    id: 2,
    slug: "james-real-estate-to-finance",
    name: "James T.",
    photo: null,
    previousCareer: "Real Estate Agent",
    location: "Melbourne, VIC",
    rto: "AAMC Training",
    aggregator: "AFG",
    timeToFirstSettlement: "6 weeks after completion",
    incomeRange: "$180K+ (Year 3)",
    summary: "My real estate background gave me a head start with client relationships. Now I help my former colleagues' clients with finance.",
    quote: "Understanding property transactions from the other side has been invaluable.",
    featured: true,
  },
  {
    id: 3,
    slug: "priya-accounting-career-change",
    name: "Priya S.",
    photo: null,
    previousCareer: "Accountant",
    location: "Brisbane, QLD",
    rto: "National Finance Institute",
    aggregator: "Finsure",
    timeToFirstSettlement: "3 months after completion",
    incomeRange: "$90K-$120K (Year 1)",
    summary: "My accounting background helped me understand financials quickly, but I had to learn the people skills. Worth every challenge.",
    quote: "The numbers made sense immediately, but building relationships was my real growth area.",
    featured: false,
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Success Stories</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
            <Users className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Real Broker Success Stories
          </h1>
          <p className="text-lg text-slate-600">
            Read how others made the transition to mortgage broking. From career changers
            to industry newcomers - real journeys, real results.
          </p>
        </div>

        {/* Featured Stories */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Featured Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {stories.filter(s => s.featured).map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  {/* Author */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{story.name}</h3>
                      <p className="text-sm text-slate-500">{story.previousCareer} → Mortgage Broker</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-4">
                    <Quote className="w-8 h-8 text-brand-100 absolute -top-1 -left-1" />
                    <p className="text-slate-700 italic pl-6">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600">{story.timeToFirstSettlement}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600">{story.location}</span>
                    </div>
                  </div>

                  {/* Income Badge */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-green-700">{story.incomeRange}</span>
                    </div>
                    <Link
                      href={`/success-stories/${story.slug}`}
                      className="text-brand-600 font-medium text-sm flex items-center gap-1 hover:text-brand-700"
                    >
                      Read Story
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Stories */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">More Stories</h2>
          <div className="space-y-4">
            {stories.filter(s => !s.featured).map((story) => (
              <Link
                key={story.id}
                href={`/success-stories/${story.slug}`}
                className="block bg-white rounded-xl border border-slate-200 p-5 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900">{story.name}</h3>
                    <p className="text-sm text-slate-500">{story.previousCareer} → Broker | {story.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-green-700">{story.incomeRange}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA - Share Your Story */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Made the transition to mortgage broking? Your journey could inspire others.
              We&apos;re looking for real stories from real brokers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-600">
                <Link href="/success-stories/submit">Submit Your Story</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/questions/career-pathways">Career Pathways</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="max-w-2xl mx-auto mt-8 text-center text-sm text-slate-500">
          <p>
            All success stories are from verified brokers. Income ranges are self-reported and
            vary based on location, specialisation, and individual effort.
          </p>
        </div>
      </div>
    </div>
  );
}
