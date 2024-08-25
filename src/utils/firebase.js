// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8-0GW7B2uRtgTa4Tn2Ffcl27Hm13mxGw",
  authDomain: "cinemaquest-483e2.firebaseapp.com",
  projectId: "cinemaquest-483e2",
  storageBucket: "cinemaquest-483e2.appspot.com",
  messagingSenderId: "711383178737",
  appId: "1:711383178737:web:b10b27ac8263e0ee8df850",
  measurementId: "G-6SK8NT0PQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();