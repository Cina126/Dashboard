import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Context } from './../../Context/ContextProvider'
import { useContext } from 'react';

const COLORS = ['aqua', 'oklch(48.8% 0.243 264.376)', 'oklch(93% 0.034 272.788)'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function PieCharts() {

    const contextUser = useContext(Context)

    if (contextUser.pieChart) {
        return (
            <ResponsiveContainer width="75%" height="75%">
                <PieChart width={300} height={300}>
                    <Pie
                        data={contextUser.pieChart}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {contextUser.pieChart.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        );
    } else {

    }


}
