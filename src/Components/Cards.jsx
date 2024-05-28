import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='h-[550px] sm:h-[288px] lg:h-[288px] w-100% bg-white flex flex-col sm:flex-row md:flex-row justify-center items-center gap-3 mb-2 sm:mb-0 md:mb-0 p-2'>
    <Card bgcolor='bg-gray-100' button='bg-black' header='For Developers' subtitle='Browse our React jobs and start your career today' buttontext='Browse Jobs' link='/jobs'/>
    <Card bgcolor='bg-indigo-100' button='bg-indigo-500' header='For Employers' subtitle='List your job to find the perfect developer for the role' buttontext='Add Jobs' link='/add-jobs'/>
    </div>
  )
}

export default Cards