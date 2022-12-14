import ferson from "./assets/ferson.png";
import { Link } from "react-router-dom";

import './EditMentee.css';

const EditMentee = () => {
    return (
        <div className="edit-mentee">
            <img className ="aj" alt="" src= {ferson} />

            <div className = "card">

                <form className="fname">
                    <input type = "text" id = "fname" name = "fname" placeholder="Enter First Name:" />
                </form>

                <form className="lastname">
                    <input type = "text" id = "lastname" name = "lastname" placeholder="Enter Last Name:" />
                </form>

                <form className="program">
                    <input type = "text" id = "email" name = "email" placeholder="Enter program:" />
                </form>

                <form className="year">
                    <input type = "text" id = "email" name = "email" placeholder="Enter year:" />
                </form>

            <button className="backButton">
                <Link to="/Save">
                    Save
                </Link>
            </button>

            <button className="backButton">
                <Link to="/MenteeProfile">
                    Back
                </Link>
            </button>

            </div>

            
        </div>
    );
}

export default EditMentee;