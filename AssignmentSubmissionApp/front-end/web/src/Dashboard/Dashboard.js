import React, { useEffect } from 'react'
import { useLocalState } from '../util/useLocalStorage';
import { Link } from 'react-router-dom';
import Ajax from '../Services/Ajax';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Dashboard = () => {

  const [jwt, setJwt] = useLocalState("", 'jwt');
  const [assignments, setAssignments] = React.useState([]);

  useEffect(() => {
    Ajax("/api/assignments", "GET", jwt)
      .then((assignmentsData) => {
        setAssignments(assignmentsData);
      });
  }, [jwt]);

  function createAssignment() {
    Ajax("/api/assignments", "POST", jwt)
      .then((assignment) => {
        window.location.href = `/assignment/${assignment.id}`;
      });
  }

  return (
    <div style={{ margin: '2em' }}>
      <div className='mb-5'>
      <Button size='lg' onClick={() => createAssignment()} >Submit New Assignment</Button>
      </div>
      
      {assignments ? (
        <div className='d-grid gap-5' style={{gridTemplateColumns:"repeat(auto-fill, 18rem)"}}>
          {assignments.map((assignment) => (
            <Col>
              <Card style={{ width: '18rem', height:'18rem' }}>
                <Card.Body className='d-flex flex-column justify-content-around'>
                  <Card.Title>Assignment #{assignment.id}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{assignment.status}</Card.Subtitle>
                  <Card.Text style={{marginTop:'1em'}}>
                    <p>
                      <b>GithHub URL : </b>{assignment.githubUrl}
                    </p>
                    <p>
                      <b>Branch : </b>{assignment.branch}
                    </p>
                  </Card.Text>
                  <Button variant='secondary' onClick={() => {
                    window.location.href = `/assignments/${assignment.id}`;
                  }} >Edit</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      ) : (<></>)}
    </div>
  )
}

export default Dashboard;
