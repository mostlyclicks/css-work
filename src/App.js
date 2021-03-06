import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import ColumnDiv from './components/ColumnDiv'
import FlexWork from './components/FlexWork'
import AutoWork from './components/AutoWork'
import Marker from './components/Marker'
import Card from './components/Card'
import SwitchWrapper from './components/SwitchWrapper'
import Buttons from './components/Buttons.js'

function App() {


  return (
    <Router>
      <div className="App">
        <Nav />
        <SwitchWrapper>
          <Switch>
            <Route path="/" component={Home} exact />  
            <Route path="/column-div" component={ColumnDiv} />
            <Route path="/flex-work" component={FlexWork} />
            <Route path="/auto-work" component={AutoWork} />
            <Route path="/marker" component={Marker} />
            <Route path="/card" component={Card} />
            <Route path="/buttons" component={Buttons} />
          </Switch>
        </SwitchWrapper>
      </div>
    </Router>
    
  );
}


export default App;
