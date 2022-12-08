import './LandingPage.css';
import mentorrantHighReso from "./assets/mentorrantHighReso.png";

const LandingPage = () => {
    return (
      <div className = "top-container">
        <div className = "column">
          <img className = "logo" src = {mentorrantHighReso} alt = "Mentorrant Logo" />
          <h1 className = "mentorrant">MENTORRANT</h1>
          
        </div>
        <div className = "column">
          <h1 className = "title">Contact Us</h1>
          <h1 className = "title">Pricing</h1>
          <h1 className = "title">About Us</h1>
        </div>
      </div>
    );
}
 
export default LandingPage;