import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin, Building2, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StatePageProps {
  params: Promise<{ state: string }>;
}

const stateData: Record<string, {
  code: string;
  name: string;
  description: string;
  marketSize: string;
  averageLoanSize: string;
  keyAreas: string[];
  considerations: string[];
  faqs: Array<{ q: string; a: string }>;
}> = {
  nsw: {
    code: "NSW",
    name: "New South Wales",
    description: "NSW has Australia's largest mortgage market, driven by Sydney's property prices and population. As a mortgage broker in NSW, you'll work with diverse clients from first-home buyers to high-net-worth investors.",
    marketSize: "$180B+ annual settlements",
    averageLoanSize: "$720,000",
    keyAreas: ["Sydney CBD & Metro", "Central Coast", "Newcastle", "Wollongong", "Regional NSW"],
    considerations: [
      "Higher property prices mean larger loans and potentially higher commissions",
      "Competitive market with many established brokers",
      "Strong demand for first-home buyer specialists",
      "Growing regional market post-COVID",
    ],
    faqs: [
      {
        q: "Is the NSW market too competitive for new brokers?",
        a: "While NSW is competitive, the market is large enough to support new entrants. Focus on a niche or specific area to build your client base."
      },
      {
        q: "Do I need any NSW-specific registrations?",
        a: "No. Your national ASIC Credit Representative or Credit Licence registration allows you to operate anywhere in Australia, including NSW."
      },
    ]
  },
  vic: {
    code: "VIC",
    name: "Victoria",
    description: "Victoria is Australia's second-largest mortgage market, centred around Melbourne. The market offers strong opportunities in both metropolitan and growing regional areas.",
    marketSize: "$140B+ annual settlements",
    averageLoanSize: "$650,000",
    keyAreas: ["Melbourne Metro", "Geelong", "Ballarat", "Bendigo", "Mornington Peninsula"],
    considerations: [
      "Melbourne market recovering well post-pandemic",
      "Strong first-home buyer activity in outer suburbs",
      "Growing regional markets in Geelong and Ballarat",
      "Good opportunity in investment property lending",
    ],
    faqs: [
      {
        q: "What areas in VIC have the most broker opportunity?",
        a: "Growth corridors in Melbourne's west and north, plus regional cities like Geelong, offer good opportunities for new brokers."
      },
      {
        q: "Is there demand for commercial broking in VIC?",
        a: "Yes, Melbourne has a strong commercial property market. Consider additional training in commercial lending after completing FNS50322."
      },
    ]
  },
  qld: {
    code: "QLD",
    name: "Queensland",
    description: "Queensland's mortgage market is driven by strong interstate migration and lifestyle factors. Brisbane, Gold Coast, and Sunshine Coast offer excellent opportunities.",
    marketSize: "$95B+ annual settlements",
    averageLoanSize: "$520,000",
    keyAreas: ["Brisbane", "Gold Coast", "Sunshine Coast", "Cairns", "Townsville"],
    considerations: [
      "Strong interstate migration driving demand",
      "More affordable than Sydney/Melbourne markets",
      "Tourism-influenced areas like Gold Coast",
      "Growing investor market from southern states",
    ],
    faqs: [
      {
        q: "Is the QLD market growing faster than other states?",
        a: "Yes, QLD has seen significant growth due to interstate migration, particularly from NSW and VIC. This trend is expected to continue."
      },
      {
        q: "Are there opportunities in regional QLD?",
        a: "Absolutely. Cairns, Townsville, and regional centres offer less competition and strong local demand."
      },
    ]
  },
  wa: {
    code: "WA",
    name: "Western Australia",
    description: "WA's mortgage market is heavily influenced by the resources sector. Perth dominates, but regional mining areas create unique opportunities.",
    marketSize: "$45B+ annual settlements",
    averageLoanSize: "$480,000",
    keyAreas: ["Perth Metro", "Mandurah", "Bunbury", "Pilbara Region", "Kalgoorlie"],
    considerations: [
      "Mining sector creates boom/bust cycles",
      "More affordable property than eastern states",
      "Smaller broker community, easier to stand out",
      "FIFO workers are a significant client segment",
    ],
    faqs: [
      {
        q: "How does the mining sector affect the WA market?",
        a: "Mining activity influences property demand and incomes. FIFO workers often have complex income situations requiring specialist broker knowledge."
      },
    ]
  },
  sa: {
    code: "SA",
    name: "South Australia",
    description: "SA offers a stable, affordable mortgage market centred on Adelaide. It's an excellent market for new brokers to build experience.",
    marketSize: "$28B+ annual settlements",
    averageLoanSize: "$420,000",
    keyAreas: ["Adelaide Metro", "Adelaide Hills", "Barossa Valley", "Mount Gambier"],
    considerations: [
      "Most affordable capital city market",
      "Stable, less volatile market",
      "Strong community connections matter",
      "Growing wine region property market",
    ],
    faqs: [
      {
        q: "Is the SA market big enough to support new brokers?",
        a: "Yes. While smaller than eastern states, SA has less competition and strong community-based referral networks."
      },
    ]
  },
  tas: {
    code: "TAS",
    name: "Tasmania",
    description: "Tasmania has experienced significant growth in recent years, with Hobart becoming increasingly popular for interstate migrants and investors.",
    marketSize: "$12B+ annual settlements",
    averageLoanSize: "$480,000",
    keyAreas: ["Hobart", "Launceston", "Devonport", "Burnie"],
    considerations: [
      "Rapid price growth in recent years",
      "Small, relationship-focused market",
      "Growing demand from mainland investors",
      "Limited broker numbers creates opportunity",
    ],
    faqs: [
      {
        q: "Do Tasmania's property prices still offer value?",
        a: "While prices have risen, Tasmania remains more affordable than mainland capitals, attracting first-home buyers and lifestyle changers."
      },
    ]
  },
  nt: {
    code: "NT",
    name: "Northern Territory",
    description: "The NT is Australia's smallest mortgage market but offers unique opportunities, particularly around Darwin and defence-related areas.",
    marketSize: "$4B+ annual settlements",
    averageLoanSize: "$420,000",
    keyAreas: ["Darwin", "Alice Springs", "Katherine"],
    considerations: [
      "Defence personnel are significant client segment",
      "Limited competition for brokers",
      "Remote area lending considerations",
      "Seasonal population variations",
    ],
    faqs: [
      {
        q: "What unique challenges exist in the NT market?",
        a: "Remote properties, defence housing, and seasonal workers require specialist knowledge. Building relationships with local real estate agents is crucial."
      },
    ]
  },
  act: {
    code: "ACT",
    name: "Australian Capital Territory",
    description: "The ACT is dominated by government employees, creating a stable mortgage market with predictable income patterns.",
    marketSize: "$10B+ annual settlements",
    averageLoanSize: "$580,000",
    keyAreas: ["Canberra North", "Canberra South", "Belconnen", "Gungahlin"],
    considerations: [
      "Government employee clients with stable incomes",
      "High household incomes on average",
      "Compact market, easier to build presence",
      "Strong investment property demand",
    ],
    faqs: [
      {
        q: "How does the government workforce affect ACT lending?",
        a: "Government employees typically have stable, verifiable incomes making loan assessment straightforward. Many lenders offer preferential rates to APS employees."
      },
    ]
  },
};

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { state } = await params;
  const data = stateData[state];

  if (!data) {
    return { title: "State Not Found" };
  }

  return {
    title: `${data.name} Mortgage Broker Guide | FNS50322`,
    description: `Become a mortgage broker in ${data.name}. Understand the ${data.code} market, requirements, and opportunities.`,
  };
}

