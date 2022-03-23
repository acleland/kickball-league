import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/teams">Teams</NavLink>
        </li>
        <li>
          <NavLink to="/players">Players</NavLink>
        </li>
      </ul>
    </nav>
  );
}
