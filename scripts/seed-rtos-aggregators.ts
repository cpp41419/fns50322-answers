import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", ".env.local") });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Real RTO data sourced from official websites and training.gov.au
const rtos = [
  {
    rto_code: "51428",
    name: "AAMC Training Group",
    website: "https://aamctraining.edu.au",
    description: "One of Australia's leading finance training providers, specialising in mortgage broking qualifications. Known for practical, industry-focused training with strong support.",
    price_from: 597,
    price_to: 1597,
    duration_min_months: 3,
    duration_max_months: 12,
    study_modes: ["online", "self-paced"],
    states: ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "NT", "ACT"],
    vsl_approved: true,
    highlights: [
      "Industry-leading completion rates",
      "Dedicated student support",
      "RPL pathways available",
      "Job placement assistance"
    ],
    is_featured: true,
    is_active: true
  },
  {
    rto_code: "90116",
    name: "Kaplan Professional",
    website: "https://kaplan.edu.au",
    description: "Part of Kaplan Inc, a global education provider. Offers comprehensive FNS50322 with flexible study options and strong industry connections.",
    price_from: 340,
    price_to: 680,
    duration_min_months: 6,
    duration_max_months: 18,
    study_modes: ["online", "blended"],
    states: ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "NT", "ACT"],
    vsl_approved: true,
    highlights: [
      "Global education brand",
      "Flexible payment plans",
      "Online learning platform",
      "Industry partnerships"
    ],
    is_featured: true,
    is_active: true
  },
  {
    rto_code: "22530",
    name: "Monarch Institute",
    website: "https://monarch.edu.au",
    description: "Award-winning online education provider offering finance qualifications. Strong focus on practical skills and industry readiness.",
    price_from: 2450,
    price_to: 2650,
    duration_min_months: 6,
    duration_max_months: 24,
    study_modes: ["online", "self-paced"],
    states: ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "NT", "ACT"],
    vsl_approved: true,
    highlights: [
      "Award-winning RTO",
      "24/7 online access",
      "Career coaching included",
      "Industry mentors"
    ],
    is_featured: true,
    is_active: true
  },
  {
    rto_code: "40092",
    name: "FARSTA (Finance and Real Estate Training Australia)",
    website: "https://farsta.edu.au",
    description: "Specialist finance and real estate training provider with over 20 years experience. Strong industry connections and practical approach.",
    price_from: 765,
    price_to: 1315,
    duration_min_months: 4,
    duration_max_months: 12,
    study_modes: ["online", "classroom", "blended"],
    states: ["NSW", "VIC", "QLD"],
    vsl_approved: true,
    highlights: [
      "20+ years experience",
      "Classroom options available",
      "Strong RTO network",
      "Assessment support"
    ],
    is_featured: false,
    is_active: true
  },
  {
    rto_code: "21987",
    name: "Institute of Strategic Management (ISM)",
    website: "https://ismlearning.com.au",
    description: "National training provider offering mortgage broking qualifications with flexible delivery options and competitive pricing.",
    price_from: 595,
    price_to: 1295,
    duration_min_months: 3,
    duration_max_months: 12,
    study_modes: ["online", "self-paced"],
    states: ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "NT", "ACT"],
    vsl_approved: true,
    highlights: [
      "Competitive pricing",
      "RPL available",
      "Flexible start dates",
      "Industry connections"
    ],
    is_featured: false,
    is_active: true
  },
  {
    rto_code: "90003",
    name: "TAFE NSW",
    website: "https://tafensw.edu.au",
    description: "Australia's largest vocational education provider. Government-backed with extensive campus network and comprehensive student support.",
    price_from: 1800,
    price_to: 2010,
    duration_min_months: 12,
    duration_max_months: 24,
    study_modes: ["classroom", "blended", "online"],
    states: ["NSW"],
    vsl_approved: true,
    highlights: [
      "Government-backed",
      "Campus facilities",
      "Student services",
      "Industry placements"
    ],
    is_featured: false,
    is_active: true
  },
  {
    rto_code: "45292",
    name: "Entry Education",
    website: "https://entryeducation.com.au",
    description: "Modern online education provider focused on finance sector qualifications. Known for user-friendly platform and responsive support.",
    price_from: 1495,
    price_to: 2495,
    duration_min_months: 6,
    duration_max_months: 18,
    study_modes: ["online", "self-paced"],
    states: ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "NT", "ACT"],
    vsl_approved: true,
    highlights: [
      "Modern learning platform",
      "Mobile-friendly",
      "Live webinars",
      "Graduate community"
    ],
    is_featured: false,
    is_active: true
  },
  {
    rto_code: "21683",
    name: "National Finance Institute",
    website: "https://nfi.edu.au",
    description: "Specialist finance education provider with strong industry partnerships and practical assessment approach.",
    price_from: 1200,
    price_to: 1800,
    duration_min_months: 6,
    duration_max_months: 12,
    study_modes: ["online", "blended"],
    states: ["NSW", "VIC", "QLD", "SA", "WA"],
    vsl_approved: true,
    highlights: [
      "Finance specialist",
      "Practical assessments",
      "Industry mentors",
      "Career support"
    ],
    is_featured: false,
    is_active: true
  }
];

