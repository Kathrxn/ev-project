import React, {useState} from "react";
import data from './carList';
import Form from './components/Form';
import Home from './components/home';
import {Switch, Route} from 'react-router-dom';

function App() {
    const [cars, setCars] = useState(data());
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/form'>
          <Form cars={cars} setCars={setCars}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
