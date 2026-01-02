import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

interface Category {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  icon: string | null;
  color: string | null;
  module_code: string | null;
  sort_order: number;
}

export async function GET() {
  const supabase = await createClient();

  const { data: categories, error } = await supabase
    .from("categories")
    .select(`
      id,
      slug,
      title,
      description,
      icon,
      color,
      module_code,
      sort_order
    `)
    .order("sort_order", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Get question counts for each category
  const categoriesWithCounts = await Promise.all(
    ((categories as Category[]) || []).map(async (category) => {
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

  return NextResponse.json({
    categories: categoriesWithCounts,
  });
}
