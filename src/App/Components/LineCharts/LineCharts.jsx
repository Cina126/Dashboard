import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
const RechartsDataYear = [
    { name: 'Jan', uv: 2400 - 800, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 1398 - 800, pv: 1398, amt: 2210, },
    { name: 'Mar', uv: 2800 - 800, pv: 2800, amt: 2290, },
    { name: 'Apr', uv: 5908 - 800, pv: 5908, amt: 2000, },
    { name: 'May', uv: 4100 - 800, pv: 4100, amt: 2181, },
    { name: 'Jun', uv: 3900 - 800, pv: 3900, amt: 2500, },
    { name: 'Jul', uv: 6300 - 800, pv: 6300, amt: 2100, },
    { name: 'Aug', uv: 1300 - 800, pv: 1300, amt: 2100, },
    { name: 'Sep', uv: 4300 - 800, pv: 4300, amt: 2100, },
    { name: 'Oct', uv: 2300 - 800, pv: 2300, amt: 2100, },
    { name: 'Nov', uv: 3300 - 800, pv: 3300, amt: 2100, },
    { name: 'Dec', uv: 8300 - 800, pv: 8300, amt: 2100, },
];
export default function LineCharts() {
    return (
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart data={RechartsDataYear}>
                <Tooltip />
                <XAxis dataKey="name" fontFamily='Segoe UI' fontSize={10} />
                <Line type="monotone" dataKey="pv" stroke="oklch(48.8% 0.243 264.376)" strokeWidth={3}></Line>
                <Line type="monotone" dataKey="uv" stroke="oklch(86.5% 0.127 207.078)" strokeWidth={3}></Line>
            </LineChart>
        </ResponsiveContainer>
    )
}
