import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { useLocalState } from './util/useLocalStorage';
import Dashboard from './Dashboard/Dashboard';
import Home from './Home/Home';
import Login from './Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {

  const [jwt, setJwt] = useLocalState("", 'jwt');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
