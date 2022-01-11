import { useForm } from "react-hook-form";

export default function RegisterForm(handleMode){
    const { register, handleSubmit, formState: {errors} } = useForm();
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
                        {/* <p>{errors.username?.message}</p> */}

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
                        {/* {errors.password1?.type === "minLength" && "Last name is required"} */}

                        <input {...register('comfPass', {required: "This is required"})} type='password' placeholder="Confirm Password" />
                        {/* {errors.comfPass?.value !== errors.password?.value ? <p className='tipInForm'>awd</p> : null} */}

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