import './Tables.css';


// start imports componenets ----------------------------------------------------------------------------------------------------------------------------------
import LeftMenu from './../../Components/LeftMenu/LeftMenu';
import RightSideHeader from './../../Components/RightSideHeader/RightSideHeader';
import SimpleTable from '../../Components/SimpleTable/SimpleTable';
import CheckTable from './../../Components/CheckTable/CheckTable';
import LeftHiddenMenu from '../../Components/LeftHiddenMenu/LeftHiddenMenu';
import SummeryMenu from '../../Components/SummeryMenu/SummeryMenu';
import { Context } from './../../Context/ContextProvider'
import { useContext } from 'react';
// end imports componenets ----------------------------------------------------------------------------------------------------------------------------------

export default function Tables() {

    const contextUser = useContext(Context)

    return (
        <div className='Tables'>
            <LeftMenu></LeftMenu>
            <SummeryMenu></SummeryMenu>

            {contextUser.isOpenHiddenMenu ? <LeftHiddenMenu style={{ left: "0" }}></LeftHiddenMenu> : <LeftHiddenMenu style={{ left: "-100%" }}></LeftHiddenMenu>}

            <div className='Tables__Right-Side'>
                <RightSideHeader></RightSideHeader>
                <div className='Tables__Right-Side__Tables-Developement'><SimpleTable></SimpleTable></div>
                <div className='Tables__Right-Side__Tables-Check'><CheckTable></CheckTable></div>
                <div className='Tables__Right-Side__Complex-Table'><CheckTable></CheckTable></div>
                <div className='Tables__Right-Side__Four-Column'><SimpleTable></SimpleTable></div>
            </div>
        </div>
    )
}
