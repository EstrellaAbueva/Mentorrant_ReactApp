import mentorrantHighReso from "./assets/mentorrantHighReso.png";
import home from './assets/home.png';
import rectangle56 from './assets/rectangle56.png';

import './Assets.css';

const MenteeProfile = () => {
    return (
        <div className="general-profile-mente">
            <img className="image" src={rectangle56}/>
            
            <figure className="home_button">
                <img src={home} alt="home_button"  />
            </figure>
        
        
        </div>
    );
}

export default MenteeProfile;