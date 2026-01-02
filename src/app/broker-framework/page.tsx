import Link from "next/link";
import { Metadata } from "next";
import {
  User, CheckCircle, Map, BookOpen, Briefcase, DollarSign,
  ChevronRight, ArrowRight, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "BROKER Pathway Framework | Your Roadmap to Mortgage Broking",
  description: "The BROKER Framework: A proven 6-step methodology to plan your mortgage broking career. From Background Assessment to Revenue Projection.",
};

const framework = [
  {
    letter: "B",
    title: "Background Assessment",
    description: "Evaluate your current skills, experience, and transferable knowledge",
    icon: User,
    color: "bg-blue-500",
    questions: [
      "What relevant experience do you have? (banking, real estate, sales)",
      "Do you have strong numeracy and communication skills?",
      "Can you work independently and manage your own schedule?",
      "Are you comfortable with compliance and regulatory requirements?",
    ],
    action: "Complete our Career Fit Quiz",
    link: "/quiz",
  },
  {
    letter: "R",
    title: "Readiness Scoring",
    description: "Assess your financial, time, and commitment readiness",
    icon: CheckCircle,
    color: "bg-green-500",
    questions: [
      "Can you afford 6-18 months of reduced income while building?",
      "Do you have 10-15 hours/week available for study?",
      "Are you prepared for evening/weekend client meetings?",
      "Do you have a clean credit history and no bankruptcy?",
    ],
    action: "Check Entry Requirements",
    link: "/questions/getting-started/entry-requirements-fns50322",
  },
  {
    letter: "O",
    title: "Options Mapping",
    description: "Compare training providers and funding pathways",
    icon: Map,
    color: "bg-purple-500",
    questions: [
      "Online, classroom, or blended learning?",
      "What's your budget? VET Student Loans eligible?",
      "How quickly do you need to complete?",
      "Which RTO has the best support and reviews?",
    ],
    action: "Compare RTOs",
    link: "/tools/rto-comparison",
  },
  {
    letter: "K",
    title: "Knowledge Acquisition",
    description: "Complete FNS50322 with strategic unit selection",
    icon: BookOpen,
    color: "bg-orange-500",
    questions: [
      "Which electives align with your specialisation goals?",
      "How will you approach each assessment?",
      "What study techniques work best for you?",
      "Are you tracking your competency completion?",
    ],
    action: "Explore Course Structure",
    link: "/questions/course-structure",
  },
  {
    letter: "E",
    title: "Entry Strategy",
    description: "Choose your aggregator, specialisation, and market entry",
    icon: Briefcase,
    color: "bg-red-500",
    questions: [
      "Which aggregator offers the best new broker support?",
      "What niche will you specialise in? (FHB, investors, commercial)",
      "Which geographic market will you target?",
      "How will you build your referral network?",
    ],
    action: "Aggregator Comparison",
    link: "/questions/career-pathways/aggregator-vs-independent",
  },
  {
    letter: "R",
    title: "Revenue Projection",
    description: "Model your income and build your business plan",
    icon: DollarSign,
    color: "bg-brand-500",
    questions: [
      "What's your realistic loan volume target for year 1?",
      "How will you fund your first 6-12 months?",
      "What operating costs should you budget for?",
      "What's your trail book growth strategy?",
    ],
    action: "Income Calculator",
    link: "/tools/income-calculator",
  },
];

export default function BrokerFrameworkPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">BROKER Framework</span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Proprietary Methodology
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            The <span className="text-brand-600">BROKER</span> Pathway Framework
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            A proven 6-step methodology to plan and execute your mortgage broking career.
            From first question to first settlement.
          </p>

          {/* BROKER Acronym */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {framework.map((step) => (
              <div
                key={step.letter}
                className={`w-12 h-12 ${step.color} text-white font-bold text-xl rounded-lg flex items-center justify-center shadow-lg`}
              >
                {step.letter}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/quiz">Start Your Assessment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#framework">Explore Framework</Link>
            </Button>
          </div>
        </div>

        {/* Framework Steps */}
        <div id="framework" className="max-w-4xl mx-auto space-y-8">
          {framework.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.letter + index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Letter Badge */}
                  <div className={`${step.color} p-8 flex items-center justify-center md:w-32`}>
                    <span className="text-5xl font-bold text-white">{step.letter}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">
                          {step.title}
                        </h2>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100`}>
                        <Icon className="w-6 h-6 text-slate-600" />
                      </div>
                    </div>

                    {/* Key Questions */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                        Key Questions to Answer
                      </h3>
                      <ul className="space-y-2">
                        {step.questions.map((q, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700">
                            <ChevronRight className="w-4 h-4 text-brand-500 mt-1 flex-shrink-0" />
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <Link
                      href={step.link}
                      className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700"
                    >
                      {step.action}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Use the BROKER Framework to plan your path from aspiring broker to your first settlement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-600">
                <Link href="/quiz">Take the Career Quiz</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/questions">Browse All Questions</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Source Attribution */}
        <div className="mt-12 text-center text-sm text-slate-500">
          <p>
            The BROKER Pathway Framework is a proprietary methodology developed by FNS50322 Answers.
          </p>
          <p className="mt-1">
            Based on research from{" "}
            <a href="https://www.mfaa.com.au" className="text-brand-600 hover:underline" target="_blank" rel="noopener">MFAA</a>,{" "}
            <a href="https://www.fbaa.com.au" className="text-brand-600 hover:underline" target="_blank" rel="noopener">FBAA</a>, and{" "}
            <a href="https://www.asic.gov.au" className="text-brand-600 hover:underline" target="_blank" rel="noopener">ASIC</a> guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}
