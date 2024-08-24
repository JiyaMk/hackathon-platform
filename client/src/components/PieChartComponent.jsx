import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PieChartComponent = ({ data, parameterIndex, parameterName }) => {
  const pieData = data.map((team) => ({
    name: team.name,
    value: team.scores[parameterIndex],
  }));

  const COLORS = ['#91d4a5', '#49d3d3', '#d1e7c2', '#b4d4b6']; 

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="name"
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
