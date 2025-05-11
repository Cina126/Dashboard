/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './App.css'
import context from './Context/Context';
import { useRoutes } from 'react-router-dom'
import routes from './Routes/routes';

// start imports icons -----------------------------------------------------------------------------------------------------------------------------------------------------
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TableChartIcon from '@mui/icons-material/BarChart';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import ChartIcon from '@mui/icons-material/BarChart';
import DolarIcon from '@mui/icons-material/Paid';
import TaskIcon from '@mui/icons-material/AssignmentTurnedIn';
import ProjectsIcon from '@mui/icons-material/FolderCopy';
// end imports icons -----------------------------------------------------------------------------------------------------------------------------------------------------

// start import images -----------------------------------------------------------------------------------------------------------------------------------------------------
import USAImage from './../Images/Flag_of_the_United_States.svg.webp';
import Card from './../Images/Card.png';
import Card1 from './../Images/Card1.png';
import Card2 from './../Images/Card2.png';
import Card3 from './../Images/Card3.png';
import Card4 from './../Images/Card4.jpg';
import Card5 from './../Images/Card5.jpg';
import Person from './../Images/Person.png';
import Person1 from './../Images/Person1.png';
import Person2 from './../Images/Person2.png';
import Person3 from './../Images/Person3.png';
import Person4 from './../Images/Person4.png';
import Person5 from './../Images/Person5.png';
import project1 from './../Images/33f70c40678cc4a7f165954d4c813c629f97752d.jpg';
import project2 from './../Images/56da5e60e40ab88855b483cd85ababe64bd41192.jpg';
import project3 from './../Images/b28f456e1dc8af3a0c5823e6a184638bf3c63860.jpg';
// end import images -----------------------------------------------------------------------------------------------------------------------------------------------------

