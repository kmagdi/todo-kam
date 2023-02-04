import React,{useState} from 'react'
import './App.css';

import Login from './components/Login';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from './firebaseApp'
import TodoApp from './components/TodoApp';


function App() {
  const [token, setToken] = useState();

  onAuthStateChanged(auth,(currentUser)=>setToken(currentUser))

  if(!token) {
    return <Login setToken={setToken} />
  }else
    return (
      <div className="wrapper">
       <TodoApp token={token} />
        </div>
    );
  }

export default App;