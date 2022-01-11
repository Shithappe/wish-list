import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export default function Home() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    // console.log(errors);
    // console.log(watch());
    // const pass = watch('password');


    function Login(){
        return(
            <div className="login addItemForm">
                        <form onSubmit={handleSubmit((data) => {
                            console.log(data);
                        })}>
                            <h1>Login</h1>
                            <input {...register("username", {required: "true", minLength: 3})} type='text' placeholder="Username" />
                            <input {...register("password")} type='password' placeholder="Password" />
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
                        <form onSubmit={handleSubmit((data) => {
                            console.log(data);
                        })}>
                            <h1>Register</h1>
                            <input {...register('username', {
                                    required: "This is required", 
                                    minLength: {
                                        value: 3,
                                        message: 'min lenght 3'
                                    }
                                })} type='text' placeholder="Username" />
                            {errors.username?.message ? <p className='tipInForm'>{errors.username?.message}</p> : null}
                            <p>{errors.username?.message}</p>

                            <input {...register('email', {required: "This is required"})} type='email' placeholder="E-mail" />
                            {errors.email?.message ? <p className='tipInForm'>{errors.email?.message}</p> : null}

                            <input {...register('password1', {
                                required: "This is required",
                                minLength: {
                                    value: 8,
                                    message: "min lenght 8"
                                },
                                pattern: {
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g,
                                    message: "Must have a number and uppercase"
                                }
                            })} type='password' placeholder="Password" />
                            {errors.password1?.message ? <p className='tipInForm'>{errors.password1?.message}</p> : null}
                            {errors.password1?.type === "minLength" && "Last name is required"}

                            <input {...register('comfPass', {required: "This is required"})} type='password' placeholder="Confirm Password" />
                            {/* {errors.comfPass?.value !== errors.password?.value ? <p className='tipInForm'>awd</p> : null} */}

                            <br/>
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
