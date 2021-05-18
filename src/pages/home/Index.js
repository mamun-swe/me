import React, { useRef } from 'react'
import Navbar from '../../components/navbar/Index'
import Header from '../../components/header/Index'
import About from '../../components/about/Index'
import Skills from '../../components/skills/Index'
import Portfolio from '../../components/portfolio/Index'
import Contact from '../../components/contact/Index'
import Footer from '../../components/footer/Index'
import GotoTop from '../../components/goTop/Index'

const Index = () => {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const skillRef = useRef(null)
    const portfolioRef = useRef(null)

    const homeScroll = () => homeRef.current.scrollIntoView()
    const aboutScroll = () => aboutRef.current.scrollIntoView()
    const skillScroll = () => skillRef.current.scrollIntoView()
    const portfolioScroll = () => portfolioRef.current.scrollIntoView()

    return (
        <div>
            <Navbar
                home={homeScroll}
                about={aboutScroll}
                skill={skillScroll}
                portfolio={portfolioScroll}
            />
            <Header
                refProp={homeRef}
                about={aboutScroll}
            />
            <About
                refProp={aboutRef}
                skill={skillScroll}
            />
            <Skills refProp={skillRef} />
            <Portfolio refProp={portfolioRef} />
            <Contact />
            <Footer />
            <GotoTop />
        </div>
    );
};

export default Index;