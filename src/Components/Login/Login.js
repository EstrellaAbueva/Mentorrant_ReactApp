import React from 'react';
import './Login.css'
import logo from './assets/logo-login.png'
import { Link } from 'react-router-dom';

const Login =() => {
    return(
    <div className="login">
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Rubik:400,700'/><link rel="stylesheet" href="./style.css"/>
        <div className="login-form">
            <form>
                <h1 className="log-in-login">Login</h1>
                <img src={logo} alt="logo" className="logo-login" />
                <div className="content">
                    <div className="input-field">
                        <input type="email" placeholder="Email" autoComplete="nope" required/>
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" autoComplete="new-password" required/>
                    </div>
                    <a href="#" className="forgotPassword">Forgot Your Password?</a>
                </div>
                <div className="action">
                    <button className="register-login">
                        <Link className= "register-link" to = "/Register">
                        Register
                        </Link></button>
                    <button className="sign-in">Sign In</button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default Login;