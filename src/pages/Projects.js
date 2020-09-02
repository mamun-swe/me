import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import URL from './Url';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData()
    }, [])

    // Fetch Projects
    const fetchData = () => {
        setLoading(true)
        axios.get(`${URL}project`)
            .then(res => {
                setProjects(res.data.projects)
                setLoading(false)
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
                </div>

                {/* Projects */}
                {loading ?

                    <div className="text-center">
                        <div className="spinner-border text-white" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="row">
                        <div className="col-12 mb-4">
                            {projects.map((project, i) =>
                                <div className="card project-card" key={i}>
                                    <div className="card-body">
                                        <h3>{project.name}</h3>
                                        <p>Entirely works on the client-side, behaves like actual micro blog, everything handled by client</p>

                                        <div className="d-flex">
                                            <div><a href={project.repo_link} className="btn btn-sm shadow-none"><i class="fab fa-github text-muted"></i></a></div>
                                            <div className="pl-1">
                                                <a href={project.live_link} className="btn btn-sm shadow-none"><i class="fas fa-link text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="col-12 text-center pt-4 pb-5">
                            <a href="https://github.com/Mamun-swe?tab=repositories"
                                type="button"
                                className="btn shadow-none show-more-btn">Show More</a>
                        </div>
                    </div>
                }


            </div>
        </div>
    );
};

export default Projects;