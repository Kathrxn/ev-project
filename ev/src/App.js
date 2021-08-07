import React, {useState} from "react";
import data from './carList';
import Questions from './components/Questions';

function App() {
    const [cars, setCars] = useState(data());
  return (
    <div className="App">
      <h1>Hello</h1>
      <Questions cars={cars} setCars={setCars}/>
    </div>
  );
}

export default App;
