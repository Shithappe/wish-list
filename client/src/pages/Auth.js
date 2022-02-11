import React, { useState } from 'react';
import Login from '../components/LoginForm';
import Register from '../components/RegisterForm';
import { useSelector } from 'react-redux';


export default function Auth() {
    
    const authState = useSelector(state => state.authState);
    
    if (authState === "login"){
        return(
            <Login/>    
        )
    }
    else if (authState === 'register') {
        return(
            <Register/>    
        )
    }   
}
