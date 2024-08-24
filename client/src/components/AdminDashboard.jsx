import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { setTeams } from '../actions/teamActions';
import Sidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const lines = text.split('\n').filter(line => line.trim() !== ''); 

        // Check if there are valid lines to process
        if (lines.length > 1) {
          const teams = lines.slice(1).map(line => {
            const [teamId, teamName] = line.split(',');
            return {
              id: teamId.trim(),
              name: teamName.trim()
            };
          });

          dispatch(setTeams(teams));
          toast.success("File uploaded successfully!");
        } else {
          toast.error("File is empty or not properly formatted.");
        }
      };
      reader.readAsText(file);
    } else {
      toast.error("Please select a file first.");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        
        <div className='admin-dashboard-container'>
          <div className='csv-form'>
            <h3>Upload Teams CSV</h3>
            <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleFileUpload}>Upload CSV</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AdminDashboard;