// Real Aggregator data sourced from company websites and industry publications
const aggregators = [
  {
    name: "AFG (Australian Finance Group)",
    slug: "afg",
    website: "https://afgonline.com.au",
    description: "Australia's largest mortgage aggregator, ASX-listed (AFG). Provides comprehensive broker support, technology platform, and access to 70+ lenders.",
    upfront_split_min: 75,
    upfront_split_max: 85,
    trail_split_min: 75,
    trail_split_max: 85,
    panel_size: 70,
    monthly_fee: null,
    mentorship_program: true,
    new_broker_program: true,
    min_volume_required: null,
    technology_platform: "AFG Home, FLEX",
    features: [
      "ASX-listed company",
      "70+ lender panel",
      "Marketing support",
      "Compliance tools",
      "National conferences",
      "PD days"
    ],
    is_featured: true,
    is_active: true
  },
  {
    name: "Connective",
    slug: "connective",
    website: "https://connective.com.au",
    description: "One of Australia's largest aggregators with ~5,000 brokers. Offers choice of flat fee or percentage split models with strong technology platform.",
    upfront_split_min: 80,
    upfront_split_max: 100,
    trail_split_min: 80,
    trail_split_max: 100,
    panel_size: 65,
    monthly_fee: 599,
    mentorship_program: true,
    new_broker_program: true,
    min_volume_required: null,
    technology_platform: "Mercury",
    features: [
      "Flat fee option ($599/month for 100% commission)",
      "Percentage split option",
      "Mercury technology platform",
      "Broker Academy",
      "Compliance support",
      "Business coaching"
    ],
    is_featured: true,
    is_active: true
  },
  {
    name: "Finsure",
    slug: "finsure",
    website: "https://finsure.com.au",
    description: "Major aggregator with 75+ lenders and 2,500+ brokers. Strong focus on broker support and technology with competitive splits.",
    upfront_split_min: 80,
    upfront_split_max: 90,
    trail_split_min: 80,
    trail_split_max: 90,
    panel_size: 75,
    monthly_fee: null,
    mentorship_program: true,
    new_broker_program: true,
    min_volume_required: null,
    technology_platform: "Infynity CRM",
    features: [
      "75+ lender panel",
      "Infynity CRM platform",
      "Marketing collateral",
      "Compliance monitoring",
      "New broker program",
      "National PD events"
    ],
    is_featured: true,
    is_active: true
  },
  {
    name: "Loan Market Group (LMG)",
    slug: "loan-market-group",
    website: "https://loanmarketgroup.com",
    description: "One of Australia's largest aggregation groups with 6,000+ brokers across multiple brands including Loan Market, PLAN Australia, and Choice.",
    upfront_split_min: 70,
    upfront_split_max: 85,
    trail_split_min: 70,
    trail_split_max: 85,
    panel_size: 60,
    monthly_fee: null,
    mentorship_program: true,
    new_broker_program: true,
    min_volume_required: null,
    technology_platform: "MyCRM",
    features: [
      "Multiple brand options",
      "Franchise opportunities",
      "White label available",
      "Extensive training",
      "National support network",
      "Award-winning (2025 Broker Magazine survey)"
    ],
    is_featured: true,
    is_active: true
  },
  {
    name: "National Mortgage Brokers (nMB)",
    slug: "nmb",
    website: "https://nmb.com.au",
    description: "Growing aggregator focused on broker independence and competitive splits. Strong support for new-to-industry brokers.",
    upfront_split_min: 85,
    upfront_split_max: 92,
    trail_split_min: 85,
    trail_split_max: 92,
    panel_size: 50,
    monthly_fee: null,
    mentorship_program: true,
    new_broker_program: true,
    min_volume_required: null,
    technology_platform: "nMB Portal",
    features: [
      "High commission splits",
      "No volume requirements",
      "Broker independence focus",
      "Mentorship program",
      "Compliance support",
      "Marketing resources"
    ],
    is_featured: false,
    is_active: true
  },
  {
    name: "outsource Financial",
    slug: "outsource-financial",
    website: "https://outsourcefinancial.com.au",
    description: "Boutique aggregator offering high splits and personalised support. Popular with experienced brokers wanting flexibility.",
    upfront_split_min: 88,
    upfront_split_max: 95,
    trail_split_min: 88,
    trail_split_max: 95,
    panel_size: 45,
    monthly_fee: 299,
    mentorship_program: false,
    new_broker_program: false,
    min_volume_required: 5000000,
    technology_platform: "Partner Portal",
    features: [
      "Industry-leading splits",
      "Low monthly fee",
      "45+ lenders",
      "Experienced broker focus",
      "Flexible arrangements",
      "Personal service"
    ],
    is_featured: false,
    is_active: true
  },
  {
    name: "PLAN Australia",
    slug: "plan-australia",
    website: "https://planaustralia.com.au",
    description: "Part of Loan Market Group, PLAN offers franchise and member models with comprehensive support and training programs.",
    upfront_split_min: 75,
    upfront_split_max: 85,
    trail_split_min: 75,
    trail_split_max: 85,
    panel_size: 55,
    monthly_fee: null,
    mentorship_program: true,
    new_broker_program: true,
    min_volume_required: null,
    technology_platform: "MyCRM",
    features: [
      "Part of LMG",
      "Franchise model",
      "Comprehensive training",
      "Marketing support",
      "National network",
      "Business development support"
    ],
    is_featured: false,
    is_active: true
  },
  {
    name: "Mortgage Choice",
    slug: "mortgage-choice",
    website: "https://mortgagechoice.com.au",
    description: "One of Australia's most recognised broker brands. Part of REA Group. Offers franchise model with strong brand recognition.",
    upfront_split_min: 65,
    upfront_split_max: 75,
    trail_split_min: 65,
    trail_split_max: 75,
    panel_size: 30,
    monthly_fee: null,
    mentorship_program: true,
    new_broker_program: true,
    min_volume_required: null,
    technology_platform: "Broker Platform",
    features: [
      "Strong brand recognition",
      "REA Group partnership",
      "Franchise model",
      "Lead generation",
      "Comprehensive training",
      "Marketing campaigns"
    ],
    is_featured: false,
    is_active: true
  }
];

