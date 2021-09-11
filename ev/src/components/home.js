import React from 'react';
import {Link} from 'react-router-dom';
import evs from '../styles/evs.jpg';
import {motion} from 'framer-motion';
import {photoAnim} from '../animation'
import {pageAnimation} from '../animation';

function Home(){
  return(
  <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
    <div className='homepage'>
      <div className="description">
        <h1>Is an electric car right for you?</h1>
        <h3>Take the quiz to find out!</h3>
          <Link className='buttonn' to='/form'>Get Started</Link>
          <Link className='buttonnnn' to='/more'>More Info</Link>
      </div>
      <div className='image'>
        <motion.img variants={photoAnim} src={evs} alt="electric car"/>
      </div>
    </div>
  </motion.div>
)}

export default Home;
