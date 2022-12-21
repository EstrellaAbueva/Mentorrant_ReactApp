import mentorrantHighReso from "./assets/mentorrantHighReso.png";
import home from './assets/home.png';
import pen from "./assets/pen.png";
import settings from "./assets/settings.png";
import ferson from "./assets/ferson.png";
import { Link } from "react-router-dom";
import deleteButton from './assets/deleteProfile.png';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Rate from './assets/comment.png'

import Button1 from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';
import Rate1 from './assets/comment.png'

import './MentorProfile.css';
import GetMentors from "./MentorService/GetMentor";
import GetTopics from "./MentorService/GetTopics";
import GetMentees from "./MenteeService/GetMentees";

const MentorProfile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    return (
        <div className="general-profile-mentor">
            { <figure className="home_button">
                <Link className="homeLink" to="/Home">
                    <img src={home} alt="home_button"/>
                </Link>
            </figure> }
        
        <img className ="aj" alt="" src= {ferson} />
        
        <div className = "card">
                <div className="links1">
                    <Link className="mentorLink" to="/MentorProfile">Mentors</Link>
                    <Link className="menteeLink" to="/MenteeProfile">Mentees</Link>
                    <Link className="editLink" to="/EditMentee"><img className = "pen" src = {pen} alt = "pen"/></Link>
                    <Link className="settingsLink" to="/Settings"><img className = "pen" src = {settings} alt = "settings"/></Link>
                        <img className="deleteButton-mentor" src = {deleteButton} variant="primary" onClick={handleShow}/>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <div className="delete-profile">
                                        <Modal.Title >Delete Account</Modal.Title>
                                    </div>
                                </Modal.Header>
                                <Modal.Body className = "message" >Are you sure you want to delete your Account?</Modal.Body>
                                <Modal.Footer>
                                <Button className="yes-delete" variant="secondary">
                                    <Link className="loginLink" to="/Login">Yes</Link>
                                </Button>
                                <Button className = "no-delete" variant="primary" onClick={handleClose}>
                                    No
                                </Button>   
                                </Modal.Footer>
                            </Modal>
                        <img className = "rate-mentor" src = {Rate} variant = "primary" onClick={handleShow1}/>
                            <Modal1 show={show1} onHide={handleClose1}>
                                    <Modal1.Header closeButton>
                                        <div className="rateMentor-rate">
                                            <Modal1.Title > <strong>Rate Mentor</strong></Modal1.Title>
                                        </div>
                                    </Modal1.Header>
                                    <Modal1.Body className = "message-rate" >Rate Your Mentor over 5 according to your satisfaction.
                                    <form>
                                    <input type="number" className="mentor-rating" min = "1" max = "5"/>
                                    </form>
                                    </Modal1.Body>
                                    <Modal1.Footer>
                                    <Button1 className="yes-delete" variant="secondary">
                                        <Link className="loginLink" to="/Login">Submit</Link>
                                    </Button1>
                                    <Button1 className = "no-delete" variant="primary" onClick={handleClose1}>
                                        Cancel
                                    </Button1>   
                                    </Modal1.Footer>
                                </Modal1>
                    </div>

                <h1>ADRIAN JAY BARCENILLA</h1>

                <div className="details">
                    <GetMentors/>
                </div>

                <h1>EXPERTISE</h1>

                <div className="details">
                    <GetTopics/>
                </div>

                <h1>MENTEES:</h1>

                <div className="details">
                    <GetMentees/>
                </div>

                {/* <table class="tg">
                    <thead>
                    <tr>
                        <th class="tg-0lax">ESTRELLA ABUEVA</th>
                        <th class="tg-0lax">10/30/22</th>
                        <th class="tg-0lax">1:22 p.m</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="tg-0lax">JOHN WILLIAM MIONES</td>
                        <td class="tg-0lax">10/30/22</td>
                        <td class="tg-0lax">1:22 p.m</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">SEAN VENZ QUIJANO</td>
                        <td class="tg-0lax">10/30/22</td>
                        <td class="tg-0lax">1:22 p.m</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">ANDRE LENNARD UY</td>
                        <td class="tg-0lax">10/30/22</td>
                        <td class="tg-0lax">1:22 p.m</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">KENT STEPHEN SUMALINOG</td>
                        <td class="tg-0lax">10/30/22</td>
                        <td class="tg-0lax">1:22 p.m</td>
                    </tr>
                    </tbody>
                    </table> */}

                <button className="bookMentor">
                    <Link className="bookMentorLink" to="/BookMentor">
                        BookMentor
                    </Link>
                </button>
        </div>

        </div>
    );
}

export default MentorProfile;