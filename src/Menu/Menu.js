import React from 'react';
import './menu.css'
import Scrollchor from 'react-scrollchor';
import GitHub from 'react-icons/lib/fa/github';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import Download from 'react-icons/lib/fa/download';
import Logo from '../assets/name_logo.png';



export default function Menu() {
  return (
    <div className = "main-menu" id="menu">
        <div className = "main-img">
          <div className = "main-content">
            <div className = "title">
              <img className = "name-logo" src = {Logo} alt = "Maria St. Louis-Sanchez"/>
              <div className = "button-bar">
              <button className = "nav-button"> <Scrollchor to="#skills-section" className="nav-link">Skills</Scrollchor> </button>
              <button className = "nav-button"> <Scrollchor to="#portfolio" className="nav-link">Portfolio</Scrollchor> </button>
              </div>
               <div className = "icon-bar">
                <a className = "social-link github-link" href = "https://github.com/mariastlouis"> <GitHub /> </a>
                <a className = "social-button" href = "http://www.mariastlouissanchez.com/mariaSanchezResume.pdf" download> <button className = "resume-link"> RESUME <Download /></button> </a>
                <a className = "social-link linkedin-link" href = "https://www.linkedin.com/in/mariastlouissanchez/"> <LinkedIn /> </a>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}
           