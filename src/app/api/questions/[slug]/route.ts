import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { slug } = await params;
  const supabase = await createClient();

  // Get the question
  const { data: question, error } = await supabase
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
      created_at,
      updated_at,
      category:categories(id, slug, title, description)
    `)
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error || !question) {
    return NextResponse.json({ error: "Question not found" }, { status: 404 });
  }

  // Increment view count (fire and forget)
  supabase.rpc("increment_views", { question_id: question.id });

  // Get related questions from same category
  const categoryData = question.category as { id: string } | null;
  let relatedQuestions: Array<{ slug: string; question: string }> = [];

  if (categoryData?.id) {
    const { data: related } = await supabase
      .from("questions")
      .select("slug, question")
      .eq("category_id", categoryData.id)
      .eq("is_published", true)
      .neq("slug", slug)
      .order("views", { ascending: false })
      .limit(3);

    relatedQuestions = related || [];
  }

  return NextResponse.json({
    ...question,
    relatedQuestions,
  });
}
