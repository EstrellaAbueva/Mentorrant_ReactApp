import React from 'react';
import payment from './assets/payments.jpg';
import password from './assets/password.jpg';
import subs from './assets/subscription.jpg';
import { Link } from 'react-router-dom';
import './Settings.css';

const Settings = () => {
  return (
    <div className="container-md">
        <div className="flex-container-set">
        <div className="box-set">
                <Link className="link-a" to="/Subscription">
                <img className ="setting-pic" alt="" src= {subs} />
                <p className="p-set">Payments</p></Link>
            </div>  
            <div className="box-set">
                <Link className="link-a" to="/Payment">
                <img className ="setting-pic" alt="" src= {payment} />
                <p className="p-set">Payments</p></Link>
            </div>  
            <div className="box-set">
                <Link className="link-a" to="/Password">
                <img className ="setting-pic" alt="" src= {password} />
                <p className="p-set">Password</p></Link>
            </div>
        </div>
    </div>
  );
}

export default Settings;