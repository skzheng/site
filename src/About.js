import React from 'react';
import './Styles/About.css';

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div id="about" >
        <div className="wow fadeIn" data-wow-duration="3s" data-wow-offset="300">
        <h1>About</h1>
        <div className="underline"></div>
        <div className="pic"></div>
        <h5>Simon Zheng</h5>
        <p>Software Engineer</p>
        <img className="contactLogos" alt="linkedIn" src="/assets/linkedlogo.png" /><a className="aLink" href="https://www.linkedin.com/in/simonkzheng/">LinkedIn</a>
        <img className="contactLogos" alt="github" src="/assets/githublogo.png" /><a className="aLink" href="https://github.com/skzheng">GitHub</a>
        <img className="contactLogos" alt="gmail" src="/assets/gmaillogo.png" /><a>simonkzheng@gmail.com</a>
        <p></p>
        </div>
      </div>
    )
  }
}

export default About;