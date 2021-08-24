import React, {useState} from "react";
import data from './carList';
import Form from './components/Form';
import Home from './components/home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    const [cars, setCars] = useState(data());
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/ev-project' exact component ={Home}>
            <Home />
          </Route>
          <Route path='/form'>
            <Form cars={cars} setCars={setCars}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
