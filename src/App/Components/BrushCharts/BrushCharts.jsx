import React from 'react';
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '1', uv: 300, pv: 456 },
  { name: '2', uv: -145, pv: 230 },
  { name: '3', uv: -100, pv: 345 },
  { name: '4', uv: -8, pv: 450 },
  { name: '5', uv: 100, pv: 321 },
  { name: '6', uv: 9, pv: 235 },
  { name: '7', uv: 53, pv: 267 },
  { name: '8', uv: 252, pv: -378 },
  { name: '9', uv: 79, pv: -210 },
  { name: '10', uv: 294, pv: -23 },
  { name: '12', uv: 43, pv: 45 },
  { name: '13', uv: -74, pv: 90 },
  { name: '14', uv: -71, pv: 130 },
  { name: '15', uv: -117, pv: 11 },
  { name: '16', uv: -186, pv: 107 },
  { name: '17', uv: -16, pv: 926 },
  { name: '18', uv: -125, pv: 653 },
  { name: '19', uv: 222, pv: 366 },
  { name: '20', uv: 372, pv: 486 },
  { name: '21', uv: 182, pv: 512 },
  { name: '22', uv: 164, pv: 302 },
  { name: '23', uv: 316, pv: 425 },
  { name: '24', uv: 131, pv: 467 },
  { name: '25', uv: 291, pv: -190 },
  { name: '26', uv: -47, pv: 194 },
  { name: '27', uv: -415, pv: 371 },
  { name: '28', uv: -182, pv: 376 },
  { name: '29', uv: -93, pv: 295 },
  { name: '30', uv: -99, pv: 322 },
  { name: '31', uv: 300, pv: 456 },
  { name: '32', uv: -145, pv: 230 },
  { name: '33', uv: -100, pv: 345 },
  { name: '34', uv: -8, pv: 450 },
  { name: '35', uv: 100, pv: 321 },
  { name: '36', uv: 9, pv: 235 },
  { name: '37', uv: 53, pv: 267 },
  { name: '38', uv: 252, pv: -378 },
  { name: '39', uv: 79, pv: -210 },
  { name: '40', uv: 294, pv: -23 },
  { name: '42', uv: 43, pv: 45 },
  { name: '43', uv: -74, pv: 90 },
  { name: '44', uv: -71, pv: 130 },
  { name: '45', uv: -117, pv: 11 },
  { name: '46', uv: -186, pv: 107 },
  { name: '47', uv: -16, pv: 926 },
  { name: '48', uv: -125, pv: 653 },
  { name: '49', uv: 222, pv: 366 },
  { name: '50', uv: 372, pv: 486 },
  { name: '51', uv: 182, pv: 512 },
  { name: '52', uv: 164, pv: 302 },
  { name: '53', uv: 316, pv: 425 },
  { name: '54', uv: 131, pv: 467 },
  { name: '55', uv: 291, pv: -190 },
  { name: '56', uv: -47, pv: 194 },
  { name: '57', uv: -415, pv: 371 },
  { name: '58', uv: -182, pv: 376 },
  { name: '59', uv: -93, pv: 295 },
  { name: '60', uv: -99, pv: 322 },
];

export default function BrushCharts() {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
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
  }
