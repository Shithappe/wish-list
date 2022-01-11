import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export default function Home() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    console.log(errors);
    function Login(){
        return(
            <div className="login addItemForm">
                        <form onSubmit={handleSubmit((data) => {
                            console.log(data);
                        })}>
                            <h1>Login</h1>
                            <input {...register("username", {required: true, minLength: 4})} type='text' placeholder="Username" />
                            <input {...register("password")} type='text' placeholder="Password" />
                            <input type='submit' value='Login' />
                            <div className='secondaryButtons'>
                                <button onClick={() => setMode('register')}>Register</button>
                                <button onClick={() => setMode('forgot')}>Forgot Password</button>
                            </div>
                        </form>
                        <br/>
                        
                    </div>
        )
    }
    
    function Register() {
        return(
            <div className="register addItemForm">
                        <form>
                        <h1>Register</h1>
                            <input type='text' placeholder="Username" />
                            <input type='text' placeholder="E-mail" />
                            <input type='text' placeholder="Password" />
                            <input type='text' placeholder="Comf Password" />
                            <input type='submit' value='Register' />
                            <div className='secondaryButtons'>
                                <button onClick={() => setMode('login')}>Login</button>
                                <button onClick={() => setMode('forgot')}>Forgot Password</button>
                            </div>
                        </form>
                    </div>
        )
    }

    function ForgotPassword(){
        return(
            <div className='ForgotPassword addItemForm'>
                 <form>
                        <h1>Forgot Password</h1>
                        <input type='text' placeholder="Username" />
                        <input type='submit' value='Forgot' />
                        <div className='secondaryButtons'>
                                <button onClick={() => setMode('login')}>Login</button>
                                <button onClick={() => setMode('register')}>Register</button>
                        </div>
                    </form>
            </div>
        )
    }
    
    const [mode, setMode] = useState('login');
    

    if (mode === "login"){
        return(
            <Login/>    
        )
    }
    else if (mode === 'register') {
        return(
            <Register/>    
        )
    }
    else if (mode === 'forgot'){
        return(
            <ForgotPassword/>    
        )
    }   
}
