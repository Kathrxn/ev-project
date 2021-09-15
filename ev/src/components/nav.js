import React from 'react';
import {Link} from 'react-router-dom';

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
        <li>
          <Link to='/scoring'>Scoring</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
