import React from "react";
import "./Home.css";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Details from "../../components/Details";

const images = require("../../images.json");

const Home = () => (
    <div className="grid-x medium-12">
    	<Hero img="../../homeBanner.png"/>
    	<Features />
    	<Details />
    </div>
);

export default Home;