-- Simple revert: just add the new columns and table without touching existing policies

-- Update services table structure
ALTER TABLE public.services 
ADD COLUMN IF NOT EXISTS price_display TEXT,
ADD COLUMN IF NOT EXISTS benefits TEXT[],
ADD COLUMN IF NOT EXISTS details TEXT[],
ADD COLUMN IF NOT EXISTS sessions TEXT,
ADD COLUMN IF NOT EXISTS results TEXT,
ADD COLUMN IF NOT EXISTS areas TEXT[],
ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Create service_booking_options table
CREATE TABLE IF NOT EXISTS public.service_booking_options (
  id TEXT PRIMARY KEY,
  service_id TEXT REFERENCES public.services(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  duration TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on new table
ALTER TABLE public.service_booking_options ENABLE ROW LEVEL SECURITY;

-- Create simple policies for service_booking_options
CREATE POLICY "Anyone can view service booking options" ON public.service_booking_options FOR SELECT USING (true);
CREATE POLICY "Anyone can manage service booking options" ON public.service_booking_options FOR ALL USING (true);