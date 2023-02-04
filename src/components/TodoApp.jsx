import "../App.css";
import React, { useState, useEffect } from "react";
import { List, FormControl, InputLabel, Input, Button ,Typography} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import Todo from "./Todo.js";
import {db} from "../firebaseApp";
import { collection, onSnapshot,query,orderBy } from "firebase/firestore";
import { addTodo } from './util.js'
import FormDialogDelete from './FormDialogDelete'
import { Logout } from "./Logout";



function TodoApp({token}) {
  const [todos, setTodos] = useState([{ todo: "...Loding", id: "initial", done: false }]);//objektummal inicializájuk,az attribútok megegyeznek firebase dokumentumban attribútumokkal
  const [input, setInput] = useState("");

  const add=(input)=>{
    addTodo(input)
    setInput('')
  }

  useEffect(() =>{
    if (!token) return; // signed out
    const collectionRef=collection(db, "todos");
    const q=query(collectionRef,orderBy('timestamp','desc'))
    const unsubscribe=onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))//egy olyan objektumunk lesz amelynek megvan minden 
      return unsubscribe;
      })
    }, []); //egyszer fut le amikor betöltődik a komponens

   
  return (
    <div className="App mt-5">
      <h1>My todos</h1>
      <Logout />
      <div className="box">
        <FormControl variant="filled"  >
          <div className="form">
            <InputLabel><CreateIcon /> Write a todo:</InputLabel>
            <Input sx={{ m: 1, width: '100%' }} values={input} onChange={(e) => setInput(e.target.value)} />
            <Typography align='center'><Button  disabled={!input} type="submit" onClick={() => add(input)} variant="contained" >add todo</Button></Typography>
         </div>
          <FormDialogDelete />
        </FormControl>
      </div>
      <List>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo.todo} done={todo.done} />
        ))}
      </List>
    </div>
  );
}

export default TodoApp;
