import React, {useState} from "react";
import data from './carList';
import Form from './components/Form';
import Home from './components/home';
import More from './components/More';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/app.scss';
import {AnimatePresence} from 'framer-motion';

function App() {
    const [cars, setCars] = useState(data());
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Router>
          <Switch>
            <Route path='/ev-project' exact component ={Home}>
              <Home />
            </Route>
            <Route path='/form'>
              <Form cars={cars} setCars={setCars}/>
            </Route>
            <Route path='/more'>
              <More/>
            </Route>
          </Switch>
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
