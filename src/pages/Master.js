import React from 'react';


import SideMenu from '../components/Sidemenu';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import { Switch, Route } from 'react-router-dom';

const Master = () => {
    return (
        <div className="master main">
            <SideMenu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/experience" component={Experience} />
            </Switch>
        </div>
    );
};

export default Master;