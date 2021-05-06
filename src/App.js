import React from 'react';
import GridBox from './GridBox';
import FunctionalNav from './FunctionalNav';
import About from './About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <FunctionalNav/>
      <Switch>
        <Route exact path="/">
          <GridBox></GridBox>
        </Route>
        <Route path="/about/">
          <About></About>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
