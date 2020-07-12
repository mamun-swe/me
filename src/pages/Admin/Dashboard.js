import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import URL from '../Url';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { register, handleSubmit, errors } = useForm();
    const [show, setShow] = useState(false);
    const [projects, setProjects] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading, setLoading] = useState(false);


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

    // Submit Project
    const onSubmit = data => {
        setLoading(true)
        axios.post(`${URL}project`, data)
            .then(res => {
                if (res.status === 201) {
                    fetchData()
                    setLoading(false)
                    setShow(false)
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }

    // Delete Project
    const deleteProject = (data) => {
        axios.delete(`${URL}project/${data}`)
            .then(res => {
                if (res.status === 200) {
                    fetchData()
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }

    return (
        <div className="dashboard">
            <div className="container py-4 py-lg-5">
                <div className="row">

                    <div className="col-12 mb-4">
                        <div className="d-flex">
                            <div><h1 className="mb-0">Website - {projects.length}</h1></div>
                            <div className="ml-auto">
                                <button type="button" className="btn shadow-none" onClick={handleShow}><i className="fas fa-plus"></i></button>
                                <button type="button" className="btn shadow-none logout_btn"><i className="fas fa-power-off"></i></button>
                            </div>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="col-12">

                        {projects.map((project, i) =>
                            <div className="project p-2" key={i}>
                                <p className="mb-0 text-capitalize">{project.name}</p>
                                <div className="buttons">
                                    <Link to={`edit/${project._id}`} type="button" className="btn rounded-0 shadow-none border-0">
                                        <i className="fas fa-pen"></i>
                                    </Link>
                                    <button type="button" className="btn rounded-0 shadow-none border-0" onClick={() => deleteProject(project._id)}>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>


            {/* Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                className="project_modal"
            >
                <Modal.Header closeButton className="px-lg-5 pt-lg-5">
                    <Modal.Title>add new project</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pb-5 px-lg-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            {errors.name && errors.name.message ? (
                                <small className="text-danger">{errors.name && errors.name.message}</small>
                            ) : <small className="text-white">Project Name</small>
                            }

                            <input
                                type="text"
                                name="name"
                                className="form-control shadow-none"
                                ref={register({
                                    required: "Project Name is required",
                                })}
                            />
                        </div>

                        <div className="form-group mb-3">
                            {errors.framework && errors.framework.message ? (
                                <small className="text-danger">{errors.framework && errors.framework.message}</small>
                            ) : <small className="text-white">Framework</small>
                            }

                            <select
                                name="framework"
                                className="form-control shadow-none pl-1" ref={register({
                                    required: "Framework is required",
                                })}
                            >
                                <option defaultValue>Select a framework</option>
                                <option value="react">React.js</option>
                                <option value="vue">Vue.js</option>
                                <option value="laravel">Laravel</option>
                            </select>
                        </div>

                        <div className="form-group mb-3">
                            {errors.live_link && errors.live_link.message ? (
                                <small className="text-danger">{errors.live_link && errors.live_link.message}</small>
                            ) : <small className="text-white">Live Link</small>
                            }

                            <input
                                type="text"
                                name="live_link"
                                className="form-control shadow-none"
                                ref={register({
                                    required: "Live link is required",
                                })}
                            />
                        </div>

                        <div className="form-group mb-3">
                            {errors.repo_link && errors.repo_link.message ? (
                                <small className="text-danger">{errors.repo_link && errors.repo_link.message}</small>
                            ) : <small className="text-white">Repository Link</small>
                            }

                            <input
                                type="text"
                                name="repo_link"
                                className="form-control shadow-none"
                                ref={register({
                                    required: "Repository link is required",
                                })}
                            />
                        </div>

                        <button type="submit" className="btn btn-block shadow-none btn-dark">
                            {loading ? (
                                <p className="mb-0"><i className="fa fa-spinner text-white mr-2 fa-spin"></i>Adding ...</p>
                            ) : <p className="mb-0">Submit</p>
                            }
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Dashboard;