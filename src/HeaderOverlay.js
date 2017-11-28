import React from 'react';
import $ from 'jquery';

class HeaderOverlay extends React.Component {
  constructor(props){
    super(props)
    this.state= {

    }
    this.handleLearnMore = this.handleLearnMore.bind(this);
  }
  handleLearnMore(){
    $('html, body').animate({
      scrollTop: $('#about').offset().top - 70
    }, 800);
  }
  render(){
    return (
      <div className="header">
        <div className=" wow fadeIn" data-wow-duration="3s">
          <img id="headerLogo" alt="headerLogo" src="/assets/whitelogo.png" />
          <h1 id="headerName"> Simon Zheng </h1> 
        </div>
        <h2 id="headerDescription" className= "wow fadeIn" data-wow-duration="3s" data-wow-delay="1s"> &lt; Full Stack Javascript Software Engineer /> </h2>
        <button id="learnMore" className=" wow fadeIn" data-wow-duration="3s" data-wow-delay="2s" onClick={this.handleLearnMore} >Learn more</button>
      </div>
    )
  }
}

export default HeaderOverlay;