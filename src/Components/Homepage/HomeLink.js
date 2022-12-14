import React from "react";
import './Home.css';
import matchMentor from "./img/matchMentor.png";
import session from "./img/session.png";
import ebooks from "./img/ebooks.png";
import settings from "./img/settings.png";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div class="container-md">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <img src={matchMentor} class="photo"/>  
                        <h1 class="display-5">
                            <Link className="mentorLink" to="/MentorProfile">Mentee/Mentor</Link>
                        </h1>
                    </div>
                    <div class="col">
                        <img src={session} class="photo"/>
                        <h1 className="display-5">
                            <Link className="EbooksLink" to="/Ebooks">Session</Link>
                        </h1>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div class="row">
                    <div class="col">
                        <img src={ebooks} class="photo"/>
                        <h1 className="display-5">
                            <Link className="EbooksLink" to="/Ebooks">Ebooks</Link>
                        </h1>
                    </div>
                    <div class="col">
                        <img src={settings} class="photo" />
                        <h1 className="display-5">
                            <Link className="settingsLink" to="/Settings">Settings</Link>
                        </h1>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Home;