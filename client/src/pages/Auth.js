import React, { useState } from 'react';
import Login from '../components/LoginForm';
import Register from '../components/RegisterForm';

export default function Auth() {
    
    const [mode, setMode] = useState('login');

    
    if (mode === "login"){
        return(
            <Login setMode={(mode) => { setMode(mode) }}/>    
        )
    }
    else if (mode === 'register') {
        return(
            <Register setMode={(mode) => { setMode(mode) }}/>    
        )
    }   
}
