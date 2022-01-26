import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { login } from "../services/services";

export default function LoginForm(handleMode){
    const { register, handleSubmit } = useForm();
    const [wrongInput, setWrongInput] = useState([]);
    return(
        <div className="login centeringForm styleFrom ">
                    <form onSubmit={handleSubmit(async (data) => {

                        const err = await login(data);
                        setWrongInput(err);
                    })}>
                        <h1>Login</h1>
                        <input {...register("email", {required: "true"})} type='email' placeholder="E-mail" />
                        { wrongInput.email && <p className='tipInForm'>{wrongInput.email}</p>}
                        <input {...register("password")} type='password' placeholder="Password" />

                        { wrongInput.password && <p className='tipInForm'>{wrongInput.password}</p>}
                        <br/>
                        <input type='submit' value='Login' />
                        <div className='secondaryButtons'>
                            <button onClick={() => handleMode.handleMode('register')}>Register</button>
                            <button onClick={() => handleMode.handleMode('forgot')}>Forgot Password</button>
                        </div>
                    </form>
                    <br/>
                </div>
    )
}