import { Button, Avatar } from '@mui/material';
import React, { useState } from 'react';
import './TweetBox.css';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();

        addDoc(collection(db, 'posts'), {
            displayName: 'magniloquent',
            username: 'makk3nz00',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://pbs.twimg.com/profile_images/1538927792804478980/6sQkMzDL_400x400.jpg',
        });

        setTweetMessage('');
        setTweetImage('');
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox-input">
                    <Avatar>M</Avatar>
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        type="text"
                        placeholder="What's happening?"
                    />
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox-imageInput"
                    type="text"
                    placeholder="Optional: Enter image URL"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox-inputButton">
                    Tweet
                </Button>
            </form>
        </div>
    );
};

export default TweetBox;
