import React, { Component } from 'react';
import Navbar from './Navbar';
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
        <About />
        <Portfolio />
        <Contact />
        <Blog />
      </div>
    );
  }
}

export default App;
