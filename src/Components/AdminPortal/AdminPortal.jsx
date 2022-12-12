import React from "react";
import './AdminPortal.css';
import matchMentor from "./img/matchMentor.png";
import session from "./img/session.png";
import ebooks from "./img-assets/ebooks.png";
import settings from "./img-assets/settings.png";

const AdminPortal = () => {
    return(
        <div class=".container-md">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <img src={matchMentor} class="photo"/>  
                        <h1 class="display-5">Access Students</h1>
                        <button type="button" class="btn btn-outline-primary btn-lg">Match</button>
                    </div>
                    <div class="col">
                        <img src={session} class="photo"/>
                        <h1 class="display-5">Access Courses</h1>
                        <button type="button" class="btn btn-outline-primary btn-lg">Session</button>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div class="row">
                    <div class="col">
                        <img src={ebooks} class="photo" />
                        <h1 class="display-5">Access Ebooks</h1>
                        <button type="button" class="btn btn-outline-primary btn-lg">Ebooks</button>
                    </div>
                    <div class="col">
                        <img src={settings} class="photo" />
                        <h1 class="display-5">Access Settings</h1>
                        <button type="button" class="btn btn-outline-primary btn-lg">Settings</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default AdminPortal;