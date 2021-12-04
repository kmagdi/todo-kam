import "./App.css";
import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Input, Button } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import Todo from "./Todo.js";
import db from "./firebaseApp";
import {collection, onSnapshot } from "firebase/firestore";
import {addTodo,queryDelete} from './util.js'


function App() {
  const [todos, setTodos] = useState([{todo:"...Loding",id:"initial"}]);//objektummal inicializájuk,az attribútok megegyeznek firebase dokumentumban attribútumokkal
  const [input, setInput] = useState("");

  useEffect(() =>
    onSnapshot(collection(db, "todos"), (snapshot) => {
      //console.log(snapshot)
      //console.log(snapshot.docs)
      //console.log(snapshot.docs.map(doc=>doc.data()))
      //console.log(snapshot.docs.map((doc) => doc.data().todo));
      //setTodos(snapshot.docs.map((doc) => doc.data().todo))//szükségünk van az azonosítóra is
      setTodos(snapshot.docs.map((doc) =>({...doc.data(), id:doc.id})))//egy olyan objektumunk lesz amelynek megvan minden 
      //attribútuma ami a firebaseből kiolvasodik és még kiegészítjük egy id attributummal, szükség lesz a rá a renderelésnél
  }), []); //egyszer fut le amikor betöltődik a komponens

  return (
    <div className="App">
      <h1>My todos</h1>
<div className="box">
      <FormControl variant="filled"  >
    <div className="form">
          <InputLabel><CreateIcon/> Write a todo:</InputLabel>
          <Input values={input} onChange={(e) => setInput(e.target.value)} />
          <Button disabled={!input} type="submit" onClick={()=>addTodo(input)} variant="contained" >add todo</Button>
          <Button  type="button" onClick={queryDelete} variant="contained" color="error" >query-delete</Button>
      </div>
      </FormControl>
 </div>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo.todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
