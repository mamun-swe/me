import React from 'react'
import './style.scss'
import { Icon } from 'react-icons-kit'
import { github } from 'react-icons-kit/feather'
import { link } from 'react-icons-kit/ikons'
import { Images } from '../../utils/Images'

const Index = () => {
    const projects = [
        {
            title: 'EazyBest',
            banner: Images.EazyBest,
            link: 'https://eazybest.com',
            git: 'https://github.com/Mamun-swe/Eazybest',
            desc: 'EasyBest is a multi-vendor e-commerce platform. It\'s now in the development stage.',
            stack: 'React, Next.JS, Express.JS, MongoDB'
        },
        {
            title: 'Chithi',
            banner: Images.Chithi,
            link: 'https://chat-x-mamun-swe.vercel.app',
            git: 'https://github.com/Mamun-swe/chat-x',
            desc: 'Chithi is a chat application.',
            stack: 'React, Socket.io, Express.JS, MongoDB'
        },
        {
            title: 'Geet',
            banner: Images.Geet,
            link: 'https://geet-app.vercel.app',
            git: 'https://github.com/Mamun-swe/geet',
            desc: 'Geet is online music player. You can play music, make favourite playlist & share with anyone. It\'s now in the development stage.',
            stack: 'React, Express.JS, MongoDB'
        },
        {
            title: 'X-Admin',
            banner: Images.xAdmin,
            link: 'https://x-admin.vercel.app',
            git: 'https://github.com/Mamun-swe/x-admin',
            desc: 'xAdmin is an admin templete.',
            stack: 'React, React, Bootstrap, SASS'
        }
    ]


    return (
        <div className="custom-portfolio-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center text-lg-left mb-4">
                        <h2 className="text-capitalize mb-0">Portfolio</h2>
                    </div>
                </div>

                {/* Projects */}
                <div className="row mb-4">
                    {projects && projects.map((item, i) =>
                        <div className="col-12 col-md-6 col-lg-4" key={i}>
                            <div className="card">
                                <div className="card-img-container">
                                    <img src={item.banner} className="img-fluid" alt="..." />
                                </div>
                                <div className="card-body">
                                    <div className="content">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >{item.title}</a>

                                        <p>{item.desc}</p>
                                        <p><span>Stack: </span>{item.stack}</p>
                                    </div>
                                    <a
                                        href={item.git}
                                        type="button"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn rounded-circle shadow-none"
                                    >
                                        <Icon icon={github} size={20} />
                                    </a>
                                    <a
                                        href={item.link}
                                        type="button"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn rounded-circle shadow-none"
                                    >
                                        <Icon icon={link} size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <a
                            href='https://github.com/Mamun-swe'
                            type="button"
                            target="_blank"
                            rel="noreferrer"
                            className="btn shadow-none show-more-btn"
                        >Show More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;