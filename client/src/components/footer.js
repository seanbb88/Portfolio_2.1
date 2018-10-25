import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <a
                    className="team-name"
                    href="https://github.com/seanbb88"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="my-name"> &copy; Sean Brown portfolio 2018</p>
                </a>

                <Link className="footer-btn footer-btn-link" to="/contact">
                    Contact
                </Link>

            </footer>
        )
    }


};

export default Footer; 