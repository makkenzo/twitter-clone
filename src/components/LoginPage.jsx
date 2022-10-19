import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../firebase';
import './LoginPage.css';
import { Button, TextField } from '@mui/material';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate('/dashboard');
    }, [user, loading]);

    return (
        <div className="login">
            <div className="login-container">
                <TextField
                    label="E-mail"
                    variant="outlined"
                    type="text"
                    className="login-textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    className="login-textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    className="login-btn"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Login
                </Button>
                <Button variant="contained" color="error" className="login-btn login-google" onClick={signInWithGoogle}>
                    Login with Google
                </Button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
