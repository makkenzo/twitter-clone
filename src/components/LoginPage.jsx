import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import { Button, TextField } from '@mui/material';

const LoginPage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    });
    return (
        <div className="login">
            <div className="login-container">
                <h1>{title}</h1>
                <TextField label="E-mail" variant="outlined" type="text" className="login-textBox" />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    className="login-textBox"
                />
                <Button variant="contained" className="login-btn">
                    Login
                </Button>
                {/* <Button variant="contained" color="error" className="login-btn login-google">
                    Login with Google
                </Button> */}
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
