import { Metadata } from "next";
import Link from "next/link";
import { Shield, Target, Users, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About | FNS50322 Answers",
  description: "Learn about FNS50322 Answers - an independent Q&A resource for aspiring mortgage brokers in Australia.",
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              About FNS50322 Answers
            </h1>
            <p className="text-lg text-slate-600">
              An independent resource for aspiring mortgage brokers in Australia
            </p>
          </div>

          {/* Mission */}
          <div className="bg-brand-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-brand-600" />
              <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <p className="text-slate-700">
              We provide clear, unbiased answers to common questions about the FNS50322 Diploma of Finance and Mortgage Broking Management. Our goal is to help aspiring mortgage brokers make informed decisions about their training and career pathway.
            </p>
          </div>

          {/* What We Are / Aren't */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-brand-600" />
                <h3 className="font-bold text-slate-900">What We Are</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>✓ Independent Q&A resource</li>
                <li>✓ Fact-checked information</li>
                <li>✓ Free to access</li>
                <li>✓ Regularly updated</li>
                <li>✓ Community-driven questions</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-amber-500" />
                <h3 className="font-bold text-slate-900">What We Are Not</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>✗ Not a training provider (RTO)</li>
                <li>✗ Not affiliated with MFAA/FBAA</li>
                <li>✗ Not financial advice</li>
                <li>✗ Not a substitute for official sources</li>
                <li>✗ Not sponsored by any RTO</li>
              </ul>
            </div>
          </div>

          {/* Trust */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-brand-600" />
              <h2 className="text-xl font-bold text-slate-900">Our Commitment to Accuracy</h2>
            </div>

            <div className="space-y-4 text-slate-700">
              <p>
                Every answer on this site is researched using official sources including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>ASIC regulatory guides and information sheets</li>
                <li>Training.gov.au (national training register)</li>
                <li>MFAA and FBAA membership requirements</li>
                <li>State and territory regulatory bodies</li>
                <li>Current legislation and regulations</li>
              </ul>
              <p>
                We update our content regularly to reflect changes in regulations, training packages, and industry requirements. If you spot an error or outdated information, please <Link href="/submit" className="text-brand-600 hover:underline">let us know</Link>.
              </p>
            </div>
          </div>

          {/* Who We Help */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-brand-600" />
              <h2 className="text-xl font-bold text-slate-900">Who We Help</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <p className="font-semibold text-slate-900 mb-2">Aspiring Brokers</p>
                <p className="text-sm text-slate-600">Researching the pathway to becoming a mortgage broker</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <p className="font-semibold text-slate-900 mb-2">Current Students</p>
                <p className="text-sm text-slate-600">Currently completing FNS50322 and have questions</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <p className="font-semibold text-slate-900 mb-2">Career Changers</p>
                <p className="text-sm text-slate-600">Considering a move into the finance industry</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand-700 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-4">
              Have a Question?
            </h2>
            <p className="text-brand-200 mb-6">
              Browse our existing answers or submit a new question.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-brand-700 hover:bg-brand-50">
                <Link href="/questions">Browse Questions</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-brand-600">
                <Link href="/submit">Submit Question</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
