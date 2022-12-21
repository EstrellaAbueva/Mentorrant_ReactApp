import React from 'react';
import './Register.css'
import logo from './assets/logo-register.png'
import { Link } from 'react-router-dom';

const Register =() => {
    const navigate = useNavigate();
    return(
        <div className="login">
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Rubik:400,700'/><link rel="stylesheet" href="./style.css"/>
        <div className="login-form">
            <form>
                <h1 className="log-in-login">Sign Up</h1>
                <img src={logo} alt="logo" className="logo-login" />
                <div className="content">
                    <div className="input-field">
                        <input type="name" placeholder="Name" autoComplete="nope" required/>
                    </div>
                    <div className="input-field">
                        <input type="email" placeholder="Email" autoComplete="Email" required/>
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" autoComplete="new-password" required/>
                    </div>
                </div>
                <div className="action">
                    <button className="signup-register" onClick={() => navigate('/Home')}>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default Register;