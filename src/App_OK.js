import "./App.css";
import React, { useState, useEffect } from "react";
import { List, FormControl, InputLabel, Input, Button ,Typography} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import Todo from "./components/Todo.js";
import {db} from "./firebaseApp";
import { collection, onSnapshot,query,orderBy } from "firebase/firestore";
import { addTodo } from './components/util.js'
import FormDialogDelete from './components/FormDialogDelete'
import Login from './components/Login'



function App() {
  const [todos, setTodos] = useState([{ todo: "...Loding", id: "initial", done: false }]);//objektummal inicializájuk,az attribútok megegyeznek firebase dokumentumban attribútumokkal
  const [input, setInput] = useState("");

  const add=(input)=>{
    addTodo(input)
    setInput('')
  }

  useEffect(() =>{
    const collectionRef=collection(db, "todos");
    const q=query(collectionRef,orderBy('timestamp','desc'))
    const unsubscribe=onSnapshot(q, (snapshot) => {
      //console.log(snapshot)
      //console.log(snapshot.docs)
      //console.log(snapshot.docs.map(doc=>doc.data()))
      //console.log(snapshot.docs.map((doc) => doc.data().todo));
      //setTodos(snapshot.docs.map((doc) => doc.data().todo))//szükségünk van az azonosítóra is
      setTodos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))//egy olyan objektumunk lesz amelynek megvan minden 
      //attribútuma ami a firebaseből kiolvasodik és még kiegészítjük egy id attributummal, szükség lesz a rá a renderelésnél
      return unsubscribe;
      })
    }, []); //egyszer fut le amikor betöltődik a komponens

  return (
    <div className="App">
      <h1>My todos</h1>
      <Login/>
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

export default App;
