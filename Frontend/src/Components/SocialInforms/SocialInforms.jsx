import React from 'react'
import "./SocialInforms.css";

export default function SocialInforms({ title, value }) {
    return (
        <div className='SocialInforms'>
            <span className='SocialInforms__Text'>{title}</span>
            <span className='SocialInforms__Value'>{value}</span>
        </div>
    )
}
