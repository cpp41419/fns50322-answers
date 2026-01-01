import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: path.join(__dirname, "..", ".env.local") });
import { createClient } from "@supabase/supabase-js";
import type { Database } from "../src/types/database";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("❌ Missing environment variables!");
  console.error("   NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl ? "✓" : "✗");
  console.error("   SUPABASE_SERVICE_ROLE_KEY:", serviceRoleKey ? "✓" : "✗");
  process.exit(1);
}

const supabase = createClient<Database>(supabaseUrl, serviceRoleKey);

// Categories for FNS50322
const categories = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Entry requirements, eligibility, and your first steps to becoming a mortgage broker",
    icon: "GraduationCap",
    color: "bg-emerald-50 text-emerald-600",
    sort_order: 1,
  },
  {
    slug: "licensing-requirements",
    title: "Licensing & MFAA",
    description: "Credit licence requirements, MFAA and FBAA membership pathways",
    icon: "Shield",
    color: "bg-blue-50 text-blue-600",
    sort_order: 2,
  },
  {
    slug: "course-structure",
    title: "Course Structure",
    description: "Units, modules, assessments, and completion timeframes",
    icon: "BookOpen",
    color: "bg-purple-50 text-purple-600",
    sort_order: 3,
  },
  {
    slug: "costs-funding",
    title: "Costs & Funding",
    description: "Course fees, payment plans, and financial assistance options",
    icon: "DollarSign",
    color: "bg-green-50 text-green-600",
    sort_order: 4,
  },
  {
    slug: "credit-assessment",
    title: "Credit Assessment",
    description: "FNSCRD501 module - responding to client financial situations",
    icon: "ClipboardCheck",
    color: "bg-orange-50 text-orange-600",
    module_code: "FNSCRD501",
    sort_order: 5,
  },
  {
    slug: "loan-products",
    title: "Loan Products",
    description: "FNSFMB512 module - identifying and presenting credit options",
    icon: "Building2",
    color: "bg-indigo-50 text-indigo-600",
    module_code: "FNSFMB512",
    sort_order: 6,
  },
  {
    slug: "needs-analysis",
    title: "Needs Analysis",
    description: "FNSINC511 module - applying appropriate needs analysis to identify credit products",
    icon: "Search",
    color: "bg-cyan-50 text-cyan-600",
    module_code: "FNSINC511",
    sort_order: 7,
  },
  {
    slug: "career-pathways",
    title: "Career Pathways",
    description: "Salary expectations, job opportunities, and career progression",
    icon: "TrendingUp",
    color: "bg-teal-50 text-teal-600",
    sort_order: 8,
  },
];

