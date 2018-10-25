import React, { Component } from 'react';

import SetListr from '../media/setlistr.png'; 
import FuseBox from '../media/fusebox.png'; 
import RunTheJewels from '../media/findthejewels.png'
import EatUp from "../media/eatupb.png"; 

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = { viewing: false }
    }
    render() {
        return (
            <div className="portfolio-div-container">
                <div className="portolio-div">
                    <div className="inner-div">
                    <img className="jewels-img" src={RunTheJewels} alt="find the jewels"></img>
                    </div>
                </div>
                <div className="portolio-div">
                    <div className="inner-div">
                    <img className="setlistr-img" src={SetListr} alt="Setlistr"></img>
                    </div>
                </div>
                <div className="portolio-div">
                    <div className="inner-div">
                    <img className="eatup-img" src={EatUp} alt="eatUp"></img>
                    </div>
                </div>
                <div className="portolio-div">
                    <div className="inner-div">
                    <img className="fusebox-img" src={FuseBox} alt="Fusebox"></img>
                    </div>
                </div>
                <div className="jewels-preview"></div>
            </div>
        )
    }

}

export default Portfolio; 