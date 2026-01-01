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

// Additional questions for FNS50322
const additionalQuestions = [
  // Getting Started - More questions
  {
    category_slug: "getting-started",
    slug: "best-rto-for-fns50322",
    question: "How do I choose the best RTO for FNS50322?",
    answer: `<p>Choosing the right Registered Training Organisation (RTO) is crucial for your success. Here's what to consider:</p>

<h3>Key Evaluation Criteria</h3>
<ul>
<li><strong>RTO Registration:</strong> Verify they're registered on training.gov.au to deliver FNS50322</li>
<li><strong>Industry Reputation:</strong> Check reviews from past students and industry recognition</li>
<li><strong>Support Quality:</strong> How accessible are trainers? What are response times?</li>
<li><strong>Assessment Turnaround:</strong> Faster marking means quicker completion</li>
<li><strong>Completion Rates:</strong> Ask for their student completion statistics</li>
</ul>

<h3>Delivery Modes</h3>
<p>Consider which suits your learning style:</p>
<ul>
<li><strong>Fully Online:</strong> Maximum flexibility, self-paced</li>
<li><strong>Blended:</strong> Online learning with face-to-face workshops</li>
<li><strong>Classroom:</strong> Traditional instruction with set schedules</li>
<li><strong>Intensive:</strong> Accelerated programs (often 3-6 months)</li>
</ul>

<h3>Red Flags to Avoid</h3>
<ul>
<li>Promises of completion in under 3 months without RPL</li>
<li>Extremely low prices (under $2,000)</li>
<li>Poor communication during enquiry process</li>
<li>No clear refund or withdrawal policy</li>
<li>Pressure tactics to enrol immediately</li>
</ul>

<h3>Questions to Ask RTOs</h3>
<ol>
<li>What is your average completion time?</li>
<li>How quickly do you mark assessments?</li>
<li>What support do you provide if I struggle?</li>
<li>Do you offer job placement assistance?</li>
<li>What is included in the course fee?</li>
</ol>

<h3>Top Tip</h3>
<p>Speak to your preferred aggregator before enrolling - some have partnerships with specific RTOs or may have requirements about training providers.</p>`,
    tags: ["RTO", "training provider", "choosing", "education"],
    views: 6800,
  },
  {
    category_slug: "getting-started",
    slug: "can-i-study-fns50322-while-working",
    question: "Can I study FNS50322 while working full-time?",
    answer: `<p>Yes, the majority of FNS50322 students complete the qualification while working full-time. Here's how to make it work:</p>

<h3>Time Commitment</h3>
<p>Expect to dedicate:</p>
<ul>
<li><strong>Minimum:</strong> 5-10 hours per week</li>
<li><strong>Optimal:</strong> 10-15 hours per week</li>
<li><strong>Intensive:</strong> 20+ hours per week (faster completion)</li>
</ul>

<h3>Best Study Modes for Working Professionals</h3>
<ul>
<li><strong>Self-paced online:</strong> Study whenever suits you - early mornings, evenings, weekends</li>
<li><strong>Weekend intensives:</strong> Some RTOs offer Saturday workshops</li>
<li><strong>After-hours webinars:</strong> Live sessions outside business hours</li>
</ul>

<h3>Tips for Success</h3>
<ol>
<li><strong>Create a schedule:</strong> Block dedicated study time in your calendar</li>
<li><strong>Use commute time:</strong> Listen to audio content or review materials</li>
<li><strong>Study in chunks:</strong> 30-45 minute focused sessions work well</li>
<li><strong>Set weekly goals:</strong> Complete specific units or assessments each week</li>
<li><strong>Communicate:</strong> Let family know your study schedule</li>
</ol>

<h3>Employer Support</h3>
<p>Some employers may offer:</p>
<ul>
<li>Study leave or flexible hours</li>
<li>Course fee reimbursement</li>
<li>Reduced workload during study</li>
</ul>

<h3>Realistic Completion Times</h3>
<table>
<tr><th>Hours per week</th><th>Expected duration</th></tr>
<tr><td>5-10 hours</td><td>12-18 months</td></tr>
<tr><td>10-15 hours</td><td>8-12 months</td></tr>
<tr><td>15-20 hours</td><td>6-9 months</td></tr>
</table>`,
    tags: ["working", "part-time study", "time management", "flexibility"],
    views: 7200,
  },
  {
    category_slug: "getting-started",
    slug: "age-limit-mortgage-broker",
    question: "Is there an age limit to become a mortgage broker?",
    answer: `<p>There is no upper age limit to become a mortgage broker in Australia. People of all ages successfully enter and thrive in this career.</p>

<h3>Minimum Age Requirement</h3>
<p>You must be at least <strong>18 years old</strong> to:</p>
<ul>
<li>Enrol in FNS50322</li>
<li>Be appointed as a Credit Representative</li>
<li>Hold an Australian Credit Licence</li>
</ul>

<h3>Career Changers Welcome</h3>
<p>Many successful brokers start in their 40s, 50s, or even 60s. Benefits of starting later include:</p>
<ul>
<li><strong>Life experience:</strong> Understanding of home buying, finance, and client needs</li>
<li><strong>Professional network:</strong> Existing contacts who may need your services</li>
<li><strong>Communication skills:</strong> Often more developed in mature entrants</li>
<li><strong>Credibility:</strong> Clients may trust experienced professionals</li>
</ul>

<h3>Success Stories</h3>
<p>Common backgrounds of career changers:</p>
<ul>
<li>Bankers and financial planners</li>
<li>Real estate agents</li>
<li>Accountants</li>
<li>Small business owners</li>
<li>Corporate professionals seeking flexibility</li>
</ul>

<h3>Considerations for Older Entrants</h3>
<ul>
<li>Building a client base takes 2-3 years regardless of age</li>
<li>Technology comfort is important (CRM systems, online applications)</li>
<li>Physical demands are minimal - it's largely desk-based work</li>
<li>Income is uncapped - age doesn't limit earning potential</li>
</ul>

<h3>Retirement and Flexibility</h3>
<p>Mortgage broking offers flexibility many seek later in career:</p>
<ul>
<li>Set your own hours</li>
<li>Work from home options</li>
<li>Trail income provides ongoing revenue even with reduced activity</li>
<li>No mandatory retirement age</li>
</ul>`,
    tags: ["age", "career change", "retirement", "requirements"],
    views: 4500,
  },
  {
    category_slug: "getting-started",
    slug: "recognition-prior-learning-rpl",
    question: "What is Recognition of Prior Learning (RPL) and how does it work?",
    answer: `<p>Recognition of Prior Learning (RPL) allows you to gain credit for skills and knowledge you've already acquired through work experience, previous study, or life experience.</p>

<h3>How RPL Works</h3>
<ol>
<li><strong>Apply:</strong> Submit an RPL application to your chosen RTO</li>
<li><strong>Evidence:</strong> Provide documentation of your relevant experience</li>
<li><strong>Assessment:</strong> An assessor reviews your evidence against unit requirements</li>
<li><strong>Gap Training:</strong> Complete any additional training needed</li>
<li><strong>Credit:</strong> Receive unit exemptions, reducing study time</li>
</ol>

<h3>Who Qualifies for RPL?</h3>
<p>You may be eligible if you have experience in:</p>
<ul>
<li>Banking (lending, credit, customer service)</li>
<li>Financial planning or advice</li>
<li>Real estate (understanding property transactions)</li>
<li>Accounting or bookkeeping</li>
<li>Insurance or superannuation</li>
<li>Previous mortgage broking work</li>
</ul>

<h3>Evidence You May Need</h3>
<ul>
<li>Resume and job descriptions</li>
<li>Previous qualifications and transcripts</li>
<li>Professional references</li>
<li>Work samples (de-identified)</li>
<li>Certificates from professional development</li>
<li>Position descriptions and KPIs</li>
</ul>

<h3>Benefits of RPL</h3>
<ul>
<li><strong>Faster completion:</strong> Skip units you're already competent in</li>
<li><strong>Lower costs:</strong> Some RTOs reduce fees for RPL units</li>
<li><strong>Recognition:</strong> Your experience is formally acknowledged</li>
</ul>

<h3>RPL Costs</h3>
<p>Expect to pay $300-$1,500 for RPL assessment, depending on the RTO and number of units claimed.</p>

<h3>Important Notes</h3>
<ul>
<li>RPL is assessed per unit, not the whole qualification</li>
<li>Some core units may be difficult to RPL without direct broking experience</li>
<li>Evidence must demonstrate current competency, not just past experience</li>
</ul>`,
    tags: ["RPL", "prior learning", "credit transfer", "experience"],
    views: 5600,
  },

  // Licensing Requirements - More questions
  {
    category_slug: "licensing-requirements",
    slug: "asic-credit-representative-registration",
    question: "How do I register as an ASIC Credit Representative?",
    answer: `<p>Once you've completed FNS50322 and joined an aggregator, you'll need to be registered on ASIC's Credit Representative Register. Here's the process:</p>

<h3>Step-by-Step Registration</h3>
<ol>
<li><strong>Complete FNS50322:</strong> Obtain your qualification certificate</li>
<li><strong>Join an aggregator:</strong> They hold the ACL you'll operate under</li>
<li><strong>Provide documents:</strong> Give your aggregator your qualification evidence</li>
<li><strong>Aggregator submits:</strong> They lodge your appointment with ASIC</li>
<li><strong>Confirmation:</strong> You receive your Credit Representative number</li>
</ol>

<h3>Information Required</h3>
<p>Your aggregator will need:</p>
<ul>
<li>Full legal name and any former names</li>
<li>Date of birth</li>
<li>Current address</li>
<li>Qualification certificate (FNS50322)</li>
<li>National Police Check (criminal history)</li>
<li>Bankruptcy check</li>
<li>Signed authorisation documents</li>
</ul>

<h3>What Gets Checked?</h3>
<p>ASIC and your aggregator will verify:</p>
<ul>
<li><strong>Criminal history:</strong> Relevant offences may affect approval</li>
<li><strong>Bankruptcy:</strong> Current or recent bankruptcy can be an issue</li>
<li><strong>Banning orders:</strong> Any existing ASIC banning orders</li>
<li><strong>Previous credit licence issues:</strong> History with other licensees</li>
</ul>

<h3>Timeframes</h3>
<ul>
<li>Registration typically takes 1-2 weeks once documents are submitted</li>
<li>You CANNOT provide credit assistance until registered</li>
<li>Your registration is publicly searchable on ASIC's register</li>
</ul>

<h3>Ongoing Obligations</h3>
<p>As a Credit Representative, you must:</p>
<ul>
<li>Comply with the National Consumer Credit Protection Act</li>
<li>Follow your authorising licensee's policies</li>
<li>Complete annual CPD requirements</li>
<li>Notify your aggregator of any changes to your circumstances</li>
</ul>`,
    tags: ["ASIC", "registration", "credit representative", "compliance"],
    views: 7400,
  },
  {
    category_slug: "licensing-requirements",
    slug: "best-interests-duty-explained",
    question: "What is the Best Interests Duty and how does it apply to brokers?",
    answer: `<p>The Best Interests Duty (BID) is a legal obligation requiring mortgage brokers to act in the best interests of consumers when providing credit assistance. It came into effect on 1 January 2021.</p>

<h3>What the Duty Requires</h3>
<p>When providing credit assistance, you must:</p>
<ul>
<li>Act in the best interests of the consumer</li>
<li>Prioritise the consumer's interests if there's a conflict with your own</li>
<li>Not recommend unsuitable products</li>
<li>Document your reasoning and process</li>
</ul>

<h3>When BID Applies</h3>
<p>The duty applies when you:</p>
<ul>
<li>Suggest a consumer apply for a particular credit product</li>
<li>Suggest a consumer remain in their current credit contract</li>
<li>Assist a consumer to apply for a credit product</li>
<li>Suggest a consumer does NOT apply for a particular product</li>
</ul>

<h3>Practical Compliance</h3>
<p>To meet your obligations:</p>
<ol>
<li><strong>Thorough fact find:</strong> Understand the client's full situation</li>
<li><strong>Consider options:</strong> Assess products from multiple lenders on your panel</li>
<li><strong>Document rationale:</strong> Record why you recommended specific products</li>
<li><strong>Disclose conflicts:</strong> Explain commission differences between lenders</li>
<li><strong>Review recommendations:</strong> Ensure they remain suitable throughout the process</li>
</ol>

<h3>What BID Doesn't Require</h3>
<ul>
<li>Recommending the cheapest product regardless of features</li>
<li>Searching the entire market (only your panel)</li>
<li>Guaranteeing the best possible outcome</li>
</ul>

<h3>Consequences of Non-Compliance</h3>
<ul>
<li>Civil penalties up to $1.1 million for individuals</li>
<li>ASIC regulatory action</li>
<li>Compensation to affected consumers</li>
<li>Termination by your aggregator</li>
</ul>`,
    tags: ["best interests duty", "BID", "compliance", "regulation"],
    views: 8200,
    is_featured: true,
  },
  {
    category_slug: "licensing-requirements",
    slug: "continuing-professional-development-cpd",
    question: "What are the CPD requirements for mortgage brokers?",
    answer: `<p>Continuing Professional Development (CPD) is mandatory for all mortgage brokers to maintain their competency and stay current with industry changes.</p>

<h3>Annual CPD Requirements</h3>
<p>You must complete a minimum of:</p>
<ul>
<li><strong>30 CPD hours per year</strong> (MFAA requirement)</li>
<li><strong>30 CPD hours per year</strong> (FBAA requirement)</li>
<li><strong>20 CPD hours per year</strong> (minimum regulatory requirement)</li>
</ul>

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
<li>Mentoring activities (limited hours)</li>
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

<h3>Consequences of Non-Compliance</h3>
<ul>
<li>Suspension of MFAA/FBAA membership</li>
<li>Potential action by your aggregator</li>
<li>Regulatory consequences for ongoing non-compliance</li>
</ul>`,
    tags: ["CPD", "professional development", "training", "requirements"],
    views: 6100,
  },

  // Course Structure - More questions
  {
    category_slug: "course-structure",
    slug: "fns50322-assessment-types",
    question: "What types of assessments are in FNS50322?",
    answer: `<p>FNS50322 uses a variety of assessment methods to ensure you've achieved competency across all required skills and knowledge areas.</p>

<h3>Common Assessment Types</h3>

<h4>1. Written Knowledge Assessments</h4>
<ul>
<li>Multiple choice questions</li>
<li>Short answer questions</li>
<li>Extended response questions</li>
<li>True/false with explanations</li>
</ul>

<h4>2. Case Studies</h4>
<ul>
<li>Analyse client scenarios</li>
<li>Recommend suitable products</li>
<li>Demonstrate compliance processes</li>
<li>Calculate serviceability and LVR</li>
</ul>

<h4>3. Practical Tasks</h4>
<ul>
<li>Complete fact find documents</li>
<li>Prepare loan applications</li>
<li>Create comparison spreadsheets</li>
<li>Write client letters/emails</li>
</ul>

<h4>4. Role Plays/Simulations</h4>
<ul>
<li>Recorded client consultations</li>
<li>Telephone or video interviews</li>
<li>Demonstration of needs analysis</li>
<li>Objection handling scenarios</li>
</ul>

<h4>5. Projects</h4>
<ul>
<li>Business plans</li>
<li>Marketing strategies</li>
<li>Professional development plans</li>
<li>Compliance procedure documentation</li>
</ul>

<h3>Assessment Tips</h3>
<ol>
<li><strong>Read questions carefully:</strong> Answer exactly what's asked</li>
<li><strong>Use industry terminology:</strong> Demonstrate professional language</li>
<li><strong>Reference regulations:</strong> Show you understand legal requirements</li>
<li><strong>Be thorough:</strong> Provide complete, detailed responses</li>
<li><strong>Proofread:</strong> Check for errors before submission</li>
</ol>

<h3>Resubmissions</h3>
<p>If you don't achieve competency:</p>
<ul>
<li>Most RTOs allow 1-2 free resubmissions</li>
<li>You'll receive feedback on what to improve</li>
<li>Additional attempts may incur fees</li>
</ul>`,
    tags: ["assessments", "exams", "case studies", "practical"],
    views: 5800,
  },
  {
    category_slug: "course-structure",
    slug: "online-vs-classroom-fns50322",
    question: "Is online or classroom study better for FNS50322?",
    answer: `<p>Both online and classroom study can lead to successful completion of FNS50322. The best choice depends on your learning style, schedule, and circumstances.</p>

<h3>Online Study (Self-Paced)</h3>
<p><strong>Pros:</strong></p>
<ul>
<li>Study anytime, anywhere</li>
<li>Go faster or slower as needed</li>
<li>No travel or parking costs</li>
<li>Often more affordable</li>
<li>Repeat content as needed</li>
</ul>

<p><strong>Cons:</strong></p>
<ul>
<li>Requires self-discipline and motivation</li>
<li>Less face-to-face interaction</li>
<li>Networking opportunities limited</li>
<li>May feel isolated</li>
</ul>

<p><strong>Best for:</strong> Self-motivated learners, those with work commitments, rural/remote students</p>

<h3>Classroom Study</h3>
<p><strong>Pros:</strong></p>
<ul>
<li>Structured schedule keeps you accountable</li>
<li>Direct access to trainers for questions</li>
<li>Networking with fellow students</li>
<li>Learn from peer discussions</li>
<li>Industry connections through trainer</li>
</ul>

<p><strong>Cons:</strong></p>
<ul>
<li>Fixed times may conflict with work</li>
<li>Travel time and costs</li>
<li>Often more expensive</li>
<li>Less flexibility to accelerate</li>
</ul>

<p><strong>Best for:</strong> Those who prefer structure, visual learners, people who learn well in groups</p>

<h3>Blended/Hybrid</h3>
<p>Many RTOs offer blended programs combining:</p>
<ul>
<li>Online theory content</li>
<li>Occasional face-to-face workshops</li>
<li>Virtual classroom sessions</li>
<li>Best of both worlds</li>
</ul>

<h3>Questions to Consider</h3>
<ol>
<li>How do you learn best? (Reading, listening, discussing)</li>
<li>Can you maintain motivation without structure?</li>
<li>What are your work and family commitments?</li>
<li>Is there a classroom option near you?</li>
<li>What's your budget?</li>
</ol>`,
    tags: ["online", "classroom", "study mode", "learning"],
    views: 6400,
  },
  {
    category_slug: "course-structure",
    slug: "elective-units-fns50322",
    question: "Which elective units should I choose for FNS50322?",
    answer: `<p>FNS50322 requires 7 elective units. Your choice should align with your career goals and the type of broking you want to specialise in.</p>

<h3>Residential Home Loan Focus</h3>
<p>If you want to focus on residential mortgages:</p>
<ul>
<li>FNSFMB515 - Develop and manage a broking business</li>
<li>FNSCUS511 - Establish and manage client relationships</li>
<li>FNSFMB514 - Prepare and deliver broker presentations</li>
<li>FNSASIC311 - Access and use financial services information</li>
</ul>

<h3>Commercial/Business Lending Focus</h3>
<p>If you want to offer commercial finance:</p>
<ul>
<li>FNSFMB516 - Provide advice in commercial finance</li>
<li>FNSFMB517 - Provide advice in asset finance</li>
<li>FNSFMB518 - Provide advice in small business finance</li>
<li>BSBFIN501 - Manage budgets and financial plans</li>
</ul>

<h3>Investment Property Focus</h3>
<p>For investor-focused broking:</p>
<ul>
<li>FNSFMB515 - Develop and manage a broking business</li>
<li>FNSRSK511 - Manage risk</li>
<li>FNSINC513 - Monitor developments in the financial sector</li>
</ul>

<h3>Management/Business Owner Track</h3>
<p>If planning to run a broking business:</p>
<ul>
<li>BSBOPS502 - Manage business operational plans</li>
<li>BSBLDR523 - Lead and manage effective workplace relationships</li>
<li>BSBMKG541 - Identify and evaluate marketing opportunities</li>
</ul>

<h3>Factors to Consider</h3>
<ol>
<li><strong>Aggregator requirements:</strong> Some may prefer specific units</li>
<li><strong>Career goals:</strong> Match units to your target market</li>
<li><strong>RPL potential:</strong> Choose units where you have existing experience</li>
<li><strong>Interest:</strong> You'll study better if the content interests you</li>
</ol>

<h3>Ask Your RTO</h3>
<p>Your RTO can advise which electives they offer and recommend based on their experience with successful graduates.</p>`,
    tags: ["electives", "units", "specialisation", "course planning"],
    views: 5200,
  },

  // Costs & Funding - More questions
  {
    category_slug: "costs-funding",
    slug: "payment-plans-fns50322",
    question: "Do RTOs offer payment plans for FNS50322?",
    answer: `<p>Yes, most RTOs offer flexible payment options to make FNS50322 more accessible. Here's what's commonly available:</p>

<h3>Common Payment Options</h3>

<h4>1. Full Upfront Payment</h4>
<ul>
<li>Often attracts a discount (5-15%)</li>
<li>Best value if you have the funds</li>
<li>No ongoing payment management</li>
</ul>

<h4>2. Instalment Plans</h4>
<ul>
<li>Weekly, fortnightly, or monthly payments</li>
<li>Spread over course duration (6-18 months)</li>
<li>May include small admin fee</li>
<li>Usually interest-free</li>
</ul>

<h4>3. VET Student Loans</h4>
<ul>
<li>Government-funded deferred payment</li>
<li>Repay through tax system when earning over threshold</li>
<li>Not all RTOs are approved VSL providers</li>
<li>See our VSL question for eligibility details</li>
</ul>

<h4>4. Third-Party Finance</h4>
<p>Some RTOs partner with finance providers like:</p>
<ul>
<li>Afterpay / Zip Pay</li>
<li>Study Loans Australia</li>
<li>Provider-specific arrangements</li>
</ul>

<h3>Typical Deposit Requirements</h3>
<ul>
<li>$300 - $1,000 deposit on enrolment</li>
<li>Remainder in instalments</li>
<li>Some offer $0 deposit with regular payments</li>
</ul>

<h3>Questions to Ask</h3>
<ol>
<li>Is there a discount for upfront payment?</li>
<li>Are payment plans interest-free?</li>
<li>What happens if I miss a payment?</li>
<li>Can I pay off early without penalty?</li>
<li>Is there a cooling-off period if I change my mind?</li>
</ol>

<h3>Payment Plan Example</h3>
<table>
<tr><th>Total Cost</th><th>Deposit</th><th>Weekly Payment</th><th>Duration</th></tr>
<tr><td>$4,500</td><td>$500</td><td>$80</td><td>12 months</td></tr>
</table>`,
    tags: ["payment plans", "instalments", "financing", "fees"],
    views: 7800,
  },
  {
    category_slug: "costs-funding",
    slug: "employer-sponsor-fns50322",
    question: "Will my employer pay for FNS50322?",
    answer: `<p>Many employers in finance and related industries do sponsor employees through FNS50322. Here's how to approach this:</p>

<h3>Employers Who May Sponsor</h3>
<ul>
<li><strong>Banks and lenders:</strong> Often sponsor staff moving into broker-facing roles</li>
<li><strong>Aggregators:</strong> Some offer training subsidies for new recruits</li>
<li><strong>Real estate agencies:</strong> May fund diversification into mortgage broking</li>
<li><strong>Financial planning firms:</strong> Adding credit advice to service offerings</li>
<li><strong>Existing brokerages:</strong> Upskilling support staff to become brokers</li>
</ul>

<h3>How to Approach Your Employer</h3>
<ol>
<li><strong>Research first:</strong> Know the costs and time commitment</li>
<li><strong>Build a business case:</strong> How will this benefit the company?</li>
<li><strong>Propose a plan:</strong> How will you balance study with work?</li>
<li><strong>Discuss commitment:</strong> Be prepared to commit to stay post-completion</li>
<li><strong>Request formally:</strong> Put your request in writing</li>
</ol>

<h3>Common Employer Arrangements</h3>
<ul>
<li><strong>Full sponsorship:</strong> Employer pays 100% of course fees</li>
<li><strong>Partial sponsorship:</strong> Split costs 50/50 or similar</li>
<li><strong>Reimbursement:</strong> You pay upfront, employer reimburses on completion</li>
<li><strong>Study leave:</strong> Paid time off to study/attend training</li>
</ul>

<h3>Typical Conditions</h3>
<p>Employers often require:</p>
<ul>
<li>Minimum tenure (complete employment period after qualifying)</li>
<li>Repayment clause if you leave early</li>
<li>Maintenance of satisfactory work performance</li>
<li>Completion within specified timeframe</li>
</ul>

<h3>Tax Considerations</h3>
<p>If you pay yourself:</p>
<ul>
<li>Course fees may be tax deductible if related to current employment</li>
<li>Consult an accountant for your specific situation</li>
<li>Keep all receipts and documentation</li>
</ul>`,
    tags: ["employer", "sponsorship", "funding", "workplace"],
    views: 4900,
  },

  // Credit Assessment - More questions
  {
    category_slug: "credit-assessment",
    slug: "serviceability-calculation-explained",
    question: "How do lenders calculate loan serviceability?",
    answer: `<p>Serviceability is how lenders determine if a borrower can afford loan repayments. Understanding this is essential for FNSCRD501 and your work as a broker.</p>

<h3>Basic Serviceability Formula</h3>
<p><code>Net Surplus = Income - Living Expenses - Existing Commitments - Proposed Repayment</code></p>
<p>The borrower must have a positive net surplus to service the loan.</p>

<h3>Income Assessment</h3>
<p>Lenders assess income differently depending on type:</p>
<ul>
<li><strong>PAYG salary:</strong> 100% of gross base salary typically used</li>
<li><strong>Overtime/bonuses:</strong> Often shaded to 50-80%, requires 2-year history</li>
<li><strong>Commission:</strong> Usually averaged over 2 years, may be shaded</li>
<li><strong>Self-employed:</strong> Typically 2 years of tax returns/financials</li>
<li><strong>Rental income:</strong> Usually shaded to 70-80%</li>
<li><strong>Government benefits:</strong> Varies by lender and benefit type</li>
</ul>

<h3>Expense Assessment (HEM vs Actuals)</h3>
<ul>
<li><strong>HEM (Household Expenditure Measure):</strong> Statistical benchmark based on household type</li>
<li><strong>Declared expenses:</strong> What the borrower states they spend</li>
<li><strong>Living expenses:</strong> Lenders use the higher of HEM or declared</li>
</ul>

<h3>Stress Testing (Assessment Rate)</h3>
<p>Lenders don't use the actual interest rate. They add a buffer:</p>
<ul>
<li>Typical buffer: 2.5% - 3% above the actual rate</li>
<li>Some use a floor rate (minimum assessment rate)</li>
<li>Purpose: Ensure borrower can cope if rates rise</li>
</ul>

<h3>Debt-to-Income (DTI) Ratio</h3>
<p><code>DTI = Total Debt ÷ Annual Gross Income</code></p>
<ul>
<li>Most lenders cap DTI at 6x - 8x income</li>
<li>Lower DTI generally means lower risk</li>
</ul>

<h3>Practical Example</h3>
<table>
<tr><td>Gross income</td><td>$100,000 p.a.</td></tr>
<tr><td>Less: Tax (approx)</td><td>$24,000</td></tr>
<tr><td>Less: Living expenses</td><td>$36,000</td></tr>
<tr><td>Less: Existing debt</td><td>$6,000</td></tr>
<tr><td>Available for loan</td><td>$34,000 p.a.</td></tr>
<tr><td>Max loan (at 6% assessed)</td><td>~$450,000</td></tr>
</table>`,
    tags: ["serviceability", "income", "lending", "calculations"],
    views: 9500,
    module_code: "FNSCRD501",
    is_featured: true,
  },
  {
    category_slug: "credit-assessment",
    slug: "credit-reports-explained",
    question: "How do I read and interpret a credit report?",
    answer: `<p>Understanding credit reports is crucial for assessing loan applications. Here's a comprehensive guide:</p>

<h3>Credit Bureaus in Australia</h3>
<ul>
<li><strong>Equifax</strong> (formerly Veda)</li>
<li><strong>Experian</strong></li>
<li><strong>illion</strong> (formerly Dun & Bradstreet)</li>
</ul>

<h3>Key Components of a Credit Report</h3>

<h4>1. Credit Score</h4>
<ul>
<li>Typically ranges from 0-1200 (varies by bureau)</li>
<li>Higher score = lower risk</li>
<li>Based on credit history, enquiries, repayment history</li>
</ul>

<h4>2. Credit Enquiries</h4>
<ul>
<li>Shows who has checked the person's credit file</li>
<li>Multiple recent enquiries can indicate credit shopping (negative)</li>
<li>Enquiries stay on file for 5 years</li>
</ul>

<h4>3. Repayment History</h4>
<ul>
<li>Shows payment behaviour on credit accounts</li>
<li>Missed or late payments recorded for 2 years</li>
<li>Comprehensive Credit Reporting shows positive history too</li>
</ul>

<h4>4. Defaults</h4>
<ul>
<li>Unpaid debts over $150 that are 60+ days overdue</li>
<li>Remain on file for 5 years from listing date</li>
<li>Paid defaults still show (marked as paid)</li>
</ul>

<h4>5. Court Actions</h4>
<ul>
<li>Judgments and court writs</li>
<li>Remain on file for 5 years</li>
</ul>

<h4>6. Bankruptcy/Insolvency</h4>
<ul>
<li>Bankruptcies, Part IX debt agreements</li>
<li>Bankruptcy: remains for 5 years from discharge (minimum 7 years total)</li>
</ul>

<h3>Red Flags to Watch For</h3>
<ul>
<li>Multiple recent credit enquiries</li>
<li>Defaults (especially recent or unpaid)</li>
<li>Pattern of late payments</li>
<li>High credit utilisation on existing accounts</li>
<li>Court judgments or bankruptcies</li>
</ul>

<h3>Lender Policies</h3>
<p>Different lenders have different tolerances:</p>
<ul>
<li>Prime lenders: Often require clean credit or minor blemishes only</li>
<li>Near-prime: May accept paid defaults over 12 months old</li>
<li>Non-conforming: Cater to clients with credit impairment</li>
</ul>`,
    tags: ["credit report", "credit score", "defaults", "assessment"],
    views: 8100,
    module_code: "FNSCRD501",
  },
  {
    category_slug: "credit-assessment",
    slug: "self-employed-income-assessment",
    question: "How is self-employed income assessed for loans?",
    answer: `<p>Assessing self-employed income is more complex than PAYG employment. Here's what you need to know:</p>

<h3>Documentation Required</h3>
<p>Standard requirements (last 2 years):</p>
<ul>
<li>Personal tax returns</li>
<li>Business tax returns (if applicable)</li>
<li>ATO Notice of Assessment</li>
<li>Business financials (P&L, Balance Sheet)</li>
<li>Business Activity Statements (BAS)</li>
</ul>

<h3>Income Calculation Methods</h3>

<h4>Sole Trader</h4>
<p>Net profit from business shown on tax return</p>
<ul>
<li>Add back: depreciation, non-cash expenses</li>
<li>Average over 2 years (or use lower year)</li>
</ul>

<h4>Company Director</h4>
<p>Combination of:</p>
<ul>
<li>Salary/wages from company</li>
<li>Share of company profit (if shareholder)</li>
<li>Dividends received</li>
</ul>

<h4>Trust Beneficiary</h4>
<ul>
<li>Trust distribution received</li>
<li>May need trust deed and financials</li>
<li>Assessment varies significantly by lender</li>
</ul>

<h3>Common Add-Backs</h3>
<p>Lenders may add back certain expenses:</p>
<ul>
<li>Depreciation and amortisation</li>
<li>One-off or non-recurring expenses</li>
<li>Interest on investment loans</li>
<li>Superannuation contributions</li>
</ul>

<h3>Low Doc Alternatives</h3>
<p>For self-employed borrowers without full financials:</p>
<ul>
<li>Accountant's letter confirming income</li>
<li>BAS verification (GST ÷ 11 × average margin = income)</li>
<li>Bank statement analysis (12 months)</li>
<li>Generally requires larger deposit (20%+)</li>
</ul>

<h3>Industry Considerations</h3>
<p>Some industries face additional scrutiny:</p>
<ul>
<li>Cash-heavy businesses (hospitality, trades)</li>
<li>Seasonal businesses (tourism, agriculture)</li>
<li>Volatile industries (construction, mining services)</li>
</ul>

<h3>Tips for Brokers</h3>
<ol>
<li>Request 2+ years of complete financials upfront</li>
<li>Identify which entities the client controls</li>
<li>Understand the business structure</li>
<li>Check ATO portal access for verification</li>
<li>Know which lenders are self-employed friendly</li>
</ol>`,
    tags: ["self-employed", "income", "ABN", "tax returns"],
    views: 7600,
    module_code: "FNSCRD501",
  },

  // Loan Products - More questions
  {
    category_slug: "loan-products",
    slug: "fixed-vs-variable-rate-loans",
    question: "When should I recommend fixed vs variable rate loans?",
    answer: `<p>Choosing between fixed and variable rates depends on client circumstances, goals, and risk tolerance. Here's a comprehensive guide:</p>

<h3>Variable Rate Loans</h3>
<p><strong>Features:</strong></p>
<ul>
<li>Interest rate moves with market conditions</li>
<li>Unlimited extra repayments allowed</li>
<li>Redraw and offset facilities typically available</li>
<li>Can switch products or refinance without break costs</li>
</ul>

<p><strong>Best suited for:</strong></p>
<ul>
<li>Clients who want flexibility</li>
<li>Those expecting to make extra repayments</li>
<li>Clients who may refinance within 2-3 years</li>
<li>When rates are expected to decrease</li>
</ul>

<h3>Fixed Rate Loans</h3>
<p><strong>Features:</strong></p>
<ul>
<li>Interest rate locked for 1-5 years</li>
<li>Repayments are predictable</li>
<li>Limited extra repayments (typically $10-20k p.a.)</li>
<li>Break costs apply if refinancing early</li>
</ul>

<p><strong>Best suited for:</strong></p>
<ul>
<li>Clients wanting budget certainty</li>
<li>First home buyers with tight cashflow</li>
<li>Investors seeking predictable returns</li>
<li>When rates are expected to rise</li>
</ul>

<h3>Split Loans (Best of Both)</h3>
<p>Splitting between fixed and variable offers:</p>
<ul>
<li>Partial protection against rate rises</li>
<li>Some flexibility for extra repayments</li>
<li>Balanced approach for uncertain markets</li>
</ul>

<p>Common splits: 50/50, 60/40, 70/30</p>

<h3>Key Questions to Ask Clients</h3>
<ol>
<li>How important is payment certainty to you?</li>
<li>Do you plan to make extra repayments?</li>
<li>Are you likely to sell or refinance in the next few years?</li>
<li>How would you feel if rates increased significantly?</li>
<li>What's your view on where interest rates are heading?</li>
</ol>

<h3>Break Costs Explained</h3>
<p>Fixed rate break costs occur when:</p>
<ul>
<li>Refinancing before fixed term ends</li>
<li>Selling property and repaying loan</li>
<li>Making extra repayments above limit</li>
</ul>
<p>Break costs can range from minimal to tens of thousands of dollars.</p>`,
    tags: ["fixed rate", "variable rate", "interest rates", "loan features"],
    views: 8400,
    module_code: "FNSFMB512",
  },
  {
    category_slug: "loan-products",
    slug: "offset-account-benefits",
    question: "How do offset accounts work and who benefits most?",
    answer: `<p>An offset account is a transaction account linked to your home loan. The balance offsets the loan principal, reducing interest payable.</p>

<h3>How It Works</h3>
<p>Example:</p>
<ul>
<li>Home loan: $500,000 at 6%</li>
<li>Offset balance: $50,000</li>
<li>Interest charged on: $450,000 (not $500,000)</li>
<li>Saving: $3,000 per year in interest</li>
</ul>

<h3>Types of Offset</h3>
<ul>
<li><strong>100% offset:</strong> Full balance offsets the loan (most common)</li>
<li><strong>Partial offset:</strong> Only a percentage offsets (less common now)</li>
</ul>

<h3>Benefits</h3>
<ul>
<li>Interest savings without making extra repayments</li>
<li>Funds remain accessible (unlike extra repayments)</li>
<li>Interest savings are tax-free (unlike interest earned on savings)</li>
<li>Flexibility to access money when needed</li>
</ul>

<h3>Who Benefits Most</h3>
<p><strong>Ideal candidates:</strong></p>
<ul>
<li>Those with irregular income (contractors, self-employed)</li>
<li>People who maintain savings buffers</li>
<li>Investors who want to maximise deductible debt</li>
<li>Anyone with lumpy cashflow (bonuses, commissions)</li>
</ul>

<p><strong>Less beneficial for:</strong></p>
<ul>
<li>Those who don't keep savings (spend everything)</li>
<li>Borrowers where offset fee exceeds interest savings</li>
<li>Small loan balances with minimal savings</li>
</ul>

<h3>Offset vs Redraw</h3>
<table>
<tr><th>Feature</th><th>Offset</th><th>Redraw</th></tr>
<tr><td>Accessibility</td><td>Instant access like normal account</td><td>May have delays or restrictions</td></tr>
<tr><td>Loan balance</td><td>Loan balance unchanged</td><td>Loan balance reduces</td></tr>
<tr><td>Tax (investors)</td><td>Preserves full tax deductibility</td><td>Can affect tax deductibility</td></tr>
<tr><td>Fees</td><td>Often has monthly/annual fee</td><td>Usually free</td></tr>
</table>

<h3>Important for Investors</h3>
<p>Offset is generally preferred for investment loans because:</p>
<ul>
<li>Keeps loan balance (and deduction) intact</li>
<li>Avoids mixed-purpose loan complications</li>
<li>Easier to demonstrate loan purpose to ATO</li>
</ul>`,
    tags: ["offset", "savings", "loan features", "interest"],
    views: 7200,
    module_code: "FNSFMB512",
  },
  {
    category_slug: "loan-products",
    slug: "lvr-lmi-explained",
    question: "What is LVR and when is LMI required?",
    answer: `<p>LVR (Loan-to-Value Ratio) and LMI (Lenders Mortgage Insurance) are fundamental concepts for mortgage brokers to understand.</p>

<h3>Loan-to-Value Ratio (LVR)</h3>
<p><code>LVR = (Loan Amount ÷ Property Value) × 100</code></p>

<p><strong>Example:</strong></p>
<ul>
<li>Property value: $800,000</li>
<li>Loan amount: $640,000</li>
<li>LVR: 80%</li>
</ul>

<h3>LVR Thresholds</h3>
<table>
<tr><th>LVR</th><th>Deposit</th><th>Implications</th></tr>
<tr><td>≤60%</td><td>40%+</td><td>Best rates, no LMI</td></tr>
<tr><td>≤80%</td><td>20%+</td><td>Good rates, no LMI</td></tr>
<tr><td>80.01-90%</td><td>10-20%</td><td>LMI required</td></tr>
<tr><td>90.01-95%</td><td>5-10%</td><td>Higher LMI, stricter criteria</td></tr>
</table>

<h3>Lenders Mortgage Insurance (LMI)</h3>
<p>LMI protects the <strong>lender</strong> (not the borrower) if the borrower defaults and the property sale doesn't cover the debt.</p>

<p><strong>When LMI is required:</strong></p>
<ul>
<li>LVR above 80% (sometimes above 70% for investments)</li>
<li>Calculated on loan amount and property type</li>
</ul>

<p><strong>LMI costs (indicative):</strong></p>
<table>
<tr><th>Loan Amount</th><th>LVR</th><th>Approx LMI</th></tr>
<tr><td>$500,000</td><td>85%</td><td>$5,500</td></tr>
<tr><td>$500,000</td><td>90%</td><td>$12,000</td></tr>
<tr><td>$500,000</td><td>95%</td><td>$20,000</td></tr>
</table>

<h3>LMI Providers</h3>
<ul>
<li>Genworth</li>
<li>QBE</li>
<li>Arch (formerly HLMI)</li>
</ul>

<h3>Ways to Avoid LMI</h3>
<ul>
<li>Save 20% deposit</li>
<li>Use a family guarantee</li>
<li>First Home Guarantee scheme (5% deposit, no LMI)</li>
<li>Professional packages (some lenders waive for doctors, lawyers, etc.)</li>
</ul>

<h3>LMI Can Be Capitalised</h3>
<p>LMI can usually be added to the loan, so borrowers don't need to pay upfront. However, this increases the total loan and LVR.</p>`,
    tags: ["LVR", "LMI", "deposit", "insurance"],
    views: 11200,
    module_code: "FNSFMB512",
    is_featured: true,
  },

  // Needs Analysis - More questions
  {
    category_slug: "needs-analysis",
    slug: "fact-find-document-explained",
    question: "What information goes into a fact find document?",
    answer: `<p>The fact find (also called needs analysis or client questionnaire) is the foundation of responsible lending. Here's what it should capture:</p>

<h3>Personal Details</h3>
<ul>
<li>Full legal names of all applicants</li>
<li>Dates of birth</li>
<li>Contact information</li>
<li>Identification details</li>
<li>Number of dependents</li>
<li>Relationship/marital status</li>
</ul>

<h3>Employment Information</h3>
<ul>
<li>Current employer and role</li>
<li>Employment type (PAYG, self-employed, contract)</li>
<li>Length of employment</li>
<li>Probation status</li>
<li>Income details (base, overtime, bonuses)</li>
<li>Employment history (2-3 years)</li>
</ul>

<h3>Financial Position</h3>
<p><strong>Assets:</strong></p>
<ul>
<li>Real estate owned</li>
<li>Vehicles</li>
<li>Savings and investments</li>
<li>Superannuation (for reference)</li>
<li>Other significant assets</li>
</ul>

<p><strong>Liabilities:</strong></p>
<ul>
<li>Existing mortgages</li>
<li>Personal loans</li>
<li>Credit cards (limits, not balances)</li>
<li>Car loans/leases</li>
<li>HECS/HELP debt</li>
<li>Other debts (BNPL, store cards)</li>
</ul>

<h3>Living Expenses</h3>
<ul>
<li>Groceries and household</li>
<li>Utilities and bills</li>
<li>Transport costs</li>
<li>Insurance premiums</li>
<li>Childcare and education</li>
<li>Entertainment and lifestyle</li>
<li>Any other regular expenses</li>
</ul>

<h3>Borrower's Requirements & Objectives</h3>
<ul>
<li>Purpose of the loan (purchase, refinance, equity release)</li>
<li>Loan amount sought</li>
<li>Preferred loan term</li>
<li>Fixed vs variable preference</li>
<li>Desired features (offset, redraw, etc.)</li>
<li>Future plans (renovations, investments, etc.)</li>
</ul>

<h3>Risk Tolerance</h3>
<ul>
<li>How would rate increases affect them?</li>
<li>Is payment certainty important?</li>
<li>Comfort with higher LVR?</li>
</ul>

<h3>Property Details</h3>
<ul>
<li>Address and type</li>
<li>Purchase price or estimated value</li>
<li>Usage (owner-occupied, investment)</li>
<li>Construction type and age</li>
</ul>

<h3>Documentation Checklist</h3>
<p>Record what documents you need to collect:</p>
<ul>
<li>Payslips (usually last 2)</li>
<li>Bank statements (3-6 months)</li>
<li>Tax returns (if self-employed)</li>
<li>ID documents</li>
</ul>`,
    tags: ["fact find", "needs analysis", "documentation", "client information"],
    views: 6800,
    module_code: "FNSINC511",
  },
  {
    category_slug: "needs-analysis",
    slug: "client-interview-techniques",
    question: "What are effective techniques for client interviews?",
    answer: `<p>Conducting effective client interviews is crucial for gathering accurate information and building rapport. Here are proven techniques:</p>

<h3>Preparation</h3>
<ol>
<li>Review any pre-submitted information</li>
<li>Prepare your fact find document</li>
<li>Have calculators and reference materials ready</li>
<li>Ensure a quiet, professional environment</li>
<li>Allow adequate time (60-90 minutes for first meeting)</li>
</ol>

<h3>Building Rapport</h3>
<ul>
<li>Start with light conversation to ease tension</li>
<li>Explain the process and what to expect</li>
<li>Assure confidentiality of their information</li>
<li>Use the client's name naturally</li>
<li>Match your communication style to theirs</li>
</ul>

<h3>Questioning Techniques</h3>

<h4>Open Questions</h4>
<p>Start broad to understand the full picture:</p>
<ul>
<li>"Tell me about your current living situation..."</li>
<li>"What prompted you to look at buying now?"</li>
<li>"How do you see your situation changing over the next few years?"</li>
</ul>

<h4>Probing Questions</h4>
<p>Dig deeper for specifics:</p>
<ul>
<li>"Can you tell me more about that?"</li>
<li>"How does that work exactly?"</li>
<li>"What else should I know about your income?"</li>
</ul>

<h4>Clarifying Questions</h4>
<p>Ensure you understand correctly:</p>
<ul>
<li>"Just to confirm, your annual salary is $X before tax?"</li>
<li>"So the credit card limit is $10,000, not the balance?"</li>
<li>"When you say 'soon', do you mean within 3 months?"</li>
</ul>

<h4>Closed Questions</h4>
<p>Get specific facts:</p>
<ul>
<li>"How many dependents do you have?"</li>
<li>"What is your current address?"</li>
<li>"Is the property owner-occupied or investment?"</li>
</ul>

<h3>Active Listening</h3>
<ul>
<li>Maintain appropriate eye contact</li>
<li>Nod and use verbal acknowledgments</li>
<li>Paraphrase to confirm understanding</li>
<li>Watch for non-verbal cues</li>
<li>Don't interrupt</li>
</ul>

<h3>Sensitive Topics</h3>
<p>Handle carefully:</p>
<ul>
<li>Credit issues: "Many people have had credit challenges..."</li>
<li>Expenses: "I need to ask about all expenses to ensure we find a suitable loan..."</li>
<li>Relationship status: "Are you applying jointly or individually?"</li>
</ul>

<h3>Closing the Interview</h3>
<ol>
<li>Summarise what you've discussed</li>
<li>Confirm next steps and documents needed</li>
<li>Set expectations for timing</li>
<li>Answer any questions they have</li>
<li>Thank them for their time</li>
</ol>`,
    tags: ["interview", "client meeting", "communication", "techniques"],
    views: 5400,
    module_code: "FNSINC511",
  },

  // Career Pathways - More questions
  {
    category_slug: "career-pathways",
    slug: "day-in-life-mortgage-broker",
    question: "What does a typical day look like for a mortgage broker?",
    answer: `<p>A mortgage broker's day is varied and client-focused. Here's what you can expect:</p>

<h3>Morning (8:00 AM - 12:00 PM)</h3>
<ul>
<li><strong>8:00 - 8:30:</strong> Check emails and prioritise tasks for the day</li>
<li><strong>8:30 - 9:00:</strong> Follow up on applications in progress with lenders</li>
<li><strong>9:00 - 10:30:</strong> Client meeting - initial consultation with new client</li>
<li><strong>10:30 - 11:00:</strong> Document notes and identify suitable lenders</li>
<li><strong>11:00 - 12:00:</strong> Prepare and submit loan application</li>
</ul>

<h3>Afternoon (12:00 PM - 5:00 PM)</h3>
<ul>
<li><strong>12:00 - 12:30:</strong> Lunch (often at desk or with referral partner)</li>
<li><strong>12:30 - 1:00:</strong> Return client calls and respond to queries</li>
<li><strong>1:00 - 2:30:</strong> Phone appointment with interstate client</li>
<li><strong>2:30 - 3:30:</strong> Resolve conditions on pending application</li>
<li><strong>3:30 - 4:30:</strong> Chase valuations and outstanding documents</li>
<li><strong>4:30 - 5:00:</strong> Update CRM and plan tomorrow</li>
</ul>

<h3>Evening (as needed)</h3>
<ul>
<li><strong>6:00 - 7:30:</strong> Client meeting (many clients prefer after-hours)</li>
<li><strong>8:00:</strong> Respond to urgent emails</li>
</ul>

<h3>Key Activities</h3>

<h4>Client-Facing</h4>
<ul>
<li>Initial consultations (fact find, needs analysis)</li>
<li>Presenting loan options and recommendations</li>
<li>Document collection and verification</li>
<li>Settlement coordination</li>
</ul>

<h4>Administrative</h4>
<ul>
<li>Preparing and submitting applications</li>
<li>Following up with lenders and third parties</li>
<li>Managing compliance documentation</li>
<li>Updating CRM and client files</li>
</ul>

<h4>Business Development</h4>
<ul>
<li>Networking with referral partners</li>
<li>Following up leads and enquiries</li>
<li>Marketing and social media</li>
<li>Attending industry events</li>
</ul>

<h3>Work-Life Balance</h3>
<p>Reality check:</p>
<ul>
<li>Many client meetings are evenings/weekends</li>
<li>You control your schedule, but clients expect responsiveness</li>
<li>First 2-3 years require significant hours to build your business</li>
<li>Established brokers can achieve better balance</li>
</ul>

<h3>Working From Home</h3>
<p>Many brokers work from home, meeting clients at:</p>
<ul>
<li>Client's home or workplace</li>
<li>Cafes</li>
<li>Shared office spaces</li>
<li>Video calls</li>
</ul>`,
    tags: ["daily routine", "workday", "lifestyle", "responsibilities"],
    views: 7800,
  },
  {
    category_slug: "career-pathways",
    slug: "mortgage-broker-specialisations",
    question: "What specialisations are available for mortgage brokers?",
    answer: `<p>While most brokers start with residential home loans, there are several profitable specialisation paths to consider as your career develops.</p>

<h3>Residential Specialist</h3>
<p><strong>Focus:</strong> First home buyers, upgraders, refinancers</p>
<ul>
<li>High volume, steady demand</li>
<li>Often referral-based</li>
<li>Good for building trail book quickly</li>
</ul>

<h3>Investment Property Specialist</h3>
<p><strong>Focus:</strong> Property investors, portfolio builders</p>
<ul>
<li>Often higher loan values = higher commissions</li>
<li>Repeat business as clients grow portfolios</li>
<li>Requires strong understanding of tax implications</li>
<li>Often works with buyers agents and accountants</li>
</ul>

<h3>Commercial Finance</h3>
<p><strong>Focus:</strong> Business premises, commercial properties</p>
<ul>
<li>Higher complexity = higher commissions</li>
<li>Fewer brokers in this space</li>
<li>Requires additional training and accreditation</li>
<li>Longer settlement times</li>
</ul>

<h3>Asset/Equipment Finance</h3>
<p><strong>Focus:</strong> Vehicles, machinery, equipment for businesses</p>
<ul>
<li>Quick turnaround (days, not weeks)</li>
<li>Volume business opportunity</li>
<li>Often combined with other specialisations</li>
</ul>

<h3>Construction Loans</h3>
<p><strong>Focus:</strong> New builds, knockdown-rebuilds</p>
<ul>
<li>Complex but rewarding</li>
<li>Requires understanding of progress draws</li>
<li>Builder relationships important</li>
</ul>

<h3>SMSF Lending</h3>
<p><strong>Focus:</strong> Loans within Self-Managed Super Funds</p>
<ul>
<li>Specialised knowledge required</li>
<li>Works with accountants and financial planners</li>
<li>Limited lender options</li>
</ul>

<h3>Non-Conforming/Specialist Lending</h3>
<p><strong>Focus:</strong> Clients with credit issues, non-standard situations</p>
<ul>
<li>Helps clients others can't</li>
<li>Higher rates = potentially higher commissions</li>
<li>Requires strong compliance awareness</li>
</ul>

<h3>Debt Consolidation</h3>
<p><strong>Focus:</strong> Refinancing to consolidate multiple debts</p>
<ul>
<li>Growing market segment</li>
<li>Helps clients improve financial position</li>
<li>Often leads to additional refinance work</li>
</ul>

<h3>Choosing Your Specialisation</h3>
<ol>
<li>Start general to understand the market</li>
<li>Notice what type of work you enjoy most</li>
<li>Consider what referral partners you can access</li>
<li>Specialise after 2-3 years of experience</li>
</ol>`,
    tags: ["specialisation", "career path", "commercial", "investment"],
    views: 6100,
  },
  {
    category_slug: "career-pathways",
    slug: "building-referral-network",
    question: "How do I build a referral network as a new broker?",
    answer: `<p>Referrals are the lifeblood of a successful mortgage broking business. Here's how to build your network from scratch:</p>

<h3>Key Referral Partners</h3>

<h4>Real Estate Agents</h4>
<ul>
<li>Primary source for many brokers</li>
<li>Need pre-approvals for their buyers</li>
<li>Offer to help with buyer qualification</li>
<li>Provide quick, reliable service to win their trust</li>
</ul>

<h4>Accountants</h4>
<ul>
<li>Trusted advisors to their clients</li>
<li>See clients making financial decisions</li>
<li>Can refer investment and self-employed clients</li>
<li>Value brokers who understand tax implications</li>
</ul>

<h4>Financial Planners</h4>
<ul>
<li>Advise on wealth building (property often part of this)</li>
<li>Can refer clients needing debt restructuring</li>
<li>Look for brokers who won't encroach on their advice</li>
</ul>

<h4>Conveyancers/Solicitors</h4>
<ul>
<li>Involved in every property transaction</li>
<li>See clients who may not have finance sorted</li>
<li>Appreciate brokers with good documentation</li>
</ul>

<h4>Builders/Developers</h4>
<ul>
<li>Need finance for their buyers</li>
<li>Particularly valuable for construction loans</li>
</ul>

<h3>Building Relationships</h3>
<ol>
<li><strong>Identify targets:</strong> List 20 potential partners in your area</li>
<li><strong>Make contact:</strong> Call, email, or visit in person</li>
<li><strong>Offer value first:</strong> How can you help them?</li>
<li><strong>Be consistent:</strong> Regular check-ins, not just when you need referrals</li>
<li><strong>Deliver results:</strong> Fast, professional service for their referred clients</li>
<li><strong>Keep them updated:</strong> Progress reports on referred clients (with consent)</li>
<li><strong>Say thank you:</strong> Acknowledge referrals, consider referral fees where appropriate</li>
</ol>

<h3>Your Personal Network</h3>
<p>Don't forget people you already know:</p>
<ul>
<li>Friends and family</li>
<li>Former colleagues</li>
<li>Social connections</li>
<li>Community groups</li>
<li>Sports clubs</li>
</ul>

<h3>Digital Presence</h3>
<ul>
<li>LinkedIn profile optimised for local search</li>
<li>Google Business Profile</li>
<li>Social media presence (Facebook, Instagram)</li>
<li>Encourage Google reviews from clients</li>
</ul>

<h3>Referral Fees</h3>
<p>You may pay referral fees to non-licensed parties, but:</p>
<ul>
<li>Must comply with best interests duty</li>
<li>Must be disclosed to clients</li>
<li>Check your aggregator's policies</li>
<li>Common: $200-$500 per settled loan to referrers</li>
</ul>

<h3>Reciprocal Referrals</h3>
<p>Offer to refer back:</p>
<ul>
<li>Recommend your referral partners to your clients</li>
<li>Creates mutual benefit and stronger relationships</li>
</ul>`,
    tags: ["referrals", "networking", "business development", "partners"],
    views: 8600,
    is_featured: true,
  },
  {
    category_slug: "career-pathways",
    slug: "top-aggregators-australia",
    question: "What are the major aggregators in Australia?",
    answer: `<p>Aggregators provide the essential infrastructure for mortgage brokers to operate. Here's an overview of the major players:</p>

<h3>Major Aggregators</h3>

<h4>AFG (Australian Finance Group)</h4>
<ul>
<li>One of the largest, ASX-listed</li>
<li>Strong technology platform</li>
<li>Wide lender panel (50+)</li>
<li>Multiple broker models available</li>
</ul>

<h4>Connective</h4>
<ul>
<li>Largest aggregator by broker numbers</li>
<li>Part of NAB group</li>
<li>Excellent training and support</li>
<li>Mercury technology platform</li>
</ul>

<h4>Mortgage Choice</h4>
<ul>
<li>Strong brand recognition</li>
<li>ASX-listed (REA Group)</li>
<li>Franchise model available</li>
<li>Good for new brokers wanting structure</li>
</ul>

<h4>Loan Market</h4>
<ul>
<li>Part of Ray White network</li>
<li>Good real estate referral opportunities</li>
<li>Strong training programs</li>
</ul>

<h4>PLAN Australia</h4>
<ul>
<li>Part of NAB group</li>
<li>Focused on established brokers</li>
<li>Higher commission splits</li>
</ul>

<h4>Finsure</h4>
<ul>
<li>Independent aggregator</li>
<li>Competitive commission splits</li>
<li>Growing market share</li>
</ul>

<h4>Liberty Network Services</h4>
<ul>
<li>Aligned with Liberty lender</li>
<li>Good for brokers starting out</li>
</ul>

<h3>Choosing an Aggregator</h3>
<p>Consider these factors:</p>

<h4>Commission Split</h4>
<ul>
<li>New brokers: typically 60-75%</li>
<li>Experienced: can negotiate 80-90%+</li>
<li>Higher split isn't always better - consider total value</li>
</ul>

<h4>Technology</h4>
<ul>
<li>CRM and lodgement systems</li>
<li>Ease of use and integration</li>
<li>Mobile capabilities</li>
</ul>

<h4>Lender Panel</h4>
<ul>
<li>Number of lenders (30-60 is typical)</li>
<li>Panel breadth (banks, non-banks, specialists)</li>
<li>Accreditation support</li>
</ul>

<h4>Support</h4>
<ul>
<li>Training programs for new brokers</li>
<li>Mentoring availability</li>
<li>Compliance support</li>
<li>BDM accessibility</li>
</ul>

<h4>Fees</h4>
<ul>
<li>Monthly fees ($0 - $500+)</li>
<li>Technology fees</li>
<li>Transaction fees</li>
<li>Exit fees</li>
</ul>

<h3>New Broker Advice</h3>
<p>For your first aggregator:</p>
<ol>
<li>Prioritise training and support over commission split</li>
<li>Look for mentoring programs</li>
<li>Check the contract exit terms carefully</li>
<li>Speak to existing brokers about their experience</li>
</ol>`,
    tags: ["aggregators", "AFG", "Connective", "choosing aggregator"],
    views: 9200,
  },
];

async function seedAdditional() {
  console.log("🌱 Adding additional questions to database...\n");

  // Get existing categories
  const { data: categories, error: catError } = await supabase
    .from("categories")
    .select("id, slug");

  if (catError) {
    console.error("Error fetching categories:", catError);
    return;
  }

  const categoryMap = new Map(categories?.map((c) => [c.slug, c.id]) || []);

  // Prepare questions with category IDs
  const questionsWithCategoryIds = additionalQuestions.map((q) => ({
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
  console.log(`❓ Inserting ${questionsWithCategoryIds.length} additional questions...`);
  const { data: insertedQuestions, error: qError } = await supabase
    .from("questions")
    .upsert(questionsWithCategoryIds, { onConflict: "slug" })
    .select();

  if (qError) {
    console.error("Error inserting questions:", qError);
    return;
  }

  console.log(`✅ Inserted ${insertedQuestions?.length} questions\n`);

  // Get total count
  const { count } = await supabase
    .from("questions")
    .select("*", { count: "exact", head: true });

  console.log("🎉 Seed completed successfully!");
  console.log(`   Total questions in database: ${count}`);
}

seedAdditional().catch(console.error);
