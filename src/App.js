import React, { Component } from 'react';
import Navbar from './Navbar';
import Particles from 'react-particles-js';
import HeaderOverlay from './HeaderOverlay';
import About from './About';
import Portfolio from  './Portfolio';
import Projects from './Projects';
import Contact from './Contact';
import Blog from './Blog';
import WOW from 'wowjs';
// import * as $ from 'jquery';
import './Styles/App.css';


class App extends Component {
  componentDidMount(){
    new WOW.WOW({live:false}).init();
  }
  render() {
    const mq = window.matchMedia("(min-width:700px)");
    return (
      <div className="App wow fadeIn" data-wow-duration="2s" data-spy="scroll" data-target="navbarScroll">
        <Navbar />
        <HeaderOverlay />
        <Particles 
              className="particlesHeader"
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 0
            				}
                  },
                  number :{
                    value : (mq.matches ? 100 : 40)
                  },
                  size : {
                    value : 3,
                    random : true
                  }
                },
                interactivity : {
                  detect_on: 'canvas',
                  events: {
                    onhover: {
                      enable: true,
                      mode: 'grab'
                    },
                    onclick: {
                      enable: true,
                      mode: 'repulse'
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 200,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    repulse: {
                      distance: 300,
                      duration: .1
                    }
                  }
                }
              }}
            />
        <About />
        <Portfolio />
        <Projects />
        <Contact />
        <Blog />
      </div>
    );
  }
}

export default App;
