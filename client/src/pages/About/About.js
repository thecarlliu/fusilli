import React from "react";
import Hero from "../components/Hero";
import "./About.css";

const aboutInfo = require ("../../aboutInfo.json");

const About = () => (
  <div>
    <Hero img={aboutInfo.image}/>
    <p>{aboutInfo.section1}</p>
    <p>{aboutInfo.section2}</p>
    <p>{aboutInfo.section3}</p>
  </div>
    
);

export default About;
