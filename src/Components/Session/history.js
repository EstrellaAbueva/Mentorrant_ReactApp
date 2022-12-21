import React from 'react';
import { Link } from 'react-router-dom';
import './Session.css';
import GetSessions from './Services/GetSession';

const history = () => {
  return (
    <div className="container-md">
        <div className="flex-container-set">
            <div className="container_set">
                    <GetSessions></GetSessions>
                <button className="newbut">
                    <Link className="sessionLink" to="/Session">
                        Back
                    </Link>
                </button>
            </div>
        </div>
    </div>
  );
}

export default history;