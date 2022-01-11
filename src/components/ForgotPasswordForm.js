export default function ForgotPasswordForm(handleMode){
    return(
        <div className='ForgotPassword addItemForm'>
             <form>
                    <h1>Forgot Password</h1>
                    <input type='text' placeholder="Username" />
                    <input type='submit' value='Forgot' />
                    <div className='secondaryButtons'>
                            <button onClick={() => handleMode.handleMode('login')}>Login</button>
                            <button onClick={() => handleMode.handleMode('register')}>Register</button>
                    </div>
                </form>
        </div>
    )
}