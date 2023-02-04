import React from 'react'
import { Button } from "@mui/material";
import {signOut} from "firebase/auth";
import {auth} from '../firebaseApp'
import LogoutIcon from '@mui/icons-material/Logout';

export const Logout=()=> {

    const logout=async ()=>{
        await signOut(auth) 
       
    }

  return (
    <div>
       <div className="text-right m-1">

        <Button onClick={logout}   variant="contained" ><LogoutIcon /></Button>
       
    </div>
     
    </div>
  )
}
