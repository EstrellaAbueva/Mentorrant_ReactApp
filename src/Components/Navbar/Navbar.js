import mentorrantHighReso from "./assets/mentorrantHighReso.png";
import React from 'react';
import './Navbar.css';
import './Body.css';

const Navbar = () => {
    return (
    <div className ="container">
      <nav className="navbar">
        <img className ="logo" alt="" src= {mentorrantHighReso} />
        <h1>Mentorrant</h1>
          <div className="links">
            <a href="https://www.youtube.com/">Our Services</a>
            <a href="https://www.facebook.com/">Our Team</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">FAQ</a>
            <a href="https://www.youtube.com/watch?v=FgVe3rRpsrk&ab_channel=Nana">Contact Us</a>
          </div>
      </nav>
    </div>
      );
}
 
export default Navbar;