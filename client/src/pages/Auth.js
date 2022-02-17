import React, { useState } from 'react';
import Login from '../components/LoginForm';
import Register from '../components/RegisterForm';
import { useSelector } from 'react-redux';


export default function Auth() {

    const auth = useSelector(state => state.auth.mode);

    
    if (auth === "login"){
        return(
            <Login/>    
        )
    }
    else if (auth === 'register') {
        return(
            <Register/>    
        )
    }   
}
