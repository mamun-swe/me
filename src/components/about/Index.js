import React from 'react'
import './style.scss'
import { Images } from '../../utils/Images'

const Index = () => {
    return (
        <div className="custom-about-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-lg-flex">
                            <div className="text-center text-lg-left">
                                <h2 className="text-capitalize mb-0">About</h2>
                                <p className="text-capitalize mb-4">abdullah al mamun</p>
                                <div className="img-container">
                                    <img src={Images.Profile} className="img-fluid" alt="Abdullah Al Mamun" />
                                </div>
                            </div>
                            <div className="pl-lg-5 pt-lg-4">
                                <div className="section-centent-container pt-4 pt-lg-5">
                                    <p>Hello, I'm Abdullah Al Mamun, a passionate software engineer. I develop web applications & REST API. I'm a current student of Software Engineering at Daffodil International University, Ashulia campus. Under Dept. of Software Engineering.
                                    I have learned different programming languages in my university courses such as C, Java, Python, PHP, JavaScript, etc. Mainly I'm working with JavaScript and it's frameworks.
                                    I am available for any kind of job opportunity that suits my interests.</p>

                                    <button type="button" className="btn shadow-none resume-btn">My Resume</button>
                                    <button type="button" className="btn shadow-none ml-3 about-btn">My Skills</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;