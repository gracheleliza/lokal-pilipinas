// Import the Firebase functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore database
import { getAuth } from "firebase/auth"; // If you want authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD85vJMGYhv03gM0NxaTGKyht7jf72-Qjg",
  authDomain: "lokal-pilipinas.firebaseapp.com",
  projectId: "lokal-pilipinas",
  storageBucket: "lokal-pilipinas.firebasestorage.app",
  messagingSenderId: "754693896898",
  appId: "1:754693896898:web:4537fb3b1673aa2700595b",
  measurementId: "G-EB3BLK4RYG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore database
const auth = getAuth(app); // Authentication

export { db, auth };
