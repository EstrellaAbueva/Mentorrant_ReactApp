import React from 'react';
import AJ from './assets/AJ.png';
import kent from './assets/kent.png';
import YAM2 from './assets/YAM2.png';
import { Link } from 'react-router-dom';
import './Session.css';

const Session = () => {
  return (
    <div className="container-md">
        <div className="flex-container-set">
            <div className="box-set">
                <Link className="yamLink" to="/Yam2">
                    <img className ="setting-pic" alt="" src= {AJ} />
                    <p className="p-set">Adrian Jay Barcenilla</p>
                </Link>
            </div>  
          
        </div>
    </div>
  );
}

export default Session;