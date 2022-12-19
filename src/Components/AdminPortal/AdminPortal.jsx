import React from "react";
import './AdminPortal.css';
import matchMentor from "./img-assets/matchMentor.png";
import session from "./img-assets/session.png";
import ebooks from "./img-assets/ebooks.png";
import settings from "./img-assets/settings.png";
import { Link } from "react-router-dom";

const AdminPortal = () => {
    return(
        <div class=".container-md">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <img src={matchMentor} class="photo"/>  
                        <h1 class="display-5">Access Students</h1>
                        <br></br>
                        <button type="button" class="but">
                            <Link className="StudentsAdmin" to="/StudentsAdmin">
                                    Edit
                            </Link></button>
                    </div>
                    <div class="col">
                        <img src={session} class="photo"/>
                        <h1 class="display-5">Access Courses</h1>
                        <br></br>
                        <button type="button" class="but">Session</button>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div class="row">
                    <div class="col">
                        <img src={ebooks} class="photo" />
                        <h1 class="display-5">Access Ebooks</h1>
                        <br></br>
                        <button type="button" class="but">
                            <Link className="EbooksAdminLink" to="/EbooksAdmin">
                                    Ebooks
                            </Link>
                        </button>
                    </div>
                    <div class="col">
                        <img src={settings} class="photo" />
                        <h1 class="display-5">Access Settings</h1>
                        <br></br>
                        <button type="button" class="but">Settings</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default AdminPortal;