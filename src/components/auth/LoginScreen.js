import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'


export const LoginScreen = () => {

    const [formValue, handleImputChange ] = useForm({
        email: 'julioa@laideatech.net',
        password: '1233456',
    });
    
    const { email, password } = formValue;
    
    const handleLogin = ()

    return (
        // <div>
        //     <h1>Login Screen</h1>
        // </div>
        <>
            <h3 className='auth__tittle'>Login</h3>
            <form onSubmit={ handleLogin }>
                <input 
                    type="text"
                    placeholder='Email'
                    name='email'
                    className='auth__input'
                    autoComplete='off' //Evita que salgan las sugerencias de los correos
                    value={email}
                    onChange = { handleImputChange }
                />

                <input 
                    type="password"
                    placeholder='Password'
                    name='password'
                    className='auth__input'
                    value={password}
                    onChange = { handleImputChange }
                />
                <button
                    type='submit'
                    className='btn btn-primary btn-block'
                    disabled={true}
                >
                    Login
                </button>
                {/* <hr/> */}
                {/* google */}
                <div className='auth__social-networks'>
                    <p>Login with social networks</p>
                    {/* Boton de google */}
                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

               <Link  
                    to="/auth/register"
                    className='link'
                >
                    Create new account
               </Link> 

            </form>
        </>
    );
};
