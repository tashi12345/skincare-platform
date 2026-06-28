// Simple script to check Firebase Auth configuration
const https = require('https');

const projectId = 'dentist-demo-2026';
const apiKey = 'AIzaSyAnAt2qm7Khn0ymGfyWNfVoXOIepNUjsXM';

console.log('Firebase Project:', projectId);
console.log('API Key configured:', apiKey ? 'Yes' : 'No');
console.log('\nTo enable Email/Password authentication:');
console.log('1. Visit: https://console.firebase.google.com/project/dentist-demo-2026/authentication/providers');
console.log('2. Click on "Email/Password" provider');
console.log('3. Enable it');
console.log('4. Save');
console.log('\nThen run the create-admin.js script again.');
