import React from 'react';


function YourCars({cars, setCars, range, budget}){
  if (range === '0-99' && budget === '0-19999')
    return (
      <div>
       {cars.map(car => {
         if(car.price < 20000 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
         return (
           <div key={car.name}>
             <div><a href={car.link}>{car.name}</a></div>
              <img src={car.img} alt='car'/>
              <div>£{car.price.toLocaleString('en-UK')}</div>
            <div>----------------</div>
           </div>
         )
       }})}
     </div>
  );
  if (range === '0-99' && budget === '20000-39999')
    return (
      <div>
       {cars.map(car => {
         if(car.price < 40000 && car.price > 19999 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
         return (
           <div key={car.name}>
             <div><a href={car.link}>{car.name}</a></div>
              <img src={car.img} alt='car'/>
              <div>£{car.price.toLocaleString('en-UK')}</div>
            <div>----------------</div>
           </div>
         )
       }})}
     </div>
   );
   if (range === '0-99' && budget === '40000-59999')
     return (
       <div>
        {cars.map(car => {
          if(car.price < 60000 && car.price > 39999 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
          return (
            <div key={car.name}>
              <div><a href={car.link}>{car.name}</a></div>
               <img src={car.img} alt='car'/>
               <div>£{car.price.toLocaleString('en-UK')}</div>
             <div>----------------</div>
            </div>
          )
        }})}
      </div>
    );
    if (range === '0-99' && budget === '60000+')
      return (
        <div>
         {cars.map(car => {
           if(car.price > 60000 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
           return (
             <div key={car.name}>
               <div><a href={car.link}>{car.name}</a></div>
                <img src={car.img} alt='car'/>
                <div>£{car.price.toLocaleString('en-UK')}</div>
              <div>----------------</div>
             </div>
           )
         }})}
       </div>
     );
     if (range === '100-199' && budget === '20000-39999')
       return (
         <div>
          {cars.map(car => {
            if(car.price < 40000 && car.price > 19999 && car.range > 99 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
            return (
              <div key={car.name}>
                <div><a href={car.link}>{car.name}</a></div>
                 <img src={car.img} alt='car'/>
                 <div>£{car.price.toLocaleString('en-UK')}</div>
               <div>----------------</div>
              </div>
            )
          }})}
        </div>
      );
      if (range === '100-199' && budget === '40000-59999')
        return (
          <div>
           {cars.map(car => {
             if(car.price < 60000 && car.price > 39999 && car.range > 99 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
             return (
               <div key={car.name}>
                 <div><a href={car.link}>{car.name}</a></div>
                  <img src={car.img} alt='car'/>
                  <div>£{car.price.toLocaleString('en-UK')}</div>
                <div>----------------</div>
               </div>
             )
           }})}
         </div>
       );
       if (range === '100-199' && budget === '60000+')
         return (
           <div>
            {cars.map(car => {
              if(car.price > 59999 && car.range > 99 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
              return (
                <div key={car.name}>
                  <div><a href={car.link}>{car.name}</a></div>
                   <img src={car.img} alt='car'/>
                   <div>£{car.price.toLocaleString('en-UK')}</div>
                 <div>----------------</div>
                </div>
              )
            }})}
          </div>
        );
        if (range === '200-299' && budget === '20000-39999')
          return (
            <div>
             {cars.map(car => {
               if(car.price < 40000 && car.price > 19999 && car.range > 199 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
               return (
                 <div key={car.name}>
                   <div><a href={car.link}>{car.name}</a></div>
                    <img src={car.img} alt='car'/>
                    <div>£{car.price.toLocaleString('en-UK')}</div>
                  <div>----------------</div>
                 </div>
               )
             }})}
           </div>
         );
         if (range === '200-299' && budget === '40000-59999')
           return (
             <div>
              {cars.map(car => {
                if(car.price < 60000 && car.price > 39999 && car.range > 199 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
                return (
                  <div key={car.name}>
                    <div><a href={car.link}>{car.name}</a></div>
                     <img src={car.img} alt='car'/>
                     <div>£{car.price.toLocaleString('en-UK')}</div>
                   <div>----------------</div>
                  </div>
                )
              }})}
            </div>
          );
          if (range === '200-299' && budget === '60000+'){
            return (
              <div>
               {cars.map(car => {
                 if(car.price > 59999 && car.range > 199 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
                 return (
                   <div key={car.name}>
                     <div><a href={car.link}>{car.name}</a></div>
                      <img src={car.img} alt='car'/>
                      <div>£{car.price.toLocaleString('en-UK')}</div>
                    <div>----------------</div>
                   </div>
                 )
               }})}
             </div>
           );
         }else{
           return(
             <div>
               <p>There are no current EVs that match your budget and range requiremnts</p>
             </div>
           )
         }

};

export default YourCars;
