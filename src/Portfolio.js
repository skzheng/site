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
      <div>
        <h3> Previous Work </h3>

        <div className="hackerArena work">
          <div className="description">
          <h4> Hacker Arena </h4>
          <p>Hacker Arena is an online multiplayer application where programmers can compete against others in real time to finish coding challenges.</p>
          </div>
        </div>

        <div className="legacyLearning work">
          <div className="ml-auto description">
          <h4> Legacy Learning </h4>
          <p>A   platform   for   teachers   and   students   to   create   and   access   course   material   in   an   organized   manner.</p>
          </div>
        </div>

        <div className="snackReactor work">
          <div className="description">
          <h4> Snack Reactor</h4>
          <p>Food   finder   application   to   help   indecisive   users   choose   meals   by   fetching   businesses   within   walking   distance.</p>
          </div>
        </div>

        <div className="partyStarty work">
          <div className="ml-auto description">
          <h4> Party Starty </h4>
          <p>Event   planning   application   for   gathering   general   consensus   of   interest   in   activities.</p>
          </div>
        </div>

      </div>
    )
  }
}

export default Portfolio;