import React from "react";
import './Home.css';
import matchMentor from "./img/matchMentor.png";
import session from "./img/session.png";
import ebooks from "./img/ebooks.png";
import settings from "./img/settings.png";

s
const Home = () => {
    return(
        <div class=".container-md">
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
                        <h1 class="display-5">Session</h1>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div class="row">
                    <div class="col">
                        <img src={ebooks} class="photo" />
                        <h1 class="display-5">Available Ebooks</h1>
                        <button type="button" class="btn btn-outline-primary btn-lg">Ebooks</button>
                    </div>
                    <div class="col">
                        <img src={settings} class="photo" />
                        <h1 class="display-5">Settings</h1>
                        <button type="button" class="btn btn-outline-primary btn-lg">Settings</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Home;