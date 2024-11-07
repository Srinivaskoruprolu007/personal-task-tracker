import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "personal-task-tacker.firebaseapp.com",
  projectId: "personal-task-tacker",
  storageBucket: "personal-task-tacker.firebasestorage.app",
  messagingSenderId: "913700237978",
  appId: "1:913700237978:web:879d7553a8d634c5802523",
  measurementId: "G-C7D3PGY4DK",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
