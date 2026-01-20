# Supabase Setup Instructions for TheNumé

## 1. Create Supabase Account
- Go to https://supabase.com
- Sign up for a free account
- Create a new project (choose a region close to South Africa)

## 2. Get Your Credentials
After project is created:
- Go to Project Settings > API
- Copy your **Project URL** 
- Copy your **anon/public key**
- Copy your **service_role key** (keep this secret!)

## 3. Update Environment Variables
Edit `.env.local` file and add your credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## 4. Create Database Tables
- In Supabase Dashboard, go to SQL Editor
- Copy the entire content from `supabase-schema.sql`
- Paste and run it in the SQL Editor
- This creates all tables, policies, and indexes

## 5. Install Supabase Package
Run in your terminal:
```bash
npm install @supabase/supabase-js
```

## 6. Deploy to Vercel
- Push your code to GitHub
- In Vercel dashboard, go to your project settings
- Add the same environment variables from `.env.local`
- Redeploy your site

## 7. Test the Booking System
- Go to your website
- Try making a booking
- Check Supabase Dashboard > Table Editor > bookings to see the data

## Features Now Available:
✅ Complete booking system with database storage
✅ User account creation (optional)
✅ Time slot management
✅ Booking history
✅ Admin can view all bookings in Supabase dashboard

## Next Steps (Optional):
- Set up email notifications using Supabase Edge Functions
- Create admin dashboard to manage bookings
- Add calendar integration
- Set up automated reminders

## Viewing Bookings:
Go to Supabase Dashboard > Table Editor > bookings
You'll see all booking details including:
- Customer name, email, phone
- Service booked
- Date and time
- Booking status

## Managing Services:
You can add/edit services directly in Supabase:
- Go to Table Editor > services
- Add new services or update existing ones
- Changes reflect immediately on your website
