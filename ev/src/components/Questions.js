import React from 'react';
import YourCars from './YourCars';


 //search for chargers in a 5 mile readios https://chargepoints.dft.gov.uk/api/retrieve/registry/postcode/CF15+7PJ/dist/5/
 
function Questions({cars, setCars}){
  return (
    <div>
      <YourCars cars={cars} setCars={setCars}/>
    </div>
  );
};


export default Questions;