// Sample questions for FNS50322
const questions = [
  // Getting Started
  {
    category_slug: "getting-started",
    slug: "what-is-fns50322",
    question: "What is FNS50322 and why do I need it?",
    answer: `<p>FNS50322 is the <strong>Diploma of Finance and Mortgage Broking Management</strong>, the mandatory qualification required to become a licensed mortgage broker in Australia.</p>

<h3>Why You Need FNS50322</h3>
<ul>
<li><strong>Legal Requirement:</strong> Under the National Consumer Credit Protection Act 2009, you must hold appropriate qualifications to provide credit assistance</li>
<li><strong>MFAA/FBAA Membership:</strong> Required for membership with the Mortgage & Finance Association of Australia (MFAA) or Finance Brokers Association of Australia (FBAA)</li>
<li><strong>Credit Representative:</strong> Necessary to be appointed as a Credit Representative under an Australian Credit Licence holder</li>
<li><strong>Career Credibility:</strong> Demonstrates your competency to clients, lenders, and employers</li>
</ul>

<h3>What You'll Learn</h3>
<p>The qualification covers essential skills including:</p>
<ul>
<li>Client needs analysis and fact-finding</li>
<li>Credit assessment and responsible lending</li>
<li>Loan product knowledge and comparison</li>
<li>Compliance and regulatory requirements</li>
<li>Professional and ethical conduct</li>
</ul>`,
    tags: ["qualification", "requirements", "getting started"],
    views: 8500,
    is_featured: true,
  },
  {
    category_slug: "getting-started",
    slug: "fns50322-vs-fns50320-difference",
    question: "What is the difference between FNS50322 and FNS50320?",
    answer: `<p>FNS50322 is the current (2022) version of the Diploma of Finance and Mortgage Broking Management, superseding FNS50320. Here are the key differences:</p>

<h3>Regulatory Updates</h3>
<p>FNS50322 incorporates the latest regulatory changes including:</p>
<ul>
<li>Updated responsible lending obligations</li>
<li>New Best Interests Duty requirements</li>
<li>Enhanced consumer protection measures</li>
<li>Current ASIC regulatory guides</li>
</ul>

<h3>Unit Changes</h3>
<p>Several units have been updated or replaced:</p>
<ul>
<li>New units reflecting current lending practices</li>
<li>Updated assessment requirements</li>
<li>Enhanced digital competencies</li>
</ul>

<h3>Which Should I Complete?</h3>
<p><strong>If you're enrolling now:</strong> You should complete FNS50322. This is the current standard required for MFAA and FBAA membership.</p>

<p><strong>If you completed FNS50320:</strong> Your qualification remains valid. You do NOT need to re-do the entire diploma. However, you may need to complete specific gap training to meet ongoing CPD requirements.</p>

<h3>Transition Period</h3>
<p>FNS50320 had a teach-out period that has now ended. All new enrolments must be in FNS50322. RTOs can no longer issue FNS50320 qualifications.</p>`,
    tags: ["FNS50320", "version", "updates", "transition"],
    views: 12800,
    is_featured: true,
  },
  {
    category_slug: "getting-started",
    slug: "entry-requirements-fns50322",
    question: "What are the entry requirements for FNS50322?",
    answer: `<p>The entry requirements for FNS50322 vary by training provider (RTO), but generally include:</p>

<h3>Standard Requirements</h3>
<ul>
<li><strong>Age:</strong> You must be at least 18 years old</li>
<li><strong>Language:</strong> Adequate English language skills (reading, writing, speaking)</li>
<li><strong>Computer Skills:</strong> Basic digital literacy for online learning components</li>
<li><strong>LLN:</strong> Language, Literacy, and Numeracy at Certificate III level or above</li>
</ul>

<h3>No Prior Qualifications Required</h3>
<p>Unlike some vocational qualifications, FNS50322 does NOT require:</p>
<ul>
<li>Prior Certificate IV qualification</li>
<li>Previous finance industry experience</li>
<li>University degree</li>
</ul>

<h3>What RTOs May Assess</h3>
<p>Training providers may conduct a pre-enrolment assessment to check:</p>
<ul>
<li>Your ability to complete written assessments</li>
<li>Numerical reasoning skills (important for loan calculations)</li>
<li>Reading comprehension</li>
<li>Your career goals and motivations</li>
</ul>

<h3>Special Considerations</h3>
<p>If you have a criminal record or bankruptcy history, you may still enrol in the course. However, these may affect your ability to obtain ASIC registration or be appointed as a Credit Representative after completion.</p>`,
    tags: ["entry requirements", "eligibility", "prerequisites"],
    views: 7200,
  },
  {
    category_slug: "getting-started",
    slug: "prior-experience-needed",
    question: "Do I need prior finance experience to become a mortgage broker?",
    answer: `<p>No, you do not need prior finance experience to complete FNS50322 and become a mortgage broker. The qualification is designed to take you from beginner to industry-ready.</p>

<h3>What the Course Teaches</h3>
<p>FNS50322 assumes no prior knowledge and covers:</p>
<ul>
<li>How the lending industry works</li>
<li>Types of loan products and their features</li>
<li>Credit assessment fundamentals</li>
<li>Regulatory and compliance requirements</li>
<li>Client communication and sales skills</li>
</ul>

<h3>Does Experience Help?</h3>
<p>While not required, prior experience can be beneficial:</p>
<ul>
<li><strong>Banking/Finance roles:</strong> You'll already understand lending basics</li>
<li><strong>Real estate:</strong> Understanding property transactions helps</li>
<li><strong>Customer service:</strong> Client-facing skills transfer well</li>
<li><strong>Sales roles:</strong> Useful for building your client base</li>
</ul>

<h3>Recognition of Prior Learning (RPL)</h3>
<p>If you do have relevant experience, you may qualify for RPL, potentially reducing your study time and costs. Discuss this with your chosen RTO before enrolling.</p>`,
    tags: ["experience", "career change", "beginners"],
    views: 5400,
  },

  // Licensing Requirements
  {
    category_slug: "licensing-requirements",
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

<h3>Additional Requirements</h3>
<ul>
<li><strong>Credit Representative Status:</strong> You must be appointed as a Credit Representative under an Australian Credit Licence holder (typically an aggregator)</li>
<li><strong>Professional Indemnity Insurance:</strong> Coverage through your aggregator or licence holder</li>
<li><strong>Membership Fees:</strong> Annual membership fees apply</li>
<li><strong>CPD Commitment:</strong> Ongoing Continuing Professional Development requirements</li>
</ul>

<h3>Membership Categories</h3>
<p>The MFAA offers different membership types:</p>
<ul>
<li><strong>Practitioner Member:</strong> For qualified, practicing brokers</li>
<li><strong>Associate Member:</strong> For those completing qualifications</li>
<li><strong>Affiliate Member:</strong> For support staff and industry participants</li>
</ul>

<h3>Benefits of Membership</h3>
<ul>
<li>Industry recognition and credibility</li>
<li>Access to professional development resources</li>
<li>Networking opportunities</li>
<li>Industry advocacy and representation</li>
</ul>`,
    tags: ["MFAA", "membership", "requirements", "professional"],
    views: 11500,
    is_featured: true,
  },
  {
    category_slug: "licensing-requirements",
    slug: "fbaa-vs-mfaa",
    question: "What is the difference between FBAA and MFAA?",
    answer: `<p>The FBAA (Finance Brokers Association of Australia) and MFAA (Mortgage & Finance Association of Australia) are the two main professional associations for mortgage brokers. Here's how they compare:</p>

<h3>Organisation Overview</h3>
<table>
<tr><th>Aspect</th><th>MFAA</th><th>FBAA</th></tr>
<tr><td>Established</td><td>1980</td><td>1992</td></tr>
<tr><td>Members</td><td>~15,000 members</td><td>~8,000 members</td></tr>
<tr><td>Focus</td><td>Larger, traditional associations</td><td>Member-centric, advocacy-focused</td></tr>
</table>

<h3>Key Differences</h3>
<ul>
<li><strong>Membership Fees:</strong> FBAA typically has lower annual fees</li>
<li><strong>Culture:</strong> FBAA positions itself as more broker-focused, MFAA as industry-wide</li>
<li><strong>Requirements:</strong> Both require FNS50322 or equivalent qualification</li>
<li><strong>Recognition:</strong> Both are equally recognised by lenders and regulators</li>
</ul>

<h3>Which Should I Choose?</h3>
<p>Consider these factors:</p>
<ul>
<li>Your aggregator's preference (some have partnerships with one association)</li>
<li>Membership costs vs. benefits</li>
<li>Networking opportunities in your area</li>
<li>Professional development offerings</li>
</ul>

<p>Many brokers start with the association their aggregator recommends, then reassess as their career develops.</p>`,
    tags: ["FBAA", "MFAA", "comparison", "associations"],
    views: 8900,
  },
  {
    category_slug: "licensing-requirements",
    slug: "credit-licence-requirements",
    question: "How do I get an Australian Credit Licence?",
    answer: `<p>There are two pathways to operate as a mortgage broker in Australia: obtaining your own Australian Credit Licence (ACL), or becoming a Credit Representative under someone else's licence.</p>

<h3>Option 1: Credit Representative (Most Common)</h3>
<p>Most new brokers start as Credit Representatives under an aggregator's ACL:</p>
<ul>
<li>Complete FNS50322 qualification</li>
<li>Join an aggregator who holds an ACL</li>
<li>Get appointed as their Credit Representative</li>
<li>Register with ASIC's Credit Representative Register</li>
</ul>

<h3>Option 2: Your Own ACL (For Experienced Brokers)</h3>
<p>Requirements to hold your own licence:</p>
<ul>
<li>Complete FNS50322 (or equivalent)</li>
<li>Demonstrate competency to engage in credit activities</li>
<li>Have adequate resources and risk management systems</li>
<li>Hold appropriate Professional Indemnity insurance</li>
<li>Be a fit and proper person</li>
<li>Have an Australian Business Number (ABN)</li>
<li>Lodge an application with ASIC (application fee ~$500)</li>
</ul>

<h3>ACL Holder Responsibilities</h3>
<p>Licence holders must:</p>
<ul>
<li>Maintain compliance with NCCP Act</li>
<li>Supervise any Credit Representatives</li>
<li>Submit annual compliance certificates</li>
<li>Maintain internal dispute resolution processes</li>
<li>Belong to an external dispute resolution scheme (AFCA)</li>
</ul>

<p><strong>Recommendation:</strong> Start as a Credit Representative to gain experience before considering your own ACL.</p>`,
    tags: ["credit licence", "ACL", "ASIC", "regulation"],
    views: 10200,
  },

  // Course Structure
  {
    category_slug: "course-structure",
    slug: "how-long-to-complete-fns50322",
    question: "How long does it take to complete FNS50322?",
    answer: `<p>The time to complete FNS50322 (Diploma of Finance and Mortgage Broking Management) varies depending on your study mode and personal circumstances. Here's a comprehensive breakdown:</p>

<h3>Typical Completion Timeframes</h3>
<ul>
<li><strong>Full-time study:</strong> 6-12 months</li>
<li><strong>Part-time study:</strong> 12-18 months</li>
<li><strong>Self-paced online:</strong> 3-6 months (intensive) to 24 months (flexible)</li>
</ul>

<h3>Factors Affecting Duration</h3>
<ol>
<li><strong>Prior Learning:</strong> If you have relevant experience in finance or lending, you may qualify for Recognition of Prior Learning (RPL), potentially reducing your study time significantly.</li>
<li><strong>Study Mode:</strong> Online self-paced courses often allow faster completion than scheduled classroom-based training.</li>
<li><strong>Work Commitments:</strong> Most students complete the qualification while working, extending the timeframe.</li>
<li><strong>Assessment Turnaround:</strong> Some RTOs provide faster assessment marking, speeding up your progress.</li>
</ol>

<h3>Minimum Timeframes</h3>
<p>While some providers advertise very fast completion times, be cautious of claims under 3 months. Quality training requires adequate time to:</p>
<ul>
<li>Understand complex lending regulations</li>
<li>Complete practical assessments</li>
<li>Demonstrate competency across all units</li>
</ul>

<h3>Our Recommendation</h3>
<p>Plan for 6-12 months for a thorough understanding of the material. This gives you time to absorb the content properly and prepares you better for your career as a mortgage broker.</p>`,
    tags: ["duration", "timeframes", "study options"],
    views: 15200,
    is_featured: true,
  },
  {
    category_slug: "course-structure",
    slug: "total-units-in-fns50322",
    question: "How many units are in FNS50322?",
    answer: `<p>FNS50322 Diploma of Finance and Mortgage Broking Management consists of <strong>16 units of competency</strong> - 9 core units and 7 elective units.</p>

<h3>Core Units (9 units - all mandatory)</h3>
<ol>
<li><strong>BSBPEF501</strong> - Manage personal and professional development</li>
<li><strong>FNSCRD501</strong> - Assess credit applications</li>
<li><strong>FNSFMB511</strong> - Provide advice in home loan products and services</li>
<li><strong>FNSFMB512</strong> - Identify client credit requirements and present options</li>
<li><strong>FNSFMB513</strong> - Process complex credit applications</li>
<li><strong>FNSFMK515</strong> - Comply with financial services regulation</li>
<li><strong>FNSRSK511</strong> - Manage risk</li>
<li><strong>FNSINC511</strong> - Apply ethical frameworks to finance services work</li>
<li><strong>FNSINC512</strong> - Apply regulatory requirements to credit services work</li>
</ol>

<h3>Elective Units (7 from a defined list)</h3>
<p>Choose 7 electives relevant to your career goals. Common choices include:</p>
<ul>
<li>Commercial lending units</li>
<li>Asset finance units</li>
<li>Personal lending units</li>
<li>Insurance units</li>
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

<p><strong>Total estimated hours:</strong> 600-800 hours (or roughly 1,200 nominal hours as registered)</p>`,
    tags: ["units", "modules", "course content", "structure"],
    views: 7600,
  },

  // Needs Analysis (FNSINC511)
  {
    category_slug: "needs-analysis",
    slug: "fnsinc511-needs-analysis-explained",
    question: "What does FNSINC511 (Needs Analysis) cover?",
    answer: `<p>FNSINC511 is one of the core units in FNS50322, focusing on applying ethical frameworks and appropriate needs analysis to finance services work. This is commonly called the "Fact Find" module.</p>

<h3>What You'll Learn</h3>
<ul>
<li><strong>Client Fact Finding:</strong> How to gather comprehensive financial information from clients</li>
<li><strong>Needs Identification:</strong> Analysing client circumstances to identify their borrowing needs</li>
<li><strong>Risk Assessment:</strong> Evaluating client risk profiles and capacity to service loans</li>
<li><strong>Ethical Considerations:</strong> Applying ethical frameworks in client interactions</li>
</ul>

<h3>Key Skills Developed</h3>
<ol>
<li>Conducting comprehensive client interviews</li>
<li>Completing fact find documents accurately</li>
<li>Identifying client goals and objectives</li>
<li>Assessing income, expenses, assets, and liabilities</li>
<li>Documenting client needs and preferences</li>
</ol>

<h3>Why It's Important</h3>
<p>The needs analysis forms the foundation of responsible lending:</p>
<ul>
<li>Ensures loan suitability for the client</li>
<li>Protects you from compliance issues</li>
<li>Builds strong client relationships</li>
<li>Reduces risk of loan defaults</li>
</ul>

<h3>Assessment Methods</h3>
<p>Typical assessments for this unit include:</p>
<ul>
<li>Written knowledge questions</li>
<li>Case study analysis</li>
<li>Role-play scenarios (simulated client interviews)</li>
<li>Completed fact find documentation</li>
</ul>`,
    tags: ["FNSINC511", "needs analysis", "fact find", "client assessment"],
    views: 9800,
    module_code: "FNSINC511",
    is_featured: true,
  },

  // Credit Assessment (FNSCRD501)
  {
    category_slug: "credit-assessment",
    slug: "fnscrd501-credit-assessment-explained",
    question: "What does FNSCRD501 (Credit Assessment) cover?",
    answer: `<p>FNSCRD501 - Assess Credit Applications is a core unit covering the critical skills needed to evaluate loan applications and make lending decisions.</p>

<h3>Key Topics Covered</h3>
<ul>
<li><strong>Serviceability Calculations:</strong> How to calculate if a borrower can afford repayments</li>
<li><strong>Credit History Analysis:</strong> Understanding credit reports and scores</li>
<li><strong>Income Verification:</strong> PAYG, self-employed, and alternative income sources</li>
<li><strong>Security Assessment:</strong> Property valuations and LVR calculations</li>
<li><strong>Risk Indicators:</strong> Identifying red flags in applications</li>
</ul>

<h3>Practical Skills</h3>
<ol>
<li>Calculating Debt-to-Income (DTI) ratios</li>
<li>Using lender calculators and serviceability tools</li>
<li>Reading and interpreting credit reports</li>
<li>Assessing non-standard income (contractors, ABN holders)</li>
<li>Identifying acceptable security types</li>
</ol>

<h3>Responsible Lending</h3>
<p>This unit emphasises responsible lending obligations:</p>
<ul>
<li>Making reasonable inquiries about the borrower's requirements and objectives</li>
<li>Taking reasonable steps to verify the consumer's financial situation</li>
<li>Making an assessment that the credit contract is "not unsuitable"</li>
<li>Documenting your assessment process</li>
</ul>

<h3>Assessment Requirements</h3>
<p>You'll typically need to:</p>
<ul>
<li>Complete written assessments on credit assessment principles</li>
<li>Analyse case studies with various borrower scenarios</li>
<li>Perform serviceability calculations</li>
<li>Assess sample credit applications</li>
</ul>`,
    tags: ["FNSCRD501", "credit assessment", "serviceability", "lending"],
    views: 7800,
    module_code: "FNSCRD501",
  },

  // Loan Products (FNSFMB512)
  {
    category_slug: "loan-products",
    slug: "fnsfmb512-loan-products-explained",
    question: "What does FNSFMB512 (Credit Options) cover?",
    answer: `<p>FNSFMB512 - Identify Client Credit Requirements and Present Options focuses on understanding loan products and presenting suitable options to clients.</p>

<h3>Loan Product Knowledge</h3>
<ul>
<li><strong>Variable Rate Loans:</strong> Features, benefits, and when to recommend</li>
<li><strong>Fixed Rate Loans:</strong> Rate lock periods, break costs, comparison strategies</li>
<li><strong>Split Loans:</strong> Combining fixed and variable portions</li>
<li><strong>Interest-Only Loans:</strong> When appropriate, investor strategies</li>
<li><strong>Line of Credit/Offset:</strong> How they work and their benefits</li>
<li><strong>Construction Loans:</strong> Progress draws and completion processes</li>
</ul>

<h3>Lender Comparison Skills</h3>
<ol>
<li>Understanding lender credit policies</li>
<li>Comparing rates, fees, and features</li>
<li>Using comparison rate calculations</li>
<li>Identifying lender specialities and niches</li>
<li>Understanding turnaround times and service levels</li>
</ol>

<h3>Client Presentation Skills</h3>
<p>You'll learn how to:</p>
<ul>
<li>Match loan features to client needs</li>
<li>Present options clearly and objectively</li>
<li>Explain complex loan terms in simple language</li>
<li>Document your recommendations and rationale</li>
</ul>

<h3>Best Interests Duty</h3>
<p>Critical compliance component covering:</p>
<ul>
<li>When Best Interests Duty applies</li>
<li>How to prioritise client interests</li>
<li>Documentation requirements</li>
<li>Conflict of interest management</li>
</ul>`,
    tags: ["FNSFMB512", "loan products", "credit options", "lenders"],
    views: 6900,
    module_code: "FNSFMB512",
  },

  // Costs & Funding
  {
    category_slug: "costs-funding",
    slug: "total-cost-fns50322",
    question: "What is the total cost of FNS50322?",
    answer: `<p>The cost of completing FNS50322 varies significantly between training providers. Here's what you can expect:</p>

<h3>Typical Price Ranges</h3>
<table>
<tr><th>Provider Type</th><th>Price Range</th></tr>
<tr><td>Budget online RTOs</td><td>$2,000 - $4,000</td></tr>
<tr><td>Mid-range providers</td><td>$4,000 - $6,000</td></tr>
<tr><td>Premium/intensive programs</td><td>$6,000 - $10,000</td></tr>
<tr><td>TAFE</td><td>$3,000 - $8,000 (varies by state)</td></tr>
</table>

<h3>What's Usually Included</h3>
<ul>
<li>All learning materials</li>
<li>Assessment submissions</li>
<li>Trainer support</li>
<li>Certificate upon completion</li>
</ul>

<h3>Potential Additional Costs</h3>
<p>Watch for these extras that may not be included:</p>
<ul>
<li><strong>Enrolment/Administration fees:</strong> $100-$500</li>
<li><strong>Resource fees:</strong> Some charge separately for materials</li>
<li><strong>Reassessment fees:</strong> If you fail and need to resubmit</li>
<li><strong>RPL assessment:</strong> $300-$1,000 for prior learning review</li>
<li><strong>Hard copy certificate:</strong> Some charge extra for physical certificates</li>
</ul>

<h3>Cost vs. Value</h3>
<p>Consider these factors beyond price:</p>
<ul>
<li>Quality of support and trainer access</li>
<li>Assessment turnaround times</li>
<li>Job placement assistance</li>
<li>Industry connections and networking</li>
<li>RTO reputation with employers</li>
</ul>

<p><strong>Tip:</strong> The cheapest option isn't always the best. Poor training can cost you more in the long run through compliance issues or slow career progression.</p>`,
    tags: ["cost", "fees", "pricing", "budget"],
    views: 14500,
    is_featured: true,
  },
  {
    category_slug: "costs-funding",
    slug: "vet-student-loans-fns50322",
    question: "Can I use VET Student Loans for FNS50322?",
    answer: `<p>Yes, FNS50322 is an approved course under the VET Student Loans program, but there are important eligibility requirements and conditions to understand.</p>

<h3>VET Student Loans Eligibility</h3>
<p>To access VSL, you must:</p>
<ul>
<li>Be an Australian citizen OR permanent humanitarian visa holder OR eligible New Zealand citizen</li>
<li>Meet the Tax File Number (TFN) requirements</li>
<li>Not have exceeded the HELP loan limit ($118,301 for 2024)</li>
<li>Enrol with an approved VSL provider</li>
</ul>

<h3>How It Works</h3>
<ul>
<li>The government pays your course fees directly to the RTO</li>
<li>You repay through the tax system once your income exceeds the threshold (~$54,000)</li>
<li>Repayments are typically 1-10% of your income above the threshold</li>
<li>You may only borrow up to the capped fee amount set by government</li>
</ul>

<h3>VSL Fee Caps (2024)</h3>
<p>For FNS50322, the maximum loan amount is approximately <strong>$16,025</strong>. If your RTO charges less, you only borrow what's needed.</p>

<h3>Considerations</h3>
<ul>
<li><strong>Gap Fees:</strong> Some RTOs charge more than the cap - you'd pay the difference upfront</li>
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

<p>Consider paying upfront if you have the funds and want to avoid future debt.</p>`,
    tags: ["VET Student Loans", "funding", "HELP", "government"],
    views: 9200,
  },

  // Career Pathways
  {
    category_slug: "career-pathways",
    slug: "mortgage-broker-salary-australia",
    question: "What is the average mortgage broker salary in Australia?",
    answer: `<p>Mortgage broker income in Australia is primarily commission-based, making earnings highly variable. Here's a realistic breakdown:</p>

<h3>Income Ranges</h3>
<table>
<tr><th>Experience Level</th><th>Typical Annual Income</th></tr>
<tr><td>Year 1-2 (New broker)</td><td>$40,000 - $80,000</td></tr>
<tr><td>Year 3-5 (Established)</td><td>$80,000 - $150,000</td></tr>
<tr><td>Year 5+ (Experienced)</td><td>$150,000 - $300,000+</td></tr>
<tr><td>Top performers</td><td>$500,000+</td></tr>
</table>

<h3>How Commission Works</h3>
<p>Brokers earn commission from lenders, typically:</p>
<ul>
<li><strong>Upfront Commission:</strong> 0.5% - 0.7% of loan value (paid at settlement)</li>
<li><strong>Trail Commission:</strong> 0.15% - 0.25% of loan balance annually</li>
</ul>

<p><strong>Example:</strong> On a $600,000 loan:</p>
<ul>
<li>Upfront: ~$3,600 (at 0.6%)</li>
<li>Trail: ~$1,200 per year (at 0.2%)</li>
</ul>

<h3>Aggregator Split</h3>
<p>Your aggregator takes a percentage of commission:</p>
<ul>
<li>New brokers: May receive 60-75% of commission</li>
<li>Experienced brokers: May negotiate 80-90%</li>
</ul>

<h3>Building Your Income</h3>
<p>Key factors affecting earnings:</p>
<ul>
<li><strong>Volume:</strong> Number of loans settled per month</li>
<li><strong>Average loan size:</strong> Higher values = higher commissions</li>
<li><strong>Trail book:</strong> Grows over time, providing passive income</li>
<li><strong>Retention:</strong> Keeping clients from refinancing elsewhere</li>
</ul>

<h3>Reality Check</h3>
<p>Be prepared for:</p>
<ul>
<li>Low/no income in early months while building pipeline</li>
<li>Variable monthly income (feast or famine)</li>
<li>Business costs (marketing, software, insurance)</li>
<li>Time to build referral networks</li>
</ul>`,
    tags: ["salary", "income", "commission", "earnings"],
    views: 8900,
    is_featured: true,
  },
  {
    category_slug: "career-pathways",
    slug: "aggregator-vs-independent",
    question: "Should I join an aggregator or go independent?",
    answer: `<p>As a new broker, you'll need to decide between joining an aggregator or operating independently under your own Australian Credit Licence (ACL). Here's a comparison:</p>

<h3>Joining an Aggregator (Recommended for New Brokers)</h3>
<p><strong>Pros:</strong></p>
<ul>
<li>Access to their ACL (no need for your own licence)</li>
<li>Panel of 30+ lenders already set up</li>
<li>CRM software and loan processing systems</li>
<li>Compliance support and training</li>
<li>Mentoring programs for new brokers</li>
<li>Marketing support and brand recognition</li>
</ul>

<p><strong>Cons:</strong></p>
<ul>
<li>Commission split (you keep 60-90%)</li>
<li>Less flexibility in operations</li>
<li>Must follow aggregator policies</li>
</ul>

<h3>Going Independent (ACL Holder)</h3>
<p><strong>Pros:</strong></p>
<ul>
<li>Keep 100% of commissions</li>
<li>Full control over your business</li>
<li>Build your own brand</li>
<li>No aggregator fees</li>
</ul>

<p><strong>Cons:</strong></p>
<ul>
<li>ACL application and ongoing compliance costs</li>
<li>Must manage all compliance yourself</li>
<li>Need to negotiate individual lender accreditations</li>
<li>Limited lender panel initially</li>
<li>Significant capital required</li>
</ul>

<h3>Our Recommendation</h3>
<p>For 99% of new brokers, joining an aggregator is the right choice. Reasons:</p>
<ol>
<li>Focus on building your business, not compliance</li>
<li>Learn the industry before going solo</li>
<li>Access to mentors and support</li>
<li>Established systems and processes</li>
</ol>

<p>Consider your own ACL after 3-5+ years with a strong trail book and deep industry knowledge.</p>`,
    tags: ["aggregator", "independent", "ACL", "business model"],
    views: 6200,
  },
];

