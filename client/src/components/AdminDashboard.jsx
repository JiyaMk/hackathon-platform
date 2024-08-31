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

  const handleFileUpload = async () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
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
          try {
            const response = await fetch('http://localhost:4000/team/upload', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ teams })
            });
  
            const result = await response.json();
            if (response.ok) {
              toast.success(result.message);
            } else {
              toast.error(result.error || "Failed to upload teams.");
            }
          } catch (error) {
            toast.error("Network error. Please try again later.");
          }
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
