import React,{useRef,useState} from "react";
import { FormControl, Button ,Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import {createUserWithEmailAndPassword ,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../firebaseApp'

function Login2(){
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
    
        <FormControl  className="border shadow" >
        <div>Bejelentkezve:{user?.email}</div>
          <div className="form border p-3">
            <input  className="p-2 mb-2 form-control" placeholder="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input className="p-2 form-control" placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <Button disabled={user} onClick={register}   variant="contained" ><AppRegistrationIcon/></Button>
            <Button disabled={!user} onClick={logout}   variant="contained" ><LogoutIcon /></Button>
            <Button disabled={user} onClick={login}   variant="contained" ><LoginIcon/></Button>
         </div>
        
        </FormControl>
   
   
    );
  }

export default Login2;
