import React,{useState} from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './components/Home'
import TodoApp from './components/TodoApp';
import Preferences from './components/Preferences';
import Login from './components/Login';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from './firebaseApp'
import NavigationBar from './components/NavigationBar.jsx';

function App() {
  const [token, setToken] = useState();

  onAuthStateChanged(auth,(currentUser)=>setToken(currentUser))
/*
  if(!token) {
    return <Login setToken={setToken} />
  }*/

  return (
    <div className="wrapper">
      <BrowserRouter>
      <NavigationBar token={token}></NavigationBar>
        <Routes>
            <Route exact path="/" element={<Home msg=''/>} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/todoapp" element={token? <TodoApp /> : <Home msg="NEM vagy bejelentkezve!"/>} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;