// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMwQxe6rK44Taj7wZZeYzjOkhbRKRB2_o",
  authDomain: "dashboard-458b1.firebaseapp.com",
  projectId: "dashboard-458b1",
  storageBucket: "dashboard-458b1.appspot.com",
  messagingSenderId: "234586557544",
  appId: "1:234586557544:web:20dc1e56d109d90176bfdd",
  measurementId: "G-ZDZVM6WCLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
