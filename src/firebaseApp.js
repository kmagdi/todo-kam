
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnXqiQ3mKAXZiKQCkhhoj__7coZ1g6D3E",
    authDomain: "todo-kam.firebaseapp.com",
    projectId: "todo-kam",
    storageBucket: "todo-kam.appspot.com",
    messagingSenderId: "174593644819",
    appId: "1:174593644819:web:f6b019aaf43bd9b2cfe2e6",
    measurementId: "G-QF372Z0WYW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;