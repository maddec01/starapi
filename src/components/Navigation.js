import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to={ROUTES.LANDING}>Home</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.APP_1}>StarWars</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.ABOUT}>About</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;