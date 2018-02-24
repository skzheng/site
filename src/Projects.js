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

        {/* <div className="project wow fadeIn" data-wow-duration="2s">
          <div className="project-description">
            <h2 className="project-title"> ??? </h2>
            <img className="project-pic" src=""/>
            <p className="mainDescription">
              For the logophile who doesn't want to be late and hates numbers.
            </p>
            <a className="hoverLink visitSite" href="">Visit site</a>
          </div>
        </div> */}

        </div>

      </div>
    )
  }
}

export default Projects;