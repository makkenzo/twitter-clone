import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import ResetPage from './components/ResetPage';

import React, { useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<LoginPage title="Login" setEmail={setEmail} setPassword={setPassword} />}
                />
                <Route
                    exact
                    path="/register"
                    element={<RegisterPage title="Register" setEmail={setEmail} setPassword={setPassword} />}
                />
                <Route exact path="/reset" element={<ResetPage title="Reset password" />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
