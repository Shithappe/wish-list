import { useForm } from "react-hook-form";
import axios from 'axios';
import Cookies from "js-cookie";

export default function RegisterForm(handleMode){
    const { register, handleSubmit, formState: {errors}, watch } = useForm();
    const pass = watch('password');
    const cPass = watch('comfPass');

    return(
        <div className="centeringFrom styleFrom">
                    <form onSubmit={handleSubmit((data) => {
                        console.log(data);
                        axios({
                            method: 'post',
                            url: 'http://localhost:8000/api/user/register/', 
                            data: {
                            username: data.username,
                            password: data.password,
                            email: data.email
                          },
                          headers: {
                            "Authorization": Cookies.get('Authorization'),
                            'Content-Type': 'application/json'
                            }
                        })
                        .then(function (response) { console.log(response); window.location.reload(); })
                        .catch(function (error) { console.log(error); });
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

                        <input {...register('email', {required: "This is required"})} type='email' placeholder="E-mail" />
                        {errors.email?.message ? <p className='tipInForm'>{errors.email?.message}</p> : null}

                        <input {...register('password', {
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
                        {errors.password?.message ? <p className='tipInForm'>{errors.password?.message}</p> : null}

                        <input {...register('comfPass', {required: "This is required"})} type='password' placeholder="Confirm Password" />
                        {cPass !== pass ? <p className='tipInForm'>Password mismatch</p> : null}

                        <br/>
                        <input type='submit' value='Register' />
                        <div className='secondaryButtons'>
                            <button onClick={() => handleMode.handleMode('login')}>Login</button>
                            <button onClick={() => handleMode.handleMode('forgot')}>Forgot Password</button>
                        </div>
                    </form>
                </div>
    )
}