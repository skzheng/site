import React from 'react';
import $ from 'jquery';
import Typed from 'typed.js';

class HeaderOverlay extends React.Component {
  constructor(props){
    super(props)
    this.state= {

    }
    this.handleLearnMore = this.handleLearnMore.bind(this);
  }
  componentDidMount(){
    const options = {
    	strings: 
        [
          '&lt; Full Stack Javascript Software Engineer />',
        ],
      typeSpeed: 50,
      backSpeed: 50,
      startDelay: 1000,
      showCursor: false
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
  handleLearnMore(){
    $('html, body').animate({
      scrollTop: $('#about').offset().top - 70
    }, 800);
  }
  render(){
    return (
      <div className="header">
        <div className="wow fadeIn" data-wow-duration="3s" data-wow-delay="1s">
          <img id="headerLogo" alt="headerLogo" src="/assets/whitelogo.png" />
          <h1 id="headerName"> Simon Zheng </h1> 
        </div>
        <div className="type-wrap wow fadeIn" data-wow-duration="3s" data-wow-delay="1s">
          <h2 className="typeHeader"
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
            >
          </h2>
        </div>
        {/* <h2 id="headerDescription" className= "wow fadeIn" data-wow-duration="3s" data-wow-delay="1s"> &lt; Full Stack Javascript Software Engineer /> </h2> */}
        <button id="learnMore" className=" wow fadeIn" data-wow-duration="3s" data-wow-delay="3s" onClick={this.handleLearnMore} >Learn more</button>
      </div>
    )
  }
}

export default HeaderOverlay;