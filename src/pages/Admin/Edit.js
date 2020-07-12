import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import URL from '../Url';
import { useForm } from "react-hook-form";

const Edit = (props) => {
    const [data, setData] = useState("")
    const { register, handleSubmit, errors } = useForm();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchProject()
    }, [])

    // fetch project
    const fetchProject = () => {
        axios.get(`${URL}/project/${props.match.params.id}`)
            .then(res => {
                setData(res.data.project)
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }

    // Update Project
    const onSubmit = data => {
        setLoading(true)
        axios.put(`${URL}project/${props.match.params.id}`, data)
            .then(res => {
                if (res.status === 200) {
                    fetchProject()
                    setLoading(false)
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }

    return (
        <div className="edit">
            <div className="flex-center flex-column">
                <div className="card">
                    <div className="card-body p-4 p-lg-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-3">
                                {errors.name && errors.name.message ? (
                                    <small className="text-danger">{errors.name && errors.name.message}</small>
                                ) : <small className="text-white">Project Name</small>
                                }

                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={data.name}
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
                                    <option defaultValue={data.framework}>{data.framework}</option>
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
                                    defaultValue={data.live_link}
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
                                    defaultValue={data.repo_link}
                                    className="form-control shadow-none"
                                    ref={register({
                                        required: "Repository link is required",
                                    })}
                                />
                            </div>

                            <button type="submit" className="btn btn-block shadow-none btn-dark">
                                {loading ? (
                                    <p className="mb-0"><i className="fa fa-spinner text-white mr-2 fa-spin"></i>Updating...</p>
                                ) : <p className="mb-0">Update</p>
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;