import React, { Component } from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

class index extends Component {
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <div className="row">

                        <div className="col-12 text-right pt-sm-5">
                            <Link to="/" className="btn shadow-none rounded-circle">&times;</Link>
                        </div>


                        <div className="col-12 content">
                            <h4>Contact with me</h4>
                            <div className="social mb-3 mt-4">
                                <a href="https://www.facebook.com/mamun.swe.277"><i className="fab rounded-circle fa-facebook-f"></i></a>
                                <a href="https://www.linkedin.com/in/mamun-swe"><i className="fab rounded-circle fa-linkedin"></i></a>
                                <a href="https://github.com/Mamun-swe"><i className="fab rounded-circle fa-github"></i></a>
                            </div>
                            <h5><a href="mailto:mamun.swe.277@gmail.com">mamun.swe.277@gmail.com</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;