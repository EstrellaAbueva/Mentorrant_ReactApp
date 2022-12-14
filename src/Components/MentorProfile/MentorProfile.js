import mentorrantHighReso from "./assets/mentorrantHighReso.png";
import home from './assets/home.png';
import pen from "./assets/pen.png";
import settings from "./assets/settings.png";
import ferson from "./assets/ferson.png";
import { Link } from "react-router-dom";

import './MentorProfile.css';
import GetMentors from "./MentorService/GetMentor";

const MentorProfile = () => {
    return (
        <div className="general-profile-mentor">
            { <figure className="home_button">
                <img src={home} alt="home_button"/>
            </figure> }
        
        <img className ="aj" alt="" src= {ferson} />
        
        <div className = "card">
                <div className="links1">
                    <Link className="mentorLink" to="/MentorProfile">Mentors</Link>
                    <Link className="menteeLink" to="/MenteeProfile">Mentees</Link>
                    <Link className="editLink" to="/EditMentee"><img className = "pen" src = {pen} alt = "pen"/></Link>
                    <Link className="settingsLink" to="/MenteeProfile"><img className = "pen" src = {settings} alt = "settings"/></Link>
                </div>

                <h1>ADRIAN JAY BARCENILLA</h1>

                <div className="details">
                    <GetMentors/>
                    {/* <p>Course: BSCS</p>
                    <p>Email : aj@gmail.com</p>
                    <p>Contact Number: 0999999999</p>
                    <p>Address: Wala Lang Street Cebu City</p>
                    <p>City: Cebu</p>
                    <p>Zip Code: 6000</p> */}
                </div>

                <h5>EXPERTISE:</h5>

                <table class="tg1">
                <thead>
                <tr>
                    <th class="name">ROBOTICS</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="name">QUANTITATIVE ANALYSIS</td>
                </tr>
                <tr>
                    <td class="name">INFORMATION MANAGEMENT</td>
                </tr>
                <tr>
                    <td class="name">AUTOMATA</td>
                </tr>
                </tbody>
                </table>

                <h5>MENTEES:</h5>

                <table class="tg">
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
                    </table>

                <button className="bookMentor">
                    Book Mentor
                </button>
        </div>

        </div>
    );
}

export default MentorProfile;