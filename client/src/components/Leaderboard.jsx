import React, { useState, useEffect } from 'react';
import PieChartComponent from './PieChartComponent'; // Update with correct path
import BarChart from './BarChart'; // Update with correct path
import './Leaderboard.css'; // Import the CSS file
import axios from 'axios';

const Leaderboard = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:4000/team/locked');
        console.log('Response Data:', response.data);
        setTeams(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching teams:', error);
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const parameters = ['creativity', 'presentation', 'innovation', 'codeQuality', 'idea'];

  const calculateTotalScore = (team) => {
    return parameters.reduce((total, param) => total + (team[param] || 0), 0);
  };

  const leaderboard = [...teams].sort((a, b) => calculateTotalScore(b) - calculateTotalScore(a));

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Leaderboard</h2>
      {teams.length > 0 ? (
        <>
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
              <td>{calculateTotalScore(team)}</td>
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
        </>
      ) : (
        <div>Results Not Out</div>
      )}
    </div>
  );
};

export default Leaderboard;
