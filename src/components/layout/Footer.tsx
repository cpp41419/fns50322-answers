import Link from "next/link";
import { DollarSign, Shield, Award } from "lucide-react";

const categories = [
  { href: "/questions/getting-started", label: "Getting Started" },
  { href: "/questions/licensing-requirements", label: "Licensing & MFAA" },
  { href: "/questions/course-structure", label: "Course Structure" },
  { href: "/questions/costs-funding", label: "Costs & Funding" },
];

const modules = [
  { href: "/questions/needs-analysis", label: "FNSINC511 - Needs Analysis" },
  { href: "/questions/credit-assessment", label: "FNSCRD501 - Credit Assessment" },
  { href: "/questions/loan-products", label: "FNSFMB512 - Credit Options" },
  { href: "/questions/career-pathways", label: "BSBPEF501 - Professional Dev" },
];

const states = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "NT", "ACT"];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 overflow-x-hidden">
      {/* Trust Banner */}
      <div className="bg-brand-50 border-b border-brand-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-4 text-slate-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-500" />
                <span>Independent Resource</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-500" />
                <span>MFAA/FBAA Pathway</span>
              </div>
            </div>
            <Link href="/about" className="text-brand-600 hover:text-brand-700 font-medium">
              About This Resource →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-brand-700 leading-tight">FNS50322 Answers</div>
                <div className="text-xs text-slate-500 leading-tight">Diploma of Finance & Mortgage Broking</div>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Independent Q&A resource for the Diploma of Finance and Mortgage Broking Management.
            </p>
            <p className="text-xs text-slate-400">
              The mandatory qualification for becoming a licensed Mortgage Broker in Australia.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-slate-600 hover:text-brand-600">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Modules */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Core Modules</h4>
            <ul className="space-y-2">
              {modules.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="text-sm text-slate-600 hover:text-brand-600">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* States + Resources */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">State Guides</h4>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {states.map((s) => (
                <Link
                  key={s}
                  href={`/states/${s.toLowerCase()}`}
                  className="text-sm text-slate-600 hover:text-brand-600 font-medium"
                >
                  {s}
                </Link>
              ))}
            </div>
            <h4 className="font-semibold text-slate-900 mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/quiz" className="text-sm text-slate-600 hover:text-brand-600">Eligibility Quiz</Link></li>
              <li><Link href="/submit" className="text-sm text-slate-600 hover:text-brand-600">Submit Question</Link></li>
              <li><Link href="/about" className="text-sm text-slate-600 hover:text-brand-600">About</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <div>
              <p>© {new Date().getFullYear()} FNS50322 Answers. Independent resource.</p>
              <p className="text-xs mt-1">Supersedes FNS50320. Current 2026 standard.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-brand-600">Privacy</Link>
              <Link href="/terms" className="hover:text-brand-600">Terms</Link>
              <Link href="/disclaimer" className="hover:text-brand-600">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
