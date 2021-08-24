import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
  return(
    <div>
      <div>homepage</div>
      <button>
        <Link id='button' to='/form'>Get Started</Link>
      </button>
    </div>
)}

export default Home;
