export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string;
          slug: string;
          title: string;
          description: string;
          icon: string;
          color: string;
          module_code: string | null;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description: string;
          icon?: string;
          color?: string;
          module_code?: string | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          description?: string;
          icon?: string;
          color?: string;
          module_code?: string | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      questions: {
        Row: {
          id: string;
          slug: string;
          question: string;
          answer: string;
          category_id: string;
          module_code: string | null;
          tags: string[];
          views: number;
          helpful_yes: number;
          helpful_no: number;
          is_published: boolean;
          is_featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          question: string;
          answer: string;
          category_id: string;
          module_code?: string | null;
          tags?: string[];
          views?: number;
          helpful_yes?: number;
          helpful_no?: number;
          is_published?: boolean;
          is_featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          question?: string;
          answer?: string;
          category_id?: string;
          module_code?: string | null;
          tags?: string[];
          views?: number;
          helpful_yes?: number;
          helpful_no?: number;
          is_published?: boolean;
          is_featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      submitted_questions: {
        Row: {
          id: string;
          question: string;
          category: string | null;
          email: string | null;
          status: "pending" | "reviewed" | "published" | "rejected";
          created_at: string;
        };
        Insert: {
          id?: string;
          question: string;
          category?: string | null;
          email?: string | null;
          status?: "pending" | "reviewed" | "published" | "rejected";
          created_at?: string;
        };
        Update: {
          id?: string;
          question?: string;
          category?: string | null;
          email?: string | null;
          status?: "pending" | "reviewed" | "published" | "rejected";
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      increment_views: {
        Args: { question_id: string };
        Returns: void;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

export type Category = Database["public"]["Tables"]["categories"]["Row"];
export type Question = Database["public"]["Tables"]["questions"]["Row"];
export type SubmittedQuestion = Database["public"]["Tables"]["submitted_questions"]["Row"];
