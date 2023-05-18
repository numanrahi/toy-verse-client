// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPRneuhb9NtzEY4eiSoPtXZHkowIi4dZc",
  authDomain: "toyverse-rahi.firebaseapp.com",
  projectId: "toyverse-rahi",
  storageBucket: "toyverse-rahi.appspot.com",
  messagingSenderId: "885189622541",
  appId: "1:885189622541:web:fe9d9500940310827b8e44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;