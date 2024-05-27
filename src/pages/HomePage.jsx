import Hero from '../Components/Hero.jsx'
import Footer from '../Components/Footer.jsx'
import React from 'react'
import Jobs from '../Components/Jobs.jsx'
import JobsHeading from '../Components/JobsHeading.jsx'
const HomePage = () => {
  return (
    <>
    <Hero/>
    <JobsHeading isHome={true}/>
    <Jobs isHome={true}/>
    <Footer/>
    </>
  )
}

export default HomePage