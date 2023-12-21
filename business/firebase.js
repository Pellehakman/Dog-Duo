// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQOp1KL7bNRUJEHNkGNuV4CpXlI4n7VYs",
  authDomain: "my-paw-buddy-64b40.firebaseapp.com",
  projectId: "my-paw-buddy-64b40",
  storageBucket: "my-paw-buddy-64b40.appspot.com",
  messagingSenderId: "377614595421",
  appId: "1:377614595421:web:bdc973d605c92eb7e264b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
