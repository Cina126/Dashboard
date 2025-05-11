/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import './Exam.css';

export default function Exam() {
    const [a, setA] = useState("A");
    const [b, setB] = useState("B");
    const [logger, setLogger] = useState(1);

    function aHandler() {
        setA((prev) => {
            if (prev === "A") {
                return "AA"
            } else {
                return "A"
            }
        })
    }
    function bHandler() {
        setB((prev) => {
            if (prev === "B") {
                return "BB"
            } else {
                return "B"
            }
        })
    }

    useEffect(() => {
        setLogger((prev) => { return ++prev });
    }, [a]);

    return (
        <>
            <span onClick={aHandler} className='Exam1'>Exam1 + {a}</span>
            <br />
            <span onClick={bHandler} className='Exam2'>Exam2 + {b}</span>
            <br />
            <span>Salam + {logger}</span>
        </>

    )
}

