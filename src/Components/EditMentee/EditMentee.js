import ferson from "./assets/ferson.png";

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

            <button className="saveButton">
                Save
            </button>

            <button className="backButton">
                Back
            </button>

            </div>

            
        </div>
    );
}

export default EditMentee;