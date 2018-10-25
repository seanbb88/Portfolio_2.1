import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: "none"
}

class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <Link style={linkStyle} to=""><h1 className="name-header">SB</h1></Link>
                    </div>
                    <nav className="navbar navbar-fixed-top-right col-sm-6 pull-right">
                    
                    <ul className="nav-list pull-right">
                        <li className="nav-item">About</li>
                        <li className="nav-item">Portfolio</li>
                        <li className="nav-item">Contact</li>
                    </ul>
                    
                    </nav>
                       
                </div>
            </div>
        )
    }
};

export default Navbar; 