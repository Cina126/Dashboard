/* eslint-disable no-unused-expressions */
import { NavLink } from 'react-router-dom'
import './LeftMenueLinks.css';
import Icon from "./../Icons/Icons";

export default function LeftMenueLinks({ text, to, icon }) {
    return (
        <NavLink
            to={to}
            className={`LeftMenueLinks ${(link) => { link.isActive ? "active" : "disactive" }}`}>
            <Icon iconName={icon}></Icon>
            <span className='LeftMenueLinks__Text'>{text}</span>
        </NavLink>
    )
}
