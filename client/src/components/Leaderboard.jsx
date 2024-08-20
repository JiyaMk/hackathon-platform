import React from 'react';
import { useSelector } from 'react-redux';
import PieChartComponent from './PieChartComponent'; // Update with correct path
import BarChart from './BarChart'; // Update with correct path

const Leaderboard = () => {
  const teams = useSelector((state) => state.teams.teams);

  const calculateTotalScore = (scores) => {
    return scores.reduce((acc, score) => acc + score, 0);
  };

  const parameters = ['Parameter 1', 'Parameter 2', 'Parameter 3', 'Parameter 4', 'Parameter 5'];
  const leaderboard = [...teams].sort((a, b) => calculateTotalScore(b.scores) - calculateTotalScore(a.scores));

  return (
    <div>
      <h2>Leaderboard</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black' }}>Rank</th>
            <th style={{ border: '1px solid black' }}>Team Name</th>
            <th style={{ border: '1px solid black' }}>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((team, index) => (
            <tr key={team.id}>
              <td style={{ border: '1px solid black' }}>{index + 1}</td>
              <td style={{ border: '1px solid black' }}>{team.name}</td>
              <td style={{ border: '1px solid black' }}>{calculateTotalScore(team.scores)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h1>Parameter Breakdown</h1>
        {parameters.map((param, index) => (
          <div key={index}>
            <h2>{param}</h2>
            <PieChartComponent data={leaderboard} parameterIndex={index} parameterName={param} />
          </div>
        ))}
      </div>

      <BarChart teams={teams} />
    </div>
  );
};

export default Leaderboard;
