import mentorrantHighReso from "./assets/mentorrantHighReso.png";
import home from './assets/home.png';
import pen from "./assets/pen.png";
import settings from "./assets/settings.png";
import ferson from "./assets/ferson.png";
import { Link } from "react-router-dom";

import './MentorProfile.css';

const MentorProfile = () => {
    return (
        <div className="general-profile-mentor">
            { <figure className="home_button">
                <img src={home} alt="home_button"/>
            </figure> }
        
        <img className ="aj" alt="" src= {ferson} />
        
        <div className = "card">
                <div className="links1">
                    {/* <a href="https://www.youtube.com/">Mentors</a>
                    <a href="https://www.facebook.com/">Mentee</a>
                    <a href="https://www.w3schools.com/css/"><img className = "settings" src = {settings} alt = "settings" /></a> */}
                    <Link className = "mentors" to = "/mentors"></Link>
                    <Link className = "mentee" to = "/mentee"></Link>
                    <Link className = "settings" to = "/settings"></Link>
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

                <button>
                    Book Mentor
                </button>
        </div>

        </div>
    );
}

export default MentorProfile;