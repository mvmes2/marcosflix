import React from 'react';
import logo from '../imgs/logo.png';
import profileLogo from '../imgs/profile_logo2.png';

const Header = () => {
  return (
    <header>
      <div className="header--logo">
        <a href="/">
          <img alt="logo" src={logo} />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img alt="logo" src={profileLogo} />
        </a>
      </div>
    </header>
  );
}

export default Header;
