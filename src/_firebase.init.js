// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhFXLck3ODhWLbwhkaJ5vMYRUp73AvgJU",
  authDomain: "assignment12-9398a.firebaseapp.com",
  projectId: "assignment12-9398a",
  storageBucket: "assignment12-9398a.appspot.com",
  messagingSenderId: "1055888000196",
  appId: "1:1055888000196:web:a1b0e40eba0a3832d27591",
  measurementId: "G-WL2M5V29K2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth;