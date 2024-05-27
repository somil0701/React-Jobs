import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  const linkClass = ({isActive}) => isActive ? 'text-white bg-black p-2 pl-3 pr-3 rounded-lg hover:cursor-pointer' : 'text-white hover:bg-black p-2 px-3 rounded-lg hover:cursor-pointer'
  
  return (
    <>
    <div className='bg-indigo-700 p-5 border-b-[1px] border-indigo-500'>
      <ul className='flex justify-between items-center gap-8 px-[128px]'>
        <div className='flex justify-center items-center gap-2'>
        <li><img src='https://raw.githubusercontent.com/somil0701/React-Jobs/main/src/assets/logo.png' className='h-10 w-10'></img></li>
        <li className='text text-2xl text-white font-bold'>React Jobs</li>
        </div>
        <div className='flex justify-center items-center gap-3'>
        <NavLink to='/' className={linkClass}>Home</NavLink>
        <NavLink to='/jobs' className={linkClass}>Jobs</NavLink>
        <NavLink to='/add-jobs' className={linkClass}>Add Job</NavLink>
        </div>
      </ul>
    </div>
    </>
  )
}

export default Navbar