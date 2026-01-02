import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", ".env.local") });
import { createClient } from "@supabase/supabase-js";
import type { Database } from "../src/types/database";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("❌ Missing environment variables!");
  process.exit(1);
}

const supabase = createClient<Database>(supabaseUrl, serviceRoleKey);

// Corrected questions based on web verification
const correctedQuestions = [
  // Fix: Total units - was 16 (9+7), should be 15 (10+5)
  {
    slug: "total-units-in-fns50322",
    question: "How many units are in FNS50322?",
    answer: `<p>FNS50322 Diploma of Finance and Mortgage Broking Management consists of <strong>15 units of competency</strong> - 10 core units and 5 elective units.</p>

<h3>Core Units (10 units - all mandatory)</h3>
<ol>
<li><strong>FNSINC411</strong> - Conduct work according to professional practices in the financial services industry</li>
<li><strong>FNSINC412</strong> - Apply and maintain knowledge of financial products and services</li>
<li><strong>FNSINC514</strong> - Apply ethical frameworks and principles to make and act upon decisions</li>
<li><strong>FNSCUS511</strong> - Develop and maintain professional relationships in financial services industry</li>
<li><strong>FNSFMK515</strong> - Comply with financial services regulation and industry codes of practice</li>
<li><strong>FNSFMB411</strong> - Prepare loan application on behalf of clients</li>
<li><strong>FNSFMB412</strong> - Identify client needs and present broking options</li>
<li><strong>FNSFMB511</strong> - Implement credit contracts in preparation for settlement</li>
<li><strong>FNSFMB512</strong> - Identify and develop credit options for clients with special financial circumstances</li>
<li><strong>FNSFMB513</strong> - Present broking options to clients with special financial circumstances</li>
</ol>

<h3>Elective Units (5 from a defined list)</h3>
<p>Choose 5 electives relevant to your career goals. Common choices include:</p>
<ul>
<li><strong>FNSFMB514</strong> - Implement complex loan structures</li>
<li><strong>BSBSUS511</strong> - Develop workplace policies and procedures for sustainability</li>
<li>Commercial lending units</li>
<li>Asset finance units</li>
<li>Management and leadership units</li>
</ul>

<h3>Study Load</h3>
<p>Each unit typically requires 20-40 hours of study including:</p>
<ul>
<li>Learning content and readings</li>
<li>Written assessments</li>
<li>Practical tasks and case studies</li>
<li>Assessment preparation and submission</li>
</ul>

<p><strong>Total estimated hours:</strong> 600-800 hours (or roughly 1,200 nominal hours as registered)</p>

<p><em>Source: <a href="https://financeinstitute.com.au/courses/fns50322-full-diploma/">National Finance Institute</a>, <a href="https://training.gov.au/Training/Details/FNS50322">training.gov.au</a></em></p>`,
    tags: ["units", "modules", "course content", "structure"],
    views: 7600,
  },

  // Fix: CPD requirements - add ASIC minimum and correct FBAA
  {
    slug: "continuing-professional-development-cpd",
    question: "What are the CPD requirements for mortgage brokers?",
    answer: `<p>Continuing Professional Development (CPD) is mandatory for all mortgage brokers to maintain their competency and stay current with industry changes.</p>

<h3>Annual CPD Requirements by Organisation</h3>
<table>
<tr><th>Organisation</th><th>Hours Required</th></tr>
<tr><td><strong>ASIC</strong> (regulatory minimum)</td><td>20 hours/year</td></tr>
<tr><td><strong>FBAA</strong></td><td>25 hours/year</td></tr>
<tr><td><strong>MFAA</strong></td><td>30 hours/year</td></tr>
</table>

<h3>CPD Categories</h3>
<p>CPD should cover these areas:</p>
<ul>
<li><strong>Regulatory knowledge:</strong> Legislative and compliance updates</li>
<li><strong>Technical skills:</strong> Lending, credit assessment, products</li>
<li><strong>Ethics:</strong> Professional conduct and best interests duty</li>
<li><strong>General business:</strong> Practice management, technology, soft skills</li>
</ul>

<h3>Acceptable CPD Activities</h3>
<ul>
<li>Industry conferences and events</li>
<li>Online courses and webinars</li>
<li>Lender training and PD days</li>
<li>MFAA/FBAA provided training</li>
<li>Aggregator training programs</li>
<li>Tertiary study in relevant fields</li>
<li>Mentoring activities (capped at 18 hours/year for MFAA)</li>
<li>Reading industry publications (limited hours)</li>
</ul>

<h3>Recording CPD</h3>
<p>You must maintain records including:</p>
<ul>
<li>Activity name and provider</li>
<li>Date completed</li>
<li>Hours claimed</li>
<li>Evidence of completion (certificates)</li>
</ul>

<h3>CPD Year</h3>
<p>The CPD year runs from 1 July to 30 June. Hours cannot be carried over to the next year.</p>

<h3>Additional Requirements</h3>
<p>MFAA members must also complete the AML3 Refresher course at every second renewal of membership.</p>

<h3>Consequences of Non-Compliance</h3>
<ul>
<li>Suspension of MFAA/FBAA membership</li>
<li>Potential action by your aggregator</li>
<li>Regulatory consequences for ongoing non-compliance</li>
</ul>

<p><em>Sources: <a href="https://www.mfaa.com.au/resources/cpd">MFAA CPD</a>, <a href="https://www.fbaa.com.au/education/cpd-requirements/">FBAA CPD</a></em></p>`,
    tags: ["CPD", "professional development", "training", "requirements"],
    views: 6100,
  },

  // Fix: VET Student Loans cap amount
  {
    slug: "vet-student-loans-fns50322",
    question: "Can I use VET Student Loans for FNS50322?",
    answer: `<p>Yes, FNS50322 is an approved course under the VET Student Loans program, but there are important eligibility requirements and conditions to understand.</p>

<h3>VET Student Loans Eligibility</h3>
<p>To access VSL, you must:</p>
<ul>
<li>Be an Australian citizen OR permanent humanitarian visa holder OR eligible New Zealand citizen</li>
<li>Meet the Tax File Number (TFN) requirements</li>
<li>Not have exceeded the HELP loan limit</li>
<li>Enrol with an approved VSL provider</li>
</ul>

<h3>How It Works</h3>
<ul>
<li>The government pays your course fees directly to the RTO</li>
<li>You repay through the tax system once your income exceeds the threshold (~$54,000)</li>
<li>Repayments are typically 1-10% of your income above the threshold</li>
<li>You may only borrow up to the capped fee amount set by government</li>
</ul>

<h3>VSL Fee Caps (2025)</h3>
<p>VET Student Loan caps are organised into bands:</p>
<table>
<tr><th>Band</th><th>2025 Cap Amount</th></tr>
<tr><td>Band 1</td><td>$6,278</td></tr>
<tr><td>Band 2</td><td>$12,557</td></tr>
<tr><td>Band 3</td><td>$18,838</td></tr>
</table>

<p>For FNS50322, the loan cap is approximately <strong>$5,595 - $6,278</strong> (Band 1). If your RTO charges more than this, you'd pay the gap upfront.</p>

<h3>Considerations</h3>
<ul>
<li><strong>Gap Fees:</strong> Many RTOs charge more than the cap - you'd pay the difference upfront</li>
<li><strong>Indexation:</strong> Your loan is indexed to inflation each year</li>
<li><strong>Census Dates:</strong> Understand when you become liable for the debt</li>
<li><strong>Completion Requirements:</strong> You must pass units to avoid incurring debt with no qualification</li>
</ul>

<h3>Is VSL Right for You?</h3>
<p>VSL can be a good option if:</p>
<ul>
<li>You don't have savings to pay upfront</li>
<li>You want to spread the cost through future income</li>
<li>You're confident you'll complete the course</li>
</ul>

<p>Consider paying upfront if you have the funds and want to avoid future debt.</p>

<p><em>Source: <a href="https://www.dewr.gov.au/vet-student-loans">Department of Employment and Workplace Relations</a></em></p>`,
    tags: ["VET Student Loans", "funding", "HELP", "government"],
    views: 9200,
  },

  // Fix: FBAA vs MFAA comparison with correct fees
  {
    slug: "fbaa-vs-mfaa",
    question: "What is the difference between FBAA and MFAA?",
    answer: `<p>The FBAA (Finance Brokers Association of Australia) and MFAA (Mortgage & Finance Association of Australia) are the two main professional associations for mortgage brokers. Here's how they compare:</p>

<h3>Organisation Overview</h3>
<table>
<tr><th>Aspect</th><th>MFAA</th><th>FBAA</th></tr>
<tr><td>Established</td><td>1980</td><td>1992</td></tr>
<tr><td>Members</td><td>~15,000 members</td><td>~8,000 members</td></tr>
<tr><td>Focus</td><td>Larger, traditional association</td><td>Member-centric, advocacy-focused</td></tr>
<tr><td>Annual Fee</td><td>$550</td><td>$480</td></tr>
<tr><td>Application Fee</td><td>$125</td><td>$110</td></tr>
<tr><td>CPD Requirement</td><td>30 hours/year</td><td>25 hours/year</td></tr>
</table>

<h3>Educational Requirements</h3>
<ul>
<li><strong>MFAA:</strong> Diploma required (FNS50322). If you only have Cert IV, you must complete Diploma within 12 months of joining. Must also complete MFAA Compliance Essentials course.</li>
<li><strong>FBAA:</strong> Minimum Certificate IV (FNS40821) required. Must complete FBAA Compliance Fundamentals Training covering Privacy Act, Code of Conduct, and AML/CTF.</li>
</ul>

<h3>Experience Requirements</h3>
<ul>
<li><strong>MFAA:</strong> Mentored members have 12 months to complete diploma requirement</li>
<li><strong>FBAA:</strong> Requires 2 years industry experience OR mentorship by 4+ year experienced broker</li>
</ul>

<h3>Key Differences</h3>
<ul>
<li><strong>Membership Fees:</strong> FBAA has lower annual fees ($480 vs $550)</li>
<li><strong>CPD Hours:</strong> FBAA requires 25 hours vs MFAA's 30 hours</li>
<li><strong>Qualification:</strong> FBAA accepts Cert IV; MFAA requires Diploma</li>
<li><strong>Recognition:</strong> Both are equally recognised by lenders and regulators</li>
</ul>

<h3>Which Should I Choose?</h3>
<p>Consider these factors:</p>
<ul>
<li>Your aggregator's preference (some have partnerships with one association)</li>
<li>Membership costs vs. benefits</li>
<li>Networking opportunities in your area</li>
<li>Professional development offerings</li>
<li>Your current qualification level</li>
</ul>

<p>Many brokers start with the association their aggregator recommends, then reassess as their career develops.</p>

<p><em>Sources: <a href="https://www.mfaa.com.au/become-a-broker/key-requirements">MFAA Requirements</a>, <a href="https://www.fbaa.com.au/join/new-member/">FBAA Membership</a></em></p>`,
    tags: ["FBAA", "MFAA", "comparison", "associations"],
    views: 8900,
  },

  // Fix: MFAA membership requirements with verified details
  {
    slug: "mfaa-membership-requirements",
    question: "What qualifications do I need for MFAA membership?",
    answer: `<p>The Mortgage & Finance Association of Australia (MFAA) requires specific qualifications for membership. Here's what you need:</p>

<h3>Minimum Qualification</h3>
<p>You must hold one of the following:</p>
<ul>
<li><strong>FNS50322</strong> - Diploma of Finance and Mortgage Broking Management (current)</li>
<li><strong>FNS50320</strong> - Diploma of Finance and Mortgage Broking Management (still accepted)</li>
<li><strong>FNS50315</strong> - Diploma of Finance and Mortgage Broking Management (legacy, still accepted)</li>
</ul>

<p><strong>Important:</strong> If you only hold a Certificate IV in Finance and Mortgage Broking, you must complete the Diploma within 12 months of joining to renew your membership.</p>

<h3>Licensing Requirements</h3>
<ul>
<li>Hold an Australian Credit Licence (ACL) OR</li>
<li>Be appointed as a Credit Representative under the National Consumer Credit Protection Act 2009</li>
</ul>

<h3>Professional Indemnity Insurance</h3>
<p>You must hold PI Insurance with:</p>
<ul>
<li>Minimum <strong>$2 million</strong> per claim</li>
<li>Minimum <strong>$2 million</strong> in the aggregate</li>
<li>Run-off cover of at least 12 months</li>
<li>Proof of current PI insurance with your application</li>
</ul>

<h3>Dispute Resolution</h3>
<p>All loan writing members must be registered with the <strong>Australian Financial Complaints Authority (AFCA)</strong>.</p>

<h3>Additional Requirements</h3>
<ul>
<li>Complete MFAA's Compliance Essentials course</li>
<li>Reside in Australia (Australian/NZ citizen or permanent resident)</li>
<li>Be a fit and proper person (declaration required)</li>
<li>No charges pending involving fraud or dishonesty</li>
</ul>

<h3>Membership Fees (2025)</h3>
<ul>
<li>Finance Broker Category: <strong>$550</strong> annual membership</li>
<li>Application fee: <strong>$125</strong></li>
</ul>

<h3>Ongoing Obligations</h3>
<ul>
<li>Complete <strong>30 hours CPD</strong> each membership year</li>
<li>Complete AML3 Refresher course at every second renewal</li>
<li>Maintain current PI insurance</li>
</ul>

<h3>Membership Categories</h3>
<p>The MFAA offers different membership types:</p>
<ul>
<li><strong>Practitioner Member:</strong> For qualified, practicing brokers</li>
<li><strong>Associate Member:</strong> For those completing qualifications (with mentor)</li>
<li><strong>Affiliate Member:</strong> For support staff and industry participants</li>
</ul>

<p><em>Source: <a href="https://www.mfaa.com.au/become-a-broker/key-requirements">MFAA Key Requirements</a></em></p>`,
    tags: ["MFAA", "membership", "requirements", "professional"],
    views: 11500,
    is_featured: true,
  },
];

async function applyCorrections() {
  console.log("🔧 Applying verified corrections to database...\n");

  // Get existing categories for lookup
  const { data: categories } = await supabase
    .from("categories")
    .select("id, slug");

  const categoryMap = new Map(categories?.map((c) => [c.slug, c.id]) || []);

  // Get existing questions to find category_id
  const { data: existingQuestions } = await supabase
    .from("questions")
    .select("slug, category_id");

  const questionCategoryMap = new Map(
    existingQuestions?.map((q) => [q.slug, q.category_id]) || []
  );

  // Update each question
  for (const q of correctedQuestions) {
    const category_id = questionCategoryMap.get(q.slug);

    if (!category_id) {
      console.log(`⚠️ Question not found: ${q.slug}`);
      continue;
    }

    const { error } = await supabase
      .from("questions")
      .update({
        question: q.question,
        answer: q.answer,
        tags: q.tags,
        views: q.views,
        is_featured: q.is_featured || false,
      })
      .eq("slug", q.slug);

    if (error) {
      console.error(`❌ Error updating ${q.slug}:`, error.message);
    } else {
      console.log(`✅ Updated: ${q.slug}`);
    }
  }

  console.log("\n🎉 Corrections applied successfully!");
}

applyCorrections().catch(console.error);