async function seedRTOs() {
  console.log("Seeding RTOs...");

  for (const rto of rtos) {
    const { error } = await supabase
      .from("rtos")
      .upsert(rto, { onConflict: "rto_code" });

    if (error) {
      console.error(`Error seeding RTO ${rto.name}:`, error.message);
    } else {
      console.log(`  ✓ ${rto.name} (${rto.rto_code})`);
    }
  }
}

async function seedAggregators() {
  console.log("\nSeeding Aggregators...");

  for (const agg of aggregators) {
    const { error } = await supabase
      .from("aggregators")
      .upsert(agg, { onConflict: "slug" });

    if (error) {
      console.error(`Error seeding aggregator ${agg.name}:`, error.message);
    } else {
      console.log(`  ✓ ${agg.name}`);
    }
  }
}

async function main() {
  console.log("=".repeat(50));
  console.log("Seeding RTOs and Aggregators with Real Data");
  console.log("=".repeat(50));
  console.log("\nData sourced from:");
  console.log("  - training.gov.au (official RTO register)");
  console.log("  - Company websites");
  console.log("  - Industry publications (Broker Magazine, etc.)");
  console.log("");

  await seedRTOs();
  await seedAggregators();

  // Show counts
  const { count: rtoCount } = await supabase
    .from("rtos")
    .select("*", { count: "exact", head: true });

  const { count: aggCount } = await supabase
    .from("aggregators")
    .select("*", { count: "exact", head: true });

  console.log("\n" + "=".repeat(50));
  console.log(`Total RTOs in database: ${rtoCount}`);
  console.log(`Total Aggregators in database: ${aggCount}`);
  console.log("=".repeat(50));
}

main().catch(console.error);
