import React, { useState, useEffect } from 'react'
import './style.scss'
import { Icon } from 'react-icons-kit'
import { navicon } from 'react-icons-kit/ionicons'
import { Images } from '../../utils/Images'

const Index = () => {
    const [scrolled, setScrolled] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let isTop = window.scrollY < 150
            if (isTop !== true) {
                setScrolled(false)
            } else {
                setScrolled(true)
            }
        })
    }, [])

    return (
        <div className={scrolled ? "custom-navbar" : "custom-navbar scrolled shadow-sm"}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Desktop navbar */}
                        <div className="navbar-contaier d-flex">
                            <div><img src={Images.Logo} className="img-fluid" alt="..." /></div>

                            <div className="desktop-items d-flex justify-content-center w-100">
                                <div>
                                    <ul>
                                        <li><button
                                            type="button"
                                            className="btn shadow-none"
                                        >Home</button></li>
                                        <li><button
                                            type="button"
                                            className="btn shadow-none"
                                        >About</button></li>
                                        <li><button
                                            type="button"
                                            className="btn shadow-none"
                                        >Skills</button></li>
                                        <li><button
                                            type="button"
                                            className="btn shadow-none"
                                        >Portfolio</button></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="menu-bar-container d-lg-none text-right ml-auto">
                                <button
                                    type="button"
                                    className="btn shadow-none rounded-circle">
                                    <Icon icon={navicon} size={28} />
                                </button>
                            </div>
                        </div>

                        {/* Mobile navbar */}
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;