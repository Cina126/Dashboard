import {  XAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Rectangle } from 'recharts';
const RechartsDataWeek = [
    { name: "Weak 1", uv: 4000, pv: 2400, amt: 2400, },
    { name: "Weak 2", uv: 3000, pv: 1398, amt: 2210, },
    { name: "Weak 3", uv: 2000, pv: 9800, amt: 2290, },
    { name: "Weak 4", uv: 2780, pv: 3908, amt: 2000, },
    { name: "Weak 5", uv: 1890, pv: 4800, amt: 2181, },
    { name: "Weak 6", uv: 2390, pv: 3800, amt: 2500, },
    { name: "Weak 7", uv: 3490, pv: 4300, amt: 2100, },
    { name: "Weak 8", uv: 4000 - 2000, pv: 2400, amt: 2400, },
    { name: "Weak 9", uv: 3000 - 1000, pv: 1398, amt: 2210, },
    { name: "Weak 10", uv: 8000, pv: 9800 - 5000, amt: 2290, },
    { name: "Weak 11", uv: 2780 - 1000, pv: 3908, amt: 2000, },
    { name: "Weak 12", uv: 1890 - 1000, pv: 4800, amt: 2181, },
    { name: "Weak 13", uv: 2390 - 1000, pv: 3800, amt: 2500, },
];
export default function BarCharts() {
    return (
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <BarChart data={RechartsDataWeek} style={{ fontSize: 10 }}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="uv" fill="oklch(48.8% 0.243 264.376)" activeBar={<Rectangle fill="oklch(48.8% 0.243 264.376)" />} />
                <Bar dataKey="pv" fill="oklch(86.5% 0.127 207.078)" activeBar={<Rectangle fill="oklch(86.5% 0.127 207.078)" />} />
            </BarChart>
        </ResponsiveContainer>
    )
}