async function seed() {
  console.log("🌱 Starting database seed...\n");

  // Insert categories
  console.log("📁 Inserting categories...");
  const { data: insertedCategories, error: catError } = await supabase
    .from("categories")
    .upsert(categories, { onConflict: "slug" })
    .select();

  if (catError) {
    console.error("Error inserting categories:", catError);
    return;
  }
  console.log(`✅ Inserted ${insertedCategories?.length} categories\n`);

  // Create category lookup map
  const categoryMap = new Map(
    insertedCategories?.map((c) => [c.slug, c.id]) || []
  );

  // Prepare questions with category IDs
  const questionsWithCategoryIds = questions.map((q) => ({
    slug: q.slug,
    question: q.question,
    answer: q.answer,
    category_id: categoryMap.get(q.category_slug)!,
    module_code: q.module_code || null,
    tags: q.tags,
    views: q.views,
    is_featured: q.is_featured || false,
    is_published: true,
  }));

  // Insert questions
  console.log("❓ Inserting questions...");
  const { data: insertedQuestions, error: qError } = await supabase
    .from("questions")
    .upsert(questionsWithCategoryIds, { onConflict: "slug" })
    .select();

  if (qError) {
    console.error("Error inserting questions:", qError);
    return;
  }
  console.log(`✅ Inserted ${insertedQuestions?.length} questions\n`);

  // Summary
  console.log("🎉 Seed completed successfully!");
  console.log(`   Categories: ${insertedCategories?.length}`);
  console.log(`   Questions: ${insertedQuestions?.length}`);
}

seed().catch(console.error);
