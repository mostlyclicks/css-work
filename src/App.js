import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import ColumnDiv from './components/ColumnDiv'
import FlexWork from './components/FlexWork'
import AutoWork from './components/AutoWork'
import Marker from './components/Marker'

function App() {





  return (
    <Router>
      <div className="App">

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/column-div">Column Div</Link></li>
            <li><Link to="/flex-work">Flex Work</Link></li>
            <li><Link to="/auto-work">Auto Work</Link></li>
            <li><Link to="/marker">Marker</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" component={Home} exact />
            
          <Route path="/column-div" component={ColumnDiv} />
            
          <Route path="/flex-work" component={FlexWork} />
            
          <Route path="/auto-work" component={AutoWork} />
            
          <Route path="/marker" component={Marker} />
            
        </Switch>
      </div>

      
    </Router>
    
  );
}


export default App;
