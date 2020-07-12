import React from 'react';
import './style.css';
import { useForm } from "react-hook-form";

const Login = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        props.history.push('/dashboard')

    }

    return (
        <div className="login">
            <div className="flex-center flex-column">
                <div className="card border-0">
                    <div className="card-header p-4 text-center">
                        <h4 className="mb-0"><b>Login</b></h4>
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
                                            value: 4,
                                            message: "Please enter minimum 4 characters",
                                        },
                                        required: "Please enter password",
                                    })}
                                />
                            </div>

                            <button type="submit" className="btn btn-block shadow-none">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;