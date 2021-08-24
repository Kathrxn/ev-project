import React, {useState} from 'react';
import YourCars from './YourCars';
import axios from 'axios';

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
    async function SearchPostcode(){
        await axios.get(`https://chargepoints.dft.gov.uk/api/retrieve/registry/postcode/${postcode}/dist/5/format/json`)
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
            score=score-20
          }
          setFinalScore(score)
          setNoOfChargers(chargePoints)
        })
      };

  return(
    <div>
      <form>
        <label htmlFor="postcode">
          <h3>What is your postcode?</h3>
          <input
            type='text'
            postcode='postcode'
            value={postcode}
            onChange={inputPostcode}
          />
        </label>
        <h3>Do you have off-street parking available at your home?</h3>
        <select value={parking} onChange={inputParking} id="dropdown">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <h3>Do you have EV charging points available at your work place?</h3>
        <select value={work} onChange={inputWork} id="dropdown">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <h3>What range would you like your EV to do on a full single charge? (miles)</h3>
        <select value={range} onChange={inputRange} id="dropdown">
          <option value="0-99">0-99</option>
          <option value="100-199">100-199</option>
          <option value="200-299">200-299</option>
          <option value="300+">300+</option>
        </select>
        <h3>If you were to buy an EV would there also be a petrol/diesel car at your household?</h3>
        <select value={otherCar} onChange={inputOtherCar} id="dropdown">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <h3>What would be your budget to buy a brand new EV?(GBP)</h3>
        <select value={budget} onChange={inputBudget} id="dropdown">
          <option value="0-19999">0-19,999</option>
          <option value="20000-39999">20,000-39,999</option>
          <option value="40000-59999">40,000-59,999</option>
          <option value="60000+">60,000+</option>
        </select>
      </form>
      <button onClick={SearchPostcode}>Submit</button>
      <div>Your score is {finalScore}</div>
      <div>There are {noOfChargers} EV charge points within a 5 mile radius of your postcode</div>
    </div>
  )
}





export default Form;
