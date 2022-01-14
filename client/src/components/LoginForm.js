import { useForm } from "react-hook-form";

export default function LoginForm(handleMode){
    const { register, handleSubmit } = useForm();
    return(
        <div className="login addItemForm">
                    <form onSubmit={handleSubmit((data) => {
                        console.log(data);
                    })}>
                        <h1>Login</h1>
                        <input {...register("username", {required: "true"})} type='text' placeholder="Username" />
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