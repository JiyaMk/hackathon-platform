import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

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
    <div className='flex main-container'>
      <Sidebar />
      <div className='flex-1 p-8 bg-800'>
        <h1 className='text-3xl font-bold text-white mb-6 text-center'>Team Scores</h1>
        <div className='overflow-x-auto' style={{boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)'}}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)' // Blue glow effect
            }}
            className='min-w-full bg-white rounded-lg shadow-lg border border-gray-300'
          >
            <thead className='bg-gray-900 text-white'>
              <tr>
                {/* ['creativity', 'presentation', 'innovation', 'codeQuality', 'idea'] */}
                <th className='p-4 border-b border-gray-300 text-center'>Team Name</th>
                <th className='p-4 border-b border-gray-300 text-center'>Creativity</th>
                <th className='p-4 border-b border-gray-300 text-center'>Presentation</th>
                <th className='p-4 border-b border-gray-300 text-center'>Innovation</th>
                <th className='p-4 border-b border-gray-300 text-center'>Code-Quality</th>
                <th className='p-4 border-b border-gray-300 text-center'>Buisness Idea</th>
                <th className='p-4 border-b border-gray-300 text-center'>Average Score</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team.id} className='hover:bg-gray-100'>
                  <td className='p-4 border-b border-gray-300 text-center text-black'>{team.name}</td>
                  <td className='p-4 border-b border-gray-300 text-center text-black'>
                    {team.creativity || 0}
                  </td>
                  <td className='p-4 border-b border-gray-300 text-center text-black'>
                    {team.presentation || 0}
                  </td>
                  <td className='p-4 border-b border-gray-300 text-center text-black'>
                    {team.innovation || 0}
                  </td>
                  <td className='p-4 border-b border-gray-300 text-center text-black'>
                    {team.codeQuality || 0}
                  </td>
                  <td className='p-4 border-b border-gray-300 text-center text-black'>
                    {team.idea || 0}
                  </td>
                  <td className='p-4 border-b border-gray-300 text-center text-black'>
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
    </div>
  );
};

export default TeamList;
