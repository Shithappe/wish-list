import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import axios from 'axios';
import Cookie from "js-cookie";

export default function LoginForm(handleMode){
    const { register, handleSubmit } = useForm();
    const [InvalidData, setInvalidData] = useState('');
    return(
        <div className="login centeringFrom styleFrom ">
                    <form onSubmit={handleSubmit(async (data) => {
                        console.log(data);
                        
                        axios.post('http://localhost:8000/api/user/login/', {
                            email: data.email,
                            password: data.password
                          })
                          .then(function (response) { Cookie.set("Authorization", response.data.token);  Cookie.set("id", response.data.id); window.location.assign('http://localhost:3000/home'); })
                          .catch(await function (error) { 
                              console.log(error);
                              if (error.response.status === 401) {
                              setInvalidData('Incorrect password');
                                alert(InvalidData[0])
                            }
                                console.log(InvalidData);
                            });
                    })}>
                        <h1>Login</h1>
                        <input {...register("email", {required: "true"})} type='email' placeholder="E-mail" />
                        <input {...register("password")} type='password' placeholder="Password" />
                        {console.log(InvalidData)}
                        { InvalidData && <p className='tipInForm'>{InvalidData}</p>}
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