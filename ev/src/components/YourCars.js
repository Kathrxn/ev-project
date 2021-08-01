import React from 'react';


function YourCars({cars, setCars}){
  return (
    <ul>
     {cars.map(car => {
       if(car.rapid === 'yes' && car.range>170){
       return (
         <div key={car.name}>
           <div>{car.name}</div>
           <img src={car.img} alt='car'/>
           <div>{car.price}</div>
           <a href={car.link}>More info</a>
            <div>----------------</div>
         </div>
       )
     }})}
    </ul>
  );
};

export default YourCars;
