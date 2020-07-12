import React from 'react';
import './style.css';

import GithubIcon from '../assets/icons/github.png';
import LinkIcon from '../assets/icons/link.png';

const Projects = () => {
    return (
        <div className="projects about">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-right">
                        <h1 className="text-uppercase name">work</h1>
                        <h1 className="text-uppercase title">projects</h1>
                    </div>

                    {/* React */}
                    <div className="col-12 my-4">
                        <div className="technology_header">
                            <h5 className="mb-0">Stack - React.js, Node.js, MongoDB</h5>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                        <div className="card project-card">
                            <div className="flex-center flex-column text-center p-2">
                                <p className="text-capitalize mb-2">hello</p>
                                <div className="d-flex">
                                    <div><a href="#"><img src={GithubIcon} alt="..." /></a></div>
                                    <div className="pl-3"><a href=""><img src={LinkIcon} alt="..." /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vue */}
                    <div className="col-12 my-4">
                        <div className="technology_header">
                            <h5 className="mb-0">Stack - Vue.js, Node.js, MongoDB</h5>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                        <div className="card project-card">
                            <div className="flex-center flex-column text-center p-2">
                                <p className="text-capitalize mb-2">hello</p>
                                <div className="d-flex">
                                    <div><a href="#"><img src={GithubIcon} alt="..." /></a></div>
                                    <div className="pl-3"><a href=""><img src={LinkIcon} alt="..." /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Laravel */}
                    <div className="col-12 my-4">
                        <div className="technology_header">
                            <h5 className="mb-0">Stack - Jquery, Laravel, MySQL</h5>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                        <div className="card project-card">
                            <div className="flex-center flex-column text-center p-2">
                                <p className="text-capitalize mb-2">hello</p>
                                <div className="d-flex">
                                    <div><a href="#"><img src={GithubIcon} alt="..." /></a></div>
                                    <div className="pl-3"><a href=""><img src={LinkIcon} alt="..." /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;