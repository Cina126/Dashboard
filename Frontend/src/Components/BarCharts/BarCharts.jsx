import { XAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Rectangle } from 'recharts';
import { Context } from './../../Context/ContextProvider';
import { useContext } from 'react';


export default function BarCharts() {

    const contextUser = useContext(Context)

    if (contextUser.barChart.length) {
        return (
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <BarChart data={contextUser.barChart} style={{ fontSize: 10 }}>
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Bar dataKey="uv" fill="oklch(48.8% 0.243 264.376)" activeBar={<Rectangle fill="oklch(48.8% 0.243 264.376)" />} />
                    <Bar dataKey="pv" fill="oklch(86.5% 0.127 207.078)" activeBar={<Rectangle fill="oklch(86.5% 0.127 207.078)" />} />
                </BarChart>
            </ResponsiveContainer>
        )
    } else {

    }


}
