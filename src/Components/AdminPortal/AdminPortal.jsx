import React from "react";
import './AdminPortal.css';
import ebooks from "./img-assets/ebooks.png";
import settings from "./img-assets/settings.png";

const AdminPortal = () => {
    return(
        <div class=".container-md">
            <div class="container text-center">
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

export default AdminPortal;