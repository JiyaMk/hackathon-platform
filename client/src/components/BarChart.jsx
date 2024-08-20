import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = ({ teams }) => {
  // Calculate the average score for each team
  const calculateAverageScore = (scores) => {
    return scores.reduce((acc, score) => acc + score, 0) / scores.length;
  };

  // Data for the bar chart
  const chartData = {
    labels: teams.map(team => team.name),
    datasets: [{
      label: 'Average Score',
      data: teams.map(team => calculateAverageScore(team.scores)),
      backgroundColor: '#42A5F5', // Customize color as needed
      borderColor: '#1E88E5',
      borderWidth: 1
    }],
  };

  return (
    <div>
      <h2>Average Score by Team</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
