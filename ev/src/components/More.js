import React from 'react';
import {Link} from 'react-router-dom';

function More(){
  return(
    <div>
      <div className="morecard">
        <p className='morep'>This website aims to provide you with an answer to the question 'Is an Electric Car Right for you?'</p>
        <p className='morep'>You will be asked 6 questions to determine how suitbale electric car is for you.</p>
        <p className='morep'>After answering these questions you will be provided with a score out of 100. If your score is 70 or more then an Electric Car would most lileyly be perfect for you.
          If you score is between 30 and 70 then an electric car might be right for you but you migth want to do some more research into it.
          If your score is less than 30 then it is very unlikely that an electric car would be right for you.</p>
          <p className='morep'>In addition to your score you will also be provided with a selection of electric cars that would suit you based on your required range for the vehicle and your budget.</p>
          <p className='moreplast'>After getting your result, make sure to check out the 'Other things to consider' section.</p>
          <Link className='buttonn' to='/ev-project'>Home</Link>
      </div>
    </div>
  )
}

export default More;
