import React, { useContext } from 'react'
import './LeftHiddenMenu.css';
import { Context } from './../../Context/ContextProvider';
import LeftMenuLinks from '../LeftMenuLinks/LeftMenuLinks';
import swal from 'sweetalert';
import Icons from './../../Components/Icons/Icons'

export default function LeftHiddenMenu({ style }) {

    const contextUser = useContext(Context)

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
        <div style={style} className='LeftHiddenMenu'>
            <span className='LeftHiddenMenu__Title'>Horizon  <span className='LeftHiddenMenu__Title__Inner-Text'>Free</span></span>
            {
                contextUser.leftMenuLinks
                    ?
                    contextUser.leftMenuLinks.map((informs) => <LeftMenuLinks key={informs.id} {...informs}></LeftMenuLinks>)
                    :
                    ""
            }
            <div onClick={logoutLogic} className='LeftHiddenMenu__Logout'>
                <Icons iconName={"Logout"}></Icons>
                <span>Logout</span>
            </div>
        </div>
    )
}
