import React from 'react';
import './Styles/Projects.css';

class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <h1 id="projectsHeader"> Projects </h1>

        <div id="projects-container">
          
          <div className="randp project wow fadeIn" data-wow-duration="2s">
            <div className="description">
              <h2 className="project-title"> Rappers and Pemdas </h2>
              <div className="line"/>
              <img className="project-pic" src="/assets/randp.png"/>
              <p className="mainDescription">
                Practice some PEMDAS with some rappers!
              </p>
              <a className="hoverLink visitSite" href="https://rappersandpemdas.firebaseapp.com/">Visit site</a>
            </div>
          </div>

        <div className="randp project wow fadeIn" data-wow-duration="2s">
          <div className="description">
            <h2 className="project-title"> The Word Clock </h2>
            <div className="line"/>
            <img className="project-pic" src="/assets/wordclock.png"/>
            <p className="mainDescription">
              For the logophile who doesn't want to be late and hates numbers.
            </p>
            <a className="hoverLink visitSite" href="https://wordclock-826a3.firebaseapp.com/">Visit site</a>
          </div>
        </div>

        </div>

      </div>
    )
  }
}

export default Projects;