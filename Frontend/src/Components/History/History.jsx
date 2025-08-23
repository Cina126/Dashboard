import React from 'react'
import './History.css'
export default function History({ src, text, disc, ETHPrice, time }) {
    return (
        <div className='History'>
            <img src={src} alt="" />
            <div className='History__Details'>
                <span>{text}</span>
                <span>{disc}</span>
            </div>
            <span>{ }{ETHPrice}ETH</span>
            <span>{time} ago</span>
        </div>
    )
}
