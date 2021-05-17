import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Index = () => {
    return (
        <div className="custom-navbar shadow">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Desktop navbar */}
                        <div className="navbar-contaier">
                            <div className="desktop-items d-flex justify-content-center">
                                <div>
                                    <ul>
                                        <li><Link to="#about">Home</Link></li>
                                        <li><Link to="#about">About</Link></li>
                                        <li><Link to="#about">Skills</Link></li>
                                        <li><Link to="#about">Portfolio</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="menu-bar-container d-lg-none text-right">
                                <button
                                    type="button"
                                    className="btn shadow-none">

                                </button>
                            </div>
                        </div>

                        {/* Mobile navbar */}
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;