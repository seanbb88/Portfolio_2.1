import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="about-background">
        <div className="left-div">
          <h2 className="header2">About Me</h2> 
          <p className="about">
            Hello, my name is Sean Brown. I currently work for a manufacturing
            company in the Chicago area. I have always been interested in web
            design but have not pursued it until now. I'm looking to launch a
            new exciting career in web development! 
            <br />
            <br />
            I have sucessfully finished Northwestern Univirsities full-stack development 
            program and have learned skills to become a proficient frontend and backend developer
            such as: HTML, CSS, JavaScript, JQuery, Bootstrap, React.js,
            Node.js, Express.js, MySQL, and many more! 
            <br />
            <br />
            I am currently working on developing a few apps for a side project with a few partners 
            and futhering my knowledge in full-stack development. I am also focusing in 
            becoming proficient in React.js and have continued taking courses to obtain a wider 
            understanding of the framework. I am always interested in learning new things and web-development 
            has been a perfect platform for me to do this.  
          </p>

        </div>
        <div className="right-div">
          <div className="all-languages">
          <h2 className="languages-header">Areas of expertice</h2>
            <div className="languages">
              <i id="icon1" class="devicon-html5-plain-wordmark colored lang" />
              <i id="icon2" class="devicon-css3-plain-wordmark colored lang" />
              <i id="icon3" class="devicon-github-plain-wordmark colored lang" />
              <i id="icon4" class="devicon-express-original-wordmark colored lang" />
            </div>
            <div className="languages2">
              <i id="icon5" class="devicon-bootstrap-plain-wordmark colored lang" />
              <i id="icon6" class="devicon-javascript-plain colored lang" />
              <i id="icon7" class="devicon-jquery-plain-wordmark colored lang" />
              <i id="icon8" class="devicon-mongodb-plain-wordmark colored lang" />
            </div>
            <div className="languages3">
              <i id="icon9" class="devicon-mysql-plain-wordmark colored lang" />
              <i id="icon10" class="devicon-nodejs-plain colored lang" />
              <i id="icon11" class="devicon-python-plain-wordmark colored lang" />
              <i id="icon12" class="devicon-react-original-wordmark colored lang" />
            </div>
          </div>
        </div>
        <div className="about-div-left" />
        <div className="about-div-right" />
      </div>
    );
  }
}

export default About;
