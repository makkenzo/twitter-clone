import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../firebase';
import './RegisterPage.css';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const register = () => {
        if (!name) alert('Please enter name');
        registerWithEmailAndPassword(name, email, password);
    };

    useEffect(() => {
        if (loading) return;
        if (user) navigate('/dashboard');
    }, [user, loading]);

    return (
        <div className="register">
            <div className="register-container">
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    type="text"
                    className="register-textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="E-mail"
                    variant="outlined"
                    type="text"
                    className="register-textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    className="register-textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" className="register-btn" onClick={register}>
                    Register
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    className="register-btn register-google"
                    onClick={signInWithGoogle}
                >
                    Login with Google
                </Button>
                <div>
                    Already have an account? <Link to="/">Login</Link> now.
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
