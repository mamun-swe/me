import React from 'react';
import './style.css';

const Experience = () => {
    return (
        <div className="experience about">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-right">
                        <h1 className="text-uppercase name">job</h1>
                        <h1 className="text-uppercase title">experience</h1>
                        <br />
                        <div className="jobs">

                            {/* Job */}
                            <div className="job mb-5">
                                <h3 className="mb-0 text-capitalize">dhaka boss ( PVT ) Ltd.</h3>
                                <h4 className="text-capitalize mb-0">software engineer ( back-end )</h4>
                                <p>10 MAY, 2020 - Present</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;