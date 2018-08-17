import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


export default () => ( 

  <nav className="navbar navbar-expand-lg navbar-light nav-container"> 

  <Link to="/home"><h1 className="name-header">Sean Brown</h1></Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      
      <li className="nav-item">
      <Link  className="btn-nav" to="/about">About</Link>
      </li>
      
      <li className="nav-item">
      <Link className="hide-btn" to="/portfolio">Portfolio</Link>
      </li>           

    </ul>
  </div>

</nav>
);