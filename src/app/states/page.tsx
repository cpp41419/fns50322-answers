import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "State Licensing Guides | FNS50322 Mortgage Broker",
  description: "Understand mortgage broker licensing requirements in your state. Guides for NSW, VIC, QLD, WA, SA, TAS, NT, and ACT.",
};

const states = [
  {
    code: "NSW",
    name: "New South Wales",
    description: "Australia's largest mortgage market with Sydney as the financial hub",
    brokers: "12,000+",
  },
  {
    code: "VIC",
    name: "Victoria",
    description: "Strong mortgage market centred around Melbourne",
    brokers: "9,500+",
  },
  {
    code: "QLD",
    name: "Queensland",
    description: "Growing market across Brisbane, Gold Coast, and regional areas",
    brokers: "7,000+",
  },
  {
    code: "WA",
    name: "Western Australia",
    description: "Perth-focused market with mining sector influence",
    brokers: "3,500+",
  },
  {
    code: "SA",
    name: "South Australia",
    description: "Adelaide-based market with steady growth",
    brokers: "2,000+",
  },
  {
    code: "TAS",
    name: "Tasmania",
    description: "Smaller but growing market in Hobart and surrounds",
    brokers: "800+",
  },
  {
    code: "NT",
    name: "Northern Territory",
    description: "Darwin-focused market with unique considerations",
    brokers: "300+",
  },
  {
    code: "ACT",
    name: "Australian Capital Territory",
    description: "Canberra government employee market",
    brokers: "600+",
  },
];

export default function StatesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            8 State & Territory Guides
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            State Licensing Guides
          </h1>

          <p className="text-lg text-slate-600">
            While FNS50322 is nationally recognised, understanding your state&apos;s specific market can help your career. Select your state below.
          </p>
        </div>

        {/* Important Note */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="finance-highlight">
            <h3 className="font-semibold text-slate-900 mb-2">Important: National Qualification</h3>
            <p className="text-sm text-slate-600">
              FNS50322 is a nationally recognised qualification under the Australian Qualifications Framework.
              You can complete your training in any state and work anywhere in Australia.
              Your ASIC Credit Representative or Credit Licence registration is also nationally valid.
            </p>
          </div>
        </div>

        {/* States Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {states.map((state) => (
            <Link
              key={state.code}
              href={`/states/${state.code.toLowerCase()}`}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-brand-300 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-brand-600">{state.code}</span>
                    <span className="text-slate-400">|</span>
                    <span className="font-medium text-slate-900">{state.name}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{state.description}</p>
                  <div className="text-xs text-slate-400">
                    Est. {state.brokers} active brokers
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
