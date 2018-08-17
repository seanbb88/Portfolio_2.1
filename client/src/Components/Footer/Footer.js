import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default () => (
  <footer className="footer"> 
    <a
      className="team-name"
      href="https://github.com/seanbb88"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className="my-name"> &copy; Sean Brown portfolio 2018</p>
    </a>
    <a className="footer-btn">
      <Link className="footer-btn-link" to="/contact">
        Contact
      </Link>
    </a>
  </footer>
);