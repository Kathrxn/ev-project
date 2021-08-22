import React, {useState} from "react";
import data from './carList';
import Form from './components/Form';

function App() {
    const [cars, setCars] = useState(data());
  return (
    <div className="App">
      <h1>Hello</h1>
      <Form cars={cars} setCars={setCars}/>
    </div>
  );
}

export default App;
