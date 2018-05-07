import React from "react";
import "./Home.css";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Details from "../../components/Details";

const homeBanner = require("../../images/homeBanner.jpg");

const Home = () => (
    <div className="grid-x medium-12">
    	<Hero img={homeBanner} />
    	<Features />
    	<Details />
    </div>
);

export default Home;