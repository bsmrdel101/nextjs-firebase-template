// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALpVBkMYjJLfIAZuLWsyCanmVZMHuIXLw",
  authDomain: "next-test-bcb75.firebaseapp.com",
  projectId: "next-test-bcb75",
  storageBucket: "next-test-bcb75.appspot.com",
  messagingSenderId: "420906739826",
  appId: "1:420906739826:web:ae209ec512e7ea9466faeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const URL = 'https://firestore.googleapis.com/v1/projects/next-test-bcb75/databases/(default)/documents';
