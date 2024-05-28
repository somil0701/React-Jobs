import React from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Back = () => {
  return (
    <>
    <div className='container flex flex-row justify-start items-center gap-2 px-2 sm:px-6 md:px-6 py-6 ml-6 sm:ml-24 md:ml-24 text-left'>
        <Link to='/'><FaArrowLeft className='text-indigo-500 hover:text-indigo-600'/></Link>
        <span className='text-indigo-500 hover:text-indigo-600'><Link to='/'>Back to Job Listings</Link></span>
    </div> 
    </>
  )
}

export default Back