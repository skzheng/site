import React from 'react';
import './Styles/Portfolio.css';

class Portfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div id="portfolio" className=" wow fadeIn" data-wow-duration="2s" data-wow-offset="300">
        <h1 id="portfolioHeader"> Portfolio </h1>

        <div className="hackerArena work">
          <div className="description">
            <h2 className="portHeader"> Hacker Arena </h2>
            <p className="text-muted small">Hacker Arena is an online multiplayer application where programmers can compete against others in real time to finish coding challenges.</p>
            <div className="line"></div>
            <p>Afsdfjsafoisdjfoisfjfjiasoifjsdofjsdofsdf\ndijfosdijfsodifjdfoisdf/nfiasujf</p>
            <a className="hoverLink visitSite" target="_blank" href="https://hacker-arena.com/">Visit site</a>
          </div>
          <div>
              <img className="workSS" alt="img" src="/assets/HA.png"/>
          </div>
        </div>

        <div className="legacyLearning work">
          <div>
              <img className="workSS" alt="img" src="/assets/LL.png"/>
          </div>
          <div className="description">
            <h2 className="portHeader"> Legacy Learning </h2>
            <p className="text-muted small">A   platform   for   teachers   and   students   to   create   and   access   course   material   in   an   organized   manner.</p>
            <div className="line"></div>
            <p>sdfadfsfsdfsafasdfsdfssadfdsFFSADFSDFsdfasdfdsf</p>
          </div>
        </div>

        <div className="snackReactor work">
          <div className="description">
            <h2 className="portHeader"> Snack Reactor</h2>
            <p className="text-muted small">Food   finder   application   to   help   indecisive   users   choose   meals   by   fetching   businesses   within   walking   distance.</p>
            <div className="line"></div>
            <p>dfasdfdsfsdafsdfsdfsdfsdf</p>
          </div>
          <div>
              <img className="workSS" alt="img" src="/assets/SR.png"/>
          </div>
        </div>

        <div className="partyStarty work">
          <div>
              <img className="workSS" alt="img" src="/assets/PS.png"/>
          </div>
          <div className="description">
            <h2 className="portHeader"> Party Starty </h2>
            <p className="text-muted small">Event   planning   application   for   gathering   general   consensus   of   interest   in   activities.</p>
            <div className="line"></div>
            <p>asdfsdfsdfdsfdfsfdfd</p>
          </div>
        </div>

      </div>
    )
  }
}

export default Portfolio;