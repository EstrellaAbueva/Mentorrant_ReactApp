import "./Password.css";
import React from 'react';

const Password =() => {
    return(
        <div className="password">
            <hr />
            <form className="submit">
                <h1 className="old-password">ENTER OLD PASSWORD:</h1>
                <input type = "text" id = "old-password" name = "old-password" placeholder="Enter Old Password" required />

                <h1 className="new-password">ENTER NEW PASSWORD:</h1>
                <input type = "text" id = "new-password" name = "new-password" placeholder="Enter New Password" />
            </form>
            <button>
                Submit
            </button> 
            <hr/>
        </div>
    );
}

export default Password;