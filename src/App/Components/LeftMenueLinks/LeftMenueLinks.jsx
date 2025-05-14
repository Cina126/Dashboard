/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './LeftMenueLinks.css'
import {Context} from '../../Context/ContextProvider';

export default function LeftMenueLinks({ children, text, to }) {
    const contextUser = useContext(Context);
    return (
        <NavLink
            style={contextUser.windowSize < 800 ? { width: "max-content" } : {}}
            to={to}
            className={`LeftMenueLinks ${(link) => { link.isActive ? "active" : "disactive" }}`}>
            {children}
            <span className='LeftMenueLinks__Text'>{text}</span>
        </NavLink>
    )
}
