// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-hh8fcx8aeTwIgaSW4i-K0Ko57Zlc0s8",
  authDomain: "eurovision-scorecards.firebaseapp.com",
  projectId: "eurovision-scorecards",
  storageBucket: "eurovision-scorecards.appspot.com",
  messagingSenderId: "575750979046",
  appId: "1:575750979046:web:cca0652f42a728b4da6a27",
  measurementId: "G-KG2R9E2R9N"
};

// Initialize Firebase

export function initFirebase() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return {app, analytics};
}
