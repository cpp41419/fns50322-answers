-- FNS50322 Answers Platform Database Schema
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
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
CREATE TABLE IF NOT EXISTS questions (
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
CREATE TABLE IF NOT EXISTS submitted_questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question TEXT NOT NULL,
  category TEXT,
  email TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'published', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_questions_category ON questions(category_id);
CREATE INDEX IF NOT EXISTS idx_questions_slug ON questions(slug);
CREATE INDEX IF NOT EXISTS idx_questions_published ON questions(is_published);
CREATE INDEX IF NOT EXISTS idx_questions_featured ON questions(is_featured);
CREATE INDEX IF NOT EXISTS idx_questions_views ON questions(views DESC);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);

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
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role has full access to questions" ON questions
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role has full access to submitted_questions" ON submitted_questions
  FOR ALL USING (auth.role() = 'service_role');
