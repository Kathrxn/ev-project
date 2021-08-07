import React from 'react';
import YourCars from './YourCars';

function Questions({cars, setCars}){
  return (
    <div>
      <YourCars cars={cars} setCars={setCars}/>
    </div>
  );
};


export default Questions;
