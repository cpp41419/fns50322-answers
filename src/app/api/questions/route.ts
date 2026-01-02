import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const limit = parseInt(searchParams.get("limit") || "10");
  const featured = searchParams.get("featured");

  const supabase = await createClient();

  let query = supabase
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
      category:categories(id, slug, title)
    `)
    .eq("is_published", true)
    .order("views", { ascending: false })
    .limit(limit);

  // Filter by category slug
  if (category) {
    const { data: categoryData } = await supabase
      .from("categories")
      .select("id")
      .eq("slug", category)
      .single();

    if (categoryData) {
      const catId = (categoryData as { id: string }).id;
      query = query.eq("category_id", catId);
    }
  }

  // Filter featured only
  if (featured === "true") {
    query = query.eq("is_featured", true);
  }

  // Search filter
  if (search) {
    query = query.or(`question.ilike.%${search}%,tags.cs.{${search}}`);
  }

  const { data: questions, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    questions: questions || [],
    total: questions?.length || 0,
  });
}
