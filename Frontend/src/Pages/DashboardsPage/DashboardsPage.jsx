/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from 'react'
import './DashboardsPage.css'

// start imports componenets ------------------------------------------------------------------------------------------------------------------------------------
import { Context } from '../../Context/ContextProvider';
import LeftMenu from '../../Components/LeftMenu/LeftMenu'
import RightSideHeader from './../../Components/RightSideHeader/RightSideHeader'
import Stocks from './../../Components/Stocks/Stocks'
import DataGrid from '../../Components/DataGrid/DataGrid';
import LineCharts from '../../Components/LineCharts/LineCharts';
import BarCharts from '../../Components/BarCharts/BarCharts';
import PieCharts from './../../Components/PieCharts/PieCharts';
import BrushCharts from './../../Components/BrushCharts/BrushCharts';
import Icon from './../../Components/Icons/Icons'
import LoadingPage from './../../Components/LoadingPage/LoadingPage'
// end imports componenets ------------------------------------------------------------------------------------------------------------------------------------

// start import icons ------------------------------------------------------------------------------------------------------------------------------------
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import swal from 'sweetalert'
import axios from 'axios';
import SummeryMenu from '../../Components/SummeryMenu/SummeryMenu';
import LeftHiddenMenu from '../../Components/LeftHiddenMenu/LeftHiddenMenu';
// end import icons ------------------------------------------------------------------------------------------------------------------------------------

