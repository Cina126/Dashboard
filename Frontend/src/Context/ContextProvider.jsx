/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useState, createContext, useEffect } from 'react';
import useGetFetch from '../Functions/useGetFetch';
import useGetUserInforms from '../Functions/useGetUserInforms';

import project1 from './../../src/Images/33f70c40678cc4a7f165954d4c813c629f97752d.jpg';
import project2 from './../../src/Images/56da5e60e40ab88855b483cd85ababe64bd41192.jpg';

// end import images -----------------------------------------------------------------------------------------------------------------------------------------------------

export const Context = createContext();

export default function ContextProvider({ children }) {

    // start create states -----------------------------------------------------------------------------------------------------------------------------------------------------

    const [userInforms, setUserInformsFlag] = useGetUserInforms()
    const [leftMenuLinks, setLeftMenuLinks, leftMenuLinksFlag, setLeftMenuLinksFlag] = useGetFetch("leftMenusLinks")
    const [topCreators, setTopCreators, topCreatorsFlag, setTopCreatorsFlag] = useGetFetch("topCreators");
    const [histories, setHistories, historiesFlag, setHistoriesFlag] = useGetFetch("histories");
    const [todos, setTodos, todosFlag, setTodosFlag] = useGetFetch("todos");

    const [stocks, setStocks] = useState([])
    const [lineChart, setLineChart] = useState([])
    const [lineChartTitle, setLineChartTitle] = useState([])
    const [barChart, setBarChart] = useState([]);
    const [pieChart, setPieChart] = useState([]);
    const [pieChartTitles, setPieChartTitles] = useState([]);
    const [brushChart, setBrushChart] = useState([])
    const [projects, setProjects] = useState([])
    const [isOpenEditTodoModal, setIsOpenEditTodoModal] = useState({ todoID: "", situation: false })
    const [personTodos, setPersonTodos] = useState([])
    const [editTodoText, setEditTodoText] = useState("")
    const [todosFilter, setTodosFilter] = useState("All")
    const [isOpenHiddenMenu, setIsOpenHiddenMenu] = useState(false)

    const [passwordValidation] = useState(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/)
    const [emailValidation] = useState(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

    const [allProjects, setAllProjects] = useState([
        { id: "H0", src: project1, title: "Tochnology Behind The Blockchain" },
        { id: "H1", src: project2, title: "Greatest Way To A Good Economy" },
        { id: "H2", src: project2, title: "Most Essential Tips For Burnout" },
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

    const [isSigninEmailInputValid, setIsSigninEmailInputValid] = useState(null)
    const [isSigninPasswordInputValid, setIsSigninPasswordInputValid] = useState(null)
    const [signinPasswordType, setSigninPasswordType] = useState("password")

    const [isLoadingRequest, setIsLoadingRequest] = useState(false)

    // end create states -----------------------------------------------------------------------------------------------------------------------------------------------------


    const [windowSize, setWindowSize] = useState(window.outerWidth);



    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize(window.outerWidth);
        });
    }, [])

    useEffect(() => {
        if (windowSize > 1300) {
            setIsOpenHiddenMenu(false)
        }
    }, [windowSize])

    useEffect(() => {
        setIsOpenHiddenMenu(false)
    }, [window.location.href])

    return (
        <Context.Provider value={{
            userInforms, setUserInformsFlag,
            leftMenuLinks, setLeftMenuLinks, leftMenuLinksFlag, setLeftMenuLinksFlag,
            stocks, setStocks,
            lineChart, setLineChart,
            lineChartTitle, setLineChartTitle,
            barChart, setBarChart,
            pieChart, setPieChart,
            pieChartTitles, setPieChartTitles,
            brushChart, setBrushChart,
            histories, setHistories, historiesFlag, setHistoriesFlag,
            topCreators, setTopCreators, topCreatorsFlag, setTopCreatorsFlag,
            allProjects, setAllProjects,
            notifications, setNotifications,
            windowSize, setWindowSize,
            passwordValidation, emailValidation,
            isSigninEmailInputValid, setIsSigninEmailInputValid,
            isSigninPasswordInputValid, setIsSigninPasswordInputValid,
            signinPasswordType, setSigninPasswordType,
            projects, setProjects,
            todos, setTodos, todosFlag, setTodosFlag,
            isOpenEditTodoModal, setIsOpenEditTodoModal,
            personTodos, setPersonTodos,
            editTodoText, setEditTodoText,
            todosFilter, setTodosFilter,
            isOpenHiddenMenu, setIsOpenHiddenMenu,

            isLoadingRequest, setIsLoadingRequest
        }}>
            {children}
        </Context.Provider>
    )
}


