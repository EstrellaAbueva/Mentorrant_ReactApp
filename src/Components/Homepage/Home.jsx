import React from "react";

const Home = () => {
    return(
        <div class=".container-md">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h1 class="display-5">Match a Mentor</h1>
                        <button type="button" class="btn btn-outline-primary btn-lg">Match</button>
                    </div>
                    <div class="col">
                        <h1 class="display-5">Session</h1>
                        <button type="button" class="btn btn-outline-primary btn-lg">Session</button>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div class="row">
                    <div class="col">
                        <h1 class="display-5">Available Ebooks</h1>
                        <button type="button" class="btn btn-outline-primary btn-lg">Ebooks</button>
                    </div>
                    <div class="col">
                        <h1 class="display-5">Settings</h1>
                        <button type="button" class="btn btn-outline-primary btn-lg">Settings</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Home;