import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from './About'
import Scheme from './Scheme'
import HowItWorks from './HowItWorks'
import Gallery from './Gallery'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'

function Home() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Hero/>
    <About/>
    <Scheme/>
    <HowItWorks/>
    <Gallery/>
    <FAQ/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home