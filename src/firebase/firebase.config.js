// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGBy1D5UH6tK6xP1V_NBwjJjJy7r3SkXw",
  authDomain: "eshoppers-bd.firebaseapp.com",
  projectId: "eshoppers-bd",
  storageBucket: "eshoppers-bd.appspot.com",
  messagingSenderId: "689805705754",
  appId: "1:689805705754:web:a50c3e6297bad73bf3c7a3",
  measurementId: "G-NFQYWW4HTG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
