import { useForm } from "react-hook-form";
import axios from 'axios';
import Cookie from "js-cookie";

export default function LoginForm(handleMode){
    const { register, handleSubmit } = useForm();
    return(
        <div className="login centeringFrom styleFrom ">
                    <form onSubmit={handleSubmit((data) => {
                        console.log(data);
                        
                        axios.post('http://localhost:8000/api/user/login/', {
                            email: data.email,
                            password: data.password
                          })
                          .then(function (response) { console.log(response.data); Cookie.set("Authorization", response.data);  window.location.assign('http://localhost:3000/home'); })
                          .catch(function (error) { console.log(error); });
                    })}>
                        <h1>Login</h1>
                        <input {...register("email", {required: "true"})} type='email' placeholder="E-mail" />
                        <input {...register("password")} type='password' placeholder="Password" />
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