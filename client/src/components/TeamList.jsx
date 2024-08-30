import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';

const TeamList = () => {
  const teams = useSelector((state) => state.teams.teams);

  if (teams.length === 0) {
    return <div>No scores yet</div>;
  }

  return (
    <div className='main-container'>
      <Sidebar/>
      <div style={{width:'100%',padding:'4rem'}}>
      <h1  style={{ color:'white',textAlign:'center'}}>Team Scores</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid grey', color:'white' }}>Team Name</th>
            <th style={{  border: '1px solid grey', color:'white' }}>Parameter 1</th>
            <th style={{ border: '1px solid grey', color:'white' }}>Parameter 2</th>
            <th style={{  border: '1px solid grey', color:'white'}}>Parameter 3</th>
            <th style={{ border: '1px solid grey', color:'white'}}>Parameter 4</th>
            <th style={{  border: '1px solid grey', color:'white' }}>Parameter 5</th>
            <th style={{  border: '1px solid grey', color:'white'}}>Average Score</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td style={{  border: '1px solid grey', color:'white' }}>{team.name}</td>
              {team.scores ? team.scores.map((score, index) => (
                <td key={index} style={{ border: '1px solid grey', color:'white' }}>{score}</td>
              )) : [0, 0, 0, 0, 0].map((_, index) => (
                <td key={index} style={{  border: '1px solid grey', color:'white' }}>0</td>
              ))}
              <td style={{ border: '1px solid grey', color:'white'}}>
                {team.scores && team.scores.length > 0 ? 
                  (team.scores.reduce((acc, score) => acc + score, 0) / team.scores.length).toFixed(1)
                  : '0'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default TeamList;

