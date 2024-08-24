import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const JudgeList = (props) => {
  return (
    <div style={{margin:'1rem'}}>
    
    <Card>
   
      <Card.Body>
        <Card.Title>{props.Name}</Card.Title>
        <Card.Text>
        {props.email}
        </Card.Text>
        <Button variant="primary">Validate</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default JudgeList
