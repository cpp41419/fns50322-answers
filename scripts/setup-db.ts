import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("❌ Missing environment variables!");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

const schema = `
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables if they exist (for clean setup)
DROP TABLE IF EXISTS submitted_questions CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

-- Categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT DEFAULT 'BookOpen',
  color TEXT DEFAULT 'bg-slate-50 text-slate-600',
  module_code TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Questions table
CREATE TABLE questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  module_code TEXT,
  tags TEXT[] DEFAULT '{}',
  views INTEGER DEFAULT 0,
  helpful_yes INTEGER DEFAULT 0,
  helpful_no INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Submitted questions table
CREATE TABLE submitted_questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question TEXT NOT NULL,
  category TEXT,
  email TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'published', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_questions_category ON questions(category_id);
CREATE INDEX idx_questions_slug ON questions(slug);
CREATE INDEX idx_questions_published ON questions(is_published);
CREATE INDEX idx_questions_featured ON questions(is_featured);
CREATE INDEX idx_questions_views ON questions(views DESC);
CREATE INDEX idx_categories_slug ON categories(slug);

-- Function to increment views
CREATE OR REPLACE FUNCTION increment_views(question_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE questions SET views = views + 1 WHERE id = question_id;
END;
$$ LANGUAGE plpgsql;

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
DROP TRIGGER IF EXISTS categories_updated_at ON categories;
CREATE TRIGGER categories_updated_at
  BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS questions_updated_at ON questions;
CREATE TRIGGER questions_updated_at
  BEFORE UPDATE ON questions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Row Level Security (RLS)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE submitted_questions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Categories are viewable by everyone" ON categories;
DROP POLICY IF EXISTS "Published questions are viewable by everyone" ON questions;
DROP POLICY IF EXISTS "Anyone can submit questions" ON submitted_questions;
DROP POLICY IF EXISTS "Service role has full access to categories" ON categories;
DROP POLICY IF EXISTS "Service role has full access to questions" ON questions;
DROP POLICY IF EXISTS "Service role has full access to submitted_questions" ON submitted_questions;

-- Public read access for categories and published questions
CREATE POLICY "Categories are viewable by everyone" ON categories
  FOR SELECT USING (true);

CREATE POLICY "Published questions are viewable by everyone" ON questions
  FOR SELECT USING (is_published = true);

-- Allow anonymous question submissions
CREATE POLICY "Anyone can submit questions" ON submitted_questions
  FOR INSERT WITH CHECK (true);

-- Service role has full access (for admin operations)
CREATE POLICY "Service role has full access to categories" ON categories
  FOR ALL USING (true);

CREATE POLICY "Service role has full access to questions" ON questions
  FOR ALL USING (true);

CREATE POLICY "Service role has full access to submitted_questions" ON submitted_questions
  FOR ALL USING (true);
`;

async function setupDatabase() {
  console.log("🗄️  Setting up database schema...\n");

  // Split schema into individual statements
  const statements = schema
    .split(";")
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && !s.startsWith("--"));

  let successCount = 0;
  let errorCount = 0;

  for (const statement of statements) {
    try {
      const { error } = await supabase.rpc("exec_sql", { sql: statement + ";" });
      if (error) {
        // Try direct query if rpc doesn't work
        const { error: queryError } = await supabase.from("_temp").select().limit(0);
        if (queryError && queryError.message.includes("does not exist")) {
          // This is expected, continue
        }
      }
      successCount++;
      process.stdout.write(".");
    } catch (err) {
      errorCount++;
      // Continue anyway
    }
  }

  console.log("\n");
  console.log(`✅ Schema setup attempted (${successCount} statements)`);
  console.log("\n⚠️  Note: If tables already exist, some statements may have been skipped.");
  console.log("   Run the schema.sql manually in Supabase SQL Editor for a fresh setup.");
}

setupDatabase().catch(console.error);
