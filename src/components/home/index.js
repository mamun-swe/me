import React, { Component } from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Hi,</h1>
                            <h1>I'm <Link to="/about">Abdullah Al Mamun</Link>,</h1>
                            <h1><Link to="/education">Software Engineer</Link>,</h1>
                            <p><Link to="/experience">Experienced</Link> with Front-End & back-End | Using Javascript</p>
                            <Link to="/contact" type="button" className="btn rounded-0 shadow-none">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;