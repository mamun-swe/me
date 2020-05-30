import React, { Component } from 'react';
import "./index.css";

class index extends Component {
    render() {
        return (
            <div className="contact">
                <div className="flex-center flex-column content">
                    <h1>Contact with me</h1>
                    <div className="social mb-3">
                        <a href="https://www.facebook.com/mamun.swe.277"><i className="fab rounded-circle fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/in/mamun-swe"><i className="fab rounded-circle fa-linkedin"></i></a>
                        <a href="https://github.com/Mamun-swe"><i className="fab rounded-circle fa-github"></i></a>
                    </div>
                    <h5><a href="mailto:mamun.swe.277@gmail.com">mamun.swe.277@gmail.com</a></h5>
                </div>
            </div>
        );
    }
}

export default index;