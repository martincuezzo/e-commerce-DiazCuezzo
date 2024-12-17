import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWSEMBKIesvHqYPT1MlpuZyTUEiCQC6pA",
  authDomain: "lafer-e9281.firebaseapp.com",
  projectId: "lafer-e9281",
  storageBucket: "lafer-e9281.firebasestorage.app",
  messagingSenderId: "640654499851",
  appId: "1:640654499851:web:f457d04b7d7cd916cf270e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)