import React from 'react';
import './about.css'
import Scrollchor from 'react-scrollchor';
import Paintbrush from '../assets/paintbrush.png';
import Engineer from '../assets/engineer.png';
import Graph from '../assets/graph.png'


export default function About(props) {
 
  return (
    <div className = "about-section" id = "about">
      <div className = "headline-div">
        <h1 className = "about-hed"> A <span className = "heavy"> UNIQUE </span> COMBINATION </h1>
      </div>
      <div className = "about-inner-container">
        <div className = "about-card designer">
          <div className = "about-icon">
           <img className = "about-image-icon" src = {Paintbrush} alt = "paintbrush" />
          </div>
          <h3 className = "about-card-head"> Designer </h3>
          <p> Lover of fonts and color palettes </p>
        </div>
         <div className = "about-card data">
          <div className = "about-icon">
           <img className = "about-image-icon" src = {Graph} alt = "graph"/>
          </div>
          <h3 className = "about-card-head">Data-Driven</h3>
          <p> API and database addict</p>
        </div>
        <div className = "about-card engineer">
          <div className = "about-icon">
           <img className = "about-image-icon" src = {Engineer} alt = "cog" />
          </div>
          <h3 className = "about-card-head"> Front End Developer </h3>
          <p className = "about-card-text"> That wonderful place where left and right brains meet </p>
        </div>
      </div>
    </div>
   
  );
}


