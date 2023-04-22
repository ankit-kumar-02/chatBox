import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACUih9qFmfhAf8AX3i0ZOyK_qfgudWvBY",
  authDomain: "chat-7ec13.firebaseapp.com",
  projectId: "chat-7ec13",
  storageBucket: "chat-7ec13.appspot.com",
  messagingSenderId: "153250879422",
  appId: "1:153250879422:web:7ed58b65058b2f97310bef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
