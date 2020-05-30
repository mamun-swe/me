import React, { Component } from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

class index extends Component {
    render() {
        return (
            <div className="education">
                <div className="container">
                    <div className="row">

                        <div className="col-12 text-right pt-sm-5">
                            <Link to="/" className="btn shadow-none rounded-circle">&times;</Link>
                        </div>


                        <div className="col-12 content">
                            <h4>Education</h4>
                            <h5><span>B.Sc.</span> in Software Engineering</h5>
                            <h5><span>Daffodil International University</span></h5>
                            <br />
                            <h5><span>H.S.C</span> in Science</h5>
                            <h5><span>Royal Media College, Mymensingh</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;