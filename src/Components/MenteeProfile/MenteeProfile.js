import mentorrantHighReso from "./assets/mentorrantHighReso.png";
import home from './assets/home.png';
import pen from "./assets/pen.png";
import settings from "./assets/settings.png";
import aj from "./assets/profileAj.png";

import './MenteeProfile.css';

const MenteeProfile = () => {
    return (
        <div className="general-profile-mente">
            { <figure className="home_button">
                <img src={home} alt="home_button"  />
            </figure> }


        <img className ="aj" alt="" src= {aj} />

        <div className = "card">
                <div className="links">
                    <a href="https://www.youtube.com/">Mentors</a>
                    <a href="https://www.facebook.com/">Mentee</a>
                    <a href="https://www.instagram.com/"><img className = "pen" src = {pen} alt = "pen"/></a>
                    <a href="https://www.w3schools.com/css/"><img className = "settings" src = {settings} alt = "settings" /></a>
                </div>

                <h1>Adrian Jay Barcenilla</h1>

                <div className="details">
                    <p>Course: BSCS</p>
                    <p>Email : aj@gmail.com</p>
                    <p>Contact Number: 0999999999</p>
                    <p>Address: wala lang street c.c </p>
                    <p>City: Cebu</p>
                    <p>Zip Code: 6000</p>
                </div>

                <p><button onclick="window.location.href='https://www.google.com'">Book Mentor</button></p>
        </div>

        </div>
    );
}

export default MenteeProfile;