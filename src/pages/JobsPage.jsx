import React from 'react'
import JobsHeading from '../Components/JobsHeading'
import Jobs from '../Components/Jobs'

const JobsPage = () => {
  return (
    <>
    <JobsHeading isHome={false}/>
    <Jobs isHome={false}/>
    </>
  )
}

export default JobsPage