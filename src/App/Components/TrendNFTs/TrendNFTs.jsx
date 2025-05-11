import React from 'react'
import './TrendNFTs.css'

export default function TrendNFTs({ src, text, disc, ETHPrice }) {
    return (
        <div className='TrendNFTs'>
            <img src={src} alt="" />
            <div className='TrendNFTs__First-Line'>
                <span>{text}</span>
                <span>{disc}</span>
            </div>
            <div className='TrendNFTs__Second-Line'>
                <span>Current Bid : {ETHPrice} ETH</span>
                <button>Place Bid</button>
            </div>


        </div>
    )
}
