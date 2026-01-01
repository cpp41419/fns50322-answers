export interface Question {
  id: string;
  slug: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
  views: number;
  moduleCode?: string; // e.g., FNSINC511, FNSCRD501
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  questionCount: number;
  moduleCode?: string;
}

export interface Module {
  code: string;
  name: string;
  description: string;
  category: string;
}

// Core FNS50322 Modules
export const FNS50322_MODULES: Module[] = [
  {
    code: "FNSINC511",
    name: "Apply appropriate needs analysis to identify credit products",
    description: "The 'Fact Find' module - client needs analysis",
    category: "needs-analysis",
  },
  {
    code: "FNSCRD501",
    name: "Assess credit applications",
    description: "Credit assessment and financial situation analysis",
    category: "credit-assessment",
  },
  {
    code: "FNSFMB512",
    name: "Identify and present credit options",
    description: "The 'Loan Products' module - presenting solutions",
    category: "loan-products",
  },
  {
    code: "BSBPEF501",
    name: "Manage personal and professional development",
    description: "The 'Soft Skills' module - career development",
    category: "professional-development",
  },
];
