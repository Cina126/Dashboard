/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from 'react';
import './LeftMenue.css';
import { Context } from '../../Context/ContextProvider';
import swal from 'sweetalert';

import LeftSideLinks from '../LeftMenueLinks/LeftMenueLinks';
import Icon from '../Icons/Icons';

export default function LeftMenue() {

    const contextUser = useContext(Context);

    useEffect(() => {
        contextUser.setLeftMenuLinksFlag(prev => !prev)
    }, [])

    function logoutLogic() {
        swal({
            title: "Do You Want To Logout ?",
            icon: "warning",
            buttons: ["No", "Yes Logout"]
        }).then(res => {
            if (res) {
                localStorage.removeItem("Dashboard-User-Token")
                contextUser.setUserInformsFlag(prev => !prev)
            }
        })
    }

    return (
        <div className="LeftMenue" >
            <span className='LeftMenue__Title'>Horizon  <span className='LeftMenue__Title__Inner-Text'>Free</span></span>
            {
                contextUser.leftMenuLinks
                    ?
                    contextUser.leftMenuLinks.map((informs) => <LeftSideLinks key={informs.id} {...informs}></LeftSideLinks>)
                    :
                    ""
            }
            <div onClick={logoutLogic} className='LeftMenue__Logout'>
                <Icon iconName={"Logout"}></Icon>
                <span>Logout</span>
            </div>
        </div>
    )
}
