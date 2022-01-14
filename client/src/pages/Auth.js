import React, { useState } from 'react';
import Login from '../components/LoginForm';
import ForgotPassword from '../components/ForgotPasswordForm';
import Register from '../components/RegisterForm';

export default function Home() {
    
    const [mode, setMode] = useState('login');

    function handleMode(mode){
        setMode(mode);
    }
    

    if (mode === "login"){
        return(
            <Login handleMode={(mode) => { handleMode(mode) }}/>    
        )
    }
    else if (mode === 'register') {
        return(
            <Register handleMode={(mode) => { handleMode(mode) }}/>    
        )
    }
    else if (mode === 'forgot'){
        return(
            <ForgotPassword handleMode={(mode) => { handleMode(mode) }}/>    
        )
    }   
}
