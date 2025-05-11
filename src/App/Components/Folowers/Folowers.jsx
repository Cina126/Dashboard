import React from 'react'
import "./Folowers.css";

export default function Folowers({ text, value }) {
    return (
        <div className='Folowers'>
            <span className='Folowers__Text'>{text}</span>
            <span className='Folowers__Value'>{value}</span>
        </div>
    )
}
