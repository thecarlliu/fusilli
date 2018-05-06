import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Drinks from "./pages/Drinks";
import Reservations from "./pages/Reservations";
import "./App.css";

const App = () => (

    <Router>
        <div>
            <Nav />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/drinks" component={Drinks} />
                <Route exact path="/reservations" component={Reservations} />
            </Switch>

            <Footer />
        </div>
    </Router>

);

export default App;
