import React from 'react';

class HeaderOverlay extends React.Component {
  constructor(props){
    super(props)
    this.state= {

    }
    this.handleLearnMore = this.handleLearnMore.bind(this);
  }
  handleLearnMore(){
    alert('YP');
  }
  render(){
    return (
      <div className="header">
        <img id="headerLogo" alt="headerLogo" src="/assets/whitelogo.png" />
        <h1 id="headerName"> SIMON ZHENG </h1> 
        <h1 id="headerDescription"> Full Stack Javascript Software Engineer </h1>
        <button id="learnMore" onClick={this.handleLearnMore} >Learn more</button>
      </div>
    )
  }
}

export default HeaderOverlay;