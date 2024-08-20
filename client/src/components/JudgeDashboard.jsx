import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addScore, lockScore, submitScores } from '../actions/scoreActions';
import Leaderboard from './Leaderboard';

const JudgeDashboard = () => {
  const teams = useSelector((state) => state.teams.teams);
  const dispatch = useDispatch();
  const [lockedScores, setLockedScores] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedLockedScores = JSON.parse(localStorage.getItem('lockedScores')) || {};
    const savedSubmitted = JSON.parse(localStorage.getItem('submitted')) || false;
    setLockedScores(savedLockedScores);
    setSubmitted(savedSubmitted);
  }, []);

  useEffect(() => {
    localStorage.setItem('lockedScores', JSON.stringify(lockedScores));
    localStorage.setItem('submitted', JSON.stringify(submitted));
  }, [lockedScores, submitted]);

  const handleScoreChange = (teamId, paramIndex, value) => {
    const scores = teams.find(team => team.id === teamId)?.scores || [0, 0, 0, 0, 0];
    scores[paramIndex] = parseFloat(value) || 0;
    dispatch(addScore(teamId, scores));
  };

  const handleLockScore = (teamId) => {
    const scores = teams.find(team => team.id === teamId)?.scores || [0, 0, 0, 0, 0];
    setLockedScores((prev) => ({
      ...prev,
      [teamId]: true,
    }));
    dispatch(lockScore(teamId, scores));
  };

  const handleSubmitScores = () => {
    setSubmitted(true);
    dispatch(submitScores()); 
  };

  return (
    <div>
      <h1>Judge Dashboard</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black' }}>Team ID</th>
            <th style={{ border: '1px solid black' }}>Team Name</th>
            <th style={{ border: '1px solid black' }}>Parameter 1</th>
            <th style={{ border: '1px solid black' }}>Parameter 2</th>
            <th style={{ border: '1px solid black' }}>Parameter 3</th>
            <th style={{ border: '1px solid black' }}>Parameter 4</th>
            <th style={{ border: '1px solid black' }}>Parameter 5</th>
            <th style={{ border: '1px solid black' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td style={{ border: '1px solid black' }}>{team.id}</td>
              <td style={{ border: '1px solid black' }}>{team.name}</td>
              {[0, 1, 2, 3, 4].map(paramIndex => (
                <td key={paramIndex} style={{ border: '1px solid black' }}>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    defaultValue={team.scores ? team.scores[paramIndex] : ''}
                    onChange={(e) => handleScoreChange(team.id, paramIndex, e.target.value)}
                    disabled={lockedScores[team.id]}
                  />
                </td>
              ))}
              <td style={{ border: '1px solid black' }}>
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
      
      <button onClick={handleSubmitScores} disabled={submitted || !teams.every(team => lockedScores[team.id])}>
        {submitted ? 'Scores Submitted' : 'Submit All Scores'}
      </button>

      {submitted && <Leaderboard />} 
    </div>
  );
};

export default JudgeDashboard;
