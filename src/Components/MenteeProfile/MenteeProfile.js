import mentorrantHighReso from "./assets/mentorrantHighReso.png";
import home from './assets/home.png';
import pen from "./assets/pen.png";
import settings from "./assets/settings.png";
import ferson from "./assets/ferson.png";

import './MenteeProfile.css';

const MenteeProfile = () => {
    return (
        <div className="general-profile-mente">
            { <figure className="home_button">
                <a href="https://www.youtube.com/">
                <img src={home} alt="home_button"  />
                </a>
            </figure> }

        <img className ="aj" alt="" src= {ferson} />
        
        <div className = "card">
                <div className="links">
                    <a href="https://www.youtube.com/">Mentors</a>
                    <a href="https://www.facebook.com/">Mentee</a>
                    <a href="https://www.instagram.com/"><img className = "pen" src = {pen} alt = "pen"/></a>
                    <a href="https://www.w3schools.com/css/"><img className = "settings" src = {settings} alt = "settings" /></a>
                </div>

                <h1>ADRIAN JAY BARCENILLA</h1>

                <div className="details">
                    <p>Course: BSCS</p>
                    <p>Email : aj@gmail.com</p>
                    <p>Contact Number: 0999999999</p>
                    <p>Address: Wala Lang Street Cebu City</p>
                    <p>City: Cebu</p>
                    <p>Zip Code: 6000</p>
                </div>

                <button>
                    Book Mentor
                </button>
        </div>

        </div>
    );
}

export default MenteeProfile;