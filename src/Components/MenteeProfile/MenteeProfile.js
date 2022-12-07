import mentorrantHighReso from "./assets/mentorrantHighReso.png";
import home from './assets/home.png';
import pen from "./assets/pen.png";
import settings from "./assets/settings.png";

import './MenteeProfile.css';

const MenteeProfile = () => {
    return (
        <div className="general-profile-mente">
            {/* <figure className="home_button">
                <img src={home} alt="home_button"  />
            </figure> */}
            
            <nav className="nav">
                <img className ="logo" alt="" src= {mentorrantHighReso} />
                <h1>Mentorrant</h1>
                <div className="links">
                    <a href="https://www.youtube.com/">Mentor</a>
                    <a href="https://www.facebook.com/">Mentee</a>
                    <a href="https://www.instagram.com/"><img className = "pen" src = {pen} alt = "pen"/></a>
                    <a href="https://www.w3schools.com/css/"><img className = "settings" src = {settings} alt = "settings" /></a>
                </div>
            </nav>
            
            {/* <div className="profile">
                <div className="profile-picture">
                    <img className="profile-picture" src="https://www.w3schools.com/howto/img_avatar.png" alt="profile-picture" />
                    </div>
                <div className="profile-info">
                    <h1>John Doe</h1>
                    <h2>Student</h2>
                    <h3>University of Waterloo</h3>
                    <h4>Computer Science</h4>
                    <h5>Year 2</h5>
                    <h6>
                        <a href="https://www.facebook.com/">Facebook</a>
                        <a href="https://www.instagram.com/">Instagram</a>
                        <a href="https://www.youtube.com/">Youtube</a>
                    </h6>
                </div>
            </div> */}
        </div>
    );
}

export default MenteeProfile;