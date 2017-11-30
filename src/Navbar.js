import React from 'react';
import $ from 'jquery';
import './Styles/Navbar.css';

class Navbar extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    $(".nav-link").on("click", function() {
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    });
  }
  handleScroll(e){
    e.preventDefault();
    let loc = $(e.target).data('link');
    if(loc === "top"){
      $('html, body').animate({
        scrollTop: 0
      }, 800);
    } else {
      $('html, body').animate({
        scrollTop: $(loc).offset().top - 80
      }, 800);
    }
  }
  render(){

    return (
      <div id="navbarScroll" className='sticky'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-brand logo" src='/assets/myLogo.png'  onClick={this.handleScroll} data-link="top"></div>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" onClick={this.handleScroll} data-link="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={this.handleScroll} data-link="#portfolio">Portfolio</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="">Blog</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" onClick={this.handleScroll} data-link="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
