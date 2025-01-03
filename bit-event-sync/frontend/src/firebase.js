// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Import authentication functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH_UEvH-aSd5QPo2buNKGAuVMUCfnQpho",
  authDomain: "eventsync-1518e.firebaseapp.com",
  projectId: "eventsync-1518e",
  storageBucket: "eventsync-1518e.appspot.com",
  messagingSenderId: "800227242064",
  appId: "1:800227242064:web:0c698df622e32660702155",
  measurementId: "G-ZCX0235VS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Set up authentication
const provider = new GoogleAuthProvider(); // Google Auth Provider

// Function to handle Google sign-in
const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

// Export `auth` and `signInWithGoogle` for use in other files
export { auth, signInWithGoogle };
