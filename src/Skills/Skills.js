import React from 'react';
import './skills.css';
import Cogs from 'react-icons/lib/fa/cogs';
import Code from 'react-icons/lib/fa/code';
import GitHub from 'react-icons/lib/fa/github';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import Envelope from 'react-icons/lib/fa/envelope';
import Profile from '../assets/profile-orange.png';
import Briefcase from '../assets/briefcase-orange.png';
import Graduate from '../assets/graduate-orange.png';


export default function Skills () {
  return (
    <div className = "skills" id="skills-section">
      <div className = "skills-top">
        <div className = "intro">
          <div className = "resume-list">
            <div className = "category-head">
              <div className = "icon-img">
                <img className = "list-icon" src = {Profile} alt = "profile image" />
              </div>
              <div className = "category-description">
                <h3> About me </h3>
                <p> I'm a data-journalist turned web designer/front end developer and have been visualizing data and making websites for more than five years.
                  I have a master's degree in web design from the University of Florida and recently graduated from the front-end engineering program at the Turing School of Software & Design in Denver, CO. </p>
              </div>
          </div>
          <div className = "category-head">
            <div className = "icon-img">
              <img className = "list-icon" src = {Briefcase} alt = "briefcase" />
            </div>
            <div className = "category-description">
              <h3> Experience </h3>
            </div>
          </div>
          <div className = "full-resume-list">
            <div className = "left-border">
              <div className = "resume-list-item">
                <div className= "bullet"> </div>
                <div className = "resume-text">
                  <h4> APPRENTICE DEVELOPER, Haught Codeworks</h4>
                  <p className = "light">May 2018-Present </p>
                  <ul>
                    <li> I contribute to the Haught Codeworks site including building a new contact form, eBook landing page and monthly custom-designed newsletter.</li>
                  </ul>
                </div>
              </div>
              <div className = "resume-list-item">
                <div className= "bullet"> </div>
                <div className = "resume-text">
                  <h4> METRO EDITOR DIGITAL, The Colorado Springs Gazette</h4>
                  <p className = "light">2016-2017 </p>
                    <ul>
                      <li> Led a group of 20 reporters to produce digital content, breaking news and daily stories.</li>
                      <li> Thrived in a fast-paced, competitive, analytics-focused atmosphere.</li>
                    </ul>
                </div>
              </div>
              <div className = "resume-list-item">
                <div className= "bullet"> </div>
                <div className = "resume-text">
                  <h4> DATABASE EDITOR, The Colorado Springs Gazette</h4>
                  <p className = "light">2009-2016 </p>
                  <ul>
                    <li> Team lead and digital designer for data-focused investigative stories.</li>
                    <li> Focused on obtaining and visualizing data including data-driven maps, searchable databased and interactive charts.</li>
                  </ul>
                </div>
              </div>
              <div className = "resume-list-item">
                <div className= "bullet"> </div>
                <div className = "resume-text">
                  <h4> CONTRACT WEB DESIGNER, Self-employed</h4>
                  <p className = "light">2007-Present </p>
                  <ul>
                    <li> Design websites for non-profits and small businesses either from scratch or customized WordPress templates.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        <div className = "category-head">
          <div className = "icon-img">
            <img className = "list-icon" src = {Graduate} alt = "briefcase" />
          </div>
          <div className = "category-description">
            <h3> Education</h3>
          </div>
        </div>
        <div className = "full-resume-list">
          <div className = "left-border">
            <div className = "resume-list-item">
              <div className= "bullet"> </div>
              <div className = "resume-text">
                <h4> FRONT END ENGINEERING CERTIFICATE, Turing School of Software and Design</h4>
                <p className = "light">August 2017 - March 2018 </p>
                <ul>
                  <li>A 1500-hour front end engineering program focused on teaching the latest web development languages, libraries and frameworks. 
                  </li>
                </ul>
              </div>
            </div>
            <div className = "resume-list-item">
              <div className= "bullet"> </div>
              <div className = "resume-text">
                <h4> MASTER'S DEGREE IN WEB DESIGN AND ONLINE COMMUNICATIONS, University of Florida</h4>
                <p className = "light">2009-2016 </p>
                <ul>
                  <li> A two-year program focused primarily on web design and visual branding. Degree provided a solid foundation in HTML, CSS, responsive design and image creation and editing</li>
                </ul>
              </div>
            </div>
            <div className = "resume-list-item">
            <div className= "bullet"> </div>
            <div className = "resume-text">
              <h4> BACHELOR'S DEGREES IN JOURNALISM AND ENGLISH, Colorado State University</h4>
              <p className = "light">1998-2003 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div className = "skills skills-box">
      <div className = "skills-icon">
        <h2 className = "skills-hed"> Languages</h2>
      </div>
      <div className = "full-skills-lists">
        <ul className = "skills-list">
          <li> HTML5/CSS3/SCSS</li>
          <li> JavaScript/JQuery </li>
          <li> SQL </li>
        </ul>
      </div>
      <div className = "skills-icon">
        <h2 className = "skills-hed">Frameworks/Skills </h2>
      </div>
      <div className = "full-skills-lists">
        <ul className = "skills-list">
          <li> React </li>
          <li> Redux</li>
          <li> Node </li>
          <li> Express/Knex</li>
          <li> Git/Github </li>
          <li> Fetch/asynchronous API calls </li>
          <li> PostgreSQL</li>
          <li> Test-driven development </li>
          <li> Adobe Photoshop </li>
          <li> Adobe Illustrator </li>
          <li> WordPress</li>
          <li> Data analysis</li>
          <li> Interactive Mapping</li>
          <li> Content development</li>
        </ul>
      </div>
    </div>
  </div>
</div>
  );
}
   