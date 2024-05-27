import React, { useEffect } from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'

const EditJobPage = ({updateJobSubmit}) => {
    const job = useLoaderData()

    const [title, setTitle] = useState(job.title)
    const [type, setType] = useState(job.type)
    const [location, setLocation] = useState(job.location)
    const [description, setDescription] = useState(job.description)
    const [salary, setSalary] = useState(job.salary)
    const [companyName, setCompanyName] = useState(job.company.name)
    const [companyDescription, setCompanyDescription] = useState(job.company.description)
    const [contactEmail, setContactEmail] = useState(job.company.contactEmail)
    const [contactPhone, setContactPhone] = useState(job.company.contactPhone)

    const navigate = useNavigate()
    const {id} = useParams()

    const submitForm = (e) => {
        e.preventDefault()
        const updatedJob = {
            id,
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail: contactEmail,
                contactPhone: contactPhone,
            },
        }

        updateJobSubmit(updatedJob)
        toast.success("Job Updated Successfully!")
        return (navigate(`/jobs/${id}`))
    }

    return (
        <>
            <section className='bg-indigo-50'>
                <div className='bada-cont bg-indigo-50 py-24'>
                    <div className='form-cont py-8 mx-[400px] bg-white rounded-md shadow-md'>
                        <form onSubmit={submitForm}>
                            <h1 className='text-center text-3xl font-semibold mb-6'>Update Job</h1>
                            <div className="jobtype px-6 mb-4 flex flex-col">
                                <label htmlFor="type" className='text-gray-700 font-bold mb-2'>Job Type</label>
                                <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)} className='rounded w-full py-2 px-3' required>Job Listing Name
                                    <option value="Full-Time">Full-Time</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                            <div className="joblistingname px-6 mb-4 flex flex-col">
                                <label htmlFor="title" className='text-gray-700 font-bold mb-2'>Job Listing Name</label>
                                <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} className='rounded w-full py-2 px-3 border mb-2' placeholder='Eg. Beautiful Apartment in Miami' required />
                            </div>
                            <div className="description px-6 mb-4 flex flex-col" >
                                <label htmlFor="description" className='text-gray-700 font-bold mb-2'>Description</label>
                                <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className='rounded w-full py-2 px-3 border mb-2' placeholder="Add any job duties, expectations, requirements, etc." rows='4'></textarea>
                            </div>
                            <div className="salary px-6 mb-4 flex flex-col">
                                <label htmlFor="salary" className='text-gray-700 font-bold mb-2'>Salary</label>
                                <select name="salary" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)} className='rounded w-full py-2 px-3 border mb-2' required>
                                    <option value="under50k">Under $50K</option>
                                    <option value="50-60k">$50K - $60K</option>
                                    <option value="60-70k">$60K - $70K</option>
                                    <option value="70-80k">$70K - $80K</option>
                                    <option value="80-90k">$80K - $90K</option>
                                    <option value="90-100k">$90K - $100K</option>
                                    <option value="100-125k">$100K - $125K</option>
                                    <option value="125-150k">$125K - $150K</option>
                                    <option value="150-175k">$150K - $175K</option>
                                    <option value="175-200k">$175K - $200K</option>
                                    <option value="over200k">Over $200K</option>
                                </select>
                            </div>
                            <div className="location px-6 mb-4 flex flex-col">
                                <label htmlFor="location" className='text-gray-700 font-bold mb-2'>Location</label>
                                <input type="text" value={location} id='location' onChange={(e) => setLocation(e.target.value)} className='rounded w-full py-2 px-3 border mb-2' required placeholder='Company Location' />
                            </div>
                            <div className="h2 text-2xl mb-5 px-6"><h2>Company Info</h2></div>
                            <div className="companyname px-6 mb-4 flex flex-col">
                                <label htmlFor="companyName" className='text-gray-700 font-bold mb-2'>Company Name</label>
                                <input type="text" className='rounded w-full py-2 px-3 border mb-2' id='companyName' value={companyName} onChange={(e) => setCompanyName(e.target.value)} required placeholder='Company Name' />
                            </div>
                            <div className="companydescription px-6 mb-4 flex flex-col">
                                <label htmlFor="companyDescription" className='text-gray-700 font-bold mb-2'>Company Description</label>
                                <textarea name="companyDescription" id="companyDescription" value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)} className='rounded w-full py-2 px-3 border mb-2' rows='4' placeholder='What does your company do?'></textarea>
                            </div>
                            <div className="contactemail px-6 mb-4 flex flex-col">
                                <label htmlFor="contactEmail" className=" text-gray-700 font-bold mb-2">Contact Email</label>
                                <input type="text" id='contactEmail' className='rounded w-full py-2 px-3 border mb-2' value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required placeholder='Email address for applicants' />
                            </div>
                            <div className="contactphone px-6 mb-4 flex flex-col">
                                <label htmlFor="contactPhone" className='text-gray-700 font-bold mb-2' >Contact Phone</label>
                                <input type="text" id='contactPhone' className='rounded w-full py-2 px-3 border mb-2' value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} placeholder='Optional phone for applicants' />
                            </div>
                            <div className="button px-6 mb-4 flex flex-col">
                                <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full' type='submit'>Update Job</button>
                            </div>
                        </form>


                    </div>
                </div>
            </section>
        </>
    )
}

export default EditJobPage