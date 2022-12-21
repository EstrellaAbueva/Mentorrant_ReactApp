import { Link } from "react-router-dom";

import './EditMentee.css';

const Save = () => {
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
                </div>

                <h1>UPDATES SAVED</h1>

                <button className="saveButton">
                    <Link className="mentorLink" to="/MentorProfile">
                        Back
                    </Link>
                </button>
        </div>

        </div>
    );
}

export default BookMentor;