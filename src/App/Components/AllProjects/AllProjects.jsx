import React from 'react'
import './AllProjects.css';
import { NavLink } from 'react-router-dom'

import EditIcon from '@mui/icons-material/Edit';

export default function AllProjects({ id, src, title }) {
    return (
        <div className='AllProjects'>
            <img src={src} alt="" />
            <div className='AllProjects__Text-Container'>
                <span>{title}</span>
                <div>
                    <span>Project #{+id[id.length - 1] + 1}</span>
                    <NavLink to={"/"}>See Project Details</NavLink>
                </div>
            </div>
            <span><EditIcon></EditIcon></span>
        </div>
    )
}
