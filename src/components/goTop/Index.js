import React, { useState, useEffect } from 'react'
import './style.scss'
import { Icon } from 'react-icons-kit'
import { arrowUp } from 'react-icons-kit/feather'

const Index = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let isTop = window.scrollY > 400
            if (isTop !== true)
                setShow(false)
            else
                setShow(true)
        })
    }, [])

    const gotoTop = () => { return window.scrollTo({ top: 0, behavior: 'smooth' }) }

    return (
        <div className="go-to-top">
            {show ?
                <button type="button" className="btn shadow rounded-circle border-0" onClick={gotoTop}>
                    <Icon icon={arrowUp} size={22} />
                </button>
                : null}
        </div>
    );
};

export default Index;