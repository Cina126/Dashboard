import './Tables.css';


// start imports componenets ----------------------------------------------------------------------------------------------------------------------------------
import LeftMenue from './../../Components/LeftMenue/LeftMenue';
import RightSideHeader from './../../Components/RightSideHeader/RightSideHeader';
import SimpleTable from '../../Components/SimpleTable/SimpleTable';
import CheckTable from './../../Components/CheckTable/CheckTable';
// end imports componenets ----------------------------------------------------------------------------------------------------------------------------------

export default function Tables() {
    return (
        <div className='Tables'>
            <LeftMenue></LeftMenue>

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
