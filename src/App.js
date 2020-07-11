import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import SideMenu from './components/Sidemenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

function App() {
  return (
    <div className="App">

      <Router>
        <SideMenu />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/experience" component={Experience} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
