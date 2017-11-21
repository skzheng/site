import React from 'react';
import './Styles/Navbar.css';

class Navbar extends React.Component {
  render(){
    return (
      <div className='sticky'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-brand logo" src='/assets/myLogo.png'></div>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Portfolio</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="">Blog</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
