import React from 'react';
import AJ from './assets/AJ.jpg';
import kent from './assets/kent.jpg';
import YAM2 from './assets/YAM2.jpg';
import { Link } from 'react-router-dom';
import './Session.css';

const Session = () => {
  return (
    <div className="container-md">
        <div className="flex-container-set">
            <div className="box-set">
                <img className ="setting-pic" alt="" src= {AJ} />
            </div>  
                <div className="box-set">
            <img className ="setting-pic" alt="" src= {kent} />
            </div>  
            <div className="box-set">
                <img className ="setting-pic" alt="" src= {YAM2} />
            </div>
        </div>
    </div>
  );
}

export default Session;