/* eslint-disable react-hooks/exhaustive-deps */

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Context } from '../../Context/ContextProvider';
import { useContext } from 'react';

export default function LineCharts() {

    const contextUser = useContext(Context)

    if (contextUser.lineChart.length) {
        return (
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={contextUser.lineChart}>
                    <Tooltip />
                    <XAxis dataKey="name" fontFamily='Segoe UI' fontSize={10} />
                    <Line type="monotone" dataKey="pv" stroke="oklch(48.8% 0.243 264.376)" strokeWidth={3}></Line>
                    <Line type="monotone" dataKey="uv" stroke="oklch(86.5% 0.127 207.078)" strokeWidth={3}></Line>
                </LineChart>
            </ResponsiveContainer>
        )
    } else {

    }


}
