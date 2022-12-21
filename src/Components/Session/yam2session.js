import React from 'react';
import { Link } from 'react-router-dom';
import './Session.css';

const yam2session = () => {
  return (
    <div className="container-md">
        <div className="flex-container-set">
            <div className="container_set">
                <Link className="yam2Link" to="/yam2session">
                    <p className="p-set">Adrian Jay Barcenilla</p>
                    <p className="p-set">Automata Theory</p>
                </Link>

                <button className="newbut">
                    <Link className="historyLink" to="/history">
                        View History
                    </Link>
                </button>
            </div>
        </div>
    </div>
  );
}

export default yam2session;