import React from 'react'
import './Notifications.css';
import { Switch } from '@mui/material';

export default function Notifications({ title, active }) {
    return (
        <div className='Notifications'>
            {active ? <Switch defaultChecked /> : <Switch/>}
            <span>{title}</span>
        </div>
    )
}
