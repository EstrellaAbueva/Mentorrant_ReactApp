import React from 'react';
import axios from 'axios';
import './Login.css'
import logo from './Assets/logo-login.png';
import { Route } from 'react-router-dom';
import OurTeam from '../../OurTeam';
import Register from '../Register/Register';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


async function searchAccount(name, password) {
    console.log("hello");
    try {
      const response = await axios.get(`http://localhost:8080/account/getAccount?name=${name}&password=${password}`);
      const data = response.data;
      
      if (data.found) {
        Login.navigate("/OurTeam");

      } else {
        alert("Incorrect username or password");
      }
    } catch (error) {
      console.error(error);
    }
  }

const Login =() => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPsw] = useState('');

    return(
    <div className="login">
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Rubik:400,700'/><link rel="stylesheet" href="./style.css"/>
        <div className="login-form">
            <form>
                <h1 className="log-in-login">Login</h1>
                <img src={logo} alt="logo" className="logo-login" />
                <div className="content">
                    <div className="input-field">
                        <input type="email" id="email" placeholder="Email" autoComplete="nope" required />
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" placeholder="Password" autoComplete="new-password" required/>
                    </div>
                    <a href="#" className="forgotPassword">Forgot Your Password?</a>
                </div>
                <div className="action">
                    <button className="register-login" onClick={() => navigate('/Register')}>
                        Register
                        </button>
                    <button type="submit" className="sign-in" onClick={() => navigate('/Home')}>
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default Login;