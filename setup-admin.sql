-- Create default admin user
-- Run this in your Supabase SQL Editor

-- First, create the admin user in auth.users (you'll need to do this via Supabase Auth UI or API)
-- Email: admin@thenume.co.za
-- Password: Admin123!

-- Then run this SQL to set up the profile:
INSERT INTO public.profiles (id, full_name, phone, role)
VALUES (
  -- Replace this UUID with the actual user ID from auth.users after creating the user
  '00000000-0000-0000-0000-000000000000',
  'Admin User',
  '+27123456789',
  'admin'
);

-- Alternative: Update existing user to admin
-- UPDATE public.profiles SET role = 'admin' WHERE email = 'your-email@example.com';