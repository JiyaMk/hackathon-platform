import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineUpload } from 'react-icons/ai';
import Sidebar from './Sidebar';

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
  const shimmerStyle = {
    position: 'relative',
    overflow: 'hidden',
    color: '#fff',
    background: 'linear-gradient(90deg, #003366, #0033cc, #003366)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 7s infinite',
    textAlign: 'center',
    borderRadius: '0.375rem', 
    border: 'none',
    cursor: 'pointer'
  };

  const shimmerAnimation = `
    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }
  `;
  return (
    <>
      <div className="flex h-screen main-container font-times-new-roman">
        <div className="w-1/4">
          <Sidebar />
        </div>
        
        <div className='flex-1 flex items-center justify-center p-6'>
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 font-roboto">Upload Teams</h3>
            <label 
              htmlFor="file-upload" 
              className="flex items-center cursor-pointer bg-gray-100 p-3 rounded-md border border-gray-300 mb-4"
            >
              <AiOutlineUpload size={24} className="mr-2 text-gray-600" />
              {file ? file.name : 'Select CSV File'}
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".csv"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
            />
            <button 
            style={shimmerStyle}
              onClick={handleFileUpload}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Upload CSV
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AdminDashboard;
