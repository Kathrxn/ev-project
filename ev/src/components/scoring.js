import React from 'react';
import {Link} from 'react-router-dom';

function Scoring(){
  return(
    <div>
      <div className="scorecard">
        <div className='scorestart'>All users start with a score of 0</div>
        <ol>
          <li className='scoreq'>What is your postcode? (Public EV charging points within a 5-mile radius)
            <ul className='scorescore'>
              <li>100+ = 15+</li>
              <li>10+ = 10+</li>
              <li>5+ = 5+</li>
            </ul>
          </li>
          <li className='scoreq'>Do you have off-road parking available?
            <ul className='scorescore'>
              <li>Yes = +40</li>
              <li>No = 0</li>
            </ul>
          </li>
          <li className='scoreq'>Do you have EV charging points available at your workplace?
            <ul className='scorescore'>
              <li>Yes = +15</li>
              <li>No = 0</li>
            </ul>
          </li>
          <li className='scoreq'>What range would you need your EV to do on a full single charge?
            <ul className='scorescore'>
              <li>300+ = -10</li>
              <li>200-299 = +5</li>
              <li>100-199 = +10</li>
              <li>0-99= +15</li>
            </ul>
          </li>
          <li className='scoreq'>If you were to buy an EV would there also be a petrol/diesel car at your household?
            <ul className='scorescore'>
              <li>Yes = +15</li>
              <li>No = 0</li>
            </ul>
          </li>
          <li className='scoreq'>What would be your budget to buy a brand new EV?
            <ul className='scorescore'>
              <li>0-19,000 = -15</li>
              <li>20,000-39,999 = 0</li>
              <li>40,000-59,999 = 0</li>
              <li>60,000+ = 0</li>
            </ul>
          </li>
        </ol>
        <div className='scorebutton'>
          <Link className='buttonn' to='/ev-project'>Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Scoring;
