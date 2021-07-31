import React, {useState} from "react";
import data from './carList';
import YourCars from './components/YourCars';

function App() {
    const [cars, setCars] = useState(data());
  return (
    <div className="App">
      <h1>Hello</h1>
      <YourCars cars={cars} setCars={setCars}/>
    </div>
  );
}

export default App;
