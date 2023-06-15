import React from 'react'
import { useLocalState } from '../util/useLocalStorage';
import { Navigate } from 'react-router-dom';
import Ajax from '../Services/Ajax';

const PrivateRoute = ({ children }) => {

    const [jwt, setJwt] = useLocalState("", 'jwt');
    const [isLoading, setIsLoading] = React.useState(true);
    const [isValid, setIsValid] = React.useState(null);

    if(jwt){
    Ajax(`/api/auth/validate?token=${jwt}`, "get", jwt).then(isValid => {
        setIsLoading(false);
        setIsValid(isValid);  
        });
    }
    else{
        return <Navigate to="/login" />;
    }

    return isLoading ? <div>Loading...</div> : isValid ? children : <Navigate to="/login" />;

}

export default PrivateRoute;
