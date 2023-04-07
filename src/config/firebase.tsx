// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALlqp4pTSWyEyC-il3Q90YeZgg3e0YvoE",
  authDomain: "room-management-837a6.firebaseapp.com",
  projectId: "room-management-837a6",
  storageBucket: "room-management-837a6.appspot.com",
  messagingSenderId: "437715164716",
  appId: "1:437715164716:web:b5043911298c893484fb89",
  measurementId: "G-VQXD5SWD4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);