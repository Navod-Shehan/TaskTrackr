import React from 'react'
import { useLocalState } from '../util/useLocalStorage';

const Login = () => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [jwt, setJwt] = useLocalState("", 'jwt');

    const sendLoginRequest = () => {
        const reqbody = {
            username: username,
            password: password,
        }

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
        <div>
            <div>
                <label htmlFor="username">Email</label>
                <input type="email" id="username" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div><button id='submit' type='button' onClick={() => sendLoginRequest()}>Login</button></div>
        </div>
    )
}

export default Login;