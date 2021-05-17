import React from 'react'
import './App.scss'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Master from './pages/Master'

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Master} />
            <Route component={Master} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
