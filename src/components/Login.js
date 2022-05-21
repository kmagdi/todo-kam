import React,{useState} from "react";
import { FormControl,Input, Button ,Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import {createUserWithEmailAndPassword ,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../firebaseApp'
import './Login.css'

function Login(){
    const [email, setEmail]=useState('')
    const [password,setPassword]=useState('')
   
    const [user,setUser]=useState({})

    
    onAuthStateChanged(auth,(currentUser)=>setUser(currentUser))
   
    const register=async ()=>{
        try{
            const user=await createUserWithEmailAndPassword(auth,email,password)
        }catch(err){
            console.log(err.message)
        }
    }
    const login=async ()=>{
        try{
            const user=await signInWithEmailAndPassword(auth,email,password)
        }catch(err){
            console.log(err.message)
        }
    }
    const logout=async ()=>{
        await signOut(auth) 
        setEmail('')
        setPassword('')
        
    }

      return (
        <div className="login-back"> 
        <div className="login ">
        <h3 >🍀🌸KAM's todo list🌸🍀</h3>
        <FormControl  sx={{ m: 2,p:2,border:1,borderColor: 'white' }} className="form">
        <div className="m-2"><small>Bejelentkezve:</small>{user?.email}</div>
          <div className="text-center">
             <Input  sx={{ mb: 1 }} placeholder="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
        </div>
        <div className="text-center">
            <Input sx={{ mb: 1 }} placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="text-center">
            <Button disabled onClick={register}   variant="contained" ><AppRegistrationIcon/></Button>
            <Button disabled={!user} onClick={logout}   variant="contained" ><LogoutIcon /></Button>
            <Button disabled={user} onClick={login}   variant="contained" ><LoginIcon/></Button>
        </div>
         
        
        </FormControl>
    </div>
    </div>
    );
  }

export default Login;
