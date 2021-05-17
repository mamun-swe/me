import React from 'react'
import './style.scss'
import { Icon } from 'react-icons-kit'
import { linkedin } from 'react-icons-kit/ikons'
import { socialGithub } from 'react-icons-kit/ionicons'

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

                        <div className="follow-container d-flex">
                            <div className="boder mr-2"></div>
                            <div><h6>Follow Me</h6></div>
                            <div className="ml-2">
                                <a
                                    href="https://github.com/Mamun-swe"
                                    target="_blank"
                                    rel="noreferrer"
                                ><Icon icon={socialGithub} size={18} /></a>

                                <a
                                    href="https://www.linkedin.com/in/mamun-swe"
                                    target="_blank"
                                    rel="noreferrer"
                                ><Icon icon={linkedin} size={16} /></a>
                            </div>
                        </div>

                        <button type="button" className="btn shadow-none resume-btn">My Resume</button>
                        <button type="button" className="btn shadow-none ml-3 about-btn">About Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;