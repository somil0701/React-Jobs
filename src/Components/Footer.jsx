import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='w-full h-[130px] flex justify-center items-center'>
        <Link to={`/jobs`}><button className='block rounded-xl bg-black text-white text-center py-4 px-24 sm:px-[180px] md:px-[180px] hover:bg-gray-700'>View All Jobs</button></Link>
    </div>
    </>
  )
}

export default Footer