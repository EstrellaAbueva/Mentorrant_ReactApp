import mentorrantHighReso from "./assets/mentorrantHighReso.png";
import React from 'react';

const Navbar = () => {
    return (
    <div className ="container">
    <nav className="navbar">
      <img className ="logo" alt="" src= {mentorrantHighReso} />
      <h1>Mentorrant</h1>
      <div className="links">
        <a href="/">Our Services</a>
        <a href="/">Our Team</a>
        <a href="/">FAQ</a>
        <a href="/">Contact Us</a>
    </div>
    </nav>
    </div>
      );
}
 
export default Navbar;