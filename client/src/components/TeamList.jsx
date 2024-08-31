import React ,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import axios from 'axios';

const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLockedTeams = async () => {
      try {
        const response = await axios.get('http://localhost:4000/team/locked');
        console.log(response.data);
        setTeams(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching locked teams:', error);
        setLoading(false);
      }
    };

    fetchLockedTeams();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
              <td style={{ border: '1px solid grey', color:'white' }}>{team.name}</td>
              <td style={{ border: '1px solid grey', color:'white' }}>
                {team.creativity || 0}
              </td>
              <td style={{ border: '1px solid grey', color:'white' }}>
                {team.presentation || 0}
              </td>
              <td style={{ border: '1px solid grey', color:'white' }}>
                {team.innovation || 0}
              </td>
              <td style={{ border: '1px solid grey', color:'white' }}>
                {team.codeQuality || 0}
              </td>
              <td style={{ border: '1px solid grey', color:'white' }}>
                {team.idea || 0}
              </td>
              <td style={{ border: '1px solid grey', color:'white'}}>
                {team ?
                  ((team.creativity || 0) + 
                   (team.presentation || 0) + 
                   (team.innovation || 0) + 
                   (team.codeQuality || 0) + 
                   (team.idea || 0)) / 5
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

