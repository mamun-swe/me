import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Master from './pages/Master';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Master} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={Master} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
