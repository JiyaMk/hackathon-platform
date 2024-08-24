import React from 'react';
import { useSelector } from 'react-redux';

const Teams = () => {
  const teams = useSelector((state) => state.teams.teams);

  if (teams.length === 0) {
    return <div>No teams yet</div>;
  }

  return (
    <div>
      <h1>Team Names</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black' }}>No.</th>
            <th style={{ border: '1px solid black' }}>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td style={{ border: '1px solid black', textAlign: 'center' }}>{index + 1}</td>
              <td style={{ border: '1px solid black' }}>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;

