// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC82XQBMyBq27ZXH0rrKQpVffIN9mDYVlU",
  authDomain: "netflix-368fc.firebaseapp.com",
  projectId: "netflix-368fc",
  storageBucket: "netflix-368fc.appspot.com",
  messagingSenderId: "584953009189",
  appId: "1:584953009189:web:353be9c788a41010d11bcc",
  measurementId: "G-CPFXHB5GFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();