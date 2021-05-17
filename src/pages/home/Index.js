import React from 'react'
import Navbar from '../../components/navbar/Index'
import Header from '../../components/header/Index'
import About from '../../components/about/Index'
import Skills from '../../components/skills/Index'
import Portfolio from '../../components/portfolio/Index'
import Contact from '../../components/contact/Index'
import Footer from '../../components/footer/Index'
import GotoTop from '../../components/goTop/Index'

const Index = () => {

    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
            <GotoTop />
        </div>
    );
};

export default Index;