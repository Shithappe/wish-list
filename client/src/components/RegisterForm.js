import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { changeAuth } from "../store/authSlice";
import { registration } from "../services";

export default function RegisterForm(){
    const { register, handleSubmit, formState: {errors}, watch } = useForm();
    const pass = watch('password');
    const cPass = watch('comfPass');
    const dispatch = useDispatch();

    return(
        <form className="centeringForm styleForm" onSubmit={handleSubmit((data) => {
            registration(data);
        })}>
            <h1>Register</h1>
            <input {...register('username', {
                    required: "This is required", 
                    minLength: {
                        value: 3,
                        message: 'min lenght 3'
                    }
                })} type='text' placeholder="Username" />
            {errors.username?.message ? <p className='tipForWrongInput'>{errors.username?.message}</p> : null}

            <input {...register('email', {required: "This is required"})} type='email' placeholder="E-mail" />
            {errors.email?.message ? <p className='tipForWrongInput'>{errors.email?.message}</p> : null}

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
            {errors.password?.message ? <p className='tipForWrongInput'>{errors.password?.message}</p> : null}

            <input {...register('comfPass', {required: "This is required"})} type='password' placeholder="Confirm Password" />
            {cPass !== pass ? <p className='tipForWrongInput'>Password mismatch</p> : null}

            <br/>
            <input type='submit' value='Register' />
            <div className='secondaryButtons'>
                <button onClick={() => dispatch(changeAuth('login'))}>Login</button>
            </div>
        </form>
    )
}