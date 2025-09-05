/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from 'react';
import './LeftMenu.css';
import { Context } from '../../Context/ContextProvider';
import swal from 'sweetalert';

import LeftMenuLinks from '../LeftMenuLinks/LeftMenuLinks';
import Icon from '../Icons/Icons';

export default function LeftMenu() {

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
        <div className="LeftMenu" >
            <span className='LeftMenu__Title'>Horizon  <span className='LeftMenu__Title__Inner-Text'>Free</span></span>
            {
                contextUser.leftMenuLinks
                    ?
                    contextUser.leftMenuLinks.map((informs) => <LeftMenuLinks key={informs.id} {...informs}></LeftMenuLinks>)
                    :
                    ""
            }
            <div onClick={logoutLogic} className='LeftMenu__Logout'>
                <Icon iconName={"Logout"}></Icon>
                <span>Logout</span>
            </div>
        </div>
    )
}
