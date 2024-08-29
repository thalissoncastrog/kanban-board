// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiFwKDCyPjUaTKZYx_LgIJ68RCUxLanFc",
  authDomain: "kanban-board-eda00.firebaseapp.com",
  projectId: "kanban-board-eda00",
  storageBucket: "kanban-board-eda00.appspot.com",
  messagingSenderId: "323134275034",
  appId: "1:323134275034:web:060d6d4339641e540794e3",
  measurementId: "G-C1ZQP8XTTP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
