import React from 'react';
import Job from './Job';
import data from '../jobs.json';
import Spinner from './Spinner';
import {useState, useEffect} from 'react'

const Jobs = ({ isHome }) => {
  const boolHome = isHome
  // const allJobs = isHome ? data.jobs.slice(0, 6) : data.jobs;

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      try{
      // const apiUrl = isHome ? "api/jobs?_limit=6" : "api/jobs"
      // const apiUrl = "api/jobs"
      const apiUrl = "https://api.npoint.io/8ba03ffe2c37b501d5d6/jobs"
      const res = await fetch(apiUrl)
      const data = await res.json()
      if(isHome){
        setJobs(data.slice(0,6))
      }
      else{
        setJobs(data)
      }
      // setJobs(data)
      }
      catch(error){
        console.log("Error fetching data", error)
      }
      finally{
        setLoading(false);
      }
    }
    fetchJobs();
  }, [])

  return (
    <div className='flex flex-wrap justify-center items-center py-10 bg-blue-50'>
      {loading ? (<Spinner loading={loading}/>) : (
        <>
      {jobs.map((job) => (
        <Job key={job.id} job={job} Origin={boolHome}/>
      ))}
        </>
      )}
    </div>
  );
};

export default Jobs;