import React, { useState, useEffect } from 'react';
import './JudgeDashboard.css';
import JudgeSidebar from './judgeSidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const JudgeDashboard = () => {
  const [teams, setTeams] = useState([]);
  const [lockedScores, setLockedScores] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const parameters = ['creativity', 'presentation', 'innovation', 'codeQuality', 'idea'];

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:4000/team');
        const teamsData = response.data;

        const savedLockedScores = JSON.parse(localStorage.getItem('lockedScores')) || {};
        const updatedLockedScores = {};
        teamsData.forEach(team => {
          updatedLockedScores[team.id] = savedLockedScores[team.id] || team.locked;
        });

        setTeams(teamsData);
        setLockedScores(updatedLockedScores);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };
    fetchTeams();
  }, []);

  useEffect(() => {
    const savedSubmitted = JSON.parse(localStorage.getItem('submitted')) || false;
    setSubmitted(savedSubmitted);
  }, []);

  useEffect(() => {
    localStorage.setItem('lockedScores', JSON.stringify(lockedScores));
    localStorage.setItem('submitted', JSON.stringify(submitted));
  }, [lockedScores, submitted]);

  const handleScoreChange = (teamId, field, value) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId
          ? {
              ...team,
              [field]: parseFloat(value) || 0,
            }
          : team
      )
    );
  };

  const handleLockScore = async (teamId) => {
    const team = teams.find((team) => team.id === teamId);
    const { creativity, presentation, innovation, codeQuality, idea } = team;
    try {
      await axios.post(
        `http://localhost:4000/team/lock/${team._id}`,
        { creativity, presentation, innovation, codeQuality, idea },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setLockedScores((prev) => ({
        ...prev,
        [teamId]: true,
      }));
    } catch (error) {
      console.error('Error locking score:', error);
      toast.error('Error locking score');
    }
  };

  const handleSubmitScores = async () => {
    try {
      const response = await axios.post('http://localhost:4000/team/submit');
      setSubmitted(true);
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error submitting scores:', error);
      toast.error('Error submitting scores');
    }
  };

  return (
    <>
      <div className='flex main-container'>
        <JudgeSidebar />
        <div className='flex-1 p-8 bg-800'>
          <h1 className='text-3xl font-bold text-white mb-6 text-center'>Judge Dashboard</h1>
          <div className='overflow-x-auto'>
            <table className='min-w-full bg rounded-lg shadow-lg border border-gray-300 '>
              <thead className='bg-gray-900 text-white'>
                <tr>
                  <th className='p-4 border-b border-white-300 text-center'>Team ID</th>
                  <th className='p-4 border-b border-white-300 text-center'>Team Name</th>
                  <th className='p-4 border-b border-white-300 text-center'>Creativity</th>
                  <th className='p-4 border-b border-white-300 text-center'>Presentation</th>
                  <th className='p-4 border-b border-white-300 text-center'>Innovation</th>
                  <th className='p-4 border-b border-white-300 text-center'>Code Quality</th>
                  <th className='p-4 border-b border-white-300 text-center'>Idea</th>
                  <th className='p-4 border-b border-white-300 text-center'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {teams.map(team => (
                  <tr key={team.id} className='text-white-700'>
                    <td className='p-4 border-b border-white-300 text-center text-white'>{team.id}</td>
                    <td className='p-4 border-b border-white-300 text-center text-white'>{team.name}</td>
                    {parameters.map((param) => (
                      <td key={param} className='p-4 border-b border-gray-300 text-center'>
                        <input
                          type="number"
                          min="0"
                          max="10"
                          step="0.1"
                          value={team[param] || ''}
                          onChange={(e) => handleScoreChange(team.id, param, e.target.value)}
                          disabled={lockedScores[team.id]}
                          className='w-full px-2 py-1 border border-gray-300 rounded-md'
                        />
                      </td>
                    ))}
                    <td className='p-4 border-b border-gray-300 text-center'>
                      <button
                        onClick={() => handleLockScore(team.id)}
                        disabled={lockedScores[team.id]}
                        className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
                      >
                        {lockedScores[team.id] ? 'Score Locked' : 'Lock Score'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="button-container mt-6 flex justify-center">
            <button
              onClick={handleSubmitScores}
              disabled={submitted || !teams.every(team => lockedScores[team.id])}
              className={`px-6 py-3 ${submitted ? 'bg-gray-500' : 'bg-blue-600'} text-white rounded-md hover:${submitted ? 'bg-gray-600' : 'bg-blue-700'}`}
            >
              {submitted ? 'Scores Submitted' : 'Submit All Scores'}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default JudgeDashboard;
