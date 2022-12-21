import React from 'react';
import axios from 'axios';
import './Register.css'
import logo from './assets/logo-register.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Register =() => {

    const navigate = useNavigate();
    async function createAccount() {
        console.log("hello");
        try {
        const response = await axios.post(`http:\\localhost:8080/account/postAccount?username=kents@gmail.com&password=123456`);
        const data = response.data;
        
        if (data.found) {
            console.log("Account Created");
            navigate("/Login");

        } else {
            alert("Account not Created");
        }
        } catch (error) {
        console.error(error);
        }
    }

    return(
        <div className="login">
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Rubik:400,700'/><link rel="stylesheet" href="./style.css"/>
        <div className="login-form">
            <form onSubmit={createAccount}>
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
                    <button className="signup-register" onClick={() => navigate('/Login')}>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default Register;