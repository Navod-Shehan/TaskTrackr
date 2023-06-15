import React from 'react'
import { useLocalState } from '../util/useLocalStorage';
import Ajax from '../Services/Ajax';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Login = () => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [jwt, setJwt] = useLocalState("", 'jwt');

    const sendLoginRequest = () => {
        const reqbody = {
            username: username,
            password: password,
        }

        // Ajax("api/auth/login", null)

        fetch("api/auth/login", {
            headers: {
                "Content-Type": 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(reqbody),
        })

            .then((res) => {
                if (res.status === 200)
                    return Promise.all([res.json(), res.headers]);
                else
                    return Promise.reject("Invalid response");
            })
            .then(([body, headers]) => {
                setJwt(headers.get('Authorization'));
                window.location.href = "dashboard";
            }).catch((message) => {
                alert(message);
            });

    }

    return (
        <>
            <Container className='mt-5'>
                    <Row className='justify-content-center'>
                        <Col md="8" lg="6">
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label className='fs-4'>Username</Form.Label>
                                <Form.Control type="email" placeholder="Enter username" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col md="8" lg="6">
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label className='fs-4'>Password</Form.Label>
                                <Form.Control type="password" placeholder="Type in your password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col md="8" lg="6" className='mt-2 d-flex flex-column gap-5 flex-md-row justify-content-md-between'>
                            <Button id='submit' type='button' onClick={() => sendLoginRequest()}>Login</Button>
                            <Button id='submit' variant='secondary' type='button' onClick={() => {
                                window.location.href = "/";
                            }}>Exit</Button>
                        </Col>
                    </Row>
            </Container>
        </>
    )
}

export default Login;