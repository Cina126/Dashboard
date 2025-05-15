import React from 'react'
import { NavLink } from 'react-router-dom';
import './Signin.css';

import Google from './../../../Images/Google__G__logo.svg.webp';
import BackImg from './../../../Images/cc6f992da23f25d992a4db354584463d19897b48.jpg';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Signinin() {
    return (
        <div className='Signin'>
            <div className='Signin__Container'>
                <div className='Signin__Container__Left-Side'>
                    <div className='Signin__Container__Left-Side__Container'>
                        <NavLink to={"/"} className='Signin__Container__Left-Side__Container__Back-Home'>
                            <ArrowBackIosIcon></ArrowBackIosIcon>
                            Back To Home Page
                        </NavLink>
                        <span className='Signin__Container__Left-Side__Container__Signin'>Signin In</span>
                        <span className='Signin__Container__Left-Side__Container__Exp'>Enter your email and password to Signin in</span>
                        <div className='Signin__Container__Left-Side__Container__Google'>
                            <img src={Google} alt="" />
                            <span>Signin In With Google</span>
                        </div>
                        <span className='Signin__Container__Left-Side__Container__Or'>____________________OR____________________</span>
                        <span className='Signin__Container__Left-Side__Container__Inputs-Texts'>Email*</span>
                        <input className='Signin__Container__Left-Side__Container__Inputs' type="text" placeholder='Mail@gmail.com' required />
                        <span className='Signin__Container__Left-Side__Container__Inputs-Texts'>Password*</span>
                        <input className='Signin__Container__Left-Side__Container__Inputs' type="text" placeholder='Min 8 Characters' min={8} required />
                        <div className='Signin__Container__Left-Side__Container__Kepp-And-Foret-Handel'>
                            <form>
                                <input type="checkbox" id='Keep-Logged' checked onChange={()=>{}} />
                                <label htmlFor="Keep-Logged">Keep Me Logged In</label>
                            </form>
                            <span className='Signin__Container__Left-Side__Container__Kepp-And-Foret-Handel__Forget-Pass'>Forget Password ?</span>
                        </div>
                        <button className='Signin__Container__Left-Side__Btn'>Signin In</button>
                        <NavLink to={"/Signup"} className='Signin__Container__Left-Side__Register'>Not Register Yet ? Create An Account</NavLink>

                    </div>

                </div>
                <img className='Signin__Container__Right-Side' src={BackImg} alt="" />
            </div>
        </div>
    )
}