export default async function StatePage({ params }: StatePageProps) {
  const { state } = await params;
  const data = stateData[state];

  if (!data) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">State Not Found</h1>
        <Button asChild>
          <Link href="/states">View All States</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/states" className="hover:text-brand-600">States</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">{data.name}</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-brand-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-brand-600">{data.code}</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">{data.name}</h1>
                <p className="text-slate-600">Mortgage Broker Market Guide</p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <p className="text-lg text-slate-700 mb-8">{data.description}</p>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <div className="bg-brand-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-brand-600" />
                <span className="text-sm text-slate-600">Market Size</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">{data.marketSize}</p>
            </div>
            <div className="bg-brand-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-5 h-5 text-brand-600" />
                <span className="text-sm text-slate-600">Average Loan Size</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">{data.averageLoanSize}</p>
            </div>
          </div>

          {/* Key Areas */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Key Markets</h2>
            <div className="flex flex-wrap gap-2">
              {data.keyAreas.map((area) => (
                <span key={area} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Considerations */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Market Considerations</h2>
            <ul className="space-y-3">
              {data.considerations.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-brand-600">{i + 1}</span>
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQs */}
          {data.faqs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-4">{data.code} FAQs</h2>
              <div className="space-y-4">
                {data.faqs.map((faq, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-6">
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back Link */}
          <div className="pt-8 border-t border-slate-200">
            <Button asChild variant="outline">
              <Link href="/states">
                <ChevronLeft className="w-4 h-4 mr-2" />
                All States
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
