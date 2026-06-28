// Add Demo Data Script
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, Timestamp } = require('firebase/firestore');
require('dotenv').config({ path: '.env.local' });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

async function addDemoData() {
  console.log('🔧 Initializing Firebase...');
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  try {
    console.log('📝 Adding demo appointments...');

    // Demo Appointments
    const appointments = [
      {
        name: "Sana Ahmed",
        email: "sana.ahmed@example.com",
        phone: "+92 300 1234567",
        serviceName: "Hydra Facial",
        date: "2026-07-02",
        timeSlot: "10:00 AM",
        status: "confirmed",
        notes: "First time treatment, excited to try hydra facial",
        createdAt: Timestamp.fromDate(new Date('2026-06-25'))
      },
      {
        name: "Maria Khan",
        email: "maria.khan@example.com",
        phone: "+92 321 9876543",
        serviceName: "Laser Hair Removal",
        date: "2026-07-03",
        timeSlot: "2:00 PM",
        status: "pending",
        notes: "Want laser treatment for underarms",
        createdAt: Timestamp.fromDate(new Date('2026-06-26'))
      },
      {
        name: "Hina Tariq",
        email: "hina.tariq@example.com",
        phone: "+92 333 4567890",
        serviceName: "Acne Treatment",
        date: "2026-07-05",
        timeSlot: "11:00 AM",
        status: "confirmed",
        notes: "Struggling with acne for 2 years, need professional help",
        createdAt: Timestamp.fromDate(new Date('2026-06-27'))
      },
      {
        name: "Zainab Malik",
        email: "zainab.malik@example.com",
        phone: "+92 345 1122334",
        serviceName: "PRP Microneedling",
        date: "2026-06-30",
        timeSlot: "3:00 PM",
        status: "confirmed",
        notes: "Interested in anti-aging treatment",
        createdAt: Timestamp.fromDate(new Date('2026-06-23'))
      },
      {
        name: "Ayesha Raza",
        email: "ayesha.raza@example.com",
        phone: "+92 301 5566778",
        serviceName: "Dermatology Consultation",
        date: "2026-07-01",
        timeSlot: "12:00 PM",
        status: "confirmed",
        notes: "Skin consultation for pigmentation issues",
        createdAt: Timestamp.fromDate(new Date('2026-06-24'))
      }
    ];

    for (const apt of appointments) {
      await addDoc(collection(db, 'appointments'), apt);
      console.log(`✅ Added appointment for ${apt.name}`);
    }

    console.log('\n📧 Adding demo contact messages...');

    // Demo Contact Messages
    const messages = [
      {
        name: "Nida Hassan",
        email: "nida.h@example.com",
        phone: "+92 312 9988776",
        message: "Hi, I'm interested in skin brightening treatment. What are the available options and cost? Can I schedule a consultation with Dr. Farah?",
        read: false,
        createdAt: Timestamp.fromDate(new Date('2026-06-27'))
      },
      {
        name: "Rabia Farooq",
        email: "rabia.f@example.com",
        phone: "+92 334 7766554",
        message: "Do you offer chemical peels for acne scars? I have some stubborn acne marks that I want to get rid of.",
        read: true,
        createdAt: Timestamp.fromDate(new Date('2026-06-26'))
      },
      {
        name: "Maham Sheikh",
        email: "maham.sheikh@example.com",
        phone: "+92 300 4455667",
        message: "I would like to know more about your laser hair removal packages. What are the prices and how many sessions are required?",
        read: false,
        createdAt: Timestamp.fromDate(new Date('2026-06-28'))
      }
    ];

    for (const msg of messages) {
      await addDoc(collection(db, 'contactMessages'), msg);
      console.log(`✅ Added message from ${msg.name}`);
    }

    console.log('\n🎉 Demo data added successfully!\n');
    console.log('Visit your admin dashboard to see the data:');
    console.log('https://dentist-platform-six.vercel.app/admin/login\n');
    console.log('Note: This deployed to the same Vercel URL but with skincare content.');

    process.exit(0);

  } catch (error) {
    console.error('❌ Error adding demo data:', error.message);
    process.exit(1);
  }
}

addDemoData();
