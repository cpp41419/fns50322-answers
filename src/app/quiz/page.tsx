import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle, Clock, DollarSign, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Mortgage Broker Eligibility Quiz | FNS50322",
  description: "Find out if you're eligible to become a mortgage broker in Australia. Take our quick quiz to understand the FNS50322 requirements.",
};

export default function QuizPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              2 Minute Quiz
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Am I Eligible to Become a Mortgage Broker?
            </h1>

            <p className="text-lg text-slate-600">
              Answer a few quick questions to understand your pathway to becoming a licensed mortgage broker in Australia.
            </p>
          </div>

          {/* Quiz Preview / Coming Soon */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">What the Quiz Covers</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Basic Eligibility</h3>
                  <p className="text-sm text-slate-600">Age requirements, residency status, and character checks</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Time Commitment</h3>
                  <p className="text-sm text-slate-600">Available study hours and preferred completion timeframe</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Budget & Funding</h3>
                  <p className="text-sm text-slate-600">Course costs and available funding options</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Career Goals</h3>
                  <p className="text-sm text-slate-600">Employment pathway and specialisation interests</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="bg-brand-50 rounded-xl p-6 text-center">
                <p className="text-brand-700 font-medium mb-4">Interactive Quiz Coming Soon</p>
                <p className="text-sm text-slate-600 mb-6">
                  We&apos;re building an interactive quiz to help you understand your eligibility and find the best pathway. In the meantime, explore our FAQ.
                </p>
                <Button asChild>
                  <Link href="/questions/getting-started">
                    View Eligibility Questions <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Eligibility Checklist */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Quick Eligibility Checklist</h2>

            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                <span className="text-slate-700">I am 18 years or older</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                <span className="text-slate-700">I am an Australian citizen or permanent resident</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                <span className="text-slate-700">I have not been declared bankrupt (or discharged 3+ years ago)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                <span className="text-slate-700">I have no disqualifying criminal convictions</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                <span className="text-slate-700">I have adequate English language skills</span>
              </label>
            </div>

            <p className="text-sm text-slate-500 mt-6">
              Note: This is a general guide only. Specific eligibility requirements may vary by RTO and licensing body.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
