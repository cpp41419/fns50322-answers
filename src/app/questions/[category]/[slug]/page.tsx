import Link from "next/link";
import { Metadata } from "next";
import { ChevronLeft, ChevronRight, Clock, Eye, Tag, ThumbsUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getQuestionBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

interface QuestionPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export const revalidate = 60;

export async function generateMetadata({ params }: QuestionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const question = await getQuestionBySlug(slug);

  if (!question) {
    return { title: "Question Not Found" };
  }

  return {
    title: question.question,
    description: `Get the answer to: ${question.question}. Part of our comprehensive FNS50322 Q&A resource for aspiring mortgage brokers.`,
  };
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { category, slug } = await params;
  const question = await getQuestionBySlug(slug);

  if (!question) {
    notFound();
  }

  const categorySlug = question.category?.slug || category;
  const categoryTitle = question.category?.title || category.replace(/-/g, " ");

  // Format the date
  const updatedDate = new Date(question.updated_at).toLocaleDateString("en-AU", {
    month: "short",
    year: "numeric",
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/questions" className="hover:text-brand-600">Questions</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/questions/${categorySlug}`} className="hover:text-brand-600 capitalize">
              {categoryTitle}
            </Link>
          </div>

          {/* Question */}
          <article>
            <header className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {question.question}
              </h1>

              <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {question.views.toLocaleString()} views
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Updated {updatedDate}
                </span>
                {question.module_code && (
                  <span className="module-badge">{question.module_code}</span>
                )}
              </div>

              {/* Tags */}
              {question.tags && question.tags.length > 0 && (
                <div className="flex items-center gap-2 mt-4 flex-wrap">
                  <Tag className="w-4 h-4 text-slate-400" />
                  {question.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
              )}
            </header>

            {/* Answer */}
            <div
              className="faq-answer prose prose-slate max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: question.answer }}
            />

            {/* Feedback */}
            <div className="bg-slate-50 rounded-xl p-6 mb-12">
              <p className="text-sm text-slate-600 mb-4">Was this answer helpful?</p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Yes, helpful ({question.helpful_yes || 0})
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Suggest improvement
                </Button>
              </div>
            </div>

            {/* Related Questions */}
            {question.relatedQuestions && question.relatedQuestions.length > 0 && (
              <div className="border-t border-slate-200 pt-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Related Questions</h2>
                <div className="space-y-3">
                  {question.relatedQuestions.map((q) => (
                    <Link
                      key={q.slug}
                      href={`/questions/${q.category_slug || categorySlug}/${q.slug}`}
                      className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-brand-300 hover:shadow-sm transition-all"
                    >
                      <span className="text-slate-900 hover:text-brand-600">{q.question}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Back Link */}
          <div className="mt-12">
            <Button asChild variant="outline">
              <Link href={`/questions/${categorySlug}`}>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to {categoryTitle}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
