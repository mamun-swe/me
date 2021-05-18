import React, { useState } from 'react'
import './style.scss'

const Index = (props) => {
    const [active, setActive] = useState('web')

    const webSkills = {
        one: [
            { title: 'React', value: '90%' },
            { title: 'Next.JS', value: '80%' },
            { title: 'Express.JS', value: '90%' },
            { title: 'Node.JS', value: '90%' }
        ],
        two: [
            { title: 'MySQL', value: '80%' },
            { title: 'MongoDB', value: '80%' }
        ]
    }

    const otherSkills = {
        one: [
            { title: 'Socket.io', value: '70%' },
            { title: 'Laravel', value: '80%' }
        ],
        two: [
            { title: 'Redux', value: '80%' },
            { title: 'JQuery', value: '70%' }
        ]
    }

    const programmingSkills = {
        one: [
            { title: 'C', value: '80%' },
            { title: 'JavaScript', value: '80%' }
        ],
        two: [
            { title: 'PHP', value: '70%' },
            { title: 'Python', value: '40%' }
        ]
    }

    const toolSkills = {
        one: [
            { title: 'Github', value: '80%' },
            { title: 'Bitbucket', value: '80%' },
            { title: 'Trello', value: '90%' }
        ],
        two: [
            { title: 'Microservices', value: '90%' },
            { title: 'REST API ( JSON )', value: '90%' },
        ]
    }

    return (
        <div className="custom-skills-container" ref={props.refProp}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center text-lg-left mb-4">
                        <h2 className="text-capitalize mb-0">My Skills</h2>
                    </div>

                    <div className="col-12 text-center text-lg-left mb-4">
                        <button
                            type="button"
                            className={active === 'web' ? "btn shadow-none active" : "btn shadow-none"}
                            onClick={() => setActive('web')}
                        >Web</button>

                        <button
                            type="button"
                            className={active === 'others' ? "btn shadow-none active" : "btn shadow-none"}
                            onClick={() => setActive('others')}
                        >Others</button>

                        <button
                            type="button"
                            className={active === 'programming' ? "btn shadow-none active" : "btn shadow-none"}
                            onClick={() => setActive('programming')}
                        >Programming</button>

                        <button
                            type="button"
                            className={active === 'tools' ? "btn shadow-none active" : "btn shadow-none"}
                            onClick={() => setActive('tools')}
                        >Tools</button>
                    </div>
                </div>


                {/* Web section */}
                {active === 'web' ?
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            {webSkills && webSkills.one.map((item, i) =>
                                <div className="card" key={i}>
                                    <div className="card-body d-flex">
                                        <div><h5 className="text-capitalize">{item.title}</h5></div>
                                        <div className="ml-auto"><h5 className="text-capitalize">{item.value}</h5></div>
                                    </div>
                                    <div className="boder" style={{ width: item.value }}></div>
                                </div>
                            )}
                        </div>
                        <div className="col-12 col-lg-6">
                            {webSkills && webSkills.two.map((item, i) =>
                                <div className="card" key={i}>
                                    <div className="card-body d-flex">
                                        <div><h5 className="text-capitalize">{item.title}</h5></div>
                                        <div className="ml-auto"><h5 className="text-capitalize">{item.value}</h5></div>
                                    </div>
                                    <div className="boder" style={{ width: item.value }}></div>
                                </div>
                            )}
                        </div>
                    </div>

                    // Others section
                    : active === 'others' ?
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                {otherSkills && otherSkills.one.map((item, i) =>
                                    <div className="card" key={i}>
                                        <div className="card-body d-flex">
                                            <div><h5 className="text-capitalize">{item.title}</h5></div>
                                            <div className="ml-auto"><h5 className="text-capitalize">{item.value}</h5></div>
                                        </div>
                                        <div className="boder" style={{ width: item.value }}></div>
                                    </div>
                                )}
                            </div>
                            <div className="col-12 col-lg-6">
                                {otherSkills && otherSkills.two.map((item, i) =>
                                    <div className="card" key={i}>
                                        <div className="card-body d-flex">
                                            <div><h5 className="text-capitalize">{item.title}</h5></div>
                                            <div className="ml-auto"><h5 className="text-capitalize">{item.value}</h5></div>
                                        </div>
                                        <div className="boder" style={{ width: item.value }}></div>
                                    </div>
                                )}
                            </div>
                        </div>

                        // Programming section
                        : active === 'programming' ?
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    {programmingSkills && programmingSkills.one.map((item, i) =>
                                        <div className="card" key={i}>
                                            <div className="card-body d-flex">
                                                <div><h5 className="text-capitalize">{item.title}</h5></div>
                                                <div className="ml-auto"><h5 className="text-capitalize">{item.value}</h5></div>
                                            </div>
                                            <div className="boder" style={{ width: item.value }}></div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-12 col-lg-6">
                                    {programmingSkills && programmingSkills.two.map((item, i) =>
                                        <div className="card" key={i}>
                                            <div className="card-body d-flex">
                                                <div><h5 className="text-capitalize">{item.title}</h5></div>
                                                <div className="ml-auto"><h5 className="text-capitalize">{item.value}</h5></div>
                                            </div>
                                            <div className="boder" style={{ width: item.value }}></div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            // Tools section
                            : active === 'tools' ?
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        {toolSkills && toolSkills.one.map((item, i) =>
                                            <div className="card" key={i}>
                                                <div className="card-body d-flex">
                                                    <div><h5 className="text-capitalize">{item.title}</h5></div>
                                                    <div className="ml-auto"><h5 className="text-capitalize">{item.value}</h5></div>
                                                </div>
                                                <div className="boder" style={{ width: item.value }}></div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        {toolSkills && toolSkills.two.map((item, i) =>
                                            <div className="card" key={i}>
                                                <div className="card-body d-flex">
                                                    <div><h5 className="text-capitalize">{item.title}</h5></div>
                                                    <div className="ml-auto"><h5 className="text-capitalize">{item.value}</h5></div>
                                                </div>
                                                <div className="boder" style={{ width: item.value }}></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                : null}

            </div>
        </div>
    );
};

export default Index;