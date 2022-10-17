import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, sendPasswordReset } from '../firebase';
import './ResetPage.css';
import { Button, Link, TextField } from '@mui/material';

const ResetPage = () => {
    const [email, setEmail] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate('/dashboard');
    }, [user, loading]);

    return (
        <div className="reset">
            <div className="reset-container">
                <TextField
                    id="outlined-basic"
                    label="E-mail"
                    variant="outlined"
                    type="text"
                    className="reset-textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="contained" className="reset-btn" onClick={() => sendPasswordReset(email)}>
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
