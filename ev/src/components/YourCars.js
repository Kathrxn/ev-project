import React, {useEffect} from 'react';


function YourCars({cars, setCars}){
  return (
    <ul>
     {cars.map(car => {
       if(car.rapid === 'no' && car.price<20000){
       return (
         <li key={car.name}>
           {car.name}
           {car.price}
           <img src={car.img} alt='car'/>
           <a href={car.link}>More info</a>
         </li>
       )
     }})}
    </ul>
  );
};

export default YourCars;
