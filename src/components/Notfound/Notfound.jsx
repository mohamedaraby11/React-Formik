import React from 'react'
import img from '../../assets/images/error.svg'
export default function Notfound() {
  return (
    <div className='text-center py-5'>
      <img src={img}  alt='not Found'/>
    </div>
  )
}
