import React, {useState} from 'react';
import YourCars from './YourCars';
import axios from 'axios';

function Form({cars, setCars, chargePoints, setChargePoints}){
  const [postcode, setPostcode] = useState('')
  //events
  function inputPostcode(e){
    setPostcode(e.target.value);
  };
  function SearchPostcode(){
      axios.get(`https://chargepoints.dft.gov.uk/api/retrieve/registry/postcode/${postcode}/dist/5/format/json`)
      .then(chargers => {
        const chargerss = chargers.data
        const numberobj = chargerss.ChargeDevice
        setChargePoints(Object.keys(numberobj).length);
      })
      .catch((err) => console.log(err));
  };
  return(
    <div>
      <form>
        <label htmlFor="postcode">
          Postcode
          <input
            type='text'
            postcode='postcode'
            value={postcode}
            onChange={inputPostcode}
          />
        </label>
      </form>
      <button onClick={SearchPostcode}>Submit</button>
      <div>{chargePoints}</div>
      <div>
        <YourCars cars={cars} setCars={setCars}/>
      </div>
    </div>
  )
}





export default Form;
