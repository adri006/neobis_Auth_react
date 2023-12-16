import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Confirm from './pages/ConfirmEmail';
import WelcomePage from './pages/WelcomePage';
import './App.css';

function App() {
  const [userLogged, setUserLogged] = useState({
    currentUser: null,
  });

  const logout = () => {
    setUserLogged({
      ...userLogged,
      currentUser: null,
    });
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/enter" element={<WelcomePage logout={logout} currentUser={userLogged.currentUser}/>} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/conf-email" element={<Confirm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;