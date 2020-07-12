import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import URL from '../Url';

const Edit = (props) => {
    const [data, setData] = useState("")

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

    return (
        <div className="edit">
            <div className="flex-center flex-column">
                <div className="card">
                    <div className="card-body">
                        <form>
                            {/* Name */}
                            <div className="form-group mb-3">
                                <small>Name</small>
                                <input type="text" className="form-control shadow-none" defaultValue={data.name} />
                            </div>

                            {/* Framework */}
                            <select
                                name="framework"
                                className="form-control shadow-none pl-1"
                            >
                                <option defaultValue={data.framework}>{data.framework}</option>
                                <option value="react">React.js</option>
                                <option value="vue">Vue.js</option>
                                <option value="laravel">Laravel</option>
                            </select>

                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;