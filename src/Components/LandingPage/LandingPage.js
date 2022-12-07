import './LandingPage.css';
import mentorrantHighReso from "./assets/mentorrantHighReso.png";

const LandingPage = () => {
    return (
      <div className = "top-container">
        <div className = "column">
        <img className = "logo" src = {mentorrantHighReso} alt = "Mentorrant Logo" />
        </div>
        <div className = "column">
        </div>
      </div>
    );
}
 
export default LandingPage;