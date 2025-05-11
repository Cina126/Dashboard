import React from 'react'
import  './GeneralInforms.css';

export default function GeneralInforms({title , value}) {
  return (
    <div className='GeneralInforms'>
      <span className='GeneralInforms__Title'>{title}</span>
      <span className='GeneralInforms__Value'>{value}</span>
    </div>
  )
}
