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
      <p>Hey Yall affaoisjfsdoifjsofijsafojsdfo</p>
      </div>
    )
  }
}

export default About;