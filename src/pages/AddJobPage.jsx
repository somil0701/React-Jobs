import React from 'react'
import Form from '../Components/Form'
import { useState } from 'react'
import { toast } from 'react-toastify'

const addJob = async (newJob) => {
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJob)
  })
  // const res = await fetch('https://api.npoint.io/652fbee724332ae4cafd/jobs', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(newJob)
  // })
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