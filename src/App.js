import React, { Component } from 'react';
import Navbar from './Navbar';
import Particles from 'react-particles-js';
import HeaderOverlay from './HeaderOverlay';
import About from './About';
import Portfolio from  './Portfolio';
import Contact from './Contact';
import Blog from './Blog';

import './Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
                    value : 100
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
        <Contact />
        <Blog />
      </div>
    );
  }
}

export default App;
