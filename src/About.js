import React from 'react';
import $ from 'jquery';
import './Styles/About.css';

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  handleScroll(){
    $('html, body').animate({
      scrollTop: $('#portfolio').offset().top
    }, 800);
  }
  render(){
    return(
      <div id="about" >
        <div className="wow fadeIn" data-wow-duration="3s" data-wow-offset="300">
        <h1>About</h1>
        <div className="pic"></div>
        <div id="contacts">
          <img className="contactLogos" alt="linkedIn" src="/assets/linkedlogo.png" /><a className="aLink" href="https://www.linkedin.com/in/simonkzheng/"> LinkedIn </a>
          <img className="contactLogos" alt="github" src="/assets/githublogo.png" /><a className="aLink" href="https://github.com/skzheng"> GitHub </a>
          <img className="contactLogos" alt="gmail" src="/assets/gmaillogo.png" /><a className="aLink" href="mailto:simonkzheng@gmail.com"> simonkzheng@gmail.com </a>
        </div>
        <p id="aboutBio">Hello! My name is Simon K Zheng and I'm a Javascript web developer, born and raised in New York City. I have a passion for developing
          applications from ideation to production with my knowledge of technologies across the stack. 
          <br />
          <br />
          I graduated from Stony Brook University with B.S. in Applied Mathematics and Statistics in 2014, pursuing a career in education but have since switched 
          gears to pursue a life-long dream of software engineering. Currently seeking opportunities while following my interests for data, design, and dance. Check out some of my work below!
        </p>
        <img id="more" className="contactLogos" src="/assets/down.png" alt="down" onClick={this.handleScroll}/>
        <div className="slider"></div>
        </div>
      </div>
    )
  }
}

export default About;