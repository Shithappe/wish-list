import React, { useState } from 'react';


export default function Home() {

    function Login(){
        return(
            <div className="login addItemForm">
                        <form>
                        <h1>Login</h1>
                            <input type='text' placeholder="Username" />
                            <input type='text' placeholder="Password" />
                            <input type='submit' value='Login' />
                        <div className='secondaryButtons'>
                                <button onClick={() => setMode('register')}>Register</button>
                                <button onClick={() => setMode('forgot')}>Forgot Password</button>
                            </div>
                        </form>
                    </div>
        )
    }
    
    function Register() {
        return(
            <div className="register addItemForm">
                        <form>
                        <h1>Register</h1>
                            <input type='text' placeholder="Username" />
                            <input type='text' placeholder="E-mail" />
                            <input type='text' placeholder="Password" />
                            <input type='text' placeholder="Comf Password" />
                            <input type='submit' value='Register' />
                            <div className='secondaryButtons'>
                                <button onClick={() => setMode('login')}>Login</button>
                                <button onClick={() => setMode('forgot')}>Forgot Password</button>
                            </div>
                        </form>
                    </div>
        )
    }
    
    function ChooseMode(){
        return(
            <div className='chooseMode'>
                <button onClick={() => setMode('login')}>Login</button>
                <button onClick={() => setMode('register')}>Register</button>
            </div>
        )
    }

    function ForgotPassword(){
        return(
            <div className='ForgotPassword addItemForm'>
                 <form>
                        <h1>Forgot Password</h1>
                        <input type='text' placeholder="Username" />
                        <input type='submit' value='Forgot' />
                        <div className='secondaryButtons'>
                                <button onClick={() => setMode('login')}>Login</button>
                                <button onClick={() => setMode('register')}>Register</button>
                        </div>
                    </form>
            </div>
        )
    }
    
    const [mode, setMode] = useState('login');
    

    if (mode === "login"){
        return(
            <div className='auth'>
                <Login/>    
            </div>  
        )
    }
    else if (mode === 'register') {
        return(
            <Register/>    
        )
    }
    else if (mode === 'forgot'){
        return(
            <ForgotPassword/>    
        )
    }   
}
