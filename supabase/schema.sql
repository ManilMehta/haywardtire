-- Hayward Tire — Coupons Table
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor > New Query)

CREATE TABLE coupons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  discount TEXT NOT NULL,
  valid_until DATE NOT NULL,
  code TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Row Level Security
ALTER TABLE coupons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read active coupons"
  ON coupons FOR SELECT
  USING (is_active = true);

CREATE POLICY "Service role has full access"
  ON coupons FOR ALL
  USING (auth.role() = 'service_role');

-- Auto-update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER coupons_updated_at
  BEFORE UPDATE ON coupons
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Seed default coupons
INSERT INTO coupons (title, description, discount, valid_until, code) VALUES
  ('New Tire Special', 'Save on a set of 4 new tires. Any brand, any size.', '$50 OFF', '2026-06-30', 'TIRES50'),
  ('Brake Service Deal', 'Complete brake pad replacement for front or rear axle.', '$25 OFF', '2026-06-30', 'BRAKES25'),
  ('Free Flat Repair', 'Complimentary tire puncture repair on your first visit.', 'FREE', '2026-06-30', 'FLATFREE');
