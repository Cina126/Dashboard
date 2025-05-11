import React, { useContext } from 'react'
import './Tables.css';
import context from '../../Context/Context';

// start imports componenets ----------------------------------------------------------------------------------------------------------------------------------
import LeftMenue from './../../Components/LeftMenue/LeftMenue';
import RightSideHeader from './../../Components/RightSideHeader/RightSideHeader';
import SimpleTable from '../../Components/SimpleTable/SimpleTable';
import CheckTable from './../../Components/CheckTable/CheckTable';
// end imports componenets ----------------------------------------------------------------------------------------------------------------------------------

export default function Tables() {
    const contextUser = useContext(context)
    return (
        <div className='Tables'>
            {contextUser.windowSize >= 800 ? <LeftMenue></LeftMenue> : <LeftMenue classProps={"PhoneStyle"} />}

            <div className='Tables__Right-Side'>
                <RightSideHeader></RightSideHeader>
                <div className='Tables__Right-Side__Tables-Developement'><SimpleTable></SimpleTable></div>
                <div className='Tables__Right-Side__Tables-Check'><CheckTable></CheckTable></div>
                <div className='Tables__Right-Side__Four-Column'><SimpleTable></SimpleTable></div>
                <div className='Tables__Right-Side__Complex-Table'><SimpleTable></SimpleTable></div>
            </div>
        </div>
    )
}
