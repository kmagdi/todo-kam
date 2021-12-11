import React,{useState} from "react";
import { FormControl,Input, Button ,Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import {createUserWithEmailAndPassword ,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../firebaseApp'

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
    
        <FormControl  sx={{ m: 2,p:2,border:1,borderColor: 'primary.main' }} >
        <div>Bejelentkezve:{user?.email}</div>
          <div >
             <Input  sx={{ mb: 1 }} placeholder="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
        </div>
        <div>
            <Input sx={{ mb: 1 }} placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
            <Button disabled={user} onClick={register}   variant="contained" ><AppRegistrationIcon/></Button>
            <Button disabled={!user} onClick={logout}   variant="contained" ><LogoutIcon /></Button>
            <Button disabled={user} onClick={login}   variant="contained" ><LoginIcon/></Button>
        </div>
         
        
        </FormControl>
   
   
    );
  }

export default Login;
