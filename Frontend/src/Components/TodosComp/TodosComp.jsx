import React, { useContext } from 'react'
import './TodosComp.css';
import Icons from './../../Components/Icons/Icons';
import axios from 'axios';
import { Context } from './../../Context/ContextProvider';
import swal from 'sweetalert'

export default function TodosComp({ id, title, isCompleted }) {

    const contextUser = useContext(Context)

    function changeCompleteTodoLogic() {
        try {
            axios(`https://dashboard-44w3.onrender.com/dashboardAPI/todos/completeTodos/${id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    data: JSON.stringify({ isCompleted: Number(!isCompleted) })
                })
                .then(res => contextUser.setTodosFlag(prev => !prev))
        } catch (error) {
            console.log(error);
        }
    }

    function deleteTodoLogic() {
        swal({
            title: "Do You Want Delete This Todo ?",
            buttons: {
                cancel: "Cancel",
                confirm: {
                    text: "Yes",
                    value: true,
                    visible: true,
                    className: "swal-red-btn"
                },
            },
            icon: "warning"
        }).then(res => {
            if (res) {
                try {
                    axios(`https://dashboard-44w3.onrender.com/dashboardAPI/todos/deleteTodos/${id}`,
                        {
                            method: "DELETE"
                        })
                        .then(res => {
                            swal({
                                title: "Todo Succcessfuly Deleted",
                                icon: "success",
                                buttons: "OK"
                            }).then(res => contextUser.setTodosFlag(prev => !prev)
                            )
                        })
                } catch (error) {
                    console.log(error);
                }
            }
        })

    }

    function editTodoTitleLogic() {
        contextUser.setEditTodoText(title)
        contextUser.setIsOpenEditTodoModal(prev => { return { todoID: id, situation: true } })
    }

    return (
        <div id={id} className='TodosComp'>
            {isCompleted ? <span className='TodosComp__Done-Text'>{title}</span> : <span className='TodosComp__Todo-Text'>{title}</span>}

            <div className='TodosComp__Right-Btns'>
                <input onChange={changeCompleteTodoLogic} type="checkbox" defaultChecked={isCompleted} />
                <span onClick={editTodoTitleLogic}>
                    <Icons iconName={"Edit"}></Icons>
                </span>
                <span onClick={deleteTodoLogic}>
                    <Icons iconName={"Delete"}></Icons>
                </span>
            </div>
        </div>
    )
}
