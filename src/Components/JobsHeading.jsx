import React from 'react'

const JobsHeading = ({isHome}) => {
  return (
    <>
    <div className='flex flex-col justify-center items-center bg-blue-50 px-4 py-10'>
    <h2 className='text-3xl font-bold text-indigo-500'>{isHome ? "Recent Jobs" : "Browse Jobs"}</h2> 
    </div>
    </>
  )
}

export default JobsHeading