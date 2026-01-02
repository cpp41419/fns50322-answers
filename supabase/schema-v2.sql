-- FNS50322 Answers Platform - Extended Schema v2
-- Run this after the initial schema.sql

-- =====================================================
-- NEWSLETTER SUBSCRIBERS
-- =====================================================
DROP TABLE IF EXISTS newsletter_subscribers CASCADE;
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  source VARCHAR(50) DEFAULT 'website',
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_status ON newsletter_subscribers(status);

-- RLS for newsletter
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Service role can manage newsletter" ON newsletter_subscribers;
CREATE POLICY "Service role can manage newsletter" ON newsletter_subscribers
  FOR ALL USING (true);

-- =====================================================
-- RTOs (Training Providers)
-- =====================================================
DROP TABLE IF EXISTS rto_reviews CASCADE;
DROP TABLE IF EXISTS rtos CASCADE;
CREATE TABLE rtos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rto_code VARCHAR(10) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  website VARCHAR(255),
  logo_url VARCHAR(255),
  description TEXT,
  price_from INTEGER,
  price_to INTEGER,
  duration_min_months INTEGER,
  duration_max_months INTEGER,
  study_modes JSONB DEFAULT '[]',
  states JSONB DEFAULT '[]',
  vsl_approved BOOLEAN DEFAULT false,
  highlights JSONB DEFAULT '[]',
  contact_email VARCHAR(255),
  contact_phone VARCHAR(50),
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_rtos_code ON rtos(rto_code);
CREATE INDEX idx_rtos_featured ON rtos(is_featured);

-- RLS for RTOs
ALTER TABLE rtos ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "RTOs are publicly readable" ON rtos;
CREATE POLICY "RTOs are publicly readable" ON rtos
  FOR SELECT USING (is_active = true);

