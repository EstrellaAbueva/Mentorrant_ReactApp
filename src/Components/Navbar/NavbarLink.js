import mentorrantHighReso from "./assets/mentorrantHighReso.png";
import React from 'react';
import './Navbar.css';
import './Body.css';
import { Link } from "react-router-dom";

const NavbarLink = () => {
    return (
      <div className="container-sm">
        <img className ="logo" alt="" src= {mentorrantHighReso}/>
        <nav className="navbar"> 
            <h1><Link className="homeLink" to="/home">Mentorrant</Link></h1>
            <div className="links">
              <Link className="link-a" to="/body">Our Services</Link>
              <Link className="link-a" to="/OurTeam">Our Team</Link>
              <Link className="link-a" to="/faq">FAQ</Link>
              <Link className="link-a" to="/ContactUs">Contact Us</Link>
            </div>
        </nav>
      </div>
      );
}
 
export default NavbarLink;