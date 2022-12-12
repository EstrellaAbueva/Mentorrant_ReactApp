import mentorrantHighReso from "./assets/mentorrantHighReso.png";
import home from './assets/home.png';
import pen from "./assets/pen.png";
import settings from "./assets/settings.png";
import ferson from "./assets/ferson.png";
import { Link } from "react-router-dom";

import './MenteeProfile.css';
import GetMentees from "./MenteeService/GetMentees";

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
                <Link className="mentorLink" to="/MentorProfile">Mentors</Link>
                    <Link className="menteeLink" to="/MenteeProfile">Mentees</Link>
                    <Link className="settingsLink" to="/MenteeProfile"><img className = "pen" src = {settings} alt = "settings"/></Link>
                </div>

                <h1>ADRIAN JAY BARCENILLA</h1>

                <div className="details">
                    <GetMentees/>
                    {/* <p>Course: BSCS</p>
                    <p>Email : aj@gmail.com</p>
                    <p>Contact Number: 0999999999</p>
                    <p>Address: Wala Lang Street Cebu City</p>
                    <p>City: Cebu</p>
                    <p>Zip Code: 6000</p> */}
                </div>
        </div>

        </div>
    );
}

export default MenteeProfile;