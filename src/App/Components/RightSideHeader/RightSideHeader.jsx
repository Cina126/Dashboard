import './RightSideHeader.css';
import { useLocation } from 'react-router-dom'

// start imports icons and Images  -----------------------------------------------------------------------------------------------------------------------
import InfoIcon from '@mui/icons-material/Info';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import Avatar from './../../../Images/Avatar.png'
// end imports icons and Images -----------------------------------------------------------------------------------------------------------------------

export default function RightSideHeader() {

    const location = useLocation();

    return (
        <div className='RightSideHeader'>
            <span className='RightSideHeader__Routes'>Pages{location.pathname === "/" ? "/Dashboard" : location.pathname}</span>
            <div className='RightSideHeader__Two-Sides'>
                <span className='RightSideHeader__Two-Sides__Left-Section__Page-Names'>{location.pathname === "/" ? "Dashboard" : String(location.pathname).slice(1)}</span>
                <div className='RightSideHeader__Two-Sides__Right-Section'>
                    <input type="text" placeholder='Search' />
                    <span><NotificationImportantIcon></NotificationImportantIcon></span>
                    <span><InfoIcon></InfoIcon></span>
                    <img src={Avatar} alt="" />
                </div>
            </div>

        </div>
    )
}
