//import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { collection, doc, getDoc,setDoc } from "firebase/firestore"; 
import db from './firebaseApp'
///////////////////////////////////////////////////////////////
const docRef = doc(db, "todos", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}


///////////////////
const fetchTodos=async()=>{
    const docRef = doc(db, "todos", "SF");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  //////////////////
  const query = onSnapshot(doc(db, "todos", "SF"), (doc) => {
    console.log("Current data: ", doc.data());
  });