import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home/index';
import About from './components/about/index';
import Education from './components/education/index';
import Experience from './components/experience/index';
import Contact from './components/contact/index';

function App() {
  return (
    <div className="App">

      <Router>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/education" component={Education} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} />

            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
