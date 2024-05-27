import React from 'react'
import {FaMapMarker} from 'react-icons/fa'
import { useParams, useLoaderData, useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const HeroJob = ({deleteJob}) => {
    const {id} = useParams()
    const job = useLoaderData()

    const navigate = useNavigate()
    const onDeleteClick = async(jobId) => {
        const confirm = window.confirm("Are you sure you want to delete this listing?")
        if (!confirm ) return 
        const res = await fetch(`/api/jobs/${jobId}`, {
            method: 'DELETE'
        })
        // const res = await fetch(`https://api.npoint.io/652fbee724332ae4cafd/jobs/${jobId}`, {
        //     method: 'DELETE'
        // })
        toast.success('Job Deleted Successfully!')
        navigate('/jobs')
        return 
    }

  return (
    <>
    <section className='bg-indigo-50'>
    <div className='px-6 py-10 w-full'>
    <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
    <main>
        <div className='bg-white p-6 rounded-lg shadow-md text-center ml-[120px] flex flex-col justify-center items-start'>
            <h3 className='text-gray-500 mb-4'>{job.type}</h3>
            <h2 className='text-3xl font-bold mb-4'>{job.title}</h2>
            <div className='flex flex-row items-start gap-2 mb-4'>
            <FaMapMarker className='inline text-lg mb-1 text-orange-700'/>
                <p className='text-orange-700'>{job.location}</p>
            </div>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md text-center mt-6 ml-[120px] flex flex-col justify-start items-start'>
            <h2 className='text-indigo-800 text-lg font-bold mb-6'>Job Description</h2>
            <p className='mb-4 text-left'>{job.description}</p>
            <h2 className='text-indigo-800 mb-2 text-lg font-bold'>Salary</h2>
            <p className='mb-4'>{job.salary} / Year</p>
        </div>
    </main>
    <aside>
        <div className='bg-white p-6 rounded-lg shadow-md text-center mr-[120px] flex flex-col justify-center items-start'>
            <h2 className='text-xl font-bold mb-6'>Company Info</h2>
            <h3 className='text-2xl'>{job.company.name}</h3>
            <p className='text-left my-4'>{job.company.description}</p>
            <p className='text-xl border-t-[1px] w-full pt-4 border-gray-200 text-left'>Contact Email</p>
            <p className='my-2 bg-indigo-100 p-2 font-bold'>{job.company.contactEmail}</p>
            <p className='text-xl'>Contact Phone</p>
            <p className='my-2 bg-indigo-100 p-2 font-bold'>{job.company.contactPhone}</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md text-center mt-6 mr-[120px] flex flex-col justify-center items-start'>
            <h2 className='text-xl font-bold mb-4'>Manage Job</h2>
            <button className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full mt-4 block'><Link to={`/edit-job/${id}`}>Edit Job</Link></button>
            <button onClick={() => onDeleteClick(job.id)} className='bg-red-500 hover:bg-red-600 text-white text-center font-bold py-2 px-4 rounded-full w-full mt-4 block'>Delete Job</button>
        </div>
    </aside>
    </div>
    </div> 
    </section>
    </>
  )
}

export default HeroJob