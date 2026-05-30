import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBipS-tKVJz_aI6dz-KlqB1IShVJbYhDLc",
  authDomain: "prosun-auth-as9.firebaseapp.com",
  projectId: "prosun-auth-as9",
  storageBucket: "prosun-auth-as9.firebasestorage.app",
  messagingSenderId: "266165110055",
  appId: "1:266165110055:web:d98d946de3b19d358a1502",
};

const app = initializeApp(firebaseConfig);
export default app;
