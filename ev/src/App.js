import React, {useState} from "react";
import data from './carList';
import Form from './components/Form';
import Home from './components/home';
import More from './components/More';
import Scoring from './components/scoring';
import {BrowserRouter as Router, Switch, Route,useLocation} from 'react-router-dom';
import './styles/app.scss';
import {AnimatePresence} from 'framer-motion';

function App() {
    const [cars, setCars] = useState(data());
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
          <Switch location={window.location} key={window.location.pathname}>
           <Router>
              <Route path='/ev-project' exact>
                <Home />
              </Route>
              <Route path='/form'>
                <Form cars={cars} setCars={setCars}/>
              </Route>
              <Route path='/more'>
                <More/>
              </Route>
              <Route path='/scoring'>
                <Scoring/>
              </Route>
           </Router>
          </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
