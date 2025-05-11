import React from 'react'
import './Stocks.css'

export default function Stocks({ id, text, value, children, discribtion }) {
    return (
        <div className='Stocks' id={id}>
            {children}
            <div className='Stocks__Inner'>
                <span className='Stocks__Inner__Text'>{text}</span>
                <span className='Stocks__Inner__Value'>{value}</span>
                {discribtion ? <span className='Stocks__Inner__discribtion'>{discribtion}</span> : ""}
            </div>
        </div>
    )
}
