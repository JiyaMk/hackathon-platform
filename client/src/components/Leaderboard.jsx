import React from 'react';
import { useSelector } from 'react-redux';
import PieChartComponent from './PieChartComponent'; // Update with correct path
import BarChart from './BarChart'; // Update with correct path
import './Leaderboard.css'; // Import the CSS file

const Leaderboard = () => {
  const teams = useSelector((state) => state.teams.teams);

  const calculateTotalScore = (scores) => {
    return scores.reduce((acc, score) => acc + score, 0);
  };

  const parameters = ['Parameter 1', 'Parameter 2', 'Parameter 3', 'Parameter 4', 'Parameter 5'];
  const leaderboard = [...teams].sort((a, b) => calculateTotalScore(b.scores) - calculateTotalScore(a.scores));

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team Name</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((team, index) => (
            <tr key={team.id}>
              <td>{index + 1}</td>
              <td>{team.name}</td>
              <td>{calculateTotalScore(team.scores)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="parameter-breakdown">
        <h2 style={{margin:'5rem'}}>Parameter Breakdown</h2>
        <div className="pie-chart-grid">
          {parameters.map((param, index) => (
            <div key={index} className="pie-chart-item">
              <h2>{param}</h2>
              <PieChartComponent data={leaderboard} parameterIndex={index} parameterName={param} />
            </div>
          ))}
        </div>
      </div>

      <div className="bar-chart-container">
        <BarChart teams={teams} />
      </div>
    </div>
  );
};

export default Leaderboard;
