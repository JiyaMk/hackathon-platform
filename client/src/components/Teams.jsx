import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import axios from 'axios';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:4000/team');
        const teamsData = response.data;
        setTeams(teamsData);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className='main-container'>
      <Sidebar/>
      <div style={{width:'100%',padding:'4rem'}}>
      <h1 style={{textAlign:'center', color:'white'}}>Team Names</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{textAlign:'center', color:'white',border: '1px solid grey' }}>No.</th>
            <th style={{textAlign:'center', color:'white',border: '1px solid grey' }}>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td style={{textAlign:'center', color:'white',border: '1px solid grey' }}>{index + 1}</td>
              <td style={{textAlign:'center', color:'white',border: '1px solid grey' }}>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Teams;

