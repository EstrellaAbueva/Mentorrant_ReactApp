import './LandingPage.css';
import mentorrantHighReso from "./assets/mentorrantHighReso.png";

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
              <a class="navbar-brand" href="#">Contact Us</a>
              <a class="navbar-brand" href="#">Pricing</a>
              <a class="navbar-brand" href="#">FAQ</a>
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
                    <a class="navbar-brand about-us" href="#">About Us</a>
                  </div>
                </nav>
              </div>
              <div className = "column">
                <button type="button" class="btn btn-info">Sign In</button>
                <span className = "no-account">DON'T HAVE AN ACCOUNT?</span>
              </div>
            </div>
          </div>
      </div>
    );
}
 
export default LandingPage;