# Firebase Setup Guide

## 1. Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name (e.g., "thenume-spa")
4. Enable Google Analytics (optional)
5. Click "Create project"

## 2. Enable Firestore Database
1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users
5. Click "Done"

## 3. Update Firestore Security Rules (IMPORTANT!)
1. In Firestore Database, go to "Rules" tab
2. Replace the existing rules with:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read and write access to all documents for development
    // WARNING: These rules allow anyone to read and write to your database
    // Make sure to update these rules before going to production
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

3. Click "Publish" to save the rules

## 4. Get Firebase Configuration
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Web" icon (</>) to add a web app
4. Register your app with a nickname
5. Copy the configuration object

## 5. Update Environment Variables
Replace the placeholder values in `.env.local` with your actual Firebase config:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_actual_app_id
```

## 6. Firestore Collections Structure

The app will automatically create these collections:

### bookings
- userId (string, optional)
- serviceId (string)
- serviceName (string)
- date (string, YYYY-MM-DD format)
- time (string)
- fullName (string)
- email (string)
- phone (string)
- status (string, default: "pending")
- createdAt (string, ISO timestamp)

### timeSlots
- date (string, YYYY-MM-DD format)
- time (string)
- available (boolean)
- bookedBy (string, booking document ID)
- updatedAt (string, ISO timestamp)

## 7. Production Security Rules (For Later)
When ready for production, update the rules to:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to bookings for authenticated users
    match /bookings/{document} {
      allow read, write: if request.auth != null;
    }
    
    // Allow read access to timeSlots for everyone
    match /timeSlots/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 8. Test the Setup
1. Update your `.env.local` with real Firebase credentials
2. Update Firestore security rules as shown above
3. Run `npm run dev`
4. Try making a booking to test the connection