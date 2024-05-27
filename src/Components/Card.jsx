import React from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => {
  return (
    <div className={`flex flex-col justify-center items-start ${props.bgcolor} m-7 mb-0 py-4 w-[40%] rounded-lg pl-8 pb-6 shadow-md`}>
        <h2 className='font-bold text-2xl py-2 '>{props.header}</h2>
        <p className='text-regular pb-4'>{props.subtitle}</p>
        <button className={`text-white ${props.button} p-2 pl-3 pr-3 rounded-lg`}><Link to={props.link}>{props.buttontext}</Link></button>
    </div>
  )
}

export default Card