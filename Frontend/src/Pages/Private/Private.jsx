/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect } from 'react'
import { Context } from './../../Context/ContextProvider';
import Signin from './../Signin/Signin';
import LoadingPage from './../../Components/LoadingPage/LoadingPage'

export default function Private({ children }) {

    const contextUser = useContext(Context)

    useEffect(() => {
        contextUser.setUserInformsFlag(prev => !prev)
    }, [])

    if (contextUser.userInforms) {
        if (contextUser.userInforms.length) {
            return children
        } else {
            return <Signin></Signin>
        }
    } else {
        return <LoadingPage></LoadingPage>
    }

}
