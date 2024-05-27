import React from 'react'
import Form from '../Components/Form'
import { useState } from 'react'
import { toast } from 'react-toastify'

const addJob = async (newJob) => {
  // const res = await fetch('/api/jobs', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(newJob)
  // })

  const res = await fetch('https://api.npoint.io/8ba03ffe2c37b501d5d6/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJob)
  })
  toast.success("Job Added Successfully!")
  return
}


const AddJobPage = () => {

  return (
    <>

     <Form addJobSubmit={addJob}/>
    </>
  )
}

export default AddJobPage