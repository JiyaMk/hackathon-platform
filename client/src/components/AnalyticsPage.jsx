import React from 'react';
import { useSelector } from 'react-redux';
import Leaderboard from './Leaderboard';

const AnalyticsPage = () => {
  const submitted = useSelector((state) => state.teams.submitted);

  return (
    <div>
      <h1>Analytics Page</h1>
      {submitted ? (
        <Leaderboard />
      ) : (
        <p>The results are not out yet. Please check back later.</p>
      )}
    </div>
  );
};

export default AnalyticsPage;
