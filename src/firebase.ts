import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu-SxjRbQaYeTXsQ2akmTcLtNAJ7UdgA8",
  authDomain: "chess-80445.firebaseapp.com",
  projectId: "chess-80445",
  storageBucket: "chess-80445.appspot.com",
  messagingSenderId: "339615289505",
  appId: "1:339615289505:web:9f2788fc0654767a5c20e0",
  measurementId: "G-08H6X05C5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);