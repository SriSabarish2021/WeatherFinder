import React from 'react'
import './cityname.css'
const Cityname = ({city, country}) => {
  return (
    <div className='city'>
        <p className='pp'>{city}</p>
        <p className='pc'>{country}</p>
    </div>
  )
}

export default Cityname