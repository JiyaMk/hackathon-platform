import React, { useState, useEffect } from 'react';
import Leaderboard from './Leaderboard';
import Sidebar from './Sidebar';
import axios from 'axios';

const AnalyticsPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSubmissionStatus = async () => {
      try {
        const response = await axios.get('http://localhost:4000/team/status'); 
        console.log(response.data.allLocked);
        setSubmitted(response.data.allLocked);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching submission status:', error);
        setLoading(false);
      }
    };

    checkSubmissionStatus();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
