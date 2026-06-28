// Set Admin Role Script
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');
require('dotenv').config({ path: '.env.local' });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const USER_UID = 'w6mESD9fTXWmwOhQyqdPabUzjgA2';

async function setAdminRole() {
  console.log('🔧 Initializing Firebase...');
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  try {
    console.log(`📝 Setting admin role for UID: ${USER_UID}`);

    await setDoc(doc(db, 'users', USER_UID), {
      email: 'admin@goldencrown.com',
      role: 'admin',
      createdAt: new Date().toISOString(),
      displayName: 'Golden Crown Admin'
    });

    console.log('✅ Admin role set successfully!');
    console.log('\n🎉 Admin account is ready!\n');
    console.log('Login Credentials:');
    console.log('  Email: admin@goldencrown.com');
    console.log('  Password: GoldenCrown2026!');
    console.log('\nLogin at: https://dentist-platform-six.vercel.app/admin/login');

    process.exit(0);

  } catch (error) {
    console.error('❌ Error setting admin role:', error.message);
    process.exit(1);
  }
}

setAdminRole();
