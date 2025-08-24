import React from 'react'
import './Signup.css';
import { NavLink } from 'react-router-dom';

export default function Signup() {
    return (
        <div className='Signup'>
            <div className='Signup__Container'>
                <div className='Signup__Container__Left-Side'>
                    <div className='Signup__Container__Left-Side__Container'>
                        <span className='Signup__Container__Left-Side__Container__Signup'>Signup</span>
                        <span className='Signup__Container__Left-Side__Container__Exp'>Enter your email and password And Phone to Register</span>
                        <span className='Signup__Container__Left-Side__Container__Inputs-Texts'>Email*</span>
                        <input className='Signup__Container__Left-Side__Container__Inputs' type="text" placeholder='Mail@gmail.com' required />
                        <span className='Signup__Container__Left-Side__Container__Inputs-Texts'>Password*</span>
                        <input className='Signup__Container__Left-Side__Container__Inputs' type="text" placeholder='Min 8 Characters' min={8} required />
                        <span className='Signup__Container__Left-Side__Container__Inputs-Texts'>Phone Number*</span>
                        <input className='Signup__Container__Left-Side__Container__Inputs' type="text" placeholder="Enter Your Phone Number ..." required />
                        <div className='Signup__Container__Left-Side__Container__Kepp-And-Foret-Handel'>
                            <form>
                                <input type="checkbox" id='Keep-Logged' checked onChange={() => { }} />
                                <label htmlFor="Keep-Logged">Keep Me Logged In</label>
                            </form>
                            <span className='Signup__Container__Left-Side__Container__Kepp-And-Foret-Handel__Forget-Pass'>Forget Password ?</span>
                        </div>
                        <button className='Signup__Container__Left-Side__Btn'>Signup In</button>
                        <NavLink to={"/Signin"} className='Signup__Container__Left-Side__Register'>Alredy Have Account ? Login</NavLink>
                    </div>

                </div>
                <div className='Signup__Container__Right-Side'></div>
            </div>
        </div>
    )
}
