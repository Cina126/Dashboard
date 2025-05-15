/* eslint-disable no-unused-expressions */
import { NavLink } from 'react-router-dom'
import './LeftMenueLinks.css'

export default function LeftMenueLinks({ children, text, to }) {
    return (
        <NavLink
            to={to}
            className={`LeftMenueLinks ${(link) => { link.isActive ? "active" : "disactive" }}`}>
            {children}
            <span className='LeftMenueLinks__Text'>{text}</span>
        </NavLink>
    )
}