export default function App() {
    const routesUser = useRoutes(routes);

    const [leftMenueLinks, setLeftMenueLinks] = useState([
        { id: "A0", text: "Dashboard", icon: HomeIcon, to: "/" },
        { id: "A1", text: "NFT Markets", icon: ShoppingCartIcon, to: "/NFT Markets" },
        { id: "A2", text: "Tables", icon: TableChartIcon, to: "/Tables" },
        { id: "A3", text: "Profile", icon: ProfileIcon, to: "/Profile" },
        { id: "A4", text: "Signin", icon: LoginIcon, to: "/Signin" },
    ]);
    const [stocks, setStocks] = useState([
        { id: "B0", text: "Earning", value: "$350", discribtion: "", icon: ChartIcon, img: "" },
        { id: "B1", text: "Spand This Month", value: "$642.39", discribtion: "", icon: DolarIcon, img: "" },
        { id: "B2", text: "Equity", value: "$574.34", discribtion: "+25% Price Last Month", icon: "", img: "" },
        { id: "B3", text: "Your Balance", value: "$1000", discribtion: "", icon: "", img: USAImage },
        { id: "B4", text: "New Tasks", value: "154", discribtion: "Last Task Completed One Day Ago", icon: TaskIcon, img: "" },
        { id: "B5", text: "Total Projects", value: "2957", discribtion: "", icon: ProjectsIcon, img: "" },
    ]);
    const [trendingNFTs, setTrendingNFTs] = useState([
        { id: "C0", text: "Abstract Colors", ETHPrice: 0.91, src: Card },
        { id: "C1", text: "ETH AI Brain", ETHPrice: 2.82, src: Card1 },
        { id: "C2", text: "Mesh Gradients", ETHPrice: 3.41, src: Card2 },
    ]);
    const [recentlyAddedNFTs, setRecentlyAddedNFTs] = useState([
        { id: "D0", text: "Swipe Circles", ETHPrice: 2.30, src: Card3 },
        { id: "D1", text: "Colorful Heaven ", ETHPrice: 1.30, src: Card4 },
        { id: "D2", text: "3d Cubes Arts", ETHPrice: 6.58, src: Card5 },
    ]);
    const [topCreators, setTopCreators] = useState([
        { id: "E0", src: Person, FirstCount: 0, FinalCount: 921, Rating: 0.81 },
        { id: "E1", src: Person1, FirstCount: 0, FinalCount: 872, Rating: 0.87 },
        { id: "E2", src: Person2, FirstCount: 0, FinalCount: 711, Rating: 0.91 },
        { id: "E3", src: Person3, FirstCount: 0, FinalCount: 409, Rating: 0.78 },
        { id: "E4", src: Person4, FirstCount: 0, FinalCount: 421, Rating: 0.95 },
        { id: "E5", src: Person5, FirstCount: 0, FinalCount: 401, Rating: 0.75 },
    ]);
    const [histories, setHistories] = useState([
        { id: "F0", src: Card, text: "Abstract", disc: "By Est. Jackson", ETHPrice: 1.30, time: "30s" },
        { id: "F1", src: Card1, text: "ETH AI Brain", disc: "By Nick Wilson", ETHPrice: 0.91, time: "58s" },
        { id: "F2", src: Card2, text: "Swipe Circles", disc: "By Peter Will", ETHPrice: 2.82, time: "1m" },
        { id: "F3", src: Card3, text: "Mash Gradient", disc: "By Jefery", ETHPrice: 2.30, time: "1m" },
        { id: "F4", src: Card4, text: "3D Cubes", disc: "By Smith jcb", ETHPrice: 0.56, time: "4m" },
        { id: "F5", src: Card5, text: "Heaven", disc: "By Andrew ", ETHPrice: 6.58, time: "12m" },
    ]);
    const [folowers, setFolowers] = useState([
        { id: "G0", text: "Posts", value: "17" },
        { id: "G1", text: "Folowers", value: "9.6K" },
        { id: "G2", text: "Folowing", value: "259" },
    ]);
    const [allProjects, setAllProjects] = useState([
        { id: "H0", src: project1, title: "Tochnology Behind The Blockchain" },
        { id: "H1", src: project2, title: "Greatest Way To A Good Economy" },
        { id: "H2", src: project2, title: "Most Essential Tips For Burnout" },
    ]);
    const [generalInforms, setGeneralInforms] = useState([
        { id: "I0", title: "Education", value: "Stanford University" },
        { id: "I1", title: "Language", value: "English , Spanish , Italian" },
        { id: "I2", title: "Department", value: "Product Design" },
        { id: "I3", title: "Work Hostory", value: "Google , Facebook" },
        { id: "I4", title: "Organization", value: "Web LLC" },
        { id: "I5", title: "Birthday", value: "20 July 1986" },
    ]);
    const [notifications, setNotifications] = useState([
        { id: "J0", title: "Item Update Notifications", active: true },
        { id: "J1", title: "Item Comment Notifications ", active: false },
        { id: "J2", title: "Buyer Review Notifications", active: false },
        { id: "J3", title: "Rating Reminders Notifications", active: true },
        { id: "J4", title: "Meetups Near You Notifications", active: false },
        { id: "J5", title: "Company News Notifications", active: true },
        { id: "J6", title: "New Launches And Projects", active: true },
        { id: "J7", title: "Monthly Products Changes", active: false },
        { id: "J8", title: "Subscribe To Newsletter", active: true },
        { id: "J9", title: "Email Me When Someone Follows Me", active: false },
    ]);
    const [windowSize, setWindowSize] = useState(window.outerWidth);

    window.addEventListener('resize', () => {
        setWindowSize(window.outerWidth);
    })
    return (
        <context.Provider value={{
            leftMenueLinks, setLeftMenueLinks,
            stocks, setStocks, trendingNFTs, setTrendingNFTs,
            recentlyAddedNFTs, setRecentlyAddedNFTs,
            topCreators, setTopCreators, histories, setHistories,
            folowers, setFolowers, allProjects, setAllProjects,
            generalInforms, setGeneralInforms, notifications, setNotifications,
            windowSize, setWindowSize
        }}>
            <div className='App'>
                {routesUser}
            </div>
        </context.Provider>
    )
}
