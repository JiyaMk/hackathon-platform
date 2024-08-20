import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTeams } from '../actions/teamActions';

const AdminDashboard = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const lines = text.split('\n').filter(line => line.trim() !== ''); // Remove empty lines

        const teams = lines.slice(1).map(line => {
          const [teamId, teamName] = line.split(',');
          return {
            id: teamId.trim(),
            name: teamName.trim()
          };
        });

        dispatch(setTeams(teams));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleFileUpload}>Upload CSV</button>
    </div>
  );
};

export default AdminDashboard;
