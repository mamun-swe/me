import React, { Component } from 'react';
import "./index.css";
import { NavLink } from 'react-router-dom';

class index extends Component {
    render() {
        return (
            <div className="nav">
                <div className="my-nav">
                    <NavLink exact to="/home" activeClassName="is-active"><i className="fas fa-home"></i></NavLink>
                    <NavLink to="/about" activeClassName="is-active"><i className="fas fa-user"></i></NavLink>
                    <NavLink to="/education" activeClassName="is-active"><i className="fas fa-user-graduate"></i></NavLink>
                    <NavLink to="/experience" activeClassName="is-active"><i className="fas fa-cog"></i></NavLink>
                    <NavLink to="/contact" activeClassName="is-active"><i className="fas fa-envelope"></i></NavLink>
                </div>
                <div className="break"></div>
            </div>
        );
    }
}

export default index;