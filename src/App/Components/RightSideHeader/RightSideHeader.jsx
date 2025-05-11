import React from 'react'
import './RightSideHeader.css'

// start imports icons and Images  -------------------------------------------------------------------------------------------------------------
import BedtimeIcon from '@mui/icons-material/Bedtime';
// import SunnyIcon from '@mui/icons-material/Sunny';
import InfoIcon from '@mui/icons-material/Info';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
// end imports icons and Images -------------------------------------------------------------------------------------------------------------

export default function RightSideHeader() {
    return (
        <div className='RightSideHeader'>
            <span className='RightSideHeader__Routes'>Pages/NFT Markets</span>
            <div className='RightSideHeader__Two-Sides'>
                <span className='RightSideHeader__Two-Sides__Left-Section__Page-Names'>NFT Markets</span>
                <div className='RightSideHeader__Two-Sides__Right-Section'>
                    <input type="text" placeholder='Search' />
                    <span><NotificationImportantIcon></NotificationImportantIcon></span>
                    <span><BedtimeIcon></BedtimeIcon></span>
                    <span><InfoIcon></InfoIcon></span>
                    <img src="" alt="" />
                </div>
            </div>

        </div>
    )
}
