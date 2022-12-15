import React from "react";
import './Faq.css';

const FAQ = () => {
    return (
        <div className="container-sm">
            <br></br>
            <br></br>
            <br></br>
            <h1 className="faq-h1">WHAT IS MENTORRANT?</h1>
            <p className="faq-q">
                Mentorrant is an online platform that connects to other
                students as a mentor or mentee. The platform is intended
                to create an easy communication for student and learn with
                together.
            </p>
            <h1 className="faq-h1">HOW DOES THE PLATFORM WORK?</h1>
            <p className="faq-q">
                The platform would match the user to a mentor that has the 
                knowledge of a certain topic a mentee would need help from.
            </p>
            <h1 className="faq-h1">IS MENTORRANT FREE?</h1>
            <p className="faq-q">
            Mentorrant has free services but with limited capabilities. Purchasing 
            the premium services provided by the platform would provide a wonderful 
            experience and almost limitless service.
            </p>
        </div>
     );
}
 
export default FAQ;