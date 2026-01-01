import Link from "next/link";
import { Eye, ChevronRight } from "lucide-react";
import { formatNumber } from "@/lib/utils";

interface Question {
  slug: string;
  question: string;
  category: string;
  views: number;
  moduleCode?: string;
}

export default function QuestionCard({ question, index }: { question: Question; index: number }) {
  return (
    <Link
      href={`/questions/${question.category}/${question.slug}`}
      className="question-card flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-5 group"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 font-bold text-sm flex items-center justify-center">
        {index}
      </div>

      <div className="flex-grow min-w-0">
        <h3 className="font-medium text-slate-900 group-hover:text-brand-600 transition-colors truncate">
          {question.question}
        </h3>
        <div className="flex items-center gap-3 mt-1 text-sm text-slate-400">
          <span className="capitalize">{question.category.replace(/-/g, " ")}</span>
          {question.moduleCode && (
            <span className="module-badge text-xs">{question.moduleCode}</span>
          )}
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {formatNumber(question.views)}
          </span>
        </div>
      </div>

      <ChevronRight className="flex-shrink-0 w-5 h-5 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
    </Link>
  );
}
