import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCIJ9T0Uz1Lbqs6jj9tNwGx5LKVk9q-DSU",
  authDomain: "fundizen-1.firebaseapp.com",
  projectId: "fundizen-1",
  storageBucket: "fundizen-1.firebasestorage.app",
  messagingSenderId: "797435164277",
  appId: "1:797435164277:android:08c1802c10892510a1aa3c"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const db = getFirestore(FIREBASE_APP);
