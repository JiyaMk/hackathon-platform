import React from 'react'
import JudgeList from './JudgeList'
import Sidebar from './Sidebar'
import axios from 'axios';
import { useEffect, useState } from 'react';

const ValidateJudge = () => {
  const [judges, setJudges] = useState([]);

  useEffect(() => {
    const fetchJudges = async () => {
      try {
        const response = await axios.get('http://localhost:4000/admin/get-pendingJudges',{withCredentials: true}); 
        const data = await response.data;
        setJudges(data.data);
      } catch (error) {
        console.error('Error fetching judges:', error);
      }
    };

    fetchJudges();
  }, []);

  const handleJudgeValidated = (id) => {
    setJudges(judges.filter(judge => judge._id !== id));
  };

  return (
    <div className='main-container'>
       <Sidebar/>
       <div className='analytics-container'>

        <h1 style={{textAlign:'center'}}>Validate Judge</h1>
      

       {judges.map(judge => (
          <JudgeList
            key={judge._id}
            id={judge._id}
            name={judge.name}
            email={judge.email}
            onValidate={handleJudgeValidated}
          />
        ))}
      </div>
      </div>
   
  )
}

export default ValidateJudge
