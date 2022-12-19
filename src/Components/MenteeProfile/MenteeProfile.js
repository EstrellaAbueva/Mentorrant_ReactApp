import mentorrantHighReso from "./assets/mentorrantHighReso.png";
import home from './assets/home.png';
import pen from "./assets/pen.png";
import settings from "./assets/settings.png";
import ferson from "./assets/ferson.png";
import { Link } from "react-router-dom";
import GetMentees from "./MenteeService/GetMentees";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import deleteButton from './assets/deleteProfile.png';

import './MenteeProfile.css';


const MenteeProfile = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        
        <div className="general-profile-mente">
            { <figure className="home_button">
                <Link className="homeLink" to="/Home">
                    <img src={home} alt="home_button"/>
                </Link>
            </figure> }
        
        <img className ="aj" alt="aj" src= {ferson} />
        
        <div className = "card">
                <div className="links">
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
                            <Button className="yes-delete" variant="secondary" onClick={handleClose}>
                                Yes
                            </Button>
                            <Button className = "no-delete" variant="primary" onClick={handleClose}>
                                No
                            </Button>   
                            </Modal.Footer>
                        </Modal>
                </div>

                <h1>ADRIAN JAY BARCENILLA</h1>

                <div className="details">
                    <GetMentees/>
                </div>
        </div>

        </div>
    );
}

export default MenteeProfile;