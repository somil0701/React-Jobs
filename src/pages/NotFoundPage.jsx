import React from 'react'
import {FaExclamationTriangle} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <>
    <section class="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className='text-6xl text-yellow-400 mb-4'/>
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <p class="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"><Link to='/'>Go Back</Link></p>
    </section>
    </>
  )
}

export default NotFoundPage