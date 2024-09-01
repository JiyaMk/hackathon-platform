import React, { useState, useEffect } from 'react';
import './JudgeDashboard.css';
import JudgeSidebar from './judgeSidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { url } from '../assets/asset';

const JudgeDashboard = () => {
  const [teams, setTeams] = useState([]);
  const [lockedScores, setLockedScores] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const parameters = ['creativity', 'presentation', 'innovation', 'codeQuality', 'idea'];

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(`${url}/team`);
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
        `${url}/team/lock/${team._id}`,
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
      const response = await axios.post(`${url}/team/submit`);
      setSubmitted(true);
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error submitting scores:', error);
      toast.error('Error submitting scores');
    }
  };

  return (
    <>
    <div className='main-container'>
      <JudgeSidebar/>
      <div style={{width:'100%',padding:'4rem'}}>
    <div className='table-container'>
      
      <h1 style={{textAlign:'center',color:'whitesmoke'}}>Judge Dashboard</h1>
      <div>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid grey',color:'white' }}>Team ID</th>
            <th style={{ border: '1px solid  grey',color:'white' }}>Team Name</th>
            <th style={{ border: '1px solid  grey',color:'white' }}>Creativity</th>
            <th style={{ border: '1px solid  grey',color:'white' }}>Presentation</th>
            <th style={{ border: '1px solid grey',color:'white' }}>Innovation</th>
            <th style={{ border: '1px solid  grey',color:'white' }}>Code Quality</th>
            <th style={{ border: '1px solid  grey',color:'white' }}>Idea</th>
            <th style={{ border: '1px solid  grey',color:'white' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td style={{ border: '1px solid grey',color:'whitesmoke' }}>{team.id}</td>
              <td style={{ border: '1px solid grey',color:'whitesmoke' }}>{team.name}</td>
                      {parameters.map((param) => (
                        <td key={param} style={{ border: '1px solid grey' }}>
                          <input
                            type="number"
                            min="0"
                            max="10"
                            step="0.1"
                            value={team[param] || ''}
                            onChange={(e) => handleScoreChange(team.id, param, e.target.value)}
                            disabled={lockedScores[team.id]}
                          />
                        </td>
                      ))}
                      <td style={{ border: '1px solid grey' }}>
                        <button
                          onClick={() => handleLockScore(team.id)}
                          disabled={lockedScores[team.id]}
                        >
                          {lockedScores[team.id] ? 'Score Locked' : 'Lock Score'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="button-container">
      <button onClick={handleSubmitScores} disabled={submitted || !teams.every(team => lockedScores[team.id])}>
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