export default function DashboardsPage() {

    const contextUser = useContext(Context);

    useEffect(() => {
        async function getStockesDatas() {
            try {
                axios(`https://dashboard-44w3.onrender.com/dashboardAPI/stocks/${contextUser.userInforms[0].id}`)
                    .then(res => contextUser.setStocks(res.data))
            } catch (error) {
                console.log(error);
                swal({
                    title: "Error While Connecting To Server",
                    icon: "error",
                    buttons: ["Refresh"]
                }).then(res => window.location.reload())

            }
        }

        async function getLineChartDatas() {
            try {
                axios(`https://dashboard-44w3.onrender.com/dashboardAPI/lineChart/${contextUser.userInforms[0].id}`)
                    .then(res => contextUser.setLineChart(res.data))
            } catch (error) {
                console.log(error);
                swal({
                    title: "Error While Connecting To Server",
                    icon: "error",
                    buttons: ["Refresh"]
                }).then(res => window.location.reload())

            }
        }

        async function getLineChartTitleDatas() {
            try {
                axios(`https://dashboard-44w3.onrender.com/dashboardAPI/lineChartTitle/${contextUser.userInforms[0].id}`)
                    .then(res => contextUser.setLineChartTitle(res.data))
            } catch (error) {
                console.log(error);
                swal({
                    title: "Error While Connecting To Server",
                    icon: "error",
                    buttons: ["Refresh"]
                }).then(res => window.location.reload())

            }
        }

        async function getBarChartDatas() {
            try {
                axios(`https://dashboard-44w3.onrender.com/dashboardAPI/barChart/${contextUser.userInforms[0].id}`)
                    .then(res => contextUser.setBarChart(res.data))
            } catch (error) {
                console.log(error);
                swal({
                    title: "Error While Connecting To Server",
                    icon: "error",
                    buttons: ["Refresh"]
                }).then(res => window.location.reload())

            }
        }

        async function getPieChartDatas() {
            try {
                axios(`https://dashboard-44w3.onrender.com/dashboardAPI/pieChart/${contextUser.userInforms[0].id}`)
                    .then(res => contextUser.setPieChart(res.data))
            } catch (error) {
                console.log(error);
                swal({
                    title: "Error While Connecting To Server",
                    icon: "error",
                    buttons: ["Refresh"]
                }).then(res => window.location.reload())

            }
        }

        async function getPieChartTitlesDatas() {
            try {
                axios(`https://dashboard-44w3.onrender.com/dashboardAPI/pieChartTitles/${contextUser.userInforms[0].id}`)
                    .then(res => contextUser.setPieChartTitles(res.data))
            } catch (error) {
                console.log(error);
                swal({
                    title: "Error While Connecting To Server",
                    icon: "error",
                    buttons: ["Refresh"]
                }).then(res => window.location.reload())

            }
        }

        async function getBrushChartDatas() {
            try {
                axios(`https://dashboard-44w3.onrender.com/dashboardAPI/brushChart/${contextUser.userInforms[0].id}`)
                    .then(res => contextUser.setBrushChart(res.data))
            } catch (error) {
                console.log(error);
                swal({
                    title: "Error While Connecting To Server",
                    icon: "error",
                    buttons: ["Refresh"]
                }).then(res => window.location.reload())

            }
        }

        getStockesDatas()
        getLineChartDatas()
        getLineChartTitleDatas()
        getBarChartDatas()
        getPieChartDatas()
        getPieChartTitlesDatas()
        getBrushChartDatas()

    }, [])

    return (
        <div className="DashboardsPage">

            {
                (
                    !contextUser.leftMenuLinks ||
                    !contextUser.stocks.length ||
                    !contextUser.lineChart.length ||
                    !contextUser.lineChartTitle.length ||
                    !contextUser.pieChart.length ||
                    !contextUser.pieChartTitles.length ||
                    !contextUser.barChart.length ||
                    !contextUser.brushChart.length
                )
                    ?
                    <LoadingPage></LoadingPage>
                    :
                    ""
            }

            <LeftMenu></LeftMenu>
            <SummeryMenu></SummeryMenu>

            {contextUser.isOpenHiddenMenu ? <LeftHiddenMenu style={{ left: "0" }}></LeftHiddenMenu> : <LeftHiddenMenu style={{ left: "-100%" }}></LeftHiddenMenu>}

            <div className={`DashboardsPage__Right-Side`}>

                <RightSideHeader></RightSideHeader>

                <div className='DashboardsPage__Right-Side__Stocks'>

                    {
                        contextUser.stocks.length
                            ?
                            contextUser.stocks.map(informs =>
                                <Stocks key={informs.id} {...informs}></Stocks>
                            )
                            :
                            ""
                    }
                </div>

                <div className='DashboardsPage__Right-Side__First-Line-Charts'>
                    <div className='DashboardsPage__Right-Side__First-Line-Charts__Month'>
                        <div className='DashboardsPage__Right-Side__First-Line-Charts__Month__Left-Details'>
                            <span className='DashboardsPage__Right-Side__First-Line-Charts__Month__Left-Details__Title'>This Month</span>
                            <span className='DashboardsPage__Right-Side__First-Line-Charts__Month__Left-Details__Price'>
                                {
                                    contextUser.lineChartTitle.length
                                        ?
                                        contextUser.lineChartTitle[0].value
                                        :
                                        ""
                                }
                            </span>
                            <div className='DashboardsPage__Right-Side__First-Line-Charts__Month__Left-Details__Spant'>
                                <span>Total Spent</span>
                                <span className='DashboardsPage__Right-Side__First-Line-Charts__Month__Left-Details__Spant__Precent'
                                    style={
                                        contextUser.lineChartTitle.length
                                            ?
                                            contextUser.lineChartTitle[0].color === "green"
                                                ?
                                                { color: "var(--green-color)" }
                                                :
                                                { color: "red" }
                                            :
                                            {}}
                                >
                                    {
                                        contextUser.lineChartTitle.length
                                            ?
                                            <>
                                                <Icon iconName={contextUser.lineChartTitle[0].totalSpentArrow}></Icon>
                                                {contextUser.lineChartTitle[0].totalSpent}
                                            </>
                                            :
                                            ""
                                    }

                                </span>
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
                                <span>
                                    {
                                        contextUser.pieChartTitles.length
                                            ?
                                            contextUser.pieChartTitles[0].totalProfit + "%"
                                            :
                                            ""
                                    }
                                </span>
                            </div>
                            <div>
                                <span>Total Loss</span>
                                <span>
                                    {
                                        contextUser.pieChartTitles.length
                                            ?
                                            contextUser.pieChartTitles[0].totalLoss + "%"
                                            :
                                            ""
                                    }
                                </span>
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
