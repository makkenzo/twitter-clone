import React, { useEffect } from 'react';
import './ResetPage.css';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const ResetPage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    });
    return (
        <div className="reset">
            <div className="reset-container">
                <h1>{title}</h1>
                <TextField label="E-mail" variant="outlined" type="text" className="reset-textBox" />
                <Button variant="contained" className="reset-btn">
                    Send password reset email
                </Button>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
};

export default ResetPage;
