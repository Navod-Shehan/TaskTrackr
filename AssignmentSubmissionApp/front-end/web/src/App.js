
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { useLocalState } from './util/useLocalStorage';
import Dashboard from './Dashboard/Dashboard';
import Home from './Home/Home';
import Login from './Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AssignmentView from './AssignmentView/AssignmentView';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Route path="/assignments/:id" 
        element={
          <PrivateRoute>
            <AssignmentView />
          </PrivateRoute>
        }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
