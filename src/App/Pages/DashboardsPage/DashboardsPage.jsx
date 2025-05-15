import React, { useContext } from 'react'
import './DashboardsPage.css'

// start imports componenets ------------------------------------------------------------------------------------------------------------------------------------
import { Context } from '../../Context/ContextProvider';
import LeftMenue from '../../Components/LeftMenue/LeftMenue'
import RightSideHeader from './../../Components/RightSideHeader/RightSideHeader'
import Stocks from './../../Components/Stocks/Stocks'
import DataGrid from '../../Components/DataGrid/DataGrid';
import LineCharts from '../../Components/LineCharts/LineCharts';
import BarCharts from '../../Components/BarCharts/BarCharts';
import PieCharts from './../../Components/PieCharts/PieCharts';
import BrushCharts from './../../Components/BrushCharts/BrushCharts';
// end imports componenets ------------------------------------------------------------------------------------------------------------------------------------

// start import icons ------------------------------------------------------------------------------------------------------------------------------------
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useLocation } from 'react-router-dom';
// end import icons ------------------------------------------------------------------------------------------------------------------------------------

export default function DashboardsPage() {

    const location = useLocation();
    const contextUser = useContext(Context);

    location.pathname = "/Dashboard";

    return (
        <div className="DashboardsPage">

            <LeftMenue></LeftMenue>

            <div className={`DashboardsPage__Right-Side`}>
                
                <RightSideHeader></RightSideHeader>

                <div className='DashboardsPage__Right-Side__Stocks'>
                    {contextUser.stocks.map((informs) => {
                        return <Stocks key={informs.id} {...informs}>{informs.icon ? <informs.icon></informs.icon> : ""} {informs.img ? <img src={informs.img} alt="" /> : ""}</Stocks>
                    })}
                </div>

                <div className='DashboardsPage__Right-Side__First-Line-Charts'>
                    <div className='DashboardsPage__Right-Side__First-Line-Charts__Month'>
                        <div className='DashboardsPage__Right-Side__First-Line-Charts__Month__Left-Details'>
                            <span className='DashboardsPage__Right-Side__First-Line-Charts__Month__Left-Details__Title'>This Month</span>
                            <span className='DashboardsPage__Right-Side__First-Line-Charts__Month__Left-Details__Price'>$37.5K</span>
                            <div className='DashboardsPage__Right-Side__First-Line-Charts__Month__Left-Details__Spant'>
                                <span>Total Spent</span>
                                <span className='DashboardsPage__Right-Side__First-Line-Charts__Month__Left-Details__Spant__Precent'><ArrowDropUpIcon></ArrowDropUpIcon> +3.45%</span>
                            </div>
                            <span className='DashboardsPage__Right-Side__First-Line-Charts__Month__Left-Details__Track'><CheckCircleIcon></CheckCircleIcon> On Track</span>
                        </div>
                        <div className='DashboardsPage__Right-Side__First-Line-Charts__Month__Right-Chart'><LineCharts></LineCharts></div>
                    </div>

                    <div className='DashboardsPage__Right-Side__First-Line-Charts__Week'>
                        <span className='DashboardsPage__Right-Side__First-Line-Charts__Week__Title'>Weakly Revenue</span>
                        <div className='DashboardsPage__Right-Side__First-Line-Charts__Week__Chart'><BarCharts></BarCharts></div>
                    </div>
                </div>

                <div className='DashboardsPage__Right-Side__Second-Line-Charts'>
                    <div className='DashboardsPage__Right-Side__Second-Line-Charts__Check-Table'><DataGrid></DataGrid></div>

                    <div className='DashboardsPage__Right-Side__Second-Line-Charts__Pie'>
                        <span>Your Total Pie Charts</span>
                        <PieCharts></PieCharts>
                        <div className='DashboardsPage__Right-Side__Second-Line-Charts__Pie-Two-Sections'>
                            <div>
                                <span>Total Profit</span>
                                <span>63%</span>
                            </div>
                            <div>
                                <span>Total Loss</span>
                                <span>25%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='DashboardsPage__Right-Side__Third-Line-Charts'>
                    <div className='DashboardsPage__Right-Side__Third-Line-Charts__Brush-Chart'><BrushCharts></BrushCharts></div>
                </div>

            </div>
        </div>
    )
}
