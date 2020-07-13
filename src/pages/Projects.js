import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import URL from './Url';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    // Fetch Projects
    const fetchData = () => {
        axios.get(`${URL}project`)
            .then(res => {
                setProjects(res.data.projects)
            })
    }

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
                    {projects.map((project, i) =>
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={i}>
                            <div className="card project-card">
                                <div className="flex-center flex-column text-center p-2">
                                    <div className="d-flex">
                                        <div><a href={project.repo_link} className="btn btn-sm shadow-none"><i class="fab fa-github text-muted"></i></a></div>
                                        <div className="pl-1">
                                            <a href={project.live_link} className="btn btn-sm shadow-none"><i class="fas fa-link text-muted"></i></a>
                                        </div>
                                    </div>
                                    <p className="text-capitalize mt-3 mb-0">{project.name}</p>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Projects;