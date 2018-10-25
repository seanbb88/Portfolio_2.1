import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './navbar';
import LandingPage from './landing_page';
import About from '../containers/about'; 
import Portfolio from '../containers/portfolio'; 
// import Contact from '../containers/contact'; 


export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="whole-site">
                    <div className="landing-page">
                        <Navbar />
                        <LandingPage />
                    </div>
                    <About />
                    <Portfolio />
                    {/* <Contact /> */}
                </div>
            </Router>
        )
    }
}