import React from "react";
import "./Portfolio.css";
import fusebox from "../../media/fusebox.png";
import eatUpDisplay from '../../media/eatUpDisplay.jpg' 
import setlistr from '../../media/setlistr.png'
import findTheJewels from '../../media/findthejewels.png'
import eatUp from '../../media/eatUp.png'


class Portfolio extends React.Component {

  render() {
    return ( 
      <div className="portfolio-div">
        <div className="project1">
        <img src={eatUpDisplay} alt="display" className="display1"></img>
          <div className="inner-div1">
          <img src={eatUp} alt="eatUp" className="project-name1"></img>
          </div>
        </div>
        <div className="project2">
        <div className="inner-div2">
        <img src={fusebox} alt="fusebox" className="project-name2"></img>
        </div>
        </div>
        <div className="project3">
        <div className="inner-div3">
        <img src={setlistr} alt="setlistr" className="project-name3"></img>
        </div>
        </div>
        <div className="project4">
        <div className="inner-div4">
        <img src={findTheJewels} alt="find the jewels" className="project-name4"></img>
        </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;