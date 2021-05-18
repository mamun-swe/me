import React from 'react'
import './App.scss'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Master from './pages/Master'
import ScrollToTop from './components/scrollTop/Index'

function App() {
  return (
    <div className="App">

      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Master} />
            <Route component={Master} />
          </Switch>
        </ScrollToTop>
      </Router>

    </div>
  );
}

export default App;
