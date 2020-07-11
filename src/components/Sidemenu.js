import React from 'react';
import "./menu.css";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

const Sidemenu = () => {

    const openMenu = () => {
        $("#mobile_menu").addClass('active_menu')
    }

    const closeMenu = () => {
        $("#mobile_menu").removeClass('active_menu')
    }

    return (
        <div className="side-menu">

            {/* Mobile Nav */}
            <div className="mobile-nav d-lg-none">
                <button type="button" className="btn rounded-0 shadow-none float-right p-0 menu_open_btn" onClick={openMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line mb-0"></div>
                </button>
            </div>
            <div className="break d-lg-none"></div>

            {/* Mobile Menu */}
            <div className="mobile-menu d-lg-none" id="mobile_menu">
                <button type="button" className="btn rounded-0 shadow-none float-right p-0 menu_close_btn" onClick={closeMenu}>
                    <div className="line line_1"></div>
                    <div className="line line_2"></div>
                </button>

                <div className="links text-center">
                    <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
                    <NavLink exact to="/about" activeClassName="is-active">About</NavLink>
                    <NavLink exact to="/projects" activeClassName="is-active">Projects</NavLink>
                    <NavLink exact to="/experience" activeClassName="is-active">Experience</NavLink>
                </div>
            </div>

            <div className="items d-none d-lg-block">
                <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
                <NavLink exact to="/about" activeClassName="is-active">About</NavLink>
                <NavLink exact to="/projects" activeClassName="is-active">Projects</NavLink>
                <NavLink exact to="/experience" activeClassName="is-active">Experience</NavLink>
            </div>
        </div>
    );
};

export default Sidemenu;