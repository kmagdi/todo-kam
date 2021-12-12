import React,{useState} from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoApp from './components/TodoApp';
import Preferences from './components/Preferences';
import Login from './components/Login';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from './firebaseApp'
import NavigationBar from './components/NavigationBar';

function App() {
  const [token, setToken] = useState();

  onAuthStateChanged(auth,(currentUser)=>setToken(currentUser))

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
      <NavigationBar></NavigationBar>
        <Routes>
           {/* <Route exact path="/" element={<Home />} />*/}
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/todoapp" element={<TodoApp />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;