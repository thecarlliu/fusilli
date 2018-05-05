import React from "react";
import "./Home.css";
import Nav from "../../components/Nav";
// import Hero from "../../components/Hero";
import About from "../../components/About";
// import Drinks from "../../components/Drinks";
// import Menu from "../../components/Menu";
import Reservations from "../Reservations";
import Footer from "../../components/Footer";

const images = require("../../images.json"); //need to change this path

const Home = () => (
    <div className="grid-x medium-12">
        {/* <Drinks /> */}
        {/* <Menu /> */}
        <Reservations />
    </div>
);

export default Home;