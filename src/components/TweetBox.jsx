import { Button, Avatar } from '@mui/material';
import React from 'react';
import './TweetBox.css';

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox-input">
                    <Avatar>M</Avatar>
                    <input type="text" placeholder="What's happening?" />
                </div>
                <input className="tweetBox-imageInput" type="text" placeholder="Optional: Enter image URL" />
                <Button className="tweetBox-inputButton">Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;
