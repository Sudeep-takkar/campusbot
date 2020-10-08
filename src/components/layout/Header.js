import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { setupHeaderBg } from '../../assets/js/main';
import logo from './../../assets/logo.jpg';

class Header extends Component {
  componentDidMount() {
    setupHeaderBg();
  }

  render() {
    return (
      <header className="site-header">
        <div className="container">
          <div className="site-header-large-bg"><span></span></div>
          <div className="site-header-inner">
            <div className="brand header-brand">
              <h1 className="m-0">
                <Link to="/">
                  {/* <img src={logo} alt="Logo" /> */}
                  {/* <Logo /> */}
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
