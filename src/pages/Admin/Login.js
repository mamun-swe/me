import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import URL from '../Url';

const Login = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [loading, setLoading] = useState(false)
    const [faild, setFailed] = useState(false)

    const onSubmit = data => {
        setLoading(true)
        axios.post(`${URL}login`, data)
            .then(res => {
                if (res.status === 200 && res.data.token) {
                    setLoading(false)
                    localStorage.setItem('access_token', res.data.token)
                    props.history.push('/dashboard')
                }
                if (res.status === 204) {
                    setFailed(true)
                    setLoading(false)
                }
            })
    }

    return (
        <div className="login">
            <div className="flex-center flex-column">
                <div className="card border-0">
                    <div className="card-header p-4 text-center">
                        <h4 className="mb-0"><b>Login</b></h4>
                        {faild ? (
                            <p className="text-white mb-0">E-mail or Password incorrect.</p>
                        ) : null}
                    </div>
                    <div className="card-body p-4 pb-lg-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* E-mail */}
                            <div className="form-group mb-3">
                                {errors.email && errors.email.message ? (
                                    <small className="text-danger">{errors.email && errors.email.message}</small>
                                ) : <small>E-mail</small>
                                }
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control shadow-none"
                                    ref={register({
                                        required: "E-mail is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                            </div>

                            {/* Password */}
                            <div className="form-group mb-4">
                                {errors.password && errors.password.message ? (
                                    <small className="text-danger">{errors.password && errors.password.message}</small>
                                ) : <small>Password</small>
                                }
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control shadow-none"
                                    ref={register({
                                        minLength: {
                                            value: 8,
                                            message: "Please enter minimum 8 characters",
                                        },
                                        required: "Please enter password",
                                    })}
                                />
                            </div>

                            <button type="submit" className="btn btn-block shadow-none btn-dark">
                                {loading ? (
                                    <p className="mb-0"><i className="fa fa-spinner text-white mr-2 fa-spin"></i>Loading ...</p>
                                ) : <p className="mb-0">Submit</p>
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;