import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import Spinner from '../Components/Spinner'
import Back from '../Components/Back'
import HeroJob from '../Components/HeroJob'


const deleteJob = async (id) => {
//   console.log('delete', id)
}

const JobPage = () => {
    const {id} = useParams()
    const job = useLoaderData()
    // const [job, setJob] = useState(null)
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const fetchJob = async() => {
    //         try{
    //         const res = await fetch(`/api/jobs/${id}`)
    //         const data = await res.json()
    //         setJob(data)
    //         }
    //         catch(error){
    //             console.log('Error fetching data', error)
    //         }
    //         finally{
    //             setLoading(false)
    //         }
    //     }
    //     fetchJob()
    // }, [])
    return (
        <>
            {/* {loading ? <Spinner/> : <h1>{job.title}</h1>} */}
            <Back/>
            <HeroJob deleteJob={deleteJob}/>
        </>
    )

}

const jobLoader = async({params}) => {
    // const res = await fetch(`/api/jobs/${params.id}`)
    const res = await fetch(`https://api.npoint.io/8ba03ffe2c37b501d5d6/jobs/${params.id}`)
    const data = await res.json()
    return data;
}

export {JobPage as default, jobLoader}