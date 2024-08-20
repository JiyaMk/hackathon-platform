import React from 'react';
import { useSelector } from 'react-redux';

const TeamList = () => {
  const teams = useSelector((state) => state.teams.teams);

  if (teams.length === 0) {
    return <div>No scores yet</div>;
  }

  return (
    <div>
      <h1>Team Scores</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black' }}>Team Name</th>
            <th style={{ border: '1px solid black' }}>Parameter 1</th>
            <th style={{ border: '1px solid black' }}>Parameter 2</th>
            <th style={{ border: '1px solid black' }}>Parameter 3</th>
            <th style={{ border: '1px solid black' }}>Parameter 4</th>
            <th style={{ border: '1px solid black' }}>Parameter 5</th>
            <th style={{ border: '1px solid black' }}>Average Score</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td style={{ border: '1px solid black' }}>{team.name}</td>
              {team.scores ? team.scores.map((score, index) => (
                <td key={index} style={{ border: '1px solid black' }}>{score}</td>
              )) : [0, 0, 0, 0, 0].map((_, index) => (
                <td key={index} style={{ border: '1px solid black' }}>0</td>
              ))}
              <td style={{ border: '1px solid black' }}>
                {team.scores && team.scores.length > 0 ? 
                  (team.scores.reduce((acc, score) => acc + score, 0) / team.scores.length).toFixed(1)
                  : '0'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamList;

