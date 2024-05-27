import React from 'react'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import {FaMapMarker} from 'react-icons/fa'

const Job = ({job, Origin}) => {
    const [FullDescription, setHalfDescription] = useState(true);
    let description = job.description
    if (!FullDescription){
        description = description.slice(0, 90) + "......"
    }

  return (
    <>
    <div className='flex flex-col justify-center items-start content-start p-4 m-4 bg-white rounded-xl shadow-md w-[410px]'> <h3 className='text-gray-600 my-2'>{job.type}</h3>
        <h2 className='text-xl font-bold mb-6'>{job.title}</h2>
        <p className='mb-5'>{description}</p>
        <p onClick={() => {setHalfDescription(value=>!value)}} className='text-indigo-500 mb-5 hover:text-indigo-600 hover:cursor-pointer'>{FullDescription ? "Less" : "More"}</p>
        <p className='text-indigo-500 mb-5 border-b-[1px] border-gray-300 w-full py-2'>{job.salary}</p>
        <div className='flex justify-between mb-8 w-full'>
            <div className="location flex flex-row gap-1">
            <FaMapMarker className='inline text-lg mb-1 text-orange-700'/>
            <p className='text-orange-700 mb-3'>{job.location}</p>
            </div>
            <button className={`text-white bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600 text-center text-xm hover:cursor-pointer`}>
<NavLink to={Origin ? `jobs/${job.id}` : `/jobs/${job.id}`}>Read More</NavLink>
              </button>
        </div>
    </div> 
    </>
  )
}

export default Job