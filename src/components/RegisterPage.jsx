import { Button, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    });

    return (
        <div className="register">
            <div className="register-container">
                <h1>{title}</h1>
                <TextField id="username" label="Username" variant="outlined" type="text" className="register-textBox" />
                <TextField id="email" label="E-mail" variant="outlined" type="text" className="register-textBox" />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    className="register-textBox"
                />
                <Button variant="contained" className="register-btn">
                    Register
                </Button>
                <Button variant="contained" color="error" className="register-btn register-google">
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
