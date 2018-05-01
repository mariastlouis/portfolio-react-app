import React from 'react';
import './skills.css';
import Cogs from 'react-icons/lib/fa/cogs';
import GitHub from 'react-icons/lib/fa/github';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import Envelope from 'react-icons/lib/fa/envelope';
import Profile from '../assets/profile-orange.png';
import Briefcase from '../assets/briefcase-orange.png';



   //       <h2 className = "skills-hed"> <img className = "woman-icon" src = {Profile} alt = "woman profile" /> What </h2>
     //     <p className = "skills-text"> I'm a data-journalist turned web designer/developer and have been visualizing data and making websites for more than five years.</p> 
       //   <p className = "skills-text"> I have a master's degree in web design from the University of Florida and recently graduated from the front-end engineering program at Turing School of Software & Design in Denver, CO. </p>
//<li> <span className = "bullet"> </span> <span className = "list-text"> <h3 className = "resume-head"> head </h3> <br /><p className = "resume-paragraph"> I'm putting a lot of text here. I mean a lot of text. There is text and text and text. </p></span>  </li>


// <ul className = "resume-list">
  //    <li> <span className = "bullet"> </span> <h3> Point 3 </h3> <p> Hello </p></li>
    //  <li> <span className = "bullet"> </span> Point 3 </li>
      //<li> <span className = "bullet"> </span> Point 4 </li>
   // </ul>
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
      <p> I'm a data-journalist turned web designer/developer and have been visualizing data and making websites for more than five years.
      I have a master's degree in web design from the University of Florida and recently graduated from the front-end engineering program at Turing School of Software & Design in Denver, CO. </p>
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
      <div class= "bullet"> </div>
      <div class = "resume-text">
        <h4> Here is some info </h4>
        <p> here is more info. Lots of info here. Lots and lots of info. More and more info. I want to see it break and see what happens here. here is more info. Lots of info here. Lots and lots of info. More and more info. I want to see it break and see what happens here.  </p>
      </div>
    </div>
    <div className = "resume-list-item">
      <div class= "bullet"> </div>
      <div class = "resume-text">
        <h3> Here is some info </h3>
        <p> here is more info </p>
      </div>
    </div>
    </div>
    </div>
   
  </div>
        </div>
        <div className = "skills skills-box">
          <div className = "cog-icon">
            <h2 className = "skills-hed"> <Cogs /> Skills </h2>
          </div>
          <div className = "full-skills-lists">
            <ul className = "skills-list">
              <li> HTML5/CSS3/SCSS</li>
              <li> JavaScript/JQuery </li>
              <li> SQL </li>
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
   