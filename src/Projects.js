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
              <img className="project-pic" src="/assets/randp.png"/>
              <p className="mainDescription project-description">
                A math game to practice your order of operations with the help of some well known musicians.
                Written in vanilla JS as part of the JS30 series.
              </p>
              <a className="hoverLink visitSite" href="https://rappersandpemdas.firebaseapp.com/">Visit site</a>
            </div>
          </div>

        <div className="randp project wow fadeIn" data-wow-duration="2s">
          <div className="description">
            <h2 className="project-title"> The Word Clock </h2>
            <img className="project-pic" src="/assets/wordclock.png"/>
            <p className="mainDescription project-description">
              For the logophile that hates numbers and doesn't want to be late. 
              Written in vanilla JS as part of the JS30 series.
              <br/>
            </p>
            <a className="hoverLink visitSite" href="https://wordclock-826a3.firebaseapp.com/">Visit site</a>
          </div>
        </div>

        <div className="pbp project wow fadeIn" data-wow-duration="2s">
          <div className="project-description">
            <h2 className="project-title"> Powered By Pulsd </h2>
            <img className="project-pic" src="/assets/pbp.png"/>
            <p className="mainDescription">
              Demo for a React component compiled as a widget library with webpack. 
              Used for content syndication for an event based site.
              <br />
            </p>
            <a className="hoverLink visitSite" href="https://github.com/skzheng/pulsd">Visit Github</a>
          </div>
        </div>

        </div>

      </div>
    )
  }
}

export default Projects;