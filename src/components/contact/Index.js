import React from 'react'
import './style.scss'

const Index = () => {
    return (
        <div className="custom-contact-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 text-center text-lg-left mb-5 mb-lg-0 pr-lg-5">
                        <p>I'd like to work with any organization who believes my skills would be beneficial to them. Please inform if you're looking for someone similar to me. You may also simply say hello to me.</p>
                        <a
                            type="button"
                            href="mailto:mamun.swe.277@gmail.com"
                            className="btn shadow-none"
                        >Contact Me</a>
                    </div>
                    <div className="col-12 col-lg-6 text-center text-lg-left pl-lg-5">
                        <h6>E-mail</h6>
                        <p className="mb-3">mamun.swe.277@gmail.com</p>

                        <h6>Skype</h6>
                        <p className="mb-3">live:c0fc53cd8e6c958a</p>

                        <h6>Social</h6>
                        <p className="mb-3">Facebook - </p>

                        <h6>Address</h6>
                        <p className="mb-3">Ashulia, Savar, Dhaka</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;