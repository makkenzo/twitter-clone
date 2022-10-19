import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';

import React from 'react';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage title="Login" />} />
                <Route exact path="/register" element={<RegisterPage title="Register" />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
