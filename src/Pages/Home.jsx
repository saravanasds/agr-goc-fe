import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import HowItWorks from './HowItWorks'
import Gallery from './Gallery'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import "./scheme.css"

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <div className="about">
        <div className="about-main">
          <div className="about-left">
            <img src="/assets/about/about.jpg" alt="" />
          </div>

          <div className="about-right">
            <div className="about-des">
              <h1 className="text-5xl font-semibold text-[#3E4095] mb-2">About Us</h1>
              <div className="w-56 h-1 bg-[#1e9765]"></div>
              <p className="py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                hic, delectus qui numquam itaque dolore iusto quos accusamus.
                Saepe commodi eius voluptatem corporis incidunt sit ratione ipsum
                ipsam totam veniam? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Saepe hic, delectus qui numquam itaque dolore
                iusto quos accusamus. Saepe commodi eius voluptatem corporis
                incidunt sit ratione ipsum ipsam totam veniam? Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Saepe hic, commodi eius
                voluptatem corporis incidunt sit ratione ipsum ipsam totam veniam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                hic,
              </p>
              <button className="about-btn px-10 py-2 bg-[#26D48C] text-white font-medium rounded hover:bg-[#1e9765]">Know more</button>
            </div>
          </div>
        </div>
      </div>
      {/* <Business/> */}

      <HowItWorks />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default Home