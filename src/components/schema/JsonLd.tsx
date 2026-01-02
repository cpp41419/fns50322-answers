// Schema.org structured data components for SEO and AI optimization

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  faqs: FAQItem[];
}

export function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/<[^>]*>/g, ""), // Strip HTML
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface CourseSchemaProps {
  name: string;
  description: string;
  provider?: string;
  duration?: string;
  educationalLevel?: string;
}

export function CourseSchema({
  name,
  description,
  provider = "Various RTOs",
  duration = "P6M/P12M",
  educationalLevel = "Diploma",
}: CourseSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    timeRequired: duration,
    educationalLevel,
    occupationalCredentialAwarded: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Diploma",
      name: "FNS50322 Diploma of Finance and Mortgage Broking Management",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["online", "blended", "onsite"],
      courseWorkload: "PT20H/W",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface OccupationSchemaProps {
  name?: string;
  description?: string;
  estimatedSalary?: {
    min: number;
    max: number;
    currency?: string;
  };
}

export function OccupationSchema({
  name = "Mortgage Broker",
  description = "Licensed finance professional who helps clients obtain home loans and other credit products in Australia",
  estimatedSalary = { min: 60000, max: 200000, currency: "AUD" },
}: OccupationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Occupation",
    name,
    description,
    occupationalCategory: "13-2072.00",
    qualifications: "FNS50322 Diploma of Finance and Mortgage Broking Management",
    responsibilities: [
      "Conduct client needs analysis",
      "Assess credit applications",
      "Compare loan products from multiple lenders",
      "Submit loan applications on behalf of clients",
      "Ensure compliance with responsible lending obligations",
    ],
    skills: [
      "Credit assessment",
      "Financial analysis",
      "Client relationship management",
      "Regulatory compliance",
      "Negotiation",
    ],
    estimatedSalary: {
      "@type": "MonetaryAmountDistribution",
      name: "base",
      currency: estimatedSalary.currency,
      minValue: estimatedSalary.min,
      maxValue: estimatedSalary.max,
      unitText: "YEAR",
    },
    occupationLocation: {
      "@type": "Country",
      name: "Australia",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface OrganizationSchemaProps {
  name: string;
  url: string;
  description: string;
  logo?: string;
}

export function OrganizationSchema({
  name,
  url,
  description,
  logo,
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    description,
    logo,
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebSiteSchemaProps {
  name: string;
  url: string;
  description: string;
  searchUrl?: string;
}

export function WebSiteSchema({
  name,
  url,
  description,
  searchUrl,
}: WebSiteSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
  };

  if (searchUrl) {
    schema.potentialAction = {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: searchUrl,
      },
      "query-input": "required name=search_term_string",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
