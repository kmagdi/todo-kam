import React from 'react';
import './Home.css'

export const  Home=(props)=>{
    return(
        <div className="home">
            {props.msg? <div className="alert">{props.msg}</div> : ''}
        </div>
    )
}