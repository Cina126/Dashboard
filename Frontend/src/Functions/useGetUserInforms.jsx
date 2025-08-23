/* eslint-disable no-self-assign */

import { useState, useEffect } from 'react';
import axios from 'axios'
import swal from 'sweetalert';

export default function useGetUserInforms() {

    const [userInforms, setUserInforms] = useState();
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        const localStorageToken = localStorage.getItem("Dashboard-User-Token")
        async function getFetch() {
            try {
                axios(`https://dashboard-44w3.onrender.com/dashboardAPI/users`, { headers: { authorization: localStorageToken } })
                    .then(res => setUserInforms(res.data))
            } catch (error) {
                console.log(error);
                swal({
                    title: `خطا در دیافت اطلاعات کاربر `,
                    buttons: "تلاش دوباره",
                    icon: "error"
                }).then(res => window.location.href = window.location.href)
            }
        }
        getFetch()
    }, [flag])

    return [userInforms, setFlag]
}