import React from "react";
import "./Hero.css";

const Hero = (props) => (
    <div className="cell medium-12">
        <img className="hero-img" src={props.img} alt=""/>
    </div>
);

export default Hero;