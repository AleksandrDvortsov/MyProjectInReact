import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.scss';

function Menu() {
  return (
    <ul id="menu">
      <li><NavLink exact to = "/">home</NavLink></li>
      <li><NavLink to = "/projects">project</NavLink></li>
      <li><NavLink to = "/aboutMe">about me</NavLink></li>
      <li><NavLink to = "/contact">contact</NavLink></li>
    </ul>
  );
}

export default Menu;
