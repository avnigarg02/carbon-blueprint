// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIj2s-NrhbXWEPJKmBvPTIar-4e2l6ilM",
  authDomain: "carbon-calc-app.firebaseapp.com",
  databaseURL: "https://carbon-calc-app-default-rtdb.firebaseio.com",
  projectId: "carbon-calc-app",
  storageBucket: "carbon-calc-app.appspot.com",
  messagingSenderId: "981183053670",
  appId: "1:981183053670:web:c424d40ffcfc9d857892a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
 
export default database;