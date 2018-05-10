import React from "react";
import Hero from "../../components/Hero";
import "./About.css";

const aboutInfo = require ("../../aboutInfo.json");
const homeBanner = require("../../images/homeBanner.png");

const About = () => (
  <div className="about-content">
    <Hero img={homeBanner} />
      <div className="about-text">
          <p>{aboutInfo.section1}</p>
          <p>{aboutInfo.section2}</p>
          <p>{aboutInfo.section3}</p>
      </div>
  </div>
    
);

export default About;
