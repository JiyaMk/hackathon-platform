import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = ({ teams }) => {
  const calculateAverageScore = (team) => {
    const parameters = ['creativity', 'presentation', 'innovation', 'codeQuality', 'idea'];
    const totalScore = parameters.reduce((acc, param) => acc + team[param], 0);
    return totalScore / parameters.length;
  };

 
  const chartData = {
    labels: teams.map(team => team.name),
    datasets: [{
      label: 'Average Score',
      data: teams.map(team => calculateAverageScore(team)),
      backgroundColor: '#91d4a5', 
      borderColor: 'white',
      borderWidth: 1
    }],
  };

  
  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#fff', 
        },
      },
      tooltip: {
        callbacks: {
          labelColor: function() {
            return {
              borderColor: '#fff',
              backgroundColor: '#fff'
            };
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: '#grey', 
        },
        ticks: {
          color: '#fff',
        },
      },
      y: {
        grid: {
          color: 'grey', 
        },
        ticks: {
          color: '#fff', 
        },
      }
    },
    elements: {
      bar: {
        borderRadius: 5,
      }
    }
  };

  return (
    <div >
      <h2 style={{margin:'5rem'}}>Average Score by Team</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
