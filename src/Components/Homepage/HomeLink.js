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
                        <br></br>
                        <br></br>
                        <br></br>
                        <button type="button" className="but">
                            <Link className="mentorLink" to="/MentorProfile">Mentee/Mentor</Link>
                        </button>  
                    </div>
                    <div class="col">
                        <img src={session} class="photo"/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <button type="button" className="but">
                            <Link className="EbooksLink" to="/Ebooks">Session</Link>
                        </button>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div class="row">
                    <div class="col">
                        <img src={ebooks} class="photo"/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <button type="button" className="but">
                            <Link className="EbooksLink" to="/Ebooks">Ebooks</Link>
                        </button>
                    </div>
                    <div class="col">
                        <img src={settings} class="photo" />
                        <br></br>
                        <br></br>
                        <br></br>
                        <button type="button" className="but">
                            <Link className="settingsLink" to="/Settings">Settings</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Home;