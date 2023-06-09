import React from 'react'
import { useEffect } from 'react';
import { useLocalState } from '../util/useLocalStorage';
import Ajax from '../Services/Ajax';
import { Badge, Button, ButtonGroup, Col, Container, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap';

const AssignmentView = () => {
    const [jwt, setJwt] = useLocalState("", 'jwt');
    const assignmentId = window.location.href.split("/assignments/")[1];
    const [assignment, setAssignment] = React.useState({
        branch: "",
        githubUrl: "",
    });
    const [assignmentEnums, setAssignmentEnums] = React.useState([]);

    function updateAssignment(prop, value) {
        const newAssignment = { ...assignment };
        newAssignment[prop] = value;
        setAssignment(newAssignment);
    }

    function save() {
        Ajax(`/api/assignments/${assignmentId}`, "PUT", jwt, assignment)
            .then((assignmentData) => {
                setAssignment(assignmentData);
                
            });
    }

    useEffect(() => {

        Ajax(`/api/assignments/${assignmentId}`, "GET", jwt)
            .then((assignmentResponse) => {
                let assignmentData = assignmentResponse.assignment;
                if (assignmentData.branch === null) assignmentData.branch = "";
                if (assignmentData.githubUrl === null) assignmentData.githubUrl = "";
                setAssignment(assignmentData);
                setAssignmentEnums(assignmentResponse.assignmentEnums);
            });
    }, []);

    useEffect(() => {
        console.log(assignmentEnums)
    }, [assignmentEnums]);

    return (
        <Container className='mt-5'>
            <Row className='d-flex align-items-center'>
                <Col>
                    <h1>Assignment {assignmentId}</h1>
                </Col>
                <Col>
                    <Badge pill bg='info' style={{ fontSize: '1em' }}>{assignment.status}</Badge>
                </Col>
            </Row>
            {
                assignment ? (
                    <>
                        <Form.Group as={Row} className="my-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="3" md="2">
                                Assignment Number:
                            </Form.Label>
                            <Col sm="9" md="8" lg="6">
                                <DropdownButton
                                    as={ButtonGroup}
                                    key={"info"}
                                    id="assinmentname"
                                    variant={`info`}
                                    title= "Assignment 1"
                                >
                                    {assignmentEnums.map((assignmentEnum) => (<Dropdown.Item eventKey={assignmentEnum.assignmentNum}>{assignmentEnum.assignmentNum}</Dropdown.Item> ))}
                                </DropdownButton>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="my-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="3" md="2">
                                GitHub URL:
                            </Form.Label>
                            <Col sm="9" md="8" lg="6">
                                <Form.Control id='githubUrl' type="url"
                                    onChange={(event) => updateAssignment("githubUrl", event.target.value)}
                                    value={assignment.githubUrl}
                                    placeholder="http://github.com/username/repo-name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="3" md="2">
                                Branch:
                            </Form.Label>
                            <Col sm="9" md="8" lg="6">
                                <Form.Control id='branch' type="text"
                                    onChange={(event) => updateAssignment("branch", event.target.value)}
                                    value={assignment.branch}
                                    placeholder="example_branch_name" />
                            </Col>
                        </Form.Group>
                        <Button size='lg' onClick={() => save()}>Submit Assignment</Button>
                    </>
                ) : (
                    <></>
                )
            }
        </Container>
    )
}

export default AssignmentView;
