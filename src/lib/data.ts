import { createClient } from "@/lib/supabase/server";

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  module_code: string | null;
  sort_order: number;
  questionCount: number;
}

export interface Question {
  id: string;
  slug: string;
  question: string;
  answer: string;
  module_code: string | null;
  tags: string[];
  views: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  category: {
    id: string;
    slug: string;
    title: string;
  };
}

export interface QuestionDetail extends Question {
  helpful_yes: number;
  helpful_no: number;
  relatedQuestions: Array<{
    slug: string;
    question: string;
    category_slug: string;
  }>;
}

interface DBCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  module_code: string | null;
  sort_order: number;
}

// Fetch all categories with question counts
export async function getCategories(): Promise<Category[]> {
  const supabase = createClient();

  const { data: categories, error } = await supabase
    .from("categories")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error || !categories) {
    console.error("Error fetching categories:", error);
    return [];
  }

  // Get question counts
  const categoriesWithCounts = await Promise.all(
    (categories as DBCategory[]).map(async (category) => {
      const { count } = await supabase
        .from("questions")
        .select("id", { count: "exact", head: true })
        .eq("category_id", category.id)
        .eq("is_published", true);

      return {
        ...category,
        questionCount: count || 0,
      };
    })
  );

  return categoriesWithCounts;
}

interface DBQuestionWithCategory {
  id: string;
  slug: string;
  question: string;
  answer: string;
  module_code: string | null;
  tags: string[] | null;
  views: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  category: { id: string; slug: string; title: string } | null;
}

// Fetch popular/featured questions
export async function getPopularQuestions(limit = 5): Promise<Question[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("questions")
    .select(`
      id,
      slug,
      question,
      answer,
      module_code,
      tags,
      views,
      is_featured,
      created_at,
      updated_at,
      category:categories(id, slug, title)
    `)
    .eq("is_published", true)
    .order("views", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching popular questions:", error);
    return [];
  }

  return ((data || []) as DBQuestionWithCategory[]).map((q) => ({
    ...q,
    tags: q.tags || [],
    category: q.category as Question["category"],
  }));
}

// Fetch featured questions
export async function getFeaturedQuestions(limit = 5): Promise<Question[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("questions")
    .select(`
      id,
      slug,
      question,
      answer,
      module_code,
      tags,
      views,
      is_featured,
      created_at,
      updated_at,
      category:categories(id, slug, title)
    `)
    .eq("is_published", true)
    .eq("is_featured", true)
    .order("views", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching featured questions:", error);
    return [];
  }

  return ((data || []) as DBQuestionWithCategory[]).map((q) => ({
    ...q,
    tags: q.tags || [],
    category: q.category as Question["category"],
  }));
}

// Fetch questions by category
export async function getQuestionsByCategory(categorySlug: string): Promise<{
  category: Category | null;
  questions: Question[];
}> {
  const supabase = createClient();

  // Get category
  const { data: categoryData, error: catError } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", categorySlug)
    .single();

  if (catError || !categoryData) {
    return { category: null, questions: [] };
  }

  const category = categoryData as DBCategory;

  // Get questions
  const { data: questions, error: qError } = await supabase
    .from("questions")
    .select(`
      id,
      slug,
      question,
      answer,
      module_code,
      tags,
      views,
      is_featured,
      created_at,
      updated_at,
      category:categories(id, slug, title)
    `)
    .eq("category_id", category.id)
    .eq("is_published", true)
    .order("views", { ascending: false });

  if (qError) {
    console.error("Error fetching questions:", qError);
    return { category: { ...category, questionCount: 0 }, questions: [] };
  }

  return {
    category: { ...category, questionCount: questions?.length || 0 },
    questions: ((questions || []) as DBQuestionWithCategory[]).map((q) => ({
      ...q,
      tags: q.tags || [],
      category: q.category as Question["category"],
    })),
  };
}

interface DBQuestion {
  id: string;
  slug: string;
  question: string;
  answer: string;
  module_code: string | null;
  tags: string[] | null;
  views: number;
  helpful_yes: number;
  helpful_no: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  category: { id: string; slug: string; title: string; description?: string | null } | null;
}

// Fetch single question by slug
export async function getQuestionBySlug(slug: string): Promise<QuestionDetail | null> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("questions")
    .select(`
      id,
      slug,
      question,
      answer,
      module_code,
      tags,
      views,
      helpful_yes,
      helpful_no,
      is_featured,
      created_at,
      updated_at,
      category:categories(id, slug, title, description)
    `)
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error || !data) {
    return null;
  }

  const question = data as unknown as DBQuestion;

  // Increment view count
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (supabase.rpc as any)("increment_views", { question_id: question.id });

  // Get related questions
  const categoryData = question.category;
  let relatedQuestions: QuestionDetail["relatedQuestions"] = [];

  if (categoryData?.id) {
    const { data: related } = await supabase
      .from("questions")
      .select("slug, question, category:categories(slug)")
      .eq("category_id", categoryData.id)
      .eq("is_published", true)
      .neq("slug", slug)
      .order("views", { ascending: false })
      .limit(3);

    relatedQuestions = (related || []).map((r: { slug: string; question: string; category: { slug: string } | null }) => ({
      slug: r.slug,
      question: r.question,
      category_slug: r.category?.slug || "",
    }));
  }

  return {
    ...question,
    tags: question.tags || [],
    category: question.category as unknown as Question["category"],
    relatedQuestions,
  };
}

// Search questions
export async function searchQuestions(query: string, limit = 10): Promise<Question[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("questions")
    .select(`
      id,
      slug,
      question,
      answer,
      module_code,
      tags,
      views,
      is_featured,
      created_at,
      updated_at,
      category:categories(id, slug, title)
    `)
    .eq("is_published", true)
    .or(`question.ilike.%${query}%,answer.ilike.%${query}%`)
    .order("views", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error searching questions:", error);
    return [];
  }

  return ((data || []) as DBQuestionWithCategory[]).map((q) => ({
    ...q,
    tags: q.tags || [],
    category: q.category as Question["category"],
  }));
}
