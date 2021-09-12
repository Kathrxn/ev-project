import React from 'react';

function YourCars({cars, setCars, range, budget}){
  if (range === '0-99' && budget === '0-19999')
    return (
      <div className='cards'>
       {cars.map(car => {
         if(car.price < 20000 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
         return (
             <div className='card' key={car.name}>
               <div>{car.name}</div>
               <div>Range:  {car.range}</div>
                <div>Price:  £{car.price.toLocaleString('en-UK')}</div>
                <div><a href={car.link}>More Info --></a></div>
             </div>
         )
       }})}
     </div>
  );
  if (range === '0-99' && budget === '20000-39999')
    return (
      <div className='cards'>
       {cars.slice(0,5).map(car => {
         if(car.price < 40000 && car.price > 19999 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
         return (
          <div className='card'>
           <div key={car.name}>
             <div>{car.name}</div>
             <div>Range:  {car.range}</div>
              <div>Price:  £{car.price.toLocaleString('en-UK')}</div>
              <div><a href={car.link}>More Info --></a></div>
           </div>
         </div>
         )
       }})}
     </div>
   );
   if (range === '0-99' && budget === '40000-59999')
     return (
       <div className='cards'>
        {cars.slice(0,55).map(car => {
          if(car.price < 60000 && car.price > 39999 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
          return (
           <div className='card'>
            <div key={car.name}>
              <div>{car.name}</div>
              <div>Range:  {car.range}</div>
               <div>Price:  £{car.price.toLocaleString('en-UK')}</div>
               <div><a href={car.link}>More Info --></a></div>
            </div>
          </div>
          )
        }})}
      </div>
    );
    if (range === '0-99' && budget === '60000+')
      return (
        <div className='cards'>
         {cars.slice(0,102).map(car => {
           if(car.price > 60000 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
           return (
             <div className='card'>
             <div key={car.name}>
               <div>{car.name}</div>
               <div>Range:  {car.range}</div>
                <div>Price:  £{car.price.toLocaleString('en-UK')}</div>
                <div><a href={car.link}>More Info --></a></div>
             </div>
           </div>
           )
         }})}
       </div>
     );
     if (range === '100-199' && budget === '20000-39999')
       return (
         <div className='cards'>
          {cars.slice(0,6).map(car => {
            if(car.price < 40000 && car.price > 19999 && car.range > 99 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
            return (
             <div className='card'>
              <div key={car.name}>
                <div>{car.name}</div>
                <div>Range:  {car.range}</div>
                 <div>Price:  £{car.price.toLocaleString('en-UK')}</div>
                 <div><a href={car.link}>More Info --></a></div>
              </div>
            </div>
            )
          }})}
        </div>
      );
      if (range === '100-199' && budget === '40000-59999')
        return (
          <div className='cards'>
           {cars.slice(0,55).map(car => {
             if(car.price < 60000 && car.price > 39999 && car.range > 99 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
             return (
              <div className='card'>
               <div key={car.name}>
                 <div>{car.name}</div>
                 <div>Range:  {car.range}</div>
                  <div>Price:  £{car.price.toLocaleString('en-UK')}</div>
                  <div><a href={car.link}>More Info --></a></div>
               </div>
             </div>
             )
           }})}
         </div>
       );
       if (range === '100-199' && budget === '60000+')
         return (
           <div className='cards'>
            {cars.slice(0,102).map(car => {
              if(car.price > 59999 && car.range > 99 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
              return (
               <div className='card'>
                <div key={car.name}>
                  <div>{car.name}</div>
                  <div>Range:  {car.range}</div>
                   <div>Price:  £{car.price.toLocaleString('en-UK')}</div>
                   <div><a href={car.link}>More Info --></a></div>
                </div>
              </div>
              )
            }})}
          </div>
        );
        if (range === '200-299' && budget === '20000-39999')
          return (
            <div className='cards'>
             {cars.slice(0,25).map(car => {
               if(car.price < 40000 && car.price > 19999 && car.range > 199 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
               return (
                <div className='card'>
                 <div key={car.name}>
                   <div>{car.name}</div>
                   <div>Range:  {car.range}</div>
                    <div>Price:  £{car.price.toLocaleString('en-UK')}</div>
                    <div><a href={car.link}>More Info --></a></div>
                 </div>
                </div>
               )
             }})}
           </div>
         );
         if (range === '200-299' && budget === '40000-59999')
           return (
             <div className='cards'>
              {cars.slice(0,56).map(car => {
                if(car.price < 60000 && car.price > 39999 && car.range > 199 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
                return (
                 <div className='card'>
                  <div key={car.name}>
                    <div>{car.name}</div>
                    <div>Range:  {car.range}</div>
                     <div>Price:  £{car.price.toLocaleString('en-UK')}</div>
                     <div><a href={car.link}>More Info --></a></div>
                  </div>
                 </div>
                )
              }})}
            </div>
          );
          if (range === '200-299' && budget === '60000+'){
            return (
              <div className='cards'>
               {cars.slice(0,102).map(car => {
                 if(car.price > 59999 && car.range > 199 && car.name.includes('coming') === false && car.name.includes('from') === false && car.name.includes('later') === false){
                 return (
                  <div className='card'>
                   <div key={car.name}>
                     <div>{car.name}</div>
                     <div>Range:  {car.range}</div>
                      <div>Price:  £{car.price.toLocaleString('en-UK')}</div>
                      <div><a href={car.link}>More Info --></a></div>
                   </div>
                  </div>
                 )
               }})}
             </div>
           );
         }else{
           return(
             <div className='noresult'>
               <div className='cont'>There are currently no EVs for sale in the UK that macth your requirements.</div>
               <div className='cont'>In the near future EVs are expected to reach a range of 300+ miles.</div>
               <br/>
               <div className='cont'>If your looking for a cheaper EV there are some second-hand vehicles available, however the current market is very small.</div>
               <div className='cont'>As EVs rise in popularity it is expected there will be a bigger second-hand market.</div>
             </div>
           )
         }

};

export default YourCars;
