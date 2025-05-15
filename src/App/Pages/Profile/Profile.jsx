import React, { useContext } from 'react'
import "./Profile.css";
import { Context } from '../../Context/ContextProvider';

import LeftMenue from './../../Components/LeftMenue/LeftMenue';
import RightSideHeader from './../../Components/RightSideHeader/RightSideHeader';
import Folowers from './../../Components/Folowers/Folowers';
import AllProjects from './../../Components/AllProjects/AllProjects';
import GeneralInforms from './../../Components/GeneralInforms/GeneralInforms';
import Notifications from './../../Components/Notifications/Notifications';

import Avatar from './../../../Images/Avatar.png';

import StorageIcon from '@mui/icons-material/Storage';


export default function Profile() {
    const contextUser = useContext(Context);

    return (
        <div className='Profile'>
            <LeftMenue></LeftMenue>

            <div className='Profile__Right-Side'>

                <RightSideHeader />

                <div className='Profile__Right-Side__First-Line-Datas'>

                    <div className='Profile__Right-Side__First-Line-Datas__Profile-Img'>
                        <div className='Profile__Right-Side__First-Line-Datas__Profile-Img__Back'>
                            <img src={Avatar} alt="" />
                        </div>
                        <div className='Profile__Right-Side__First-Line-Datas__Profile-Img__Name'>
                            <span className='Profile__Right-Side__First-Line-Datas__Profile-Img__Name__Name'>Adela Parkson</span>
                            <span className='Profile__Right-Side__First-Line-Datas__Profile-Img__Name__Job'>Frontend Develoepr</span>
                        </div>
                        <div className='Profile__Right-Side__First-Line-Datas__Profile-Img__Folowers'>
                            {contextUser.folowers.map((informs) => {
                                return <Folowers key={informs.id} {...informs}></Folowers>
                            })}
                        </div>
                    </div>

                    <div className='Profile__Right-Side__First-Line-Datas__Profile-Storage'>
                        <span className='Profile__Right-Side__First-Line-Datas__Profile-Storage__Icon'><StorageIcon></StorageIcon></span>
                        <span className='Profile__Right-Side__First-Line-Datas__Profile-Storage__Title'>Your Storage</span>
                        <span className='Profile__Right-Side__First-Line-Datas__Profile-Storage__Explain'>Supervise Your Drive Space In The Easyest Way</span>
                        <div className='Profile__Right-Side__First-Line-Datas__Profile-Storage__Progress-And-Volumes'>
                            <span>30.6 GB</span>
                            <span>50 GB</span>
                            <progress className='Profile__Right-Side__First-Line-Datas__Profile-Storage__Progress' value={0.7}></progress>
                        </div>
                    </div>

                    <div className='Profile__Right-Side__First-Line-Datas__Profile-Uploader'>
                        <input className='Profile__Right-Side__First-Line-Datas__Profile-Uploader__Input' type="file" />
                        <div className='Profile__Right-Side__First-Line-Datas__Profile-Uploader__Right-Side'>
                            <span className='Profile__Right-Side__First-Line-Datas__Profile-Uploader__Right-Side__Title'>Complete Your Profile</span>
                            <span className='Profile__Right-Side__First-Line-Datas__Profile-Uploader__Right-Side__Explain'>Stay On The Pulese Of Distribute Projects With An Anine Whiteboard To Plan Coordinate And Discuss</span>
                            <button className='Profile__Right-Side__First-Line-Datas__Profile-Uploader__Right-Side__Btn'>Publish Now</button>
                        </div>
                    </div>
                </div>

                <div className='Profile__Right-Side__Second-Line-Datas'>

                    <div className='Profile__Right-Side__Second-Line-Datas__Profile-Projects'>
                        <span className='Profile__Right-Side__Second-Line-Datas__Profile-Projects__Title'>All Projects</span>
                        <span className='Profile__Right-Side__Second-Line-Datas__Profile-Projects__Exp'>Here you can find more details about your projects. Keep you user engaged by providing meaningful information.</span>
                        {contextUser.allProjects.map((informs) => {
                            return <AllProjects key={informs.id} {...informs} />
                        })}
                    </div>

                    <div className='Profile__Right-Side__Second-Line-Datas__Profile-Informations'>
                        <span className='Profile__Right-Side__Second-Line-Datas__Profile-Informations__Title'>General Information</span>
                        <span className='Profile__Right-Side__Second-Line-Datas__Profile-Informations__Disc'>As We Live Our Hurts Turn Colder. Cause Pain In What We Go Through As We Become Older. We Get Insulted By Others, Lose Trust For Those Others.As We Live Our Hurts Turn Colder. Cause Pain In What We Go Through As We Become Older. We Get Insulted By Others, Lose Trust For Those Others.</span>
                        <div className='Profile__Right-Side__Second-Line-Datas__Profile-Informations__Container'>
                            {contextUser.generalInforms.map((informs) => {
                                return <GeneralInforms key={informs.id} {...informs} />
                            })}
                        </div>
                    </div>

                    <div className='Profile__Right-Side__Second-Line-Datas__Profile-Notifications'>
                        <span className='Profile__Right-Side__Second-Line-Datas__Profile-Notifications__Title'>Notifications</span>
                        <span className='Profile__Right-Side__Second-Line-Datas__Profile-Notifications__Container'>
                            {contextUser.notifications.map((informs) => {
                                return <Notifications key={informs.id} {...informs} />
                            })}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}
