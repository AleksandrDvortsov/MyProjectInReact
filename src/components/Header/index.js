import React from 'react';
import './style.scss';
import Menu from '../Menu';
import logo from '../../img/logo.png'

function Header() {
  return (
    <div id='header'>
      <img src={logo} />
      <div id='pages'>
        <Menu />
      </div>
    </div>
  );
}

export default Header;
