import React, {useEffect} from 'react';
import YourCars from './YourCars';
import axios from 'axios';

 //search for chargers in a 5 mile readios https://chargepoints.dft.gov.uk/api/retrieve/registry/postcode/CF15+7PJ/dist/5/

function Questions({cars, setCars, chargePoints, setChargePoints}){
  useEffect(() => {
    axios.get('https://chargepoints.dft.gov.uk/api/retrieve/registry/postcode/AB245SX/dist/5/format/json')
    .then(chargers => {
      const chargerss = chargers.data
      const numberobj = chargerss.ChargeDevice
      setChargePoints(Object.keys(numberobj).length);
    })
    .catch((err) => console.log(err));
  },[]);
  return (
    <div>
      <div>There are {chargePoints} charging points in you area.</div>
      <div>
        <YourCars cars={cars} setCars={setCars}/>
      </div>
    </div>
  );
};


export default Questions;