-- =====================================================
-- RTO REVIEWS
-- =====================================================
CREATE TABLE rto_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rto_id UUID REFERENCES rtos(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(255),
  review TEXT,
  pros JSONB DEFAULT '[]',
  cons JSONB DEFAULT '[]',
  verified BOOLEAN DEFAULT false,
  author_name VARCHAR(100),
  completion_year INTEGER,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_rto_reviews_rto ON rto_reviews(rto_id);
CREATE INDEX idx_rto_reviews_status ON rto_reviews(status);

-- RLS for reviews
ALTER TABLE rto_reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Approved reviews are publicly readable" ON rto_reviews;
CREATE POLICY "Approved reviews are publicly readable" ON rto_reviews
  FOR SELECT USING (status = 'approved');

-- =====================================================
-- AGGREGATORS
-- =====================================================
DROP TABLE IF EXISTS aggregators CASCADE;
CREATE TABLE aggregators (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  website VARCHAR(255),
  logo_url VARCHAR(255),
  description TEXT,
  upfront_split_min DECIMAL(5,2),
  upfront_split_max DECIMAL(5,2),
  trail_split_min DECIMAL(5,2),
  trail_split_max DECIMAL(5,2),
  panel_size INTEGER,
  monthly_fee DECIMAL(10,2),
  mentorship_program BOOLEAN DEFAULT false,
  new_broker_program BOOLEAN DEFAULT false,
  min_volume_required INTEGER,
  technology_platform VARCHAR(255),
  features JSONB DEFAULT '[]',
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_aggregators_slug ON aggregators(slug);
CREATE INDEX idx_aggregators_featured ON aggregators(is_featured);

-- RLS for aggregators
ALTER TABLE aggregators ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Aggregators are publicly readable" ON aggregators;
CREATE POLICY "Aggregators are publicly readable" ON aggregators
  FOR SELECT USING (is_active = true);

-- =====================================================
-- SUCCESS STORIES
-- =====================================================
DROP TABLE IF EXISTS success_stories CASCADE;
CREATE TABLE success_stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  author_name VARCHAR(100) NOT NULL,
  author_photo_url VARCHAR(255),
  previous_career VARCHAR(255),
  rto_name VARCHAR(255),
  aggregator_name VARCHAR(255),
  time_to_first_settlement VARCHAR(50),
  current_income_range VARCHAR(50),
  summary TEXT NOT NULL,
  story TEXT NOT NULL,
  key_lessons JSONB DEFAULT '[]',
  advice TEXT,
  location VARCHAR(100),
  specialisation VARCHAR(100),
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_success_stories_slug ON success_stories(slug);
CREATE INDEX idx_success_stories_featured ON success_stories(is_featured);
CREATE INDEX idx_success_stories_published ON success_stories(is_published);

-- RLS for success stories
ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Published stories are publicly readable" ON success_stories;
CREATE POLICY "Published stories are publicly readable" ON success_stories
  FOR SELECT USING (is_published = true);

-- =====================================================
-- SUCCESS STORY SUBMISSIONS
-- =====================================================
DROP TABLE IF EXISTS success_story_submissions CASCADE;
CREATE TABLE success_story_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(50),
  previous_career VARCHAR(255),
  rto_used VARCHAR(255),
  aggregator VARCHAR(255),
  time_to_first_settlement VARCHAR(50),
  income_range VARCHAR(50),
  story TEXT NOT NULL,
  key_lessons TEXT,
  advice TEXT,
  consent_publish BOOLEAN DEFAULT false,
  consent_contact BOOLEAN DEFAULT false,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'interviewed', 'published', 'declined')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_story_submissions_status ON success_story_submissions(status);

-- RLS
ALTER TABLE success_story_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Service role can manage submissions" ON success_story_submissions;
CREATE POLICY "Service role can manage submissions" ON success_story_submissions
  FOR ALL USING (true);

-- =====================================================
-- USER PATHWAYS (Career Tracking)
-- =====================================================
DROP TABLE IF EXISTS user_pathways CASCADE;
CREATE TABLE user_pathways (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL,
  name VARCHAR(100),
  current_stage VARCHAR(50) NOT NULL CHECK (current_stage IN (
    'researching', 'enrolled', 'studying', 'completed', 'job_hunting', 'working'
  )),
  target_completion DATE,
  selected_rto_id UUID REFERENCES rtos(id),
  selected_aggregator_id UUID REFERENCES aggregators(id),
  specialisation VARCHAR(100),
  location VARCHAR(100),
  milestones_completed JSONB DEFAULT '[]',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_pathways_email ON user_pathways(email);
CREATE INDEX idx_pathways_stage ON user_pathways(current_stage);

-- RLS
ALTER TABLE user_pathways ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage own pathways" ON user_pathways;
CREATE POLICY "Users can manage own pathways" ON user_pathways
  FOR ALL USING (true);

-- =====================================================
-- MENTORS
-- =====================================================
DROP TABLE IF EXISTS mentors CASCADE;
CREATE TABLE mentors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  photo_url VARCHAR(255),
  bio TEXT,
  years_experience INTEGER,
  specialisations JSONB DEFAULT '[]',
  location VARCHAR(100),
  aggregator VARCHAR(255),
  availability VARCHAR(255),
  mentoring_style TEXT,
  is_verified BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_mentors_verified ON mentors(is_verified);
CREATE INDEX idx_mentors_active ON mentors(is_active);

-- RLS
ALTER TABLE mentors ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Active mentors are publicly readable" ON mentors;
CREATE POLICY "Active mentors are publicly readable" ON mentors
  FOR SELECT USING (is_verified = true AND is_active = true);

-- =====================================================
-- VIEWS TRACKING
-- =====================================================
DROP TABLE IF EXISTS page_views CASCADE;
CREATE TABLE page_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  path VARCHAR(500) NOT NULL,
  referrer VARCHAR(500),
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_page_views_path ON page_views(path);
CREATE INDEX idx_page_views_created ON page_views(created_at);

-- =====================================================
-- TOOL USAGE TRACKING
-- =====================================================
DROP TABLE IF EXISTS tool_usage CASCADE;
CREATE TABLE tool_usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_name VARCHAR(100) NOT NULL,
  inputs JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_tool_usage_name ON tool_usage(tool_name);
CREATE INDEX idx_tool_usage_created ON tool_usage(created_at);

-- =====================================================
-- UPDATE TRIGGERS
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_rtos_updated_at BEFORE UPDATE ON rtos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_aggregators_updated_at BEFORE UPDATE ON aggregators
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_success_stories_updated_at BEFORE UPDATE ON success_stories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_pathways_updated_at BEFORE UPDATE ON user_pathways
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
