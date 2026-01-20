# Vercel Deployment Instructions

## Environment Variables Setup

In your Vercel project settings, add these environment variables:

### Required Variables:
```
NEXT_PUBLIC_SUPABASE_URL=https://cvdqankppairfnwgrufj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2ZHFhbmtwcGFpcmZud2dydWZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0NzE3MDgsImV4cCI6MjA4MzA0NzcwOH0.S6zD1tgjFQla3LX3Wdn_8-z1v9eOZlRcYtw_Kkgh1xY
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2ZHFhbmtwcGFpcmZud2dydWZqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NzQ3MTcwOCwiZXhwIjoyMDgzMDQ3NzA4fQ.UmYQ7j9JzLEw66_x8uUsTPwq5F4HEBGRT63YwfUnV3M
```

### Optional Variables (leave empty if not using):
```
RESEND_API_KEY=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

## Notes:
- The app will build successfully even without Resend and Firebase credentials
- Email features will be disabled if RESEND_API_KEY is not provided
- Firebase auth features will be disabled if Firebase credentials are not provided
- Only Supabase is required for the app to function
