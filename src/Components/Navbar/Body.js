import React from 'react';
import './Body.css';

const Body = () => {
    return ( 
        <div className='container-md'>
            <div className="flex-container">
                <div className="box1">
                    <h1>Free</h1>
                    <ul>
                    <br></br>
                        <p class="bi bi-check-circle-fill text-success"> EBOOK SERVICE</p>
                        <br></br>
                        <p class="bi bi-check-circle-fill text-success"> HELP FROM THE COMMUNITY</p>
                        <br></br>
                        <p class="bi bi-x-circle-fill text-danger"> UNLIMITED POST</p>
                        <br></br>
                        <p class="bi bi-x-circle-fill text-danger"> ON THE DAY MENTOR</p>
                    </ul>
                </div>
                <div className="box2">
                    <h1>Personal</h1>
                    <ul>
                    <br></br>
                        <p class="bi bi-check-circle-fill text-success"> EBOOK SERVICE</p>
                        <br></br>
                        <p class="bi bi-check-circle-fill text-success"> HELP FROM THE COMMUNITY</p>
                        <br></br>
                        <p class="bi bi-check-circle-fill text-success"> UNLIMITED POST</p>
                        <br></br>
                        <p class="bi bi-check-circle-fill text-success"> ON THE DAY MENTOR</p>
                    </ul>
                </div>
                <div className="box3">
                    <h1>Institution</h1>
                    <ul>
                        <br></br>
                        <p class="bi bi-check-circle-fill text-success"> EBOOK SERVICE</p>
                        <br></br>
                        <p class="bi bi-check-circle-fill text-success"> HELP FROM THE COMMUNITY</p>
                        <br></br>
                        <p class="bi bi-check-circle-fill text-success"> UNLIMITED POST</p>
                        <br></br>
                        <p class="bi bi-check-circle-fill text-success"> ON THE DAY MENTOR</p>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Body;