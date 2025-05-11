import React from 'react'
import './TopCreators.css'
export default function TopCreators({ src,FirstCount, Rating }) {
    return (
        <div className='TopCreators'>
            <div>
                <img src={src} alt="" />
            </div>
            <span>{FirstCount}</span>
            <progress value={Rating}></progress>
        </div>
    )
}
