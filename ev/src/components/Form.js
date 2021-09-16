import React, {useState} from 'react';
import YourCars from './YourCars';
import Other from './Other';
import Garages from './Garages'
import Grants from './Grants';
import Costs from './costs';
import Nav from './nav';
import axios from 'axios';
import {motion} from 'framer-motion';
import {pageAnimation,photoAnim} from '../animation';

function Form({cars, setCars}){
  const [postcode, setPostcode] = useState('')
  const [parking, setParking] = useState('yes')
  const [work, setWork] = useState('yes')
  const [range, setRange] = useState('0-99')
  const [otherCar, setOtherCar] = useState('yes')
  const [budget, setBudget] = useState('0-19999')
  const [finalScore, setFinalScore] = useState('')
  const [noOfChargers, setNoOfChargers] = useState('')
  const chargePoints = ''
  const [isSubmitted, setIsSubmitted] = useState(false)
  //events
  function inputPostcode(e){
    setPostcode(e.target.value);
  };
  function inputParking(e){
    setParking(e.target.value);
  };
  function inputWork(e){
    setWork(e.target.value);
  };
  function inputRange(e){
    setRange(e.target.value);
  };
  function inputOtherCar(e){
    setOtherCar(e.target.value);
  };
  function inputBudget(e){
    setBudget(e.target.value);
  };
  function submitted(){
    if(finalScore < 30){
    return(
      <div>
        <Nav/>
       <motion.div variants={pageAnimation} className='card-red'>
          <div className='box-red'>
            <p className='score'>{finalScore}</p>
          </div>
          <div className='cardtext'>
            <div>An Electric car is probably not right for you.</div>
            <div className='carddiv'>There are {noOfChargers} EV charge points within a 5 mile radius of your postcode</div>
            <div className='carddiv'>Find your recommended EVs below.</div>
          </div>
        </motion.div>
        <YourCars cars={cars} setCars={setCars} range={range} budget={budget}/>
        <h3 className='othertitle'>Other Things To Consider</h3>
        <div className="flex">
          <Other/>
          <Garages/>
          <Costs/>
          <Grants/>
        </div>
      </div>
    )
  }
  if(finalScore > 29 && finalScore < 70){
    return(
      <div>
        <Nav/>
       <motion.div variants={pageAnimation} className='card-yellow'>
          <div className='box-yellow'>
            <p className='score'>{finalScore}</p>
          </div>
          <div className='cardtext'>
              <div>An Electric car might be right for you. Make sure to check out the other things to consider section below.</div>
              <div className='carddiv'>There are {noOfChargers} EV charge points within a 5 mile radius of your postcode</div>
              <div className='carddiv'>Find your recommended EVs below.</div>
          </div>
        </motion.div>
          <YourCars cars={cars} setCars={setCars} range={range} budget={budget}/>
          <h3 className='othertitle'>Other Things To Consider When Pruchasing An EV</h3>
          <div className="flex">
            <Other/>
            <Garages/>
            <Costs/>
            <Grants/>
          </div>
      </div>
    )
  }
  if(finalScore > 69){
    return(
      <div>
        <Nav/>
       <motion.div variants={pageAnimation} className='card-green'>
          <div className='box-green'>
            <p className='score'>{finalScore}</p>
          </div>
          <div className='cardtext'>
            <div>An electric car is most likely right for you, check out the other things to consider section below.</div>
            <div className='carddiv'>There are {noOfChargers} EV charge points within a 5 mile radius of your postcode.</div>
            <div className='carddiv'>Find your recommended EVs below.</div>
         </div>
        </motion.div>
          <YourCars cars={cars} setCars={setCars} range={range} budget={budget}/>
          <h3 className='othertitle'>Other Things To Consider</h3>
          <div className="flex">
            <Other/>
            <Garages/>
            <Costs/>
            <Grants/>
          </div>
      </div>
    )
  }}
  function notSubmitted(){
    return(
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit' className='wholeform'>
      <div className='carform'>
        <form>
          <div className='question'>
            <label htmlFor="postcode">
              <h3 className='qs'>What is your postcode?</h3>
              <input
                placeholder='Enter Postcode'
                type='text'
                postcode='postcode'
                value={postcode}
                onChange={inputPostcode}
              />
            </label>
         </div>
         <div className='question'>
            <h3 className='qs'>Do you have off-street parking available at your home?</h3>
            <select value={parking} onChange={inputParking} id="dropdown">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
         </div>
         <div className='question'>
            <h3 className='qs'>Do you have EV charging points available at your work place?</h3>
            <select value={work} onChange={inputWork} id="dropdown">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
         </div>
         <div className='question'>
            <h3 className='qs'>What range would you need your EV to do on a full single charge? (miles)</h3>
            <select value={range} onChange={inputRange} id="dropdown">
              <option value="0-99">0-99</option>
              <option value="100-199">100-199</option>
              <option value="200-299">200-299</option>
              <option value="300+">300+</option>
            </select>
         </div>
         <div className='question'>
            <h3 className='qs'>If you were to buy an EV would there also be a petrol/diesel car at your household?</h3>
            <select value={otherCar} onChange={inputOtherCar} id="dropdown">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
         </div>
         <div className='question'>
            <h3 className='qs'>What would be your budget to buy a brand new EV?(GBP)</h3>
            <select value={budget} onChange={inputBudget} id="dropdown">
              <option value="0-19999">0-19,999</option>
              <option value="20000-39999">20,000-39,999</option>
              <option value="40000-59999">40,000-59,999</option>
              <option value="60000+">60,000+</option>
            </select>
         </div>
        </form>
        </div>
          <div className='bcenter'><button className='buttonnn' onClick={() => { SearchPostcode(); setIsSubmitted(true);}}>Submit</button></div>
    </motion.div>
    )
  }
    async function SearchPostcode(){
        await axios.get(`https://api.allorigins.win/raw?url=https://chargepoints.dft.gov.uk/api/retrieve/registry/postcode/${postcode}/dist/5/format/json`)
        .then(chargers => {
          const chargerss = chargers.data
          const numberobj = chargerss.ChargeDevice
          const chargePoints = (Object.keys(numberobj).length);
          let score = 0
          if (chargePoints > '99'){
            score = score+15
          }
          if (chargePoints > 9 && chargePoints < 100){
            score = score+10
          }
          if (chargePoints > 4 && chargePoints < 10){
            score = score+5
          }
          if (parking === 'yes'){
            score=score+40
          }
          if (work === 'yes'){
            score=score+15
          }
          if (range === '0-99'){
            score=score+15
          }
          if (range === '100-199'){
            score=score+10
          }
          if (range === '200-299'){
            score=score+5
          }
          if (range === '300+'){
            score=score-10
          }
          if(otherCar === 'yes'){
            score=score+15
          }
          if (budget === '0-19999'){
            score=score-15
          }
          setFinalScore(score)
          setNoOfChargers(chargePoints)
        })
      };

  return(
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      {isSubmitted ?  submitted() : notSubmitted()}
    </motion.div>
  )
}





export default Form;
