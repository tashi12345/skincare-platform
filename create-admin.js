// Create Admin User Script
// Run with: node create-admin.js

const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');
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

const ADMIN_EMAIL = 'admin@goldencrown.com';
const ADMIN_PASSWORD = 'GoldenCrown2026!';

async function createAdmin() {
  console.log('🔧 Initializing Firebase...');
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  try {
    console.log(`📧 Creating admin user: ${ADMIN_EMAIL}`);

    // Create user with email/password
    const userCredential = await createUserWithEmailAndPassword(auth, ADMIN_EMAIL, ADMIN_PASSWORD);
    const user = userCredential.user;

    console.log(`✅ User created with UID: ${user.uid}`);

    // Add user document to Firestore with admin role
    await setDoc(doc(db, 'users', user.uid), {
      email: ADMIN_EMAIL,
      role: 'admin',
      createdAt: new Date().toISOString(),
      displayName: 'Golden Crown Admin'
    });

    console.log('✅ Admin role assigned in Firestore');
    console.log('\n🎉 Admin account created successfully!\n');
    console.log('Login Credentials:');
    console.log(`  Email: ${ADMIN_EMAIL}`);
    console.log(`  Password: ${ADMIN_PASSWORD}`);
    console.log('\nLogin at: https://dentist-platform-six.vercel.app/admin/login');

    process.exit(0);

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('⚠️  Admin user already exists!');
      console.log('\nLogin Credentials:');
      console.log(`  Email: ${ADMIN_EMAIL}`);
      console.log(`  Password: ${ADMIN_PASSWORD}`);
      console.log('\nLogin at: https://dentist-platform-six.vercel.app/admin/login');
    } else {
      console.error('❌ Error creating admin:', error.message);
    }
    process.exit(1);
  }
}

createAdmin();
