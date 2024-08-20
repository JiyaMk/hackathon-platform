// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUaMZgrQL1AXFuf2jXFOk1aj3qeEK9Ghk",
  authDomain: "hackathon-scoring-system.firebaseapp.com",
  projectId: "hackathon-scoring-system",
  storageBucket: "hackathon-scoring-system.appspot.com",
  messagingSenderId: "318578633797",
  appId: "1:318578633797:web:e582328fa8a1eef481072c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };