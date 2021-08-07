import React, {useState, useEffect} from 'react';
import YourCars from './YourCars';
import axios from 'axios';

 //search for chargers in a 5 mile readios https://chargepoints.dft.gov.uk/api/retrieve/registry/postcode/CF15+7PJ/dist/5/

function Questions({cars, setCars, chargePoints, setChargePoints}){
  useEffect(() => {
    axios.get('https://chargepoints.dft.gov.uk/api/retrieve/registry/postcode/CF157PJ/dist/5/format/json')
    .then(chargers => {
      setChargePoints(chargers.data);
      console.log(chargers.data);
    })
    .catch((err) => console.log(err));
  },[]);
  return (
    <div>
      <div>
      </div>
      <div>
        <YourCars cars={cars} setCars={setCars}/>
      </div>
    </div>
  );
};


export default Questions;
