/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert'

export default function useGetFetch(url) {

    const [hook, setHook] = useState()
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        async function FETCH() {
            try {
                axios(`http://localhost:4000/dashboardAPI/${url}`).then(res => setHook(res.data))
            } catch (error) {
                swal({
                    title: "error",
                    buttons: "Try Again",
                    icon: "error"
                }).then(res => window.location.reload())
            }
        }
        FETCH()
    }, [flag])

    return [hook, setHook, flag, setFlag]
}
