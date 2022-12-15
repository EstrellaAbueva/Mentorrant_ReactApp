import React from "react";
import './Home.css';
import study from "./img/study.jpg";
import session2 from "./img/session2.png";
import ebooks2 from "./img/ebooks2.jpg";
import settings2 from "./img/settings2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div class="container-md">
            <div class="container text-center">
                <div class="row">
                    <div className = "containers">
                        <img src={study} class="photo"/>  
                        <h1 class="display-5">
                            <Link className="mentorLink" to="/MentorProfile">
                                <div class="text middle">
                                    Mentor/Mentee
                                </div>
                            </Link>
                        </h1>
                    </div>
                    <div class="containers">
                        <img src={session2} class="photo"/>
                        <h1 className="display-5">
                            <Link className="EbooksLink" to="/Ebooks">
                                <div class="text middle">
                                    Session
                                </div>
                            </Link>
                        </h1>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div class="row">
                    <div class="containers">
                        <img src={ebooks2} class="photo"/>
                        <h1 className="display-5">
                            <Link className="EbooksLink" to="/Ebooks">
                                <div class="text middle">
                                    Ebooks
                                </div>
                            </Link>
                        </h1>
                    </div>
                    <div class="containers">
                        <img src={settings2} class="photo" />
                        <h1 className="display-5">
                            <Link className="settingsLink" to="/Settings">
                                <div class="text middle">
                                    Settings
                                </div>
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Home;