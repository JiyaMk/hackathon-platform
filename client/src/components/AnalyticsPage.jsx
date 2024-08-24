import React from 'react';
import { useSelector } from 'react-redux';
import Leaderboard from './Leaderboard';
import Sidebar from './Sidebar';

const AnalyticsPage = () => {
  const submitted = useSelector((state) => state.teams.submitted);

  return (
    <div className='main-container'>
      <Sidebar/>
      <div className='analytics-container'>
      <h1 style={{textAlign:'center',color:'whitesmoke'}}>Analytics Page</h1>
      {submitted ? (
        <Leaderboard />
      ) : (
        <p>The results are not out yet. Please check back later.</p>
      )}
    </div>
    </div>
  );
};

export default AnalyticsPage;
