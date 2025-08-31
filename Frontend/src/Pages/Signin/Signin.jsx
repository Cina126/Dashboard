/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import './Signin.css';

import Google from './../../../src/Images/Google__G__logo.svg.webp';
import BackImg from './../../../src/Images/cc6f992da23f25d992a4db354584463d19897b48.jpg';
import { Context } from './../../Context/ContextProvider'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Icon from './../../Components/Icons/Icons';
import axios from 'axios';
import swal from 'sweetalert'
import LoadingRequest from '../../Components/LoadingRequest/LoadingRequest';

export default function Signinin() {

    const contextUser = useContext(Context)
    const emailRef = useRef()
    const passwordRef = useRef()

    useEffect(() => {
        contextUser.setIsSigninEmailInputValid(null)
        contextUser.setIsSigninPasswordInputValid(null)
    }, [])

    async function loginUserLogic() {
        if (contextUser.isSigninEmailInputValid === true && contextUser.isSigninPasswordInputValid === true) {
            try {
                contextUser.setIsLoadingRequest(true)
                axios('https://dashboard-44w3.onrender.com/dashboardAPI/users/userLogin', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    data: JSON.stringify({ email: emailRef.current.value, password: passwordRef.current.value })
                })
                    .then(res => {
                        if (res.data?.length) {
                            localStorage.setItem("Dashboard-User-Token", res.data?.[0]?.token)
                            swal({
                                title: "Successfuly Logged in :)",
                                icon: "success",
                                button: 'Go To Dashboard'
                            }).then(res => {
                                contextUser.setUserInformsFlag(prev => !prev)
                            })
                        } else {
                            swal({
                                title: "No Contains Users With This Informs",
                                icon: "warning",
                                button: 'Got IT'
                            })
                        }
                    })
            } catch (error) {
                swal({
                    title: "Somethings Went Wrong !",
                    icon: "error",
                    button: "Try Again"
                }).then(res => window.location.reload())
            } finally {
                contextUser.setIsLoadingRequest(false)
            }
        } else {
            swal({
                title: "Please Fill Filds Truly",
                icon: "error",
                button: "OK"
            })
        }

    }

    function changeEmailLogic(event) {
        if (new RegExp(contextUser.emailValidation).test(event.target.value)) {
            event.target.parentElement.classList.remove("onValidInput")
            contextUser.setIsSigninEmailInputValid(true)
        } else {
            event.target.parentElement.classList.add("onValidInput")
            contextUser.setIsSigninEmailInputValid(false)
        }
    }

    function changePasswordLogic(event) {
        if (new RegExp(contextUser.passwordValidation).test(event.target.value)) {
            event.target.parentElement.classList.remove("onValidInput")
            contextUser.setIsSigninPasswordInputValid(true)
        } else {
            event.target.parentElement.classList.add("onValidInput")
            contextUser.setIsSigninPasswordInputValid(false)
        }
    }

    function changeInputTypeLogic() {
        if (contextUser.signinPasswordType === "password") {
            contextUser.setSigninPasswordType("text")
        } else {
            contextUser.setSigninPasswordType("password")
        }
    }

    return (
        <div className='Signin'>

            {contextUser.isLoadingRequest ? <LoadingRequest></LoadingRequest> : ""}

            <div className='Signin__Container'>
                <div className='Signin__Container__Left-Side'>
                    <div className='Signin__Container__Left-Side__Container'>
                        <span className='Signin__Container__Left-Side__Container__Signin'>Sign In</span>
                        <span className='Signin__Container__Left-Side__Container__Exp'>Enter your email and password to Sign in</span>
                        <div className='Signin__Container__Left-Side__Container__Google'>
                            <img src={Google} alt="" />
                            <span>Sign In With Google</span>
                        </div>
                        <span className='Signin__Container__Left-Side__Container__Or'>____________________OR____________________</span>
                        <span className='Signin__Container__Left-Side__Container__Inputs-Texts'>Email*</span>
                        <div className='Signin__Container__Left-Side__Container__Inputs'>
                            <div className='Signin__Container__Left-Side__Container__Inputs__Input'>
                                <span>
                                    <Icon iconName={"Email"}></Icon>
                                </span>
                                <input ref={emailRef} onChange={changeEmailLogic} type="email" placeholder='Mail@gmail.com' required />
                            </div>
                            {
                                contextUser.isSigninEmailInputValid !== false
                                    ?
                                    ""
                                    :
                                    <span>Please Enter Valid Value</span>
                            }
                        </div>
                        <span className='Signin__Container__Left-Side__Container__Inputs-Texts'>Password*</span>
                        <div className='Signin__Container__Left-Side__Container__Inputs'>
                            <div className='Signin__Container__Left-Side__Container__Inputs__Input'>
                                <span onClick={changeInputTypeLogic} style={{ cursor: "pointer" }}>
                                    {
                                        contextUser.signinPasswordType === "password"
                                            ?
                                            <Icon iconName={"VisibilityOff"}></Icon>
                                            :
                                            <Icon iconName={"Visibility"}></Icon>
                                    }
                                </span>
                                <input ref={passwordRef} onChange={changePasswordLogic} type={contextUser.signinPasswordType} placeholder='Min 8 Characters' min={8} required />
                            </div>
                            {
                                contextUser.isSigninPasswordInputValid !== false
                                    ?
                                    ""
                                    :
                                    <span>Must Incliudes (#,&,^,%,!,...),numbers,All Letters Type </span>
                            }
                        </div>
                        <div className='Signin__Container__Left-Side__Container__Kepp-And-Foret-Handel'>
                            <form>
                                <input type="checkbox" id='Keep-Logged' checked onChange={() => { }} />
                                <label htmlFor="Keep-Logged">Keep Me Logged In</label>
                            </form>
                            <span className='Signin__Container__Left-Side__Container__Kepp-And-Foret-Handel__Forget-Pass'>Forget Password ?</span>
                        </div>
                        <button className='Signin__Container__Left-Side__Btn' onClick={loginUserLogic}>Sign In</button>
                        <NavLink to={"/Signup"} className='Signin__Container__Left-Side__Register'>Not Register Yet ? Create An Account</NavLink>

                    </div>

                </div>
                <img className='Signin__Container__Right-Side' src={BackImg} alt="" />
            </div>
        </div>
    )
}

