import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeAuth } from "../store/authSlice";
import { login } from "../services";

export default function LoginForm(){
    const { register, handleSubmit } = useForm();
    const [wrongInput, setWrongInput] = useState([]);

    const dispatch = useDispatch();

    return(
        <form className="login centeringForm styleForm" onSubmit={handleSubmit(async (data) => {
            const err = await login(data);
            setWrongInput(err);
        })}>
            <h1>Login</h1>
            <input {...register("email", {required: "true"})} type='email' placeholder="E-mail" />
            { wrongInput.email && <p className='tipForWrongInput'>{wrongInput.email}</p>}
            <input {...register("password")} type='password' placeholder="Password" />

            { wrongInput.password && <p className='tipForWrongInput'>{wrongInput.password}</p>}
            <br/>
            <input type='submit' value='Login' />
            <div className='secondaryButtons'>
                <button onClick={() => dispatch(changeAuth('register'))}>Register</button>
            </div>
        </form>
    )
}