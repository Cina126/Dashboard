/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect, useRef } from 'react'
import './Todos.css';
import LeftMenu from '../../Components/LeftMenu/LeftMenu';
import RightSideHeader from '../../Components/RightSideHeader/RightSideHeader';
import Icon from './../../Components/Icons/Icons'
import TodosComp from '../../Components/TodosComp/TodosComp';
import { Context } from './../../Context/ContextProvider';
import axios from 'axios';
import swal from 'sweetalert'
import SummeryMenu from '../../Components/SummeryMenu/SummeryMenu';
import LeftHiddenMenu from '../../Components/LeftHiddenMenu/LeftHiddenMenu';
import LoadingPage from './../../Components/LoadingPage/LoadingPage'


export default function Todos() {

    const createTodoInputRef = useRef()
    const contextUser = useContext(Context)

    const AllRef = useRef()
    const DoneRef = useRef()
    const TodoRef = useRef()

    useEffect(() => {
        contextUser.setTodosFlag(prev => !prev)
    }, [])

    useEffect(() => {
        contextUser.setPersonTodos(() => {
            return contextUser.todos?.filter((todo) => { return +todo.userID === +contextUser.userInforms?.[0]?.id });
        })
    }, [contextUser.todos])

    function createNewTodos() {
        if (createTodoInputRef.current.value) {
            try {
                axios("https://dashboard-44w3.onrender.com/dashboardAPI/todos/createNewTodo",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        data: JSON.stringify({
                            title: createTodoInputRef.current.value,
                            isCompleted: 0,
                            userID: contextUser.userInforms?.[0]?.id
                        })
                    }
                )
                    .then(res => {
                        contextUser.setTodosFlag(prev => !prev)
                        createTodoInputRef.current.value = ""
                    })
            } catch (error) {
                console.log(error);
            }
        } else {

        }
    }

    function changeEditTodoTitle(event) {
        contextUser.setEditTodoText(event.target.value)
    }

    function removeEditTodoModal() {
        contextUser.setIsOpenEditTodoModal(prev => { return { ...prev, situation: false } })
    }

    function submitEditedModal() {
        if (contextUser.editTodoText) {
            try {
                axios(`https://dashboard-44w3.onrender.com/dashboardAPI/todos/editTodoTitle/${contextUser.isOpenEditTodoModal.todoID}`,
                    {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        data: JSON.stringify({ title: contextUser.editTodoText })
                    }
                )
                    .then(res => {
                        contextUser.setTodosFlag(prev => !prev)
                        removeEditTodoModal()
                    })
            } catch (error) {
                console.log(error);
            }
        } else {
            swal({
                title: "Please Fill Todo Title",
                icon: "warning",
                buttons: "OK"
            })
        }
    }

    function filterTodosLogic(event) {
        AllRef.current.classList.remove("activeSituation")
        DoneRef.current.classList.remove("activeSituation")
        TodoRef.current.classList.remove("activeSituation")
        event.target.classList.add("activeSituation")
        contextUser.setTodosFilter(event.target.innerHTML)
    }

    useEffect(() => {
        switch (contextUser.todosFilter) {
            case "All": contextUser.setPersonTodos(() => {
                return contextUser.todos?.filter((todo) => { return +todo.userID === +contextUser.userInforms?.[0]?.id });
            })
                break;
            case "Done": contextUser.setPersonTodos(() => {
                return contextUser.todos.filter((todos) => { return todos.isCompleted === 1 && todos.userID === contextUser.userInforms?.[0]?.id })
            });
                break;
            case "Todo": contextUser.setPersonTodos(() => {
                return contextUser.todos.filter((todos) => { return todos.isCompleted === 0 && todos.userID === contextUser.userInforms?.[0]?.id })
            });
                break;
        }
    }, [contextUser.todosFilter, contextUser.todos])

    function deleteAllTodos() {
        swal({
            title: "Do You Want To Delete All Todos ?",
            icon: "warning",
            buttons: {
                cancel: "Cancel",
                confirm: {
                    text: "Yes",
                    value: true,
                    visible: true,
                    className: "swal-red-btn"
                },
            },
        }).then(res => {
            if (res) {
                axios("https://dashboard-44w3.onrender.com/dashboardAPI/todos/deleteAllTodos", {
                    method: "DELETE"
                })
                    .then(res => contextUser.setTodosFlag(prev => !prev))
            }
        })
    }

    function deleteAllDoneTodos() {
        swal({
            title: "Do You Want To Delete All Done Todos ?",
            icon: "warning",
            buttons: {
                cancel: "Cancel",
                confirm: {
                    text: "Yes",
                    value: true,
                    visible: true,
                    className: "swal-red-btn"
                },
            },
        }).then(res => {
            if (res) {
                axios("https://dashboard-44w3.onrender.com/dashboardAPI/todos/deleteAllDoneTodos", {
                    method: "DELETE"
                })
                    .then(res => contextUser.setTodosFlag(prev => !prev))
            }
        })
    }

    return (
        <div className='Todos'>

            {
                (
                    !contextUser.personTodos?.length
                )
                    ?
                    <LoadingPage></LoadingPage>
                    :
                    ""
            }

            {
                contextUser.isOpenEditTodoModal.situation
                    ?
                    <div className='Todos__Edit-Modal'>
                        <span onClick={removeEditTodoModal}>
                            <Icon iconName={"Clear"}></Icon>
                        </span>
                        <input onChange={changeEditTodoTitle} type="text" value={contextUser.editTodoText} />
                        <button onClick={submitEditedModal}>Submit Todo Text</button>
                    </div>
                    :
                    ""
            }


            <LeftMenu></LeftMenu>
            <SummeryMenu></SummeryMenu>

            {contextUser.isOpenHiddenMenu ? <LeftHiddenMenu style={{ left: "0" }}></LeftHiddenMenu> : <LeftHiddenMenu style={{ left: "-100%" }}></LeftHiddenMenu>}

            <div className='Todos__Right-Side'>

                <RightSideHeader></RightSideHeader>

                <div className='Todos__Right-Side__Add-New-Todo'>
                    <div className='Todos__Right-Side__Add-New-Todo__Input'>
                        <Icon iconName={"LibraryBooks"}></Icon>
                        <input ref={createTodoInputRef} type="text" placeholder='Add Your New Todo Title...' />
                    </div>
                    <button onClick={createNewTodos}>Add New Todo</button>
                </div>

                <div className='Todos__Right-Side__TodoList__Situations'>
                    <div ref={AllRef} className='activeSituation' onClick={filterTodosLogic}>All</div>
                    <div ref={DoneRef} className='' onClick={filterTodosLogic}>Done</div>
                    <div ref={TodoRef} className='' onClick={filterTodosLogic}>Todo</div>
                </div>


                <div className='Todos__Right-Side__Show-Todos'>
                    {
                        contextUser.personTodos?.map((todos) => { return <TodosComp key={todos.id} {...todos}></TodosComp> })
                    }
                </div>

                {
                    contextUser.personTodos?.length
                        ?
                        <div className='Todos__Right-Side__Two-Delete-Button'>

                            {
                                contextUser.personTodos?.some((todos) => { return todos.isCompleted === 1 })
                                    ?
                                    <button onClick={deleteAllDoneTodos}>Delete All Done Todos</button>
                                    :
                                    <button disabled onClick={deleteAllDoneTodos}>Delete All Done Todos</button>

                            }

                            {
                                contextUser.personTodos?.some((todos) => { return todos.isCompleted === 0 })
                                    ?
                                    <button onClick={deleteAllTodos}>Delete All Todos</button>
                                    :
                                    <button disabled onClick={deleteAllTodos}>Delete All Todos</button>

                            }

                        </div>
                        :
                        ""
                }


            </div>
        </div>
    )
}
