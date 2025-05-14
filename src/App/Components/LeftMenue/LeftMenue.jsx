import React, { useContext } from 'react';
import './LeftMenue.css';
import {Context} from '../../Context/ContextProvider';

import LeftSideLinks from '../LeftMenueLinks/LeftMenueLinks';

export default function LeftMenue({ classProps }) {
    const contextUser = useContext(Context);
    return (
        <div className={`LeftMenue ${classProps}`} >
            <span className='LeftMenue__Title'>Horizon  <span className='LeftMenue__Title__Inner-Text'>Free</span></span>
            {contextUser.leftMenueLinks.map((informs) => {
                return <LeftSideLinks key={informs.id} {...informs}><informs.icon></informs.icon></LeftSideLinks>
            })}
        </div>
    )
}
