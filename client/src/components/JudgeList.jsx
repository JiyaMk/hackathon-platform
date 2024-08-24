import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const JudgeList = ({ id, name, email, onValidate }) => {
  const handleValidate = async () => {
    try {
      const response = await axios.post(`http://localhost:4000/admin/approve-judge/${id}`);
      if (response.status === 200) {
        onValidate(id); 
        alert(`${name} has been validated successfully.`);
      }
    } catch (error) {
      console.error("Error validating judge:", error);
      alert("Failed to validate judge. Please try again.");
    }
  };

  return (
    <div style={{ margin: '1rem' }}>
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
          <Button variant="primary" onClick={handleValidate}>Validate</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JudgeList;

