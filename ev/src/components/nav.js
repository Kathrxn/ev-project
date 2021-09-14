import React from 'react';
import {Link} from 'react-router-dom';
import Home from './home';

function Nav(){
  return(
    <nav>
      <h1><Link id='logo' to='/ev-project'>Is an EV right for you?</Link></h1>
      <ul>
        <li>
          <Link to='/ev-project'>Home</Link>
        </li>
        <li>
          <Link to='/more'>More Info</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;