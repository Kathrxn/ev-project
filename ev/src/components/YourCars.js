import React from 'react';


function YourCars({cars, setCars}){
  return (
    <div>
     {cars.map(car => {
       if(car.rapid === 'yes' && car.range>250 && car.price<50000){
       return (
         <div key={car.name}>
           <div><a href={car.link}>{car.name}</a></div>
            <img src={car.img} alt='car'/>
            <div>{car.price}</div>
          <div>----------------</div>
         </div>
       )
     }})}
   </div>
  );
};

export default YourCars;
