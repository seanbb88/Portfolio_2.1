import React from "react";
import { Line } from 'rc-progress';

import Northwestern from '../media/NW.png';
import UdemyCert from '../media/udemyReact.jpg'; 

class About extends React.Component {
    constructor(props) {
        super(props)

        this.state = { viewing: false }

        this.displayCert = this.displayCert.bind(this)
        this.hideCert = this.hideCert.bind(this)
    }

  

    render() {
        return (
            <div className="about-container">
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
                    <i id="resume" className="fas fa-file about-btn" alt="resume"></i>
                    <i id="github" className="fab fa-github-square about-btn" alt="github"></i>
                    <i id="linkedin" className="fab fa-linkedin about-btn" alt="linkedin"></i>
                </div>
                <div className="right-div">
                    <h2 className="know-div">What I can do: </h2>
                    <h3 className="languages">HTML/CSS</h3>
                    <Line className="languages-percent" percent="95" strokeWidth="3" trailWidth="2" strokeColor="#0276FD" />
                    <h3 className="languages">Python</h3>
                    <Line className="languages-percent" percent="40" strokeWidth="3" trailWidth="2" strokeColor="#00FA9A" />
                    <h3 className="languages">React/Redux.js</h3>
                    <Line className="languages-percent" percent="75" strokeWidth="3" trailWidth="2" strokeColor="#00FFFF" />
                    <h3 className="languages">MongoDB/SQL</h3>
                    <Line className="languages-percent" percent="50" strokeWidth="3" trailWidth="2" strokeColor="#A0522D" />
                    <h3 className="languages">Node.js/ES6</h3>
                    <Line className="languages-percent" percent="85" strokeWidth="3" trailWidth="2" strokeColor="#DAA520" />
                    <h3 className="languages">Github/Heroku</h3>
                    <Line className="languages-percent" percent="65" strokeWidth="3" trailWidth="2" strokeColor="#FF0000" />
                    <h3 className="languages">JavaScript/JQuery</h3>
                    <Line className="languages-percent" percent="90" strokeWidth="3" trailWidth="2" strokeColor="#8A2BE2" />
                    <h3 className="certifications">Certifications:</h3>
                    <div className="certifications-div">
                        <i onClick={this.displayCert} id="react-icon" class="devicon-react-original-wordmark colored lang" />
                        <img className="NW-logo" src={Northwestern} alt="Northwestern"></img>
                    </div>
                </div>
                <div className={this.state.viewing ? "certifications-display-show" : "certifications-display-hidden"}>
                    <img className="udemy-cert" src={UdemyCert} alt="certifications"></img>
                    <button onClick={this.hideCert} className="cert-btn">x</button>
                </div>

            </div>

        );
    }

    displayCert(){
        this.setState({viewing: true})
    }

    hideCert(){
        this.setState({viewing: false})
    }


}
export default About;