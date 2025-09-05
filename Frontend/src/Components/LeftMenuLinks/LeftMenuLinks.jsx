/* eslint-disable no-unused-expressions */
import { NavLink } from 'react-router-dom'
import './LeftMenuLinks.css';
import Icon from "../Icons/Icons";

export default function LeftMenuLinks({ text, to, icon }) {
    return (
        <NavLink
            to={to}
            className={`LeftMenuLinks ${(link) => { link.isActive ? "active" : "disactive" }}`}>
            <Icon iconName={icon}></Icon>
            <span className='LeftMenuLinks__Text'>{text}</span>
        </NavLink>
    )
}
