import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

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
    <div className='flex main-container'>
      <Sidebar />
      <div className='flex-1 p-10 bg-800'>
        <h1 className='text-3xl font-bold text-white mb-8 text-center'>Team Names</h1>
        <div className='overflow-x-auto' style={{border: '1px solid #d1d5db',
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.9)',}}>
          <table
            style={{
              minWidth: '100%',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
            
               //
            }}
            className='rounded-lg border border-gray-300'
          >
            <thead className='bg-gray-900 text-white' >
              <tr>
                <th style={{ padding: '1rem', borderBottom: '1px solid #d1d5db', textAlign: 'center' }}>No.</th>
                <th style={{ padding: '1rem', borderBottom: '1px solid #d1d5db', textAlign: 'center' }}>Team Name</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr key={team.id} style={{ backgroundColor: '#ffffff', '&:hover': { backgroundColor: '#f3f4f6' } }}>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #d1d5db', textAlign: 'center' }}>{index + 1}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #d1d5db', textAlign: 'center' }}>{team.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Teams;
