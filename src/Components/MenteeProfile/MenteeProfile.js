import mentorrantHighReso from "./assets/mentorrantHighReso.png";
import home from './assets/home.png';
import pen from "./assets/pen.png";
import settings from "./assets/settings.png";
import ferson from "./assets/ferson.png";
import { Link } from "react-router-dom";
import GetMentees from "./MenteeService/GetMentees";

import './MenteeProfile.css';


const MenteeProfile = () => {
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
                </div>

                <h1>KENT STEPHEN SUMALINOG</h1>

                <div className="details">
                    <GetMentees/>
                </div>
        </div>

        </div>
    );
}

export default MenteeProfile;