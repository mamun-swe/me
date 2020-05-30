import React, { Component } from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

class index extends Component {
    render() {
        return (
            <div className="exp">
                <div className="container">
                    <div className="row">

                        <div className="col-12 text-right pt-sm-5">
                            <Link to="/" className="btn shadow-none rounded-circle">&times;</Link>
                        </div>


                        <div className="col-12 content">
                            <h4>Experience</h4>
                            <h5>Software Engineer <span>1 Jan, 2019 - 1 Jul, 2019</span></h5>
                            <h5>6d Solutions</h5>
                            <br />
                            <h5>Software Engineer <span>1 Aug, 2019 - 31 Dec, 2019</span></h5>
                            <h5>Web Cloudex</h5>
                            <br />
                            <h5>Software Engineer <span>1 Jan, 2020 - Present</span></h5>
                            <h5>DhakaBoss</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;