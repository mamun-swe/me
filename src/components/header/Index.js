import React from 'react'
import './style.scss'

const Index = () => {
    return (
        <div className="custom-header">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center text-lg-left">
                        <p>Hello ! I'm</p>
                        <h2 className="text-capitalize">abdullah al mamun</h2>
                        <h3 className="text-capitalize">Full Stack Developer</h3>
                        <ul>
                            <li><p>Web Developer</p></li>
                            <li><p>|</p></li>
                            <li><p>Software Engineer</p></li>
                        </ul>

                        <button type="button" className="btn shadow-none resume-btn">My Resume</button>
                        <button type="button" className="btn shadow-none ml-3 about-btn">About Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;