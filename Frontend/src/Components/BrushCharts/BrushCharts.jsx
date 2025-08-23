import React, { useContext } from 'react';
import { Context } from './../../Context/ContextProvider'
import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';

export default function BrushCharts() {

  const contextUser = useContext(Context)

  if (contextUser.brushChart.length) {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={contextUser.brushChart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} stroke="#8884d8" />
          <Bar dataKey="pv" fill="oklch(48.8% 0.243 264.376)" />
          <Bar dataKey="uv" fill="aqua" />
        </BarChart>
      </ResponsiveContainer>
    );
  } else {

  }


}
