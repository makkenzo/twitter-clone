import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, 'posts'), (snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
        <div className="feed">
            <div className="feed-header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <FlipMove>
                {posts.map((post) => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        avatar={post.avatar}
                        image={post.image}
                        text={post.text}
                    />
                ))}
            </FlipMove>
        </div>
    );
};

export default Feed;
