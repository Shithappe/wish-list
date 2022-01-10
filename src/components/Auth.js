export default function Home() {
        return (
            <div className="auth">
    
                <div>
                    <input type="radio" id="login" name="auth" value='login' checked />
                    <label for="login">Login</label>
    
                    <input type="radio" id="register" name="auth" value='register' />
                    <label for="register">Register</label>
                </div>
    
                <div className="register">
                    <h1>Register</h1>
                    <form>

                    </form>
                </div>
    
                <div className="login">
                    <h1>Login</h1>
                    <form>
                        <input type='text' placeholder="Username" />
                        <input type='text' placeholder="Password" />
                        <input type='submit' value='Login' />
                    </form>
                </div>
               
            </div>
        )
    
}