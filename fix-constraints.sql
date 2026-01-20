-- Fix the price column constraint before populating
ALTER TABLE public.services ALTER COLUMN price DROP NOT NULL;
ALTER TABLE public.services ALTER COLUMN duration DROP NOT NULL;