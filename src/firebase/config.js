
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgeWXc6F0FwFv7tCNGQSyYMIp0HXpVLQQ",
  authDomain: "funkoshop-a850f.firebaseapp.com",
  projectId: "funkoshop-a850f",
  storageBucket: "funkoshop-a850f.appspot.com",
  messagingSenderId: "647595345121",
  appId: "1:647595345121:web:2c710ddd9a55412512e3a0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);