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
import Modal from 'react-modal';
// import * as $ from 'jquery';
import './Styles/App.css';

const mq = window.matchMedia("(min-width:700px)");

class App extends Component {
  constructor(){
    super()
    this.state = {
      modalOpen : false,
      modalContent: ''
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount(){
    new WOW.WOW({live:false}).init();
    
    let zoomies = Array.from(document.getElementsByClassName('modal-image'));
    zoomies.forEach(item => {
      item.addEventListener('click', () => {
        if(mq.matches){
          this.openModal();
          let parent = document.getElementById('modalparent');
          parent.style.background = `url('${item.src}') no-repeat`;

        }
      })
    })
    
  }

  openModal() {
    this.setState({modalOpen: true});
  }
  closeModal() {
    this.setState({modalOpen: false});
  }
  render() {
    
    const customStyles = {
      content : {
        width: mq ? '70vw' : '100%',
        height: mq ? '45vw' : '100%',
        margin: 'auto',
        
        // top                   : '50%',
        // left                  : '50%',
        // right                 : 'auto',
        // bottom                : 'auto',
        // marginRight           : '-50%',
        // transform             : 'translate(-50%, -50%)'
      }
    };
    // let modalparent = document.createElement('div');
    // modalparent.setAttribute('id', 'modalparent');    
    return (
      <div className="App wow fadeIn" data-wow-duration="2s" data-spy="scroll" data-target="navbarScroll">
        <Navbar />
       { mq.matches ? 
        <Modal
        isOpen={this.state.modalOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
      <div id="modalparent">
      </div>
      <button id="close-modal" onClick={this.closeModal}>X</button>
      </Modal>
        : null}
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
