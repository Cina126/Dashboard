/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import "./Profile.css";
import { Context } from '../../Context/ContextProvider';

import LeftMenue from './../../Components/LeftMenue/LeftMenue';
import RightSideHeader from './../../Components/RightSideHeader/RightSideHeader';
import SocialInforms from '../../Components/SocialInforms/SocialInforms';
import AllProjects from './../../Components/AllProjects/AllProjects';
import GeneralInforms from './../../Components/GeneralInforms/GeneralInforms';
import Notifications from './../../Components/Notifications/Notifications';
import StorageIcon from '@mui/icons-material/Storage';
import axios from 'axios';

export default function Profile() {

    const contextUser = useContext(Context);

    useEffect(() => {
        async function getAllUserAllProjects() {
            axios(`http://localhost:4000/dashboardAPI/projects/${contextUser.userInforms[0].id}`)
                .then(res => contextUser.setProjects(res.data))
        }
        getAllUserAllProjects()
    }, [])

    return (
        <div className='Profile'>

            <LeftMenue></LeftMenue>

            <div className='Profile__Right-Side'>

                <RightSideHeader />

                <div className='Profile__Right-Side__First-Line-Datas'>

                    <div className='Profile__Right-Side__First-Line-Datas__Profile-Img'>
                        <div className='Profile__Right-Side__First-Line-Datas__Profile-Img__Back'>
                            <img src={contextUser.userInforms[0].userImage} alt="" />
                        </div>
                        <div className='Profile__Right-Side__First-Line-Datas__Profile-Img__Name'>
                            <span className='Profile__Right-Side__First-Line-Datas__Profile-Img__Name__Name'>{contextUser.userInforms[0].firstName + contextUser.userInforms[0].lastName}</span>
                            <span className='Profile__Right-Side__First-Line-Datas__Profile-Img__Name__Job'>{contextUser.userInforms[0].job}</span>
                        </div>
                        <div className='Profile__Right-Side__First-Line-Datas__Profile-Img__Folowers'>
                            <SocialInforms key={1} title={"post"} value={contextUser.userInforms[0].postsNumber}></SocialInforms>
                            <SocialInforms key={2} title={"folowers"} value={contextUser.userInforms[0].folowersNumber}></SocialInforms>
                            <SocialInforms key={3} title={"folowing"} value={contextUser.userInforms[0].folowingNumbers}></SocialInforms>
                        </div>
                    </div>

                    <div className='Profile__Right-Side__First-Line-Datas__Profile-Storage'>
                        <span className='Profile__Right-Side__First-Line-Datas__Profile-Storage__Icon'><StorageIcon></StorageIcon></span>
                        <span className='Profile__Right-Side__First-Line-Datas__Profile-Storage__Title'>Your Storage</span>
                        <span className='Profile__Right-Side__First-Line-Datas__Profile-Storage__Explain'>Supervise Your Drive Space In The Easyest Way</span>
                        <div className='Profile__Right-Side__First-Line-Datas__Profile-Storage__Progress-And-Volumes'>
                            <span>{contextUser.userInforms[0].storageSpace} GB</span>
                            <span>50 GB</span>
                            <progress className='Profile__Right-Side__First-Line-Datas__Profile-Storage__Progress' value={contextUser.userInforms[0].storageSpace * 100 / 5000}></progress>
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
                        <span className='Profile__Right-Side__Second-Line-Datas__Profile-Projects__Title'>Last Projects</span>
                        <span className='Profile__Right-Side__Second-Line-Datas__Profile-Projects__Exp'>Here you can find more details about your projects. Keep you user engaged by providing meaningful information.</span>
                        {
                            contextUser.projects.length
                                ?
                                contextUser.projects.slice(0, 3).map((informs) => <AllProjects key={informs.id} {...informs} />)
                                :
                                ""
                        }

                    </div>

                    <div className='Profile__Right-Side__Second-Line-Datas__Profile-Informations'>
                        <span className='Profile__Right-Side__Second-Line-Datas__Profile-Informations__Title'>General Information</span>
                        <span className='Profile__Right-Side__Second-Line-Datas__Profile-Informations__Disc'>As We Live Our Hurts Turn Colder. Cause Pain In What We Go Through As We Become Older. We Get Insulted By Others, Lose Trust For Those Others.As We Live Our Hurts Turn Colder. Cause Pain In What We Go Through As We Become Older. We Get Insulted By Others, Lose Trust For Those Others.</span>
                        <div className='Profile__Right-Side__Second-Line-Datas__Profile-Informations__Container'>
                            <GeneralInforms key={1} value={contextUser.userInforms[0].education} title={"education"} />
                            <GeneralInforms key={2} value={contextUser.userInforms[0].language} title={"language"} />
                            <GeneralInforms key={3} value={contextUser.userInforms[0].department} title={"department"} />
                            <GeneralInforms key={4} value={contextUser.userInforms[0].workHistory} title={"workHistory"} />
                            <GeneralInforms key={5} value={contextUser.userInforms[0].organization} title={"organization"} />
                            <GeneralInforms key={6} value={contextUser.userInforms[0].birthDay} title={"birthDay"} />
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
