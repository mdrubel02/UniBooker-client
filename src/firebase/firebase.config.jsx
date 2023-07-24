// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcVy4LFUcGC1sBDIQKJ9eIEziXgOH0PHI",
  authDomain: "uni-booker.firebaseapp.com",
  projectId: "uni-booker",
  storageBucket: "uni-booker.appspot.com",
  messagingSenderId: "788372574007",
  appId: "1:788372574007:web:b7f72bf431f037bd1814b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;