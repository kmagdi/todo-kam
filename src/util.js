//a backend kölünválasztva
import db from "./firebaseApp";
import {collection, addDoc,setDoc,doc,deleteDoc,query,where,getDocs } from "firebase/firestore";

export const addTodo =async (input) => {
    console.log('input:',input)
    const collectionRef= collection(db, "todos");
    const newItem={'todo':input}
    const newDocRef=await addDoc(collectionRef,newItem)
    console.log("az új documentum azonosítója:",newDocRef.id)
  };

  export const updateTodo=async (id)=>{
    console.log('id:',id)
    const docRef= doc(db, "todos", id);
    const todo=prompt("Írd be mire legyen átírva:")
    setDoc(docRef, {id,todo})
  }
  export const editTodo=async (id,todo)=>{
    console.log('editTodo - id:',id,todo)
    const docRef= doc(db, "todos", id);
    setDoc(docRef, {id,todo})
  }

  export const doneTodo=async (id)=>{
    console.log('id:',id)
  }

  export const deleteTodo=async (id)=>{
    console.log('id:',id)
    const docRef= doc(db, "todos", id);
    await deleteDoc(docRef)
  }
  
  export const queryDelete=async ()=>{
    const userInput=prompt("Mit szeretnél kitörölni? ")
    const collectionRef= collection(db, "todos");
    const q=query(collectionRef,where('todo','==',userInput))
    const snapshot= await getDocs(q)
    //console.log(snapshot)//ez egy objektum, de ebből csak a dokumentumokra van szükségünk
    const results=snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}))
    //console.log(results)//megvan itt az összes id, amit ki kell törölni, következhet a törlés:
    //API hivása mindig async kell hogy legyen:
    results.forEach(async result=>{
        const docRef=doc(db, "todos",result.id)
        await deleteDoc(docRef) 
        })
    } 
  