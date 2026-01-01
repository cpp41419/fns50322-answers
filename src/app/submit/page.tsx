import { Metadata } from "next";
import Link from "next/link";
import { Send, CheckCircle2, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Submit a Question | FNS50322 Answers",
  description: "Can't find your answer? Submit your FNS50322 question and our experts will research and publish a comprehensive response.",
};

export default function SubmitPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Ask the Experts
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Submit Your Question
            </h1>

            <p className="text-lg text-slate-600">
              Can&apos;t find what you&apos;re looking for? Submit your question about FNS50322 and we&apos;ll research and publish a comprehensive answer.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
            <form className="space-y-6">
              {/* Question */}
              <div>
                <label htmlFor="question" className="block text-sm font-medium text-slate-900 mb-2">
                  Your Question *
                </label>
                <textarea
                  id="question"
                  rows={4}
                  placeholder="e.g., What is the difference between MFAA and FBAA membership?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none"
                  required
                />
                <p className="text-sm text-slate-500 mt-2">
                  Be specific - the more detail you provide, the better we can answer.
                </p>
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-slate-900 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white"
                >
                  <option value="">Select a category...</option>
                  <option value="getting-started">Getting Started</option>
                  <option value="licensing-requirements">Licensing & MFAA</option>
                  <option value="course-structure">Course Structure</option>
                  <option value="costs-funding">Costs & Funding</option>
                  <option value="credit-assessment">Credit Assessment (FNSCRD501)</option>
                  <option value="loan-products">Loan Products (FNSFMB512)</option>
                  <option value="state-licensing">State Requirements</option>
                  <option value="career-pathways">Career Pathways</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                />
                <p className="text-sm text-slate-500 mt-2">
                  We&apos;ll notify you when your question is answered.
                </p>
              </div>

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Submit Question
              </Button>
            </form>
          </div>

          {/* What Happens Next */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">What Happens Next?</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">1. Review</h3>
                  <p className="text-sm text-slate-600">We review your question for clarity and check if we already have an answer.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">2. Research</h3>
                  <p className="text-sm text-slate-600">Our experts research the topic thoroughly using official sources.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">3. Publish</h3>
                  <p className="text-sm text-slate-600">We publish a comprehensive answer within 48-72 hours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Browse Existing */}
          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-4">
              Already have an answer waiting?
            </p>
            <Button asChild variant="outline">
              <Link href="/questions">Browse Existing Questions</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
