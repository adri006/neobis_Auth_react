import React from "react";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <SignUp/> */}
      {/* <Login/> */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;