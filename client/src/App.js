import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import About from "./Pages/About";
// import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
// import Portfolio from "./Pages/Portfolio";

import "./App.css";


const App = () => (
  <Router>
    <div className="main-body">
      <Home />
      <About />
 
      
  
    </div>
  </Router>
);

export default App;