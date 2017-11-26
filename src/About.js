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
      <div id="about">
      <h3> About me </h3>
      <div className="pic"></div>
      <h5>Simon Zheng</h5>
      <p>Software Engineer</p>
      <img className="contactLogos" alt="linkedIn" src="/assets/linkedlogo.png" /><a href="https://www.linkedin.com/in/simonkzheng/">LinkedIn</a>
      <img className="contactLogos" alt="github" src="/assets/githublogo.png" /><a href="https://github.com/skzheng">GitHub</a>
      <img className="contactLogos" alt="gmail" src="/assets/gmaillogo.png" /><p>simonkzheng@gmail.com</p>
      <p>Hey Yall affaoisjfsdoifjsofijsafojsdfo</p>
      </div>
    )
  }
}

export default About;