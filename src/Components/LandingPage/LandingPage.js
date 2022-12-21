import './LandingPage.css';
import mentorrantHighReso from "./assets/mentorrantHighReso.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
      <div className = "top-container">
        <div className = "row">
        <div className = "column">
            <img className = "logo" src = {mentorrantHighReso} alt = "Mentorrant Logo" />
            <h1 className = "mentorrant">MENTORRANT</h1>
          </div>
          <div className = "column">
          <nav class="navbar">
            <div class="container-fluid">
              <Link className="link-a" to="/body">Our Services</Link>
              <Link className="link-a" to="/OurTeam">Our Team</Link>
              <Link className="link-a" to="/faq">FAQ</Link>
            </div>
          </nav>
          </div>
        </div>
          <div className = "middle-container">
            <span className = "when-a">When A Student is ready,</span>
            <span className = "a-mentor">A Mentor Appears!</span>
            <div className = "row">
              <div className = "column first">
                <nav class="navbar bottom">
                  <div class="container-fluid">
                    <Link className="contactUsLink" to="/ContactUs">
                      About Us
                    </Link>
                  </div>
                </nav>
              </div>
              <div className = "column">
                <button type="button" class="btn btn-info">
                  <Link className="signInLink" to="/Register">
                    Sign In
                  </Link>
                </button>
                <span className = "no-account">
                  <Link className="loginLink" to="/Login">
                      DON'T HAVE AN ACCOUNT?
                  </Link>
                </span>
              </div>
            </div>
          </div>
      </div>
    );
}
 
export default LandingPage;