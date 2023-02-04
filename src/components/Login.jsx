import React,{useState,useEffect} from "react";
import { FormControl,Input, Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';


import {onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../firebaseApp'
import './Login.css'

function Login(){
    const [email, setEmail]=useState('')
    const [password,setPassword]=useState('')
   
    const [user,setUser]=useState({})

    // onAuthStateChanged(auth,(currentUser)=>setUser(currentUser))

      
    const login=async ()=>{
        try{
            const user=await signInWithEmailAndPassword(auth,email,password)
    
        }catch(err){
            console.log(err.message)
        }
    }
        console.log("user:",user)    
      return (
        <div className="login-back"> 
        <div className="login ">
        <h3 >🍀🌸KAM's todo list🌸🍀</h3>
        <FormControl  sx={{ m: 2,p:2}} className="form">
        <div className="m-2"><small>Bejelentkezve:</small>{user?.email}</div>
          <div className="text-center">
             <Input  sx={{ mb: 1 }} placeholder="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
        </div>
        </FormControl>
        <FormControl>
        <div className="text-center">
            <Input sx={{ mb: 1 }} placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="text-center">
            <Button onClick={login}   variant="contained" ><LoginIcon/></Button>
        </div>
         
        </FormControl>
        
    </div>
  

    </div>
    );
  }

export default Login;
