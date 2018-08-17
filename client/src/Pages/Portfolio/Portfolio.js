import React from "react";
import "./Portfolio.css";
import waterVideo from '../../media/water-full.gif';

class Portfolio extends React.Component {

  render() {
    return (
      <div className="water-container">
        <img className="water-gif" src={waterVideo} alt="loading..." />
        <div className="portfolio-btns">
          <button className="actual-btn" type="submit">Item 1</button>
          <button className="actual-btn" type="submit" > Item 2 </button>
          <button className="actual-btn" type="submit" > Item 3 </button>
        </div>
        <div className="portfolio-btns2">
          <button className="actual-btn" type="submit">Item 4</button>
          <button className="actual-btn" type="submit" > Item 5 </button>
          <button className="actual-btn" type="submit" > Item 6 </button>
        </div>
        <div className="portfolio-btns3">
          <button className="actual-btn" type="submit">Item 4</button>
          <button className="actual-btn" type="submit" > Item 5 </button>
          <button className="actual-btn" type="submit" > Item 6 </button>
        </div>
      </div>
    );
  }
}

export default Portfolio;