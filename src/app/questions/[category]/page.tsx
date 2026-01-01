import Link from "next/link";
import { Metadata } from "next";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatNumber } from "@/lib/utils";
import { getQuestionsByCategory } from "@/lib/data";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export const revalidate = 60;

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const { category: categoryData } = await getQuestionsByCategory(category);

  if (!categoryData) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${categoryData.title} | FNS50322 Questions`,
    description: categoryData.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const { category: categoryData, questions } = await getQuestionsByCategory(category);

  if (!categoryData) {
    notFound();
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/questions" className="hover:text-brand-600">Questions</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">{categoryData.title}</span>
        </div>

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{categoryData.title}</h1>
          <p className="text-lg text-slate-600">{categoryData.description}</p>
          {categoryData.module_code && (
            <span className="inline-block mt-3 module-badge">{categoryData.module_code}</span>
          )}
        </div>

        {/* Questions List */}
        {questions.length > 0 ? (
          <div className="space-y-4">
            {questions.map((q, i) => (
              <Link
                key={q.slug}
                href={`/questions/${category}/${q.slug}`}
                className="question-card flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-5 group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="font-medium text-slate-900 group-hover:text-brand-600 transition-colors">
                    {q.question}
                  </h3>
                  <div className="flex items-center gap-3 mt-1 text-sm text-slate-400">
                    {q.module_code && (
                      <span className="module-badge text-xs">{q.module_code}</span>
                    )}
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {formatNumber(q.views)} views
                    </span>
                  </div>
                </div>
                <ChevronRight className="flex-shrink-0 w-5 h-5 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-xl">
            <p className="text-slate-600">No questions in this category yet.</p>
            <Button asChild className="mt-4">
              <Link href="/submit">Submit a Question</Link>
            </Button>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-12">
          <Button asChild variant="outline">
            <Link href="/questions">
              <ChevronLeft className="w-4 h-4 mr-2" />
              All Categories
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
