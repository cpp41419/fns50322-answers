import Link from "next/link";
import { LucideIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Category {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  questionCount: number;
  color: string;
  moduleCode?: string;
}

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;

  return (
    <Link
      href={`/questions/${category.slug}`}
      className="category-card group"
    >
      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", category.color)}>
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
        {category.title}
      </h3>

      {category.moduleCode && (
        <span className="module-badge mb-2">{category.moduleCode}</span>
      )}

      <p className="text-sm text-slate-500 mb-4">
        {category.description}
      </p>

      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-400">{category.questionCount} questions</span>
        <ChevronRight className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